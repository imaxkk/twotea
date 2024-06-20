var date = new Date,
	currentYear = date.getFullYear(),
	formName = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "name",
		label: {
			en: "Name",
			zh: "聯絡人(先生/小姐)"
		},
		placeholder: {
			en: "Full name",
			zh: ""
		},
		type: "text",
		validMethod: "length",
		validLength: 80
	},
	formContactMail = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "email",
		label: {
			en: "Email",
			zh: "Email"
		},
		placeholder: {
			en: "Email address",
			zh: ""
		},
		type: "text",
		validMethod: "email"
	},
	formStartTime = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "starttime",
		label: {
			en: "Start Time",
			zh: "預計開案日期"
		},
		placeholder: {
			en: "20022/01/01",
			zh: "例: 2022/01/01"
		},
		type: "text",
		validMethod: "length",
		validLength: 80
	},
	formEndTime = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "endtime",
		label: {
			en: "End Time",
			zh: "預計完成日期"
		},
		placeholder: {
			en: "2022/04/01",
			zh: "例: 2022/04/01"
		},
		type: "text",
		validMethod: "length",
		validLength: 80
	},
	formCompany = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "organization",
		label: {
			en: "Company",
			zh: "公司名稱"
		},
		placeholder: {
			en: "Company name",
			zh: ""
		},
		type: "text",
		validMethod: "length",
		validLength: 255
	},
	formPhone = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "tel",
		label: {
			en: "Phone",
			zh: "聯絡電話"
		},
		placeholder: {
			en: "Phone number",
			zh: ""
		},
		type: "text",
		validMethod: "phone"
	},
	// start to about web
	// formType = {
	// 	value: "網站設計",
	// 	isValid: null,
	// 	msg: null,
	// 	label: {
	// 		en: "Project Type",
	// 		zh: "專案類型"
	// 	},
	// 	placeholder: {
	// 		en: "Please select",
	// 		zh: ""
	// 	},
	// 	type: "radio",
	// 	display: "radio",
	// 	validMethod: "required",
	// 	choices: {
	// 		"網站設計": {
	// 			label: {
	// 				en: "",
	// 				zh: "Web Design<br><span>網站設計</span>"
	// 			}
	// 		},
	// 		"品牌識別": {
	// 			label: {
	// 				en: "",
	// 				zh: "Identity Design<br><span>品牌識別</span>"
	// 			}
	// 		},
	// 		"品牌+網站": {
	// 			label: {
	// 				en: "",
	// 				zh: "Identity + Web<br><span>品牌 + 網站</span>"
	// 			}
	// 		}
	// 	}
	// },
	// formWebCost = {
	// 	value: "$550,000 以上(動態特效、企業官網)",
	// 	isValid: !0,
	// 	msg: null,
	// 	label: {
	// 		en: "Project Type",
	// 		zh: "預算範圍(網站設計)"
	// 	},
	// 	placeholder: {
	// 		en: "Please select",
	// 		zh: ""
	// 	},
	// 	type: "radio",
	// 	display: "dropdown",
	// 	validMethod: "required",
	// 	choices: {
	// 		"$250,000 以上(單頁式網站)": {
	// 			label: {
	// 				en: "",
	// 				zh: "$250,000 以上<br><span>(單頁式網站)</span><br><span>(製作時程：2~3個月)</span>"
	// 			}
	// 		},
	// 		"$550,000 以上(動態特效、企業官網)": {
	// 			label: {
	// 				en: "",
	// 				zh: "$550,000 以上<br><span>(動態特效、企業官網)</span><br><span>(製作時程：4~6個月)</span>"
	// 			}
	// 		},
	// 		"$1,000,000 以上(規模性網站)": {
	// 			label: {
	// 				en: "",
	// 				zh: "$1,000,000 以上<br><span>(規模性網站)</span>"
	// 			}
	// 		}
	// 	}
	// },
	// formIdentityCost = {
	// 	value: "$350,000以上(品牌識別設計)",
	// 	isValid: !0,
	// 	msg: null,
	// 	label: {
	// 		en: "Project Type",
	// 		zh: "預算範圍(品牌識別)"
	// 	},
	// 	placeholder: {
	// 		en: "Please select",
	// 		zh: ""
	// 	},
	// 	type: "radio",
	// 	display: "dropdown",
	// 	validMethod: "required",
	// 	choices: {
	// 		"$350,000以上(品牌識別設計)": {
	// 			label: {
	// 				en: "",
	// 				zh: "$350,000以上<br><span>(品牌識別設計)</span><br><span>(製作時程：2~3個月)</span>"
	// 			}
	// 		},
	// 		"$800,000 以上(規模性專案)": {
	// 			label: {
	// 				en: "",
	// 				zh: "$800,000 以上<br><span>(規模性專案)</span>"
	// 			}
	// 		},
	// 		"$250,000以上(指標系統設計)": {
	// 			label: {
	// 				en: "",
	// 				zh: "$250,000以上<br><span>(指標系統設計)</span>"
	// 			}
	// 		}
	// 	}
	// },
	// formStatus = {
	// 	value: "設計",
	// 	isValid: null,
	// 	msg: null,
	// 	label: {
	// 		en: "Project Status",
	// 		zh: "專案需求"
	// 	},
	// 	placeholder: {
	// 		en: "Please select",
	// 		zh: ""
	// 	},
	// 	type: "radio",
	// 	display: "dropdown",
	// 	validMethod: "required",
	// 	choices: {
	// 		"設計": {
	// 			label: {
	// 				en: "",
	// 				zh: "Design<br><span>設計</span>"
	// 			}
	// 		},
	// 		"設計+程式": {
	// 			label: {
	// 				en: "",
	// 				zh: "Design+Develop<br><span>設計+程式</span>"
	// 			}
	// 		},
	// 		"設計+印製": {
	// 			label: {
	// 				en: "",
	// 				zh: "Design+Print<br><span>設計+印製</span>"
	// 			}
	// 		}
	// 	}
	// },
	// formMessage = {
	// 	value: null,
	// 	isValid: null,
	// 	msg: null,
	// 	autocomplete: "text",
	// 	placeholder: {
	// 		en: "Details of your request",
	// 		zh: "專案需求、功能、項目等說明，如有檔案提供也可使用雲端連結方式。"
	// 	},
	// 	label: {
	// 		en: "Your Message",
	// 		zh: "需求說明"
	// 	},
	// 	type: "textarea",
	// 	validMethod: "required",
	// 	validLength: 255
	// },
	// end
	formCompanyinfo = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "text",
		placeholder: {
			en: "Details of your company",
			zh: ""
		},
		label: {
			en: "Company info",
			zh: "公司介紹(概略)"
		},
		type: "textarea",
		validMethod: "required",
		validLength: 255
	},
	formNavName = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "name",
		label: {
			en: "Name",
			zh: "聯絡人(先生/小姐)"
		},
		placeholder: {
			en: "Full name",
			zh: ""
		},
		type: "text",
		validMethod: "length",
		validLength: 80
	},
	formNavContactMail = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "email",
		label: {
			en: "Email",
			zh: "Email"
		},
		placeholder: {
			en: "Email address",
			zh: ""
		},
		type: "text",
		validMethod: "email"
	},
	// unknown
	// formNavStartTime = {
	// 	value: null,
	// 	isValid: null,
	// 	msg: null,
	// 	autocomplete: "starttime",
	// 	label: {
	// 		en: "Start Time",
	// 		zh: "預計開案日期"
	// 	},
	// 	placeholder: {
	// 		en: "2022/01/01",
	// 		zh: "例: 2022/01/01"
	// 	},
	// 	type: "text",
	// 	validMethod: "length",
	// 	validLength: 80
	// },
	// formNavEndTime = {
	// 	value: null,
	// 	isValid: null,
	// 	msg: null,
	// 	autocomplete: "endtime",
	// 	label: {
	// 		en: "End Time",
	// 		zh: "預計完成日期"
	// 	},
	// 	placeholder: {
	// 		en: "2022/04/01",
	// 		zh: "例: 2022/04/01"
	// 	},
	// 	type: "text",
	// 	validMethod: "length",
	// 	validLength: 80
	// },
	formNavCompany = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "organization",
		label: {
			en: "Company",
			zh: "公司名稱"
		},
		placeholder: {
			en: "Company name",
			zh: ""
		},
		type: "text",
		validMethod: "length",
		validLength: 255
	},
	formNavPhone = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "tel",
		label: {
			en: "Phone",
			zh: "聯絡電話"
		},
		placeholder: {
			en: "Phone number",
			zh: ""
		},
		type: "text",
		validMethod: "phone"
	},
	// start to index web
	// formNavType = {
	// 	value: "網站設計",
	// 	isValid: null,
	// 	msg: null,
	// 	label: {
	// 		en: "Project Type",
	// 		zh: "專案類型"
	// 	},
	// 	placeholder: {
	// 		en: "Please select",
	// 		zh: ""
	// 	},
	// 	type: "radio",
	// 	display: "radio",
	// 	validMethod: "required",
	// 	choices: {
	// 		"網站設計": {
	// 			label: {
	// 				en: "",
	// 				zh: "Web Design<br><span>網站設計</span>"
	// 			}
	// 		},
	// 		"品牌識別": {
	// 			label: {
	// 				en: "",
	// 				zh: "Identity Design<br><span>品牌識別</span>"
	// 			}
	// 		},
	// 		"品牌+網站": {
	// 			label: {
	// 				en: "",
	// 				zh: "Identity + Web<br><span>品牌 + 網站</span>"
	// 			}
	// 		}
	// 	}
	// },
	// formNavWebCost = {
	// 	value: "$550,000 以上(動態特效、企業官網)",
	// 	isValid: !0,
	// 	msg: null,
	// 	label: {
	// 		en: "Project Type",
	// 		zh: "預算範圍(網站設計)"
	// 	},
	// 	placeholder: {
	// 		en: "Please select",
	// 		zh: ""
	// 	},
	// 	type: "radio",
	// 	display: "dropdown",
	// 	validMethod: "required",
	// 	choices: {
	// 		"$250,000 以上(單頁式網站)": {
	// 			label: {
	// 				en: "",
	// 				zh: "$250,000 以上<br><span>(單頁式網站)</span><br><span>(製作時程：2~3個月)</span>"
	// 			}
	// 		},
	// 		"$550,000 以上(動態特效、企業官網)": {
	// 			label: {
	// 				en: "",
	// 				zh: "$550,000 以上<br><span>(動態特效、企業官網)</span><br><span>(製作時程：4~6個月)</span>"
	// 			}
	// 		},
	// 		"$1,000,000 以上(規模性網站)": {
	// 			label: {
	// 				en: "",
	// 				zh: "$1,000,000 以上<br><span>(規模性網站)</span>"
	// 			}
	// 		}
	// 	}
	// },
	// formNavIdentityCost = {
	// 	value: "$350,000以上(品牌識別設計)",
	// 	isValid: !0,
	// 	msg: null,
	// 	label: {
	// 		en: "Project Type",
	// 		zh: "預算範圍(品牌識別)"
	// 	},
	// 	placeholder: {
	// 		en: "Please select",
	// 		zh: ""
	// 	},
	// 	type: "radio",
	// 	display: "dropdown",
	// 	validMethod: "required",
	// 	choices: {
    //         "$350,000以上(品牌識別設計)": {
    //             label: {
    //                 en: "",
    //                 zh: "$350,000以上<br><span>(品牌識別設計)</span><br><span>(製作時程：2~3個月)</span>"
    //             }
    //         },
    //         "$800,000 以上(規模性專案)": {
    //             label: {
    //                 en: "",
    //                 zh: "$800,000 以上<br><span>(規模性專案)</span>"
    //             }
    //         },
    //         "$250,000以上(指標系統設計)": {
    //             label: {
    //                 en: "",
    //                 zh: "$250,000以上<br><span>(指標系統設計)</span>"
    //             }
    //         }
    //     }
	// },
	// formNavStatus = {
	// 	value: "設計",
	// 	isValid: null,
	// 	msg: null,
	// 	label: {
	// 		en: "Project Status",
	// 		zh: "專案需求"
	// 	},
	// 	placeholder: {
	// 		en: "Please select",
	// 		zh: ""
	// 	},
	// 	type: "radio",
	// 	display: "dropdown",
	// 	validMethod: "required",
	// 	choices: {
	// 		"設計": {
	// 			label: {
	// 				en: "",
	// 				zh: "Design<br><span>設計</span>"
	// 			}
	// 		},
	// 		"設計+程式": {
	// 			label: {
	// 				en: "",
	// 				zh: "Design+Develop<br><span>設計+程式</span>"
	// 			}
	// 		},
	// 		"設計+印製": {
	// 			label: {
	// 				en: "",
	// 				zh: "Design+Print<br><span>設計+印製</span>"
	// 			}
	// 		}
	// 	}
	// },
	// formNavMessage = {
	// 	value: null,
	// 	isValid: null,
	// 	msg: null,
	// 	autocomplete: "text",
	// 	placeholder: {
	// 		en: "Details of your request",
	// 		zh: "專案需求、功能、項目等說明，如有檔案提供也可使用雲端連結方式。"
	// 	},
	// 	label: {
	// 		en: "Your Message",
	// 		zh: "需求說明"
	// 	},
	// 	type: "textarea",
	// 	validMethod: "required",
	// 	validLength: 255
	// },
	// end
	formNavCompanyinfo = {
		value: null,
		isValid: null,
		msg: null,
		autocomplete: "text",
		placeholder: {
			en: "Details of your company",
			zh: ""
		},
		label: {
			en: "Company info",
			zh: "公司介紹(概略)"
		},
		type: "textarea",
		validMethod: "required",
		validLength: 255
	};
