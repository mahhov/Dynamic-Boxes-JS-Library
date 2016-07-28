var focus = null;
var action = new Array()
var downX, downY, downW, downH;
var b1 = 5, b2 = 10;
var znum = 1000000;
var znum2 = znum;
var left, topp;
var width, height;
var container;
var dynBoxes = new Array();
var dynBoxesInner = new Array();
var margin = b2;

function loadDynBox(c) {
	container = c;
	document.addEventListener("mousemove", containerMouseMove, false);
	document.addEventListener("mouseup", anywhereUp, false);
}

function containerResize() {
	left = parseInt(container.style.left);
	topp = parseInt(container.style.top);
	width = parseInt(container.style.width);
	height = parseInt(container.style.height);
	for (var i = 0; i < dynBoxes.length; i++) {
		elemResize(dynBoxes[i]);
	}
	for (var i = 0; i < dynBoxes.length; i++)
		resized(dynBoxes[i].getAttribute("data-name"));
}

function elemResize(elem) {
	var elemInner = dynBoxesInner[elem.getAttribute("data-innerdiv")];

	var l, t, w, h;

	l = parseInt(elem.style.left);
	t = parseInt(elem.style.top);
	w = parseInt(elem.style.width);
	h = parseInt(elem.style.height);
	w = Math.min(width, w);
	h = Math.min(height, h);
	w = Math.max(w, elem.getAttribute("data-minwidth"));
	h = Math.max(h, elem.getAttribute("data-minheight"));
	l = Math.min(l, width - w);
	t = Math.min(t, height - h);
	l = Math.max(l, 0);
	t = Math.max(t, 0);

	elem.style.left = l;
	elem.style.top = t;
	elem.style.width = w;
	elem.style.height = h;

	elemInner.style.width = w - margin * 2;
	elemInner.style.height = h - margin * 2;
}

function addDynBox(data) {
	var div = document.createElement('div');

	div.setAttribute("class", "dynbox");
	div.setAttribute("data-minheight", data.minheight);
	div.setAttribute("data-minwidth", data.minwidth);
	div.setAttribute("data-maxheight", data.maxheight);
	div.setAttribute("data-maxwidth", data.maxwidth);
	div.setAttribute("data-name", data.name);
	div.setAttribute("data-isfullscreen", 0);
	div.setAttribute("data-innerdiv", dynBoxes.length);

	div.style.left = data.x;
	div.style.top = data.y;
	div.style.width = data.width;
	div.style.height = data.height;
	div.style.zIndex = znum;

	div.addEventListener("mousemove", elemMove, false);
	div.addEventListener("mousedown", elemDown, false);
	div.addEventListener("mouseout", elemOut, false);
	div.addEventListener("dblclick", elemDouble, false);

	var divInner = document.createElement('div');
	divInner.setAttribute("class", "dynBoxInner");
	divInner.innerHTML = data.inner;
	divInner.style.left = margin;
	divInner.style.top = margin;
	//divInner.style.width = data.width - margin * 2;
	//divInner.style.height = data.height - margin * 2;;

	dynBoxesInner.push(divInner);
	div.appendChild(divInner);
	dynBoxes.push(div);
	container.appendChild(div);
	elemResize(div);
}

function DynBoxData(x, y, width, height, minwidth, minheight, maxwidth, maxheight, inner, name) {
	this.minwidth = minwidth;
	this.minheight = minheight;
	this.maxwidth = maxwidth;
	this.maxheight = maxheight;
	this.inner = inner;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.name = name;
}

function elemMove(e) {
	var x = e.x - parseInt(this.style.left) - left;
	var y = e.y - parseInt(this.style.top) - topp;
	var w = parseInt(this.style.width);
	var h = parseInt(this.style.height);

	var color = "103040";
	if (y < b1) {
		if (x < b1)
			this.style.cursor = "nw-resize";
		else if (x > parseInt(this.style.width) - b1) 
			this.style.cursor = "ne-resize";
		else
			this.style.cursor = "n-resize";
	} else if (y > parseInt(this.style.height) - b1) {
		if (x < b1)
			this.style.cursor = "sw-resize";
		else if (x > parseInt(this.style.width) - b1) 
			this.style.cursor = "se-resize";
		else
			this.style.cursor = "s-resize";
	} else {
		if (x < b1)
			this.style.cursor = "w-resize";
		else if (x > parseInt(this.style.width) - b1) 
			this.style.cursor = "e-resize";
		else if (x < b2 || x > w - b2 || y < b2 || y > h - b2 )
			this.style.cursor = "move";
		else {
			color = "";
			this.style.cursor = "default";
		}
	if (focus == null)
		this.style.backgroundColor = color;
	}
}