var now = new Date,
	controldata = {
		folder: templatePath,
		admin_ajax_url: adminAjaxUrl,
		projectModel: null,
		siteName: siteName,
		accordion: !1,
		winH: document.body.clientHeight,
		winW: document.body.clientWidth,
		zoom: 0,
		timer: null,
		scrollTimer: null,
		lastScroll: null,
		scrollStatus: "up",
		zoomDirection: "in",
		isZooming: !1,
		isZoomingClass: "circle-in-active",
		plantChoose: 0,
		isGallery: null,
		zoomImg: null,
		careerBox: !1,
		careerAccordion: !1,
		maxImg: 4,
		galleryOptions: {
			autoplay: {
				delay: 6e3,
				isActive: !1
			},
			pagination: {
				isActive: !1
			},
			nextPrev: {
				isActive: !0
			},
			mouseOver: {
				isActive: !1
			},
			progressBar: {
				isActive: !1
			},
			timer: {
				isActive: !1
			}
		},
		hour: now.getHours(),
		minute: now.getMinutes(),
		second: now.getSeconds(),
		currentTemperature: null,
		md: !1,
		sm: !1,
		xs: !1,
		menu: !1,
		isWebStart: !0,
		articles: [],
		pageType: pageType,
		posts: null,
		contactForm: {
			company: formCompany,
			contactMail: formContactMail,
			name: formName,
			phone: formPhone,
			companyInfo: formCompanyinfo,
			// projectType: formType,
			// projectStatus: formStatus,
			// projectWebCost: formWebCost,
			// projectIdentityCost: formIdentityCost,
			// ETS: formStartTime,
			// ETE: formEndTime,
			// message: formMessage
		},
		contactNavForm: {
			company: formNavCompany,
			contactMail: formNavContactMail,
			name: formNavName,
			phone: formNavPhone,
			companyInfo: formNavCompanyinfo,
			// projectType: formNavType,
			// projectStatus: formNavStatus,
			// projectWebCost: formNavWebCost,
			// projectIdentityCost: formNavIdentityCost,
			// ETS: formNavStartTime,
			// ETE: formNavEndTime,
			// message: formNavMessage
		}
	};
for (var customizeForDevice = function() {
		var n = navigator.userAgent,
			e = {
				pc: n.match(/(Mac|Windows)/),
				ipad: n.match(/iPad/),
				iphone: n.match(/(iPhone|iPod)/),
				android: n.match(/Android/)
			};
		return e.ipad ? "ipad" : e.iphone ? "iphone" : e.pc ? "pc" : e.blackberry ? "blackberry" : e.android ? "android" : void 0
	}, Base64 = {
		_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		encode: function(n) {
			var e, t, o, r, i, a, d, c = "",
				m = 0;
			for (n = Base64._utf8_encode(n); m < n.length;) r = (e = n.charCodeAt(m++)) >> 2, i = (3 & e) << 4 | (t = n.charCodeAt(m++)) >> 4, a = (15 & t) << 2 | (o = n.charCodeAt(m++)) >> 6, d = 63 & o, isNaN(t) ? a = d = 64 : isNaN(o) && (d = 64), c = c + this._keyStr.charAt(r) + this._keyStr.charAt(i) + this._keyStr.charAt(a) + this._keyStr.charAt(d);
			return c
		},
		decode: function(n) {
			var e, t, o, r, i, a, d = "",
				c = 0;
			for (n = n.replace(/[^A-Za-z0-9+\/=]/g, ""); c < n.length;) e = this._keyStr.indexOf(n.charAt(c++)) << 2 | (r = this._keyStr.indexOf(n.charAt(c++))) >> 4, t = (15 & r) << 4 | (i = this._keyStr.indexOf(n.charAt(c++))) >> 2, o = (3 & i) << 6 | (a = this._keyStr.indexOf(n.charAt(c++))), d += String.fromCharCode(e), 64 != i && (d += String.fromCharCode(t)), 64 != a && (d += String.fromCharCode(o));
			return d = Base64._utf8_decode(d)
		},
		_utf8_encode: function(n) {
			n = n.replace(/rn/g, "n");
			for (var e = "", t = 0; t < n.length; t++) {
				var o = n.charCodeAt(t);
				o < 128 ? e += String.fromCharCode(o) : o > 127 && o < 2048 ? (e += String.fromCharCode(o >> 6 | 192), e += String.fromCharCode(63 & o | 128)) : (e += String.fromCharCode(o >> 12 | 224), e += String.fromCharCode(o >> 6 & 63 | 128), e += String.fromCharCode(63 & o | 128))
			}
			return e
		},
		_utf8_decode: function(n) {
			for (var e = "", t = 0, o = c1 = c2 = 0; t < n.length;)(o = n.charCodeAt(t)) < 128 ? (e += String.fromCharCode(o), t++) : o > 191 && o < 224 ? (c2 = n.charCodeAt(t + 1), e += String.fromCharCode((31 & o) << 6 | 63 & c2), t += 2) : (c2 = n.charCodeAt(t + 1), c3 = n.charCodeAt(t + 2), e += String.fromCharCode((15 & o) << 12 | (63 & c2) << 6 | 63 & c3), t += 3);
			return e
		}
	}, descroll = function() {
		$(window).on({
			mousewheel: function(n) {
				return !1
			},
			touchmove: function(n) {
				return !1
			}
		})
	}, rescroll = function() {
		$(window).unbind("mousewheel").unbind("touchmove")
	}, vendors = ["ms", "moz", "webkit", "o"], x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];