function elemDown(e) {
	if (e.button == 0) {
		downX = e.x - parseInt(this.style.left) - left;
		downY = e.y - parseInt(this.style.top) - topp;
		downW = parseInt(this.style.width);
		downH = parseInt(this.style.height);

		focus = this;
		focus.style.zIndex = ++znum;

		if (downY < b1)
			action[0] = 1;
		else
			action[0] = 0;

		if (downX > downW - b1)
			action[1] = 1;
		else
			action[1] = 0;

		if (downY > downH - b1)
			action[2] = 1;
		else
			action[2] = 0;

		if (downX < b1)
			action[3] = 1;
		else
			action[3] = 0;

		if (action[0] + action[1] + action[2] + action[3] != 0) {
			focus.style.backgroundColor = "206080";
			action[4] = 0;
		}
		else
			if (downX < b2 || downX > downW - b2 || downY < b2 || downY > downH - b2) {
				focus.style.backgroundColor = "206080";
				action[4] = 1;
			} else
				action[4] = 0;
	} else {
		this.style.zIndex = --znum2;
	}

}

function elemOut() {
	this.style.backgroundColor = "";
	if (focus != null) {
		focus.style.backgroundColor = "206080";
	}
}

function elemDouble(e) {
	var x = e.x - parseInt(this.style.left) - left;
	var y = e.y - parseInt(this.style.top) - topp;
	var w = parseInt(this.style.width);
	var h = parseInt(this.style.height);
	if (x < b2 || x > w - b2 || y < b2 || y > h - b2) {
		if (this.getAttribute("data-isfullscreen") == 0) {
			this.setAttribute("data-isfullscreen", 1);
			this.setAttribute("data-prevleft", this.style.left);
			this.setAttribute("data-prevtop", this.style.top);
			this.setAttribute("data-prevwidth", this.style.width);
			this.setAttribute("data-prevheight", this.style.height);
			this.style.left = 0;
			this.style.top = 0;
			this.style.width = width;
			this.style.height = height;
		} else {
			this.setAttribute("data-isfullscreen", 0);
			this.style.left = this.getAttribute("data-prevleft");
			this.style.top = this.getAttribute("data-prevtop");
			this.style.width = this.getAttribute("data-prevwidth");
			this.style.height = this.getAttribute("data-prevheight");
		}
		elemResize(this);
		resized(this.getAttribute("data-name"));
		this.style.zIndex = ++znum;
	}
}

function anywhereUp() {
	if (focus != null) {
		focus.style.backgroundColor = "";
		focus = null;
	}
}

function containerMouseMove(e) {
	var x = e.x - downX - left;
	var y = e.y - downY - topp;
	var w, l, h, t;

	if (focus != null){

		if (action[3] == 1) { //left
			w = parseInt(focus.style.width) - x + parseInt(focus.style.left);
			if (w < focus.getAttribute("data-minwidth")) {
				l = x + w - focus.getAttribute("data-minwidth");
				w = focus.getAttribute("data-minwidth");
			} else {
				if (w > focus.getAttribute("data-maxwidth")) {
					l = x + w - focus.getAttribute("data-maxwidth");;
					w = focus.getAttribute("data-maxwidth");
				} else
					l = x;
				if (l < 0) {
					w += l;
					l = 0;
				}
			}
			focus.style.width = w;
			focus.style.left = l;
		}

		if (action[1] == 1) { //right
			w = Math.max(downW + x - parseInt(focus.style.left), focus.getAttribute("data-minwidth"));
			w = Math.min(w, width - parseInt(focus.style.left), focus.getAttribute("data-maxwidth"));
			focus.style.width = w;
		}

		if (action[0] == 1) { //top
			h = parseInt(focus.style.height) - y + parseInt(focus.style.top);
			if (h < focus.getAttribute("data-minheight")) {
				t = y + h - focus.getAttribute("data-minheight");
				h = focus.getAttribute("data-minheight");
			} else {
				if (h > focus.getAttribute("data-maxheight")) {
					t = y + h - focus.getAttribute("data-maxheight");;
					h = focus.getAttribute("data-maxheight");
				} else
					t = y;
				if (t < 0) {
					h += t;
					t = 0;
				}
			}
			focus.style.height = h;
			focus.style.top = t;
		}

		if (action[2] == 1) { //bottom
			h = Math.max(downH + y - parseInt(focus.style.top), focus.getAttribute("data-minheight"));
			h = Math.min(h, height - parseInt(focus.style.top), focus.getAttribute("data-maxheight"));
			focus.style.height = h;
		}

		if (action[4] == 1) { //move
			l = Math.min(x, width - parseInt(focus.style.width));
			l = Math.max(l, 0);
			t = Math.min(y, height - parseInt(focus.style.height));
			t = Math.max(t, 0);
			focus.style.left = l;
			focus.style.top = t;
		}

		elemResize(focus)
		resized(focus.getAttribute("data-name"));
	}

}