function mqxs() {
	var n = Modernizr.mq("(max-width: 767px)");
	controldata.xs = !!n
}

function mqsm() {
	var n = Modernizr.mq("(max-width: 1024px)");
	controldata.sm = !!n
}

function mqmd() {
	var n = Modernizr.mq("(min-width: 1025px)");
	controldata.md = !!n
}

function usefloor(n, e) {
	return Math.floor(Math.random() * (e - n + 1) + n)
}
window.requestAnimationFrame || (window.requestAnimationFrame = function(n, e) {
		var t = (new Date).getTime(),
			o = Math.max(0, 16.6666 - (t - lastTime)),
			r = window.setTimeout(function() {
				n(t + o)
			}, o);
		return lastTime = t + o, r
	}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
		clearTimeout(n)
	}),
	function() {
		if ("function" == typeof window.CustomEvent) return !1;

		function n(n, e) {
			e = e || {
				bubbles: !1,
				cancelable: !1,
				detail: void 0
			};
			var t = document.createEvent("CustomEvent");
			return t.initCustomEvent(n, e.bubbles, e.cancelable, e.detail), t
		}
		n.prototype = window.Event.prototype, window.CustomEvent = n
	}(),
	function(n, e, t) {
		t = t || window;
		var o = !1;
		t.addEventListener(n, function() {
			o || (o = !0, window.requestAnimationFrame(function() {
				t.dispatchEvent(new CustomEvent(e)), o = !1
			}))
		})
	}("resize", "optimizedResize"), window.addEventListener("optimizedResize", function() {
		controldata.winH = document.body.clientHeight, controldata.winW = document.body.clientWidth, mqsm(), mqxs(), mqmd()
	}), mqsm(), mqxs(), mqmd();
Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
	value: function(t) {
		if (null == this) throw new TypeError('"this" is null or not defined');
		var e = Object(this),
			a = e.length >>> 0;
		if ("function" != typeof t) throw new TypeError("predicate must be a function");
		for (var r = arguments[1], o = 0; o < a;) {
			var n = e[o];
			if (t.call(r, n, o, e)) return o;
			o++
		}
		return -1
	}
});
var sendMail = function(t) {
		return new Promise(function(e, a) {
			$.ajax({
				type: "POST",
				url: adminAjaxUrl,
				data: {
					action: "mail",
					value: t
				},
				async: !1,
				success: function(t, a, r) {
					e(t)
				},
				error: function(t, e, r) {
					a(t.responseText)
				}
			})
		})
	},
	// googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScc3fAQsKT1UMitQ7qjxh-v0lBrZzu7c1i74Hekzj8fNIc9yg/formResponse",
	googleFormFieldKeys = {
		company: "entry.2060509512",
		contactMail: "entry.476171404",
		name: "entry.1996931996",
		phone: "entry.274665442",
		companyInfo: "entry.106198663",
		projectType: "entry.1947292771",
		projectStatus: "entry.1912521588",
		projectWebCost: "entry.172764946",
		projectIdentityCost: "entry.772808792",
		ETS: "entry.1669452245",
		ETE: "entry.1606909589",
		message: "entry.899348179"
	},
	postGoogleForm = function(t) {
		var e = {};
		Object.keys(t).forEach(function(a) {
			googleFormFieldKeys[a].length && (e[googleFormFieldKeys[a]] = t[a])
		}), $.post(googleFormUrl, e)
	};
Vue.component("form-fields", {
	template: "#formFieldsTemplate",
	props: {
		formName: null,
		formData: null,
		lang: null
	},
	computed: {
		requireMsg: function() {
			return "zh" == this.lang ? "必填" : "This field is required"
		},
		emailMsg: function() {
			return "zh" == this.lang ? "Email格式錯誤" : "Invalid Email"
		},
		stringLongMsg: function() {
			return "zh" == this.lang ? "輸入長度過長" : "This field is too long"
		},
		phoneMsg: function() {
			return "zh" == this.lang ? "電話格式錯誤" : "Invalid phone number"
		},
		numberMsg: function() {
			return "zh" == this.lang ? "數字格式錯誤" : "Please enter numbers only"
		}
	},
	mounted: function() {
		this.validation().required("projectType")
	},
	methods: {
		base64decode: function(t) {
			return t ? Base64.decode(t) : t
		},
		checkProject: function(t) {
			if ("projectStatus" === t) return !0;
			if ("string" != typeof this.formData.projectType.value) return !1;
			if ("projectWebCost" === t) {
				var e = "網站設計" === this.formData.projectType.value,
					a = "品牌+網站" === this.formData.projectType.value;
				return !(!e && !a)
			}
			if ("projectIdentityCost" === t) {
				e = "品牌識別" === this.formData.projectType.value, a = "品牌+網站" === this.formData.projectType.value;
				return !(!e && !a)
			}
		},
		validation: function() {
			this.clearOutsideMsg();
			var t = this;
			return {
				email: function(e) {
					if (null === t.formData[e].value) this.requiredFailMsg(e);
					else {
						var a = String(t.formData[e].value).trim();
						!1 === /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.toLowerCase()) ? this.customFailMsg(e, t.emailMsg) : a.length > 80 ? this.customFailMsg(e, t.stringLongMsg) : this.passMsg(e), t.formData[e].value = a
					}
				},
				phone: function(e) {
					if (null === t.formData[e].value) this.requiredFailMsg(e);
					else {
						var a = t.formData[e].value.replace(/[-()+.\s]/g, ""),
							r = /^[0-9#]+$/.test(a);
						a.length > 40 ? this.customFailMsg(e, t.stringLongMsg) : !1 === r ? this.customFailMsg(e, t.phoneMsg) : this.passMsg(e)
					}
				},
				length: function(e, a) {
					null === t.formData[e].value || "" === t.formData[e].value ? this.requiredFailMsg(e) : t.formData[e].value.length > a ? this.customFailMsg(e, t.stringLongMsg) : this.passMsg(e)
				},
				number: function(e) {
					if (null === t.formData[e].value) this.requiredFailMsg(e);
					else {
						!1 === /^[0-9]+$/.test(t.formData[e].value) ? this.customFailMsg(e, t.numberMsg) : this.passMsg(e)
					}
				},
				requiredFailMsg: function(e) {
					t.formData[e].msg = t.requireMsg, t.formData[e].isValid = !1
				},
				passMsg: function(e) {
					t.formData[e].isValid = !0, t.formData[e].msg = ""
				},
				customFailMsg: function(e, a) {
					t.formData[e].msg = a, t.formData[e].isValid = !1
				},
				classCheck: function(e) {
					return null === t.formData[e].isValid ? "normal" : !0 === t.formData[e].isValid ? "valid" : "in-valid"
				},
				required: function(e) {
					if ("projectType" === e) {
						if (0 === t.formData.projectType.value.length ? this.requiredFailMsg(e) : this.passMsg(e), "string" == typeof t.formData.projectType.value) {
							var a = "網站設計" === t.formData.projectType.value,
								r = "品牌識別" === t.formData.projectType.value,
								o = "品牌+網站" === t.formData.projectType.value;
							a || o ? "無" === t.formData.projectWebCost.value && (t.formData.projectWebCost.value = null, t.formData.projectWebCost.isValid = !1, t.formData.projectWebCost.msg = null) : (t.formData.projectWebCost.value = "無", t.formData.projectWebCost.isValid = !0, t.formData.projectWebCost.msg = null), r || o ? "無" === t.formData.projectIdentityCost.value && (t.formData.projectIdentityCost.value = null, t.formData.projectIdentityCost.isValid = !1, t.formData.projectIdentityCost.msg = null) : (t.formData.projectIdentityCost.value = "無", t.formData.projectIdentityCost.isValid = !0, t.formData.projectIdentityCost.msg = null)
						}
					} else t.formData[e].value && "" !== t.formData[e].value ? this.passMsg(e) : this.requiredFailMsg(e)
				}
			}
		},
		formModel: function() {
			var t = this;
			return {
				checkBoxClass: function(e, a) {
					return "string" == typeof t.formData[e].value && t.formData[e].value === a ? "active" : "in-active"
				}
			}
		},
		year: function() {
			var t = this;
			return {
				plus: function(e) {
					t.formData[e].value !== t.formData[e].max && t.formData[e].value++
				},
				minus: function(e) {
					t.formData[e].value !== t.formData[e].default && t.formData[e].value--
				},
				yearClass: function(e) {
					return this.turnBack(e), t.formData[e].value === t.formData[e].max ? "max" : t.formData[e].value === t.formData[e].default ? "min" : "normal"
				},
				turnBack: function(e) {
					t.formData[e].value > t.formData[e].max ? t.formData[e].value = t.formData[e].max : t.formData[e].value < t.formData[e].default && (t.formData[e].value = t.formData[e].default)
				}
			}
		},
		focus: function(t) {
			$(t.target).addClass("focus"), $(t.target).parent().parent().addClass("focus")
		},
		blur: function(t) {
			"" === t.target.value && ($(t.target).removeClass("focus"), $(t.target).parent().parent().removeClass("focus"))
		},
		textareaBlur: function(t) {
			"" === t.target.value && ($(t.target).removeClass("focus"), $(t.target).parent().parent().removeClass("focus"), this.textareaStartHeight && (t.target.style.cssText = "height:" + this.textareaStartHeight + "px"))
		},
		textareaFocus: function(t) {
			this.textareaStartHeight || (this.textareaStartHeight = t.target.scrollHeight), $(t.target).addClass("focus"), $(t.target).parent().parent().addClass("focus")
		},
		textareaKeyDown: function(t) {
			t.target.style.cssText = "height:auto;", t.target.style.cssText = "-moz-box-sizing:content-box", t.target.style.cssText = "height:" + t.target.scrollHeight + "px"
		},
		clear: function() {
			var t = this.formData;
			Object.keys(t).forEach(function(e) {
				"leadMail" !== e && ("checkbox" === t[e].type ? (t[e].value = [], t[e].isValid = null, t[e].msg = null) : t[e].default ? t[e].value = t[e].default : (t[e].value = null, t[e].isValid = null, t[e].msg = null))
			})
		},
		clearOutsideMsg: function() {
			this.$emit("clear-event")
		}
	}
}), Vue.component("contact-form", {
	template: "#formTemplate",
	props: {
		formName: null,
		formData: null,
		lang: null,
		leadMail: null,
		resultTitle: null,
		finalContent: null
	},
	data: function() {
		return {
			isValid: null,
			isSuccess: !1,
			msg: null,
			isPreventDoubleClick: !1,
			isSubmitting: !1
		}
	},
	mounted: function() {},
	computed: {
		disable: function() {
			var t = this.formData,
				e = !0;
			return Object.keys(t).forEach(function(a) {
				null === t[a].value || 0 === t[a].value.length ? e = !1 : !1 === t[a].isValid && (e = !1)
			}), e
		},
		formWrong: function() {
			return "zh" == this.lang ? "表單錯誤" : "Field Wrong"
		},
		submitMsg: function() {
			return "zh" == this.lang ? "送出中" : "Sending"
		},
		requireMsg: function() {
			return "zh" == this.lang ? "必填" : "This field is required"
		}
	},
	methods: {
		base64decode: function(t) {
			return t ? Base64.decode(t) : t
		},
		clearFields: function(t) {
			this.$refs[t].clear()
		},
		validMsg: function(t, e) {
			this.isValid = t, this.msg = e
		},
		clearMsg: function() {
			this.isValid = null, this.msg = null
		},
		checkAll: function() {
			var t = this;
			this.clearMsg();
			var e = t.formData,
				a = !0;
			return Object.keys(e).forEach(function(r) {
				null === e[r].value || 0 === e[r].value.length ? (e[r].msg = t.requireMsg, e[r].isValid = !1, a = !1) : !1 === e[r].isValid && (a = !1)
			}), a
		},
		preventDoubleClick: function() {
			if (!0 === this.isPreventDoubleClick) return !1;
			this.isPreventDoubleClick = !0
		},
		submitForm: function() {
			var t = this;
			if (!1 === this.checkAll()) return this.validMsg(!1, this.formWrong), !1;
			if (!0 === this.isPreventDoubleClick) return !1;
			this.isPreventDoubleClick = !0, this.validMsg(!0, ""), this.isSubmitting = !0;
			var e = this.formData,
				a = new Object,
				r = new Object;
			Object.keys(e).forEach(function(o) {
				"無" === e[o].value ? delete e[o] : (a[o] = {
					label: e[o].label[t.lang],
					value: e[o].value
				}, r[o] = e[o].value)
			}), a.leadMail = {
				label: "主要信件",
				value: t.leadMail
			}, setTimeout(function() {
				Promise.all([sendMail(a), postGoogleForm(r)]).then(function(e) {
					t.isPreventDoubleClick = !1, t.validMsg(!0, ""), t.isSuccess = !0
				})
			}, 500)
		}
	}
}), Vue.component("result", {
	template: "#resultTemplate",
	props: {
		formData: null,
		resultTitle: null,
		finalContent: null,
		lang: null
	},
	methods: {
		base64decode: function(t) {
			return t ? Base64.decode(t) : t
		}
	}
});
Vue.component("drop-down", {
	template: "#pureDropDownTemplate",
	props: {
		list: null,
		type: null,
		name: null,
		value: null,
		modelKey: null,
		className: null,
		defaultLabel: null,
		lang: null
	},
	data: function() {
		return {
			isActive: !1
		}
	},
	computed: {
		data: function() {
			return this.value
		},
		classCheck: function() {
			var t = " not-choosed";
			return this.value && (t = " choosed", this.mainLabel === this.defaultLabel && (t = " not-choosed")), 1 == this.isActive ? "active " + t : "in-active " + t
		},
		mainLabel: {
			get: function() {
				return this.data && this.list[this.data] ? this.list[this.data].label : this.defaultLabel
			}, 
			set: function(t) {}
		}
	},
	methods: {
		base64decode: function(t) {
			return t ? Base64.decode(t) : t
		},
		toggle: function() {
			!0 === this.isActive ? this.isActive = !1 : this.isActive = !0
		},
		open: function() {
			this.isActive = !0
		},
		close: function() {
			this.isActive = !1
		},
		closeAndRefresh: function() {
			this.isActive = !1
		},
		refresh: function() {
			this.$emit("refresh")
		}
	},
	directives: {
		clickoutside: {
			bind: function(t, e, i) {
				const n = e.modifiers.bubble,
					s = function(i) {
						(n || !t.contains(i.target) && t !== i.target) && e.value(i)
					};
				t.__vueClickOutside__ = s, document.addEventListener("click", s), document.addEventListener("touchstart", s)
			},
			unbind: function(t, e) {
				document.removeEventListener("click", t.__vueClickOutside__), document.addEventListener("touchstart", t.__vueClickOutside__), t.__vueClickOutside__ = null
			}
		}
	}
});
Vue.use(VueTouch), VueTouch.config.pan = {
	direction: "horizontal"
};
var InfiniteLoading = Vue.component("loading", {
		props: {
			ref: null,
			distance: 0
		},
		template: "#InfiniteLoading"
	}),
	wrapper = new Vue({
		el: "#wrapper",
		data: function() {
			return controldata
		},
		mounted: function() {
			var e = this;
			descroll(), this.posts = articlesData, this.$nextTick(function() {
				$("#wrapper").imagesLoaded({
					background: !0
				}, function(t) {
					switch (e.pageType) {
						case "index":
							!1 === e.xs && (e.parallaxScene = document.getElementById("parallax"), e.parallaxInstance = new Parallax(e.parallaxScene, {
								relativeInput: !0
							})), e.parallaxCenterScene = document.getElementById("parallaxCenter"), e.parallaxCenterInstance = new Parallax(e.parallaxCenterScene, {
								relativeInput: !0
							}), e.zoom1Start();
							break;
						case "about":
							new Swiper(".swiper-container", {
								pagination: {
									el: ".swiper-pagination",
									clickable: !0
								},
								allowTouchMove: !0,
								speed: 600,
								autoplay: {
									delay: 2500
								},
								breakpoints: {
									767: {
										slidesPerView: 1
									},
									1023: {
										slidesPerView: "auto",
										spaceBetween: 10
									}
								},
								on: {
									resize: function() {
										this.params.width = window.innerWidth, this.update()
									}
								}
							});
							break;
						case "single":
							if (!0 === e.md) {
								new PerfectScrollbar("#single-project .info-container");
								e.scrollHide()
							}
							break;
						case "career":
							if (!0 === e.md) new PerfectScrollbar(".left");
							new PerfectScrollbar(".right");
							e.firstAccordion()
					}
					e.webStart()
				})
			})
		},
		computed: {
			currentHour: function() {
				return this.hour < 10 ? "0" + this.hour : this.hour
			},
			currentMinute: function() {
				return this.minute < 10 ? "0" + this.minute : this.minute
			},
			currentSecond: function() {
				return this.second < 10 ? "0" + this.second : this.second
			},
			bigPhotoClass: function() {
				return this.winW >= 1366 ? this.winW - 540 > 1.77777777777777 * (this.winH - 130) ? "w100" : "h100" : this.winW - 430 > 1.77777777777777 * (this.winH - 130) ? "w100" : "h100"
			}
		},
		watch: {
			winW: function() {
				!0 === this.accordion && this.toggleAccordion()
			},
			md: function() {
				if (!0 === this.md) switch (this.pageType) {
					case "single":
						this.lastScroll || this.scrollHide()
				}
			},
			xs: function() {
				var e = this;
				if (!1 === this.xs) switch (e.pageType) {
					case "index":
						e.$nextTick(function() {
							e.parallaxInstance || (e.parallaxScene = document.getElementById("parallax"), e.parallaxInstance = new Parallax(e.parallaxScene, {
								relativeInput: !0
							}))
						})
				}
			},
			zoom: function() {
				var e = this;
				3 === this.zoom && "in" === this.zoomDirection && this.$nextTick(function() {
					e.tl && (e.tl.pause(0, !0), TweenMax.to(".real-monitor,.map-center-box", 0, {
						className: "-=active"
					})), e.tl ? e.tl.play() : (e.tl = new TimelineMax({
						delay: .4
					}), e.typingText = document.querySelectorAll(".typing-text"), e.tl.staggerFrom(e.typingText, .3, {
						text: {
							value: ""
						}
					}, .2), e.tl.to(".real-monitor,.map-center-box", .3, {
						className: "+=active"
					}))
				})
			}
		},
		methods: {
			closeBlogImgModal: function() {
				var e = $(event.target);
				e.removeClass("open"), setTimeout(function() {
					e.find(".img-popup__container img").attr("src", ""), e.find(".icon").removeClass("hide")
				}, 300)
			},
			zoom1Start: function() {
				var e = [this.folder + "img/index/block-map-1.jpg"];
				new CanvasSlideshow({
					sprites: e,
					displacementImage: this.folder + "img/index/texture/crystalize.jpg",
					displaceScale: [1e3, 1e4],
					interactive: !0,
					interactionEvent: "both",
					displaceAutoFit: !0,
					dispatchPointerOver: !0
				})
			},
			scrollHide: function() {
				var e = this;
				$(window).on("scroll", function() {
					var t = $(window).scrollTop();
					clearTimeout(e.scrollTimer), e.scrollTimer = setTimeout(function() {
						t < e.lastScroll || 0 == t ? e.scrollStatus = "up" : e.scrollStatus = "down", e.lastScroll = t
					}, 100)
				})
			},
			webStart: function() {
				var e = this;
				this.overallStart(), $("#wrapper,#animationShape,#animationShapeTwo").removeClass("loading"), $("body").addClass("start-animation"), setTimeout(function() {
					e.isWebStart = !1, e.posts && e.posts.article && e.onInfinite()
				}, 500), setTimeout(function() {
					rescroll(), "function" == typeof startFunction && startFunction()
				}, 1300)
			},
			refreshClock: function() {
				var e = this;
				setTimeout(function() {
					e.updateClock(), e.refreshClock()
				}, 1e3)
			},
			updateClock: function() {
				var e = new Date;
				this.hour = e.getHours(), this.minute = e.getMinutes(), this.second = e.getSeconds()
			},
			temperature: function() {
				var e = this,
					t = new Date,
					i = new Date(t.getTime() + 108e5);

				function n(e) {
					function t(e) {
						return e < 10 ? "0" + e : e
					}
					return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + "T" + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds())
				}
				$.ajax({
					type: "GET",
					url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-017",
					dataType: "json",
					data: {
						Authorization: "CWB-F9383952-16CC-4091-B68A-E2333ACD456C",
						locationName: "芳苑鄉",
						timeFrom: n(t),
						timeTo: n(i)
					},
					error: function(e) {},
					success: function(t) {
						e.currentTemperature = t.records.locations[0].location[0].weatherElement[3].time[0].elementValue[0].value
					}
				})
			},
			overallStart: function() {
				this.temperature(), this.refreshClock()
			},
			scrollToTop: function() {
				$("html, body").animate({
					scrollTop: 0
				}, "slow")
			},
			check_show: function(e) {
				return this.current == e ? "show" : "hide"
			},
			changeIndex: function(e) {
				var t = this;
				setTimeout(function() {
					t.zoom = e
				}, 100)
			},
			directionCheck: function(e) {
				this.zoomDirection = e
			},
			returnNormalClick: function() {
				var e = this;
				setTimeout(function() {
					e.isZooming = !1, e.isZoomingClass = "circle-in-active"
				}, 400)
			},
			zoomIn: function() {
				if (!0 === this.isZooming) return !1;
				var e;
				this.isZooming = !0, this.isZoomingClass = "circle-active", this.zoom < this.maxImg - 1 ? (e = this.zoom + 1, this.directionCheck("in")) : (e = 0, this.directionCheck("in jump")), this.changeIndex(e), this.returnNormalClick()
			},
			zoomOut: function() {
				if (!0 === this.isZooming) return !1;
				var e;
				this.isZooming = !0, this.isZoomingClass = "circle-active", this.zoom - 1 < 0 ? (e = this.maxImg - 1, this.directionCheck("out jump")) : (e = this.zoom - 1, this.directionCheck("out")), this.changeIndex(e), this.returnNormalClick()
			},
			scrollToForm: function() {
				if (!0 === this.md) {
					var e = window.innerWidth;
					$(".horizontal-scroll").animate({
						scrollTop: 2 * e
					}, 1e3)
				} else {
					var t = new SmoothScroll({
							easing: "linear",
							speed: 2e3
						}),
						i = document.querySelector("#formArea");
					t.animateScroll(i)
				}
			},
			toggle_menu: function() {
				!1 === this.menu ? this.open_menu() : this.close_menu()
			},
			open_menu: function() {
				var e = this;
				this.menu = !0, e.menuScroll || this.$nextTick(function() {
					e.menuScroll = new PerfectScrollbar("#menu", {
						suppressScrollX: !0
					})
				}), descroll()
			},
			close_career: function() {
				this.careerBox = !1, setTimeout(function() {
					$(".right.ps").animate({
						scrollTop: 0
					}, 0)
				}, 400), rescroll()
			},
			toggle_career: function() {
				!1 === this.careerBox ? this.open_career() : this.close_career()
			},
			open_career: function() {
				this.careerBox = !0, descroll()
			},
			close_menu: function() {
				this.menu = !1, setTimeout(function() {
					$("#menu").animate({
						scrollTop: 0
					}, 0)
				}, 400), rescroll()
			},
			toggleAccordionCareer: function(e, t) {
				var i = document.querySelectorAll(".single-career .content"),
					n = document.querySelectorAll(".single-career .content-inner");
				!1 !== e.open ? (e.open = !1, i[t].style.cssText = "height:0px !important") : (e.open = !0, i[t].style.cssText = "height:" + n[t].scrollHeight + "px !important")
			},
			toggleAccordion: function() {
				var e = document.querySelector("#excerpt"),
					t = e.querySelector(".inner");
				!1 !== this.accordion ? (this.accordion = !1, e.style.cssText = "") : (this.accordion = !0, e.style.cssText = "height:" + t.scrollHeight + "px")
			},
			firstAccordion: function() {
				var e = document.querySelectorAll(".single-career .content"),
					t = document.querySelectorAll(".single-career .content-inner");
				e[0].style.cssText = "height:" + t[0].scrollHeight + "px !important"
			},
			bg_style: function(e) {
				return e ? "background:url('" + e + "') center center/cover no-repeat;" : e
			},
			map_style: function(e) {
				return e ? "background:url('" + e + "') center center / contain no-repeat;" : e
			},
			limit: function(e, t, i) {
				return e.slice(t, i)
			},
			base64decode: function(e) {
				return e ? Base64.decode(e) : e
			},
			onInfinite: function(e) {
				var t = this;
				if (!0 === t.isWebStart) return !1;
				setTimeout(function() {
					var e = t.limit(t.posts.article, t.articles.length, t.articles.length + 12);
					t.articles = t.articles.concat(e), t.$nextTick(function() {
						t.articles.length === t.posts.article.length ? t.$refs.infiniteLoading.$emit("$InfiniteLoading:complete") : t.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded")
					})
				}, 1e3)
			},
			onChange: function() {
				var e = this;
				this.articles = [], console.log(this.posts.category), this.posts.article = this.posts.category[this.posts.current].list, window.history && window.history.pushState && (document.title = this.base64decode(this.posts.category[this.posts.current].title) + " | " + this.siteName, history.pushState("", document.title, this.posts.category[this.posts.current].link)), this.$nextTick(function() {
					e.$refs.infiniteLoading.$emit("$InfiniteLoading:reset")
				})
			},
			onHistory: function() {
				var e = this;
				this.articles = [], this.posts.article = this.posts.category[this.posts.current].list, document.title = this.base64decode(this.posts.category[this.posts.current].title) + " | " + this.siteName, this.$nextTick(function() {
					e.$refs.infiniteLoading.$emit("$InfiniteLoading:reset")
				})
			},
			nextPrev: function() {
				this.posts.current = location.href, this.onHistory()
			},
			closeGallery: function(e) {
				this.isGallery = null, rescroll()
			},
			openGallery: function(e, t) {
				var i = this;
				this.isGallery = e, this.$nextTick(function() {
					i.contactScrollBar = new PerfectScrollbar("#gallerySlide")
				}), descroll()
			}
		},
		component: {
			InfiniteLoading: InfiniteLoading
		},
		directives: {
			clickoutside: {
				bind: function(e, t, i) {
					const n = t.modifiers.bubble,
						o = function(i) {
							(n || !e.contains(i.target) && e !== i.target) && t.value(i)
						};
					e.__vueClickOutside__ = o, document.addEventListener("click", o)
				},
				unbind: function(e, t) {
					document.removeEventListener("click", e.__vueClickOutside__), e.__vueClickOutside__ = null
				}
			}
		}
	});
window.onpopstate = function(e) {
	"archive" === wrapper.pageType && wrapper.nextPrev()
};