"undefined" == typeof HdGame && (HdGame = {}),
	function(e) {
		var t, a, n, o, s, r, c = Array.prototype;

		function d(t) {
			return "function" == e.getType(t)
		}

		function l(e, t) {
			return(e & t) == t
		}
		e.isUrl = function(e, t) {
				if(void 0 === t && (t = !0), t && e.length >= 1 && "/" == e.charAt(0)) return !0;
				if(t && e.length >= 1 && "#" == e.charAt(0)) return !0;
				return /^(\w+:).+/.test(e)
			}, e.fixUrl = function(t, a) {
				return e.isUrl(t, a) ? t : "http://" + t
			}, e.encodeHtml = function(e) {
				return e && e.replace ? e.replace(/&/g, "&amp;").replace(/ /g, "&nbsp;").replace(/\b&nbsp;+/g, " ").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;").replace(/\n/g, "<br/>").replace(/\r/g, "") : e
			}, e.encodeHtmlAttr = function(e) {
				return e && e.replace ? e.replace(/\"/g, "&#x22;").replace(/\'/g, "&#x27;").replace(/</g, "&#x3c;").replace(/>/g, "&#x3e;").replace(/&/g, "&#x26;").replace(/\\/g, "&#5c;") : e
			}, e.encodeUrl = function(e) {
				return void 0 === e ? "" : encodeURIComponent(e)
			}, e.decodeHtml = function(e) {
				return e && e.replace ? e.replace(/&nbsp;/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/g, ">").replace(/&#92;/gi, "\\").replace(/&#39;/gi, "'").replace(/&quot;/gi, '"').replace(/\<br\/\>/gi, "\n").replace(/&amp;/gi, "&") : e
			}, e.decodeUrl = function(e) {
				return void 0 === e ? "" : decodeURIComponent(e)
			}, e.checkCharacterLen = function(e, t) {
				for(var a = ("string" == $.type(t) ? t : t.val()).replace(/[^\x00-\xff]/g, "**").trim().length, i = 0, n = 0; n < a; n++) i++;
				return i > e
			}, e.checkTextLength = function(e, t, a) {
				var i, n = (i = a ? t : t.val()).replace(/[^\x00-\xff]/g, "**");
				if(n.length < e) return {
					isOverflow: !1
				};
				for(var o = n.substr(0, e), s = 0, r = "", c = 0; c < o.length; c++) {
					"*" == o.substr(c, 1) && s++
				}
				var d = 0;
				if(s % 2 == 0 ? (d = s / 2 + (1 * e - s), r = i.substr(0, d)) : (d = (s - 1) / 2 + (1 * e - s), r = i.substr(0, d)), a) return {
					isOverflow: !0,
					returnValue: r
				};
				t.val(r)
			}, e.fadOut = function(e, t) {
				e.is(":visible") ? t && t() : (e.css("opacity", 0), e.show(), e.addClass("poupFadIn"), setTimeout(function() {
					e.removeClass("poupFadIn"), e.css("opacity", 1), t && t()
				}, 200))
			}, e.fadIn = function(e, t) {
				e.is(":hidden") ? t && t() : (e.css("opacity", 1), e.addClass("poupFadOut"), setTimeout(function() {
					e.hide(), e.removeClass("poupFadOut"), e.css("opacity", 1), t && t()
				}, 200))
			}, e.toggleActiveRuleView = function() {
				var e = 0,
					t = 0;
				_manage ? (e = top.game.style, t = top.game.gameType) : (e = g_config.style, t = gameType);
				var a = $("#activeRuleBox");
				if(-1 !== [24, 25, 79].indexOf(e)) return i(!(4 === t));
				if(-1 !== [39, 47, 98].indexOf(e)) return i(!(1 === t || 4 === t));
				if(34 === e) return i(!(3 === t));

				function i(e) {
					var t = a.hasClass("hiddenActiveRule");
					e ? (_manage && (top.game.$$showActiveRuleEdit = !0), !t && a.removeClass("hide")) : (_manage && (top.game.$$showActiveRuleEdit = !1), !t && a.addClass("hide"))
				}
			}, $.fn.extend({
				newAwardSlide: function(e) {
					if("object" == typeof e) {
						e = $.extend({
							effect: "normal",
							margin_bottom: "0",
							padding_right: "0",
							speed: 2
						}, e), this.each(function() {
							if($(this).show(), "on" == $(this).data("run")) return $(this);
							$(this).data("run", "on");
							var t = $(this),
								a = t.children("ul"),
								i = $(window).width(),
								n = i * e.speed / 6e3;
							if(function(e) {
									if($("body .awardBox_cache").length > 0) return $("body .awardBox_cache");
									var t = e.clone();
									e.addClass("awardBox_show"), t.addClass("awardBox_cache").removeClass("showAwardBox").removeClass("esseHide").css({
										height: "0",
										display: "block",
										"z-index": "-1"
									}), $("body").append(t), $("body .awardBox_cache")
								}(t), $(".awardInfoList .uerItem").css({
									"padding-left": e.padding_left,
									"padding-right": e.padding_right
								}), "fade" === e.effect || "fade" === $(this).attr("effect")) {
								var o = 0,
									s = $(".awardInfoList .uerItem"),
									r = s.length / 2;
								s.hide(), s.eq(o).fadeIn(), setInterval(function() {
									s.eq(o).fadeOut(150, function() {
										++o >= r && (o = 0), s.eq(o).fadeIn(150)
									})
								}, 2800)
							} else {
								var c, d = 0,
									l = 0,
									g = 10,
									f = (new Date).getTime(),
									u = (new Date).getTime(),
									h = 0,
									p = 0,
									m = !1,
									w = null;
								for($(".awardBox_cache .awardInfoList .uerItem").each(function() {
										var e = $(this).outerWidth(!0);
										l += e
									}), a.css({
										width: 2 * l + 10
									}), a.append(a.find("li").clone().css("z-index", 100)), c = 2 * l + 10, (w = a.find("li")).css({
										width: "50%",
										left: i + 20
									}); a.find("li").eq(0).outerHeight(!0) > 1.75 * g_rem + 5 && g > 0;) g--, a.css({
									width: a.outerWidth(!0) + .8 * g_rem
								});
								var v = function() {
									var e = (new Date).getTime(),
										t = e - f;
									if(f = e, d < 30 && d++, h = (h += n * (t = t > 500 ? 0 : t)) > c ? 0 : h, w.eq(0).css({
											transform: "translate3d(-" + h + "px,0,0)"
										}), h > c / 2 && !m && (m = !0, u = (new Date).getTime()), m) {
										var a = (new Date).getTime(),
											i = a - u;
										u = a, p = (p += n * (i = i > 500 ? 0 : i)) > c ? 0 : p, w.eq(1).css({
											transform: "translate3d(-" + p + "px,0,0)"
										})
									}
									requestAnimationFrame(v)
								};
								v()
							}
						}), $("body .awardBox_cache").remove()
					} else "stop" === e ? $(this).hide() : "wakeup" === e && $(this).show();
					return $(this)
				}
			}), e.statusMsg = function(t, a, i, n, o) {
				var s, r = "";
				"string" == typeof t ? r = t : 1 === t ? (r = "活动尚未开始", s = "开始时间为" + g_config.startTime) : 3 === t ? (r = "活动已结束", s = "请关注期待下次活动", !_manage && g_config.showSkillSup && e.logDog(1000202)) : (4 === t || 6 == t && 50 != g_config.style) && g_config.showHelpGuide ? 2 == helpType ? r = "<span style='padding-bottom: 1em;display: inline-block;'>你今天已经没有抽奖机会了</span><br/><span style='display: inline-block;'>把活动传递给好友将获得<span>" + addDrawTime + "</span>次抽奖机会<br/></span>(仅限每天第一次传递)" : 3 == helpType && (r = "<span style='padding-bottom: 1em;display: inline-block;'>你今天已经没有抽奖机会了</span><br/><span style='display: inline-block;'>每成功邀请一位好友参与，且该好友成功参与活动后，当天将额外获得1次抽奖机会<br/><span>（今天还能获得" + remainHelpNum + "次抽奖机会）</span>") : 4 === t ? (r = "您今天已经没有抽奖机会了", s = "明天可继续抽奖哦", e.logDog(1000202, 1)) : 6 === t ? (1 != helpType && 3 != helpType || (r = "您的抽奖机会已经用完", e.logDog(1000202, 3)), 2 == helpType && (r = "你今天通过活动传递获得的抽奖机会已用完，明天可通过该方式继续获得抽奖机会哦")) : 5 === t ? r = "未授权用户无法进行游戏。" : 7 != t && 8 != t || !g_config.showHelpGuide ? 7 === t ? (r = "您今天已经没有参与机会了", s = "明天可继续参与哦", e.logDog(1000202, 2)) : 8 === t && (r = "您的参与机会已经用完", e.logDog(1000202, 4)) : 2 == helpType ? r = "<span style='padding-bottom: 1em;display: inline-block;'>你今天已经没有参与机会了</span><br/><span style='display: inline-block;'>把活动传递给好友将获得<span>" + addDrawTime + "</span>次参与机会<br/></span>(仅限每天第一次传递)" : 3 == helpType && (r = "<span style='padding-bottom: 1em;display: inline-block;'>你今天已经没有参与机会了</span><br/><span style='display: inline-block;'>每成功邀请一位好友参与，且该好友成功参与活动后，当天将额外获得1次参与机会<br/><span>（今天还能获得" + remainHelpNum + "次参与机会）</span>"), s && "string" != typeof a && (a = s), e.showMsg(r, a, n, o)
			}, e.showMsg = (t = $('<div class="weui-mask" style="z-index:5000"></div><div class="weui-dialog"><div class="weui-dialog__bd"><span id="statusTip-msg"></span><br/><span id="sTime"></span></div><div class="weui-dialog__ft"><a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">知道了</a></div></div>'), a = t.find("#statusTip-msg"), n = t.find(".weui-dialog__btn"), o = t.find("#sTime"), s = !1, function(i, r, c, d) {
				a.html(i), n.text(c || "知道了"), "string" == typeof r ? o.text(r) : r ? o.hide() : o.show(), s ? t.show() : ($("body").append(t), s = !0), n.one("touchstart", function() {
					return d && d(), e.fadIn(t, function() {
						t.hide()
					}), !1
				})
			}), e.showMsgToast = function(t, a) {
				return e.showMsgToast2({
					bodyMsg: t,
					primaryBtnFn: a
				})
			}, e.showMsgToast2 = function(e) {
				var t = $.extend({
						key: "",
						style: "",
						headMsg: "",
						headHtml: "",
						bodyMsg: "",
						hasHead: !1,
						isTwoFootBtn: !1,
						needFootBtn: !0,
						clickMaskClose: !1,
						primaryBtnText: "知道了",
						defaultBtnText: "取消",
						primaryBtnFn: null,
						defaultBtnFn: null
					}, e),
					a = '<div class="' + (t.key ? t.key + "_Box" : "") + ' toast" style="z-index: 2000; position: relative; display: none; ' + t.style + '"><div class="weui-mask" style="z-index: 2000;"></div><div class="weui-dialog" style="z-index: 2000;">' + (t.hasHead ? '<div class="weui-dialog__hd" style="padding: 1.3em 1.6em 1.5em;"><strong class="weui-dialog__title" style="font-size: 1em">' + t.headMsg + "</strong>" + t.headHtml + "</div>" : "") + '<div class="weui-dialog__bd">' + t.bodyMsg + "</div>" + (t.needFootBtn ? '<div class="weui-dialog__ft">' + (t.isTwoFootBtn ? '<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">' + t.defaultBtnText + "</a>" : "") + '<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">' + t.primaryBtnText + "</a></div>" : "") + "</div></div>",
					i = $(a);
				return $("body").append(i), i.fadeIn(200), i.find(".weui-mask").off(".mask").on("touchstart.mask", function() {
					t.clickMaskClose && i.fadeOut(200, function() {
						i.remove()
					})
				}), i.find(".weui-dialog__btn_primary").off(".primaryBtn").on("touchstart.primaryBtn", function() {
					"stop" != (t.primaryBtnFn && t.primaryBtnFn()) && i.fadeOut(200, function() {
						i.remove()
					})
				}), i.find(".weui-dialog__btn_default").off(".defaultBtn").on("touchstart.defaultBtn", function() {
					var e = 0;
					"delay" == (t.defaultBtnFn && t.defaultBtnFn()) && (e = 600), setTimeout(function() {
						i.fadeOut(200, function() {
							i.remove()
						})
					}, e)
				}), i
			}, e.showMsgToast3 = function(t) {
				var a = $.extend({
						msg: "操作成功",
						duration: 2e3,
						round: !1,
						hideCallback: null
					}, t),
					i = null;
				i && (clearTimeout(i), i = null), e.checkCharacterLen(40, a.msg) && console.error("字符总数不建议超过40个");
				var n = '<div class="msgBox"><span class="msgText ' + (a.round ? "round" : "") + '">' + a.msg + "</span></div>",
					o = $(n);
				$("body").append(o), o.fadeIn(200), a.duration > 0 && (i = setTimeout(function() {
					o.fadeOut(200, function() {
						o.remove(), a.hideCallback && a.hideCallback()
					})
				}, a.duration))
			}, e.showSuccessToast = function(e, t) {
				t = t || 2e3, $("#toast").remove();
				var a = $('<div id="toast" style="z-index: 5000; position: relative; display: none;"><div class="weui-mask_transparent"></div><div class="weui-toast"><i class="weui-icon-success-no-circle weui-icon_toast"></i><p class="weui-toast__content">' + e + "</p></div></div>");
				$("body").append(a), a.fadeIn(150), setTimeout(function() {
					a.fadeOut(150, function() {
						a.remove()
					})
				}, t)
			}, e.unPublishMsg = function() {
				var e = "";
				isPublish || (e = _showUnPublishPage ? '<div class="unPublish"><div class="contentBox"><p class="animate">活动尚未发布，当前产生的活动数据发布后将被清空</p></div></div>' : '<div class="unPublish">活动尚未发布，当前仅供预览</div>'), _preview || $("body").prepend(e)
			}, e.showUnPublishPage = function(e) {
				var t = $(".publishTipsBox");
				!isPublish && t.fadeIn(300), t.find(".sureBtn").click(function() {
					t.fadeOut(600), e && e()
				})
			}, e.share = function() {
				$("#sharePanel").length > 0 ? $("#sharePanel").show() : ($("body").append("<div id='sharePanel'></div>"), $("#sharePanel").on("touchend touchstart", function() {
					$(this).hide()
				}))
			}, e.favorite = function(e) {
				if(!(e || g_config.isOem || g_config.isPaymentGame) && g_config.showSkillSup && g_config.createTime > 1521648e6)
					if($(".code").removeClass("selectText"), $("#cardBagEnter").length > 0) $("#cardBagEnter").show();
					else {
						var t = $("<div id='cardBagEnter'><div id='cardContainer' class='cardContainer' ><canvas class='cardCanvas' ></canvas><img class='cardImg cardContainer' /></div></div>");
						!isPublish && t.append('<div class="topTips">活动未发布，奖品不会收入我的卡包</div>'), t.on("click", function(e) {
							$(e.target).hasClass("cardContainer") || ($(".code").addClass("selectText"), $("#cardBagEnter").hide())
						});
						var a = t.find(".cardCanvas")[0],
							i = a.getContext("2d");
						a.width = 11.65 * g_rem, a.height = 17.5 * g_rem;
						var n = LF.setCanvasePixelRatio(i);
						a.style.height = a.height + "px", a.style.width = a.width + "px", a.width *= n, a.height *= n, i.beginPath(), i.fillStyle = "rgba(255, 255, 255, 0)", i.fillRect(0, 0, 11.65 * g_rem, 17.5 * g_rem), Fai.loadImg([
							[_resRoot + "/image/myCardBag/web/cardBagEnterBg.png?v=201908261650", {
								crossOrigin: "anonymous"
							}],
							[_resRoot + "/image/myCardBag/web/qrCode_selModule.png?v=201908261650", {
								crossOrigin: "anonymous"
							}]
						], !0).then(function(e, n) {
							if(e.success && i.drawImage(e.val[0], 0, 0, 11.65 * g_rem, 17.5 * g_rem), n.success) {
								var o = .5 * (11.65 - 7.75) * g_rem;
								i.drawImage(n.val[0], o, 1.75 * g_rem, 7.75 * g_rem, 7.75 * g_rem)
							}
							var s = a.toDataURL("image/png", 8);
							t.find(".cardCanvas").hide(), t.find(".cardImg").attr("src", s).show(), t.appendTo("body")
						})
					}
				else $("#favoritePanel").length > 0 ? $("#favoritePanel").show() : ($("body").append("<div id='favoritePanel'></div>"), $("#favoritePanel").on("touchend touchstart", function(e) {
					setTimeout(function() {
						$("#favoritePanel").hide()
					}, 500)
				}))
			}, e.getLevelName = function(e) {
				var t = g_config.isShoppingGame,
					a = g_config.hasGiftList;
				switch(parseInt(e)) {
					case 1:
						return a ? "礼品一" : t ? g_config.isSingleAward ? "商品" : "商品一" : "一等奖";
					case 2:
						return a ? "礼品二" : t ? "商品二" : "二等奖";
					case 3:
						return a ? "礼品三" : t ? "商品三" : "三等奖";
					case 4:
						return a ? "礼品四" : t ? "商品四" : "四等奖";
					case 5:
						return a ? "礼品五" : t ? "商品五" : "五等奖";
					case 6:
						return a ? "礼品六" : t ? "商品六" : "六等奖";
					case 7:
						return a ? "礼品七" : t ? "商品七" : "七等奖";
					case 8:
						return a ? "礼品八" : t ? "商品八" : "八等奖";
					case 900:
						return "安慰奖"
				}
			}, e.getStatusName = function(e) {
				switch(e) {
					case 0:
						return "未领取";
					case 1:
						return "已核销";
					case 2:
						return "未核销";
					case 3:
						return "已过期";
					case 4:
						return "已作废";
					case 5:
						return "已失效";
					case 7:
					case 8:
						return "核销中"
				}
			},
			function() {
				var t = null;
				_lastWrap = null, _stop = function(e) {
					e ? e.data("_guide") && (e.data("_guide").remove(), e.removeData("_guide")) : t && (t.remove(), t = null, _lastWrap && _lastWrap.removeData("_guide"))
				};
				var a = {
					play: function(e, a, i) {
						var n = $('<div class="ball-scale-multiple"><div></div><div></div><div></div></div>');
						if("static" === e.css("position") && e.css("position", "relative"), "object" == typeof a && void 0 !== a.x && void 0 !== a.y && void 0 !== a.w && void 0 !== a.h) {
							var o = Math.min(a.w, a.h) * (i || 1);
							n.children().css({
								width: o,
								height: o
							}), n.css({
								left: a.x + (a.w - o) / 2,
								top: a.y + (a.h - o) / 2
							})
						} else {
							i = i || .8;
							var s = e.outerHeight(),
								r = e.outerWidth(),
								c = ("w" === a ? r / 2 : "h" === a ? s / 2 : "min" === a ? Math.min(s, r) / 2 : Math.max(s, r) / 2) * i;
							n.css({
								left: r / 2 - c,
								top: s / 2 - c
							}), n.children().css({
								width: 2 * c,
								height: 2 * c
							})
						}
						e.append(n), t = n, e.data("_guide", n), _lastWrap = e
					},
					stop: _stop
				};
				e.Guide = a
			}(), e.homePoup = function(t) {
				1 == t ? ($("#rankBox").show(), !_manage && g_config.showSkillSup && (e.logDog(1000200, 4), g_config.localPoupPage = 4)) : 3 == t ? ($("#awardBox").show(), !_manage && g_config.showSkillSup && (e.logDog(1000200, 2), g_config.localPoupPage = 2)) : 4 == t && ($("#regAwardBox").show(), !_manage && g_config.showSkillSup && (e.logDog(1000200, 3), g_config.localPoupPage = 3)), g_config.createTime < 1494376826e3 && ($("#poupInfoBox").show(), !_manage && g_config.showSkillSup && (e.logDog(1000200, 1), g_config.localPoupPage = 1))
			}, e.poupAjaxComplete = function() {
				var e = $(".ajaxLoadBar");
				e.addClass("ajaxComplete"), $(".ajaxLoadBg").hide(), setTimeout(function() {
					e.removeClass("ajaxLoad"), e.removeClass("ajaxComplete")
				}, 500)
			}, e.refreshGiftListAndAwardDetail = function(t, a, i, n) {
				$.ajax({
					type: "post",
					url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=getGiftList",
					data: {
						gameId: t,
						openId: a,
						code: i
					},
					success: function(t) {
						var a = $.parseJSON(t);
						a.success && (e.changeCodeInfo(n, a.list[0]), e.openAwardDetail(a.list[0]))
					}
				})
			},
			function() {
				var t = {
						rankUrl: "",
						awardUrl: "",
						getRegAwardUrl: "",
						getStoreUrl: "",
						mhaveScore: 0,
						openId: "",
						gameId: 0
					},
					a = {
						menuLen: "",
						slideBarWidth: "",
						slideBarMaxWidth: "",
						marginLeft: !1,
						hasInitEvent: !1
					};
				"undefined" != typeof g_config && (g_config.firstTouchRank = g_config.firstTouchAward = g_config.firstTouchWinList = !0);
				var i = {
					isLoad: !1,
					isRankAll: !1,
					hasLoadAll: !1,
					start: 0,
					num: 0,
					limit: 99,
					delay: 500,
					close: function() {
						this.isClose = !0, this.isRankAll = !1, this.hasLoadAll = !1, this.num = this.start = 0
					},
					getRankData: function(a) {
						i.isLoad || i.isClose || i.isRankAll || i.hasLoadAll || ((a = $.extend({
							init: null,
							success: null,
							error: null
						}, a)).init && a.init(), i.isLoad = !0, $.ajax({
							type: "post",
							url: t.rankUrl + "&start=" + i.start + "&limit=" + i.limit + "&playerId=" + g_config.playerId,
							error: function() {
								a.error && a.error(), 0 == i.num && e.poupAjaxComplete(), i.isLoad = !1
							},
							success: function(t) {
								e.tlog("creatRankList", t);
								var n = $.parseJSON(t);
								a.success && a.success(n), n.isRankAll && (i.hasLoadAll = !0), 0 == i.num && e.poupAjaxComplete();
								var o = function() {
									e.logDog(1000010), i.creatRankList(n), i.isLoad = !1, i.num++, i.start = i.num * (i.limit + 1), hg.fire("updateRankList", n)
								};
								i.delay ? setTimeout(o, i.delay) : o(), 0 == i.num && (g_config.firstTouchRank = !1), e.hideLoadToast()
							}
						}))
					},
					creatRankList: function(t) {
						var a = t.rankList,
							n = t.rank,
							o = $("#rankInfoBox");
						if(0 == n ? $("#rank").text("无") : $("#rank").text(n + "位"), 0 == a.length) $("#noRank").show();
						else {
							$("#rankMain").show();
							for(var s = 0; s < a.length; s++) {
								i.start + s + 1 >= rankShowNum && (i.isRankAll = !0);
								var r = a[s].info.length > 0 ? $.parseJSON(a[s].info).headImg : null,
									c = null == r ? "" : "src='" + e.encodeHtmlAttr(r) + "'",
									d = "";
								if(g_config.isDoubleGame) {
									var l = a[s].info.length > 0 ? $.parseJSON(a[s].info).headImgB : null;
									d = '<img class="userImg" ' + (null == l ? "" : "src='" + e.encodeHtmlAttr(l) + "'") + " />"
								}
								if(g_config.createTime > 15361128e5 && e._showTowPointNum)
									if(a[s].achievement.indexOf(".") < 0) a[s].achievement = a[s].achievement + ".00";
									else {
										var g = a[s].achievement.indexOf(".") + 1;
										1 == a[s].achievement.length - g && (a[s].achievement = a[s].achievement + "0")
									}
								var f = '<tr class="rankInfo"><td>No.' + (i.start + s + 1) + '</td><td><div><img class="userImg" ' + c + " />" + d + '</div></td><td class="userName">' + e.encodeHtml(a[s].name) + "</td><td >" + e.encodeHtml(a[s].achievement) + '<span class="scoreUnit">' + g_config.scoreUnit + "</span></td></tr>";
								o.append(f)
							}
							if((i.isRankAll || i.hasLoadAll) && n > rankShowNum) {
								if(!e.currentScore) return;
								var u = '<tr class="rankInfo" style="line-height:0.85rem"><td colspan="4" style="padding-bottom:0.35rem">......</td></tr><tr class="rankInfo"><td>No.' + n + '</td><td><div><img class="userImg" ' + (c = g_config.headImg ? "src='" + e.encodeHtmlAttr(g_config.headImg) + "'" : "") + ' /></div></td><td class="userName">' + e.encodeHtml(g_config.userName) + "</td><td >" + (e.currentScore ? (g_config.scoreType ? e.encodeHtml(e.currentScore) : parseInt(e.currentScore)) + '<span class="scoreUnit">' + g_config.scoreUnit + "</span>" : "无") + "</td></tr>";
								o.append(u)
							}
						}
					}
				};
				e.rankAjax = i, e.initChangePoup = function(n) {
					n && $.extend(t, n), _manage && $("#Award_Round_Dot").show(), a.menuLen = 0, $(".poupTitleBox .poupTitleMune").each(function() {
						71 == g_config.style && 4 == $(this).attr("_flag") && $(this).css("display", "block"), "block" == $(this).css("display") ? ($(this).removeClass("hide"), a.menuLen++) : $(this).addClass("hide")
					}), $(".popTabBox").css("width", 16 * g_rem * a.menuLen);
					var o = null;
					$(".poupTitleBox .poupTitleMune").not(".hide").each(function(e, t) {
						for(var a = $(this).attr("_flag"), i = 0; i < $("#poupInfoBox .poupMain").length; i++) {
							var n = $("#poupInfoBox .poupMain").eq(i);
							if(n.attr("_flag") == a) return n.show(), void(o = o ? o.add(n) : n)
						}
					});
					var s = _manage ? $(window).width() : 100 / a.menuLen + "%";
					$("#poupInfoBox .poupMain").css("width", s), $("#poupInfoBox .poupMain").not(o).hide(), $(".poupTitleBox .poupTitleMune,.poupTitleBox .slideBarTip").css("width", 13.25 / a.menuLen + "rem"), a.slideBarWidth = parseInt($(".poupTitleBox .poupTitleMune").css("width")), a.slideBarMaxWidth = parseInt($(".poupTitleBox .slideBarTip").css("max-width")), a.slideBarWidth > a.slideBarMaxWidth && (a.marginLeft = !0), $("#poupInfoBox .poupMain").height($("#poupInfoBox").height() - $(".poupHead").outerHeight() - 0 * g_rem), a.hasInitEvent || (! function() {
						var t = _manage ? "click" : "touchstart",
							a = $(".poupTitleBox .poupTitleMune");
						a.on(t, function() {
							if(a.length == a.not(".hide").length) var t = $(this).index();
							else {
								var t = a.filter(":visible").index(this);
								t = t < 0 ? 0 : t
							}
							var i = parseInt($(this).attr("_flag"));
							e.changePoup(i, t), _manage && e.removeAllEditLayer()
						});
						var n = $("#rankBox .poupMainInfo");
						n.scroll(function(t) {
							_manage || 2 * $("#rankHeight").height() / 3 <= n.height() + n.scrollTop() && i.getRankData({
								init: function() {
									e.showLoadToast("数据加载中")
								}
							})
						})
					}(), a.hasInitEvent = !0)
				}, e.hdSkillLog = function(t, a) {
					if(g_config.realVer == HdVerDef.FREE ? e.logDog(a, t ? 0 : 1) : g_config.realVer == HdVerDef.BJ ? e.logDog(a, t ? 2 : 3) : g_config.realVer == HdVerDef.BY ? e.logDog(a, t ? 4 : 5) : g_config.realVer == HdVerDef.ZS ? e.logDog(a, t ? 6 : 7) : g_config.realVer == HdVerDef.MD && e.logDog(a, t ? 8 : 9), g_config.createTime > 15760332e5 && t && (1000069 == a || 1000070 == a)) {
						var i, n = 1000069 == a;
						switch(g_config.aid % 4) {
							case 0:
								i = n ? 1 : 2;
								break;
							case 2:
								i = n ? 3 : 4;
								break;
							case 3:
								i = n ? 5 : 6;
								break;
							case 1:
								i = n ? 7 : 8
						}
						e.logDog(1000418, i)
					}
				}, e.changePoup = function(s, r, c) {
					if(!_manage && g_config.showSkillSup) switch(s) {
						case 1:
							e.logDog(1000200, 4), g_config.localPoupPage = 4;
							break;
						case 3:
							e.logDog(1000200, 2), g_config.localPoupPage = 2;
							break;
						case 4:
							e.logDog(1000200, 3), g_config.localPoupPage = 3;
							break;
						case 2:
							e.logDog(1000200, 1), g_config.localPoupPage = 1
					}
					0 == r && (0 == g_config.isAOpenId ? e.logDog(1000115, 5) : e.logDog(1000115, 6)), i.isClose = !1;
					var d = $("#ruleImg"),
						l = d.offset().left + d.width() / 2 + "px ",
						g = d.offset().top + d.height() / 2 + "px";
					if($("#poupInfoBox").css({
							"transform-origin": l + g,
							"-webkit-transform-origin": l + g
						}), $("#poupInfoBox").show(), g_config.isPaymentGame && $("#poupInfoBox").hide(), $(".poupTitleMune").removeClass("checked"), 5 == s && 1 == t.hasReport) $("#informResultBox h2").text("你已经投诉过了"), $("#informResultBox").show();
					else if("number" == typeof r) {
						var f = $(".poupTitleMune").filter(":visible").eq(r);
						f.addClass("checked"), s = parseInt(f.attr("_flag"))
					} else $(".poupTitleBox .poupTitleMune").filter(":visible").each(function(e, t) {
						$.trim($(this).attr("_flag")) == s && (r = e, $(this).addClass("checked"))
					});
					if(_manage) {
						var u = $.trim($(".poupTitleMune").eq(r).find(".item").text()),
							h = parent.$("#editActive .topBar .column");
						"活动说明" == u && (u = "活动奖品");
						var p = g_config.isAngular ? -28 : 2;
						h.each(function() {
							$.trim($(this).find(".name").text()) == u && (parent.$(".topBar .transitionPanel").css("left", $(this).offset().left + p + "px"), h.removeClass("checked"), $(this).addClass("checked"))
						}), 48 == g_config.style && $(".body").scrollTop(0).css("overflow-y", "hidden")
					}
					a.marginLeft ? $(".poupSlideBar .slideBarTip").css("left", 13.25 / a.menuLen * r + (a.slideBarWidth - a.slideBarMaxWidth) / 40 + "rem") : $(".poupSlideBar .slideBarTip").css("left", 13.25 / a.menuLen * r + "rem"),
						function(s, r) {
							var c = $("#poupInfoBox").attr("class");
							if(_manage) $("#poupInfoBox").addClass("retrans");
							else {
								var d = r;
								if(d) $("#poupInfoBox").addClass("retrans");
								else {
									var c = $("#poupInfoBox").attr("class");
									$("#poupInfoBox").hasClass("enlarge") || $("#poupInfoBox").addClass("enlarge")
								}
								$(".gameBox,.home,.body").addClass("overflow-y-hidden"), e.tlog("testjjp--addadd"), 55 != g_config.style && g_config.showSkillSup && $(".bottomSkill").hide()
							}
							$(".poupClose").off("click"), setTimeout(function() {
								$(".poupClose").on("click", function(t) {
									if(!_manage) {
										t.preventDefault(), t.stopPropagation(), g_config.firstTouchRank = !0, g_config.firstTouchAward = !0, g_config.firstTouchWinList = !0, i.close(), $("#rankInfoBox").html(""), $(".poupTitleMune").removeClass("checked"), $(".poupTitleMune").eq(0).addClass("checked");
										var n = $("#poupInfoBox");
										n.removeClass("enlarge").removeClass("retrans"), "retrans" == c && n.hide(), r && n.hide(), (g_config.isShoppingGame || -1 != [71].indexOf(g_config.style)) && setTimeout(function() {
											n.hide()
										}, 500), $(".gameBox,.home,.body").removeClass("overflow-y-hidden"), e.tlog("testjjp--removeremove"), g_config.showSkillSup && $(".bottomSkill").show(), 60 != g_config.style && 45 != g_config.style || $(".notFullLuckOne").is(":visible") && g_config.showSkillSup && $(".gameBgBox .bottomSkill").hide(), setTimeout(function() {
											$(".popTabBox").css("left", 0), $(".poupSlideBar .slideBarTip").css("left", (a.slideBarWidth - a.slideBarMaxWidth) / 40 + "rem")
										}, 100), hg.fire("hidePoup", s)
									}
								})
							}, 300), e.tlog(s), 1 === s ? function(t) {
								g_config.isDoubleGame && $("#rankBox").addClass("isDoubleGame");
								if($("#rankBox .poupMainInfo").css("height", $("#rankBox").height() - $("#rankBox .attentionBox").height() - 18), _manage) {
									var a = 999;
									g_config.createTime > 15361128e5 && e._showTowPointNum && (a = 999.99);
									var n = [{
										name: "magazine",
										achievement: a
									}, {
										name: "hubert",
										achievement: a
									}, {
										name: "lvox",
										achievement: a
									}, {
										name: "hth",
										achievement: a
									}, {
										name: "monica",
										achievement: a
									}, {
										name: "lzz",
										achievement: a
									}, {
										name: "william",
										achievement: a
									}, {
										name: "sinki",
										achievement: a
									}, {
										name: "weiqizhou",
										achievement: a
									}, {
										name: "candyq",
										achievement: a
									}, {
										name: "jarvis",
										achievement: a
									}, {
										name: "johnvi",
										achievement: a
									}, {
										name: "tomato",
										achievement: a
									}, {
										name: "tina",
										achievement: a
									}];
									$("#rankMain").show(), e.homePoup(t);
									var o = $("#rankInfoBox");
									o.find(".rankInfo").remove();
									var s = "",
										r = void 0 === r || "" == r.trim() ? g_config.scoreUnit : r;
									s = g_config.isDoubleGame ? '<div class="userImg manImg"></div><div class="userImg girlImg"></div>' : '<div class="userImg manImg"></div>';
									var c = top.$("#setGameUnit").val();
									r = c ? Fai.encodeHtml(c) : g_config.scoreUnit;
									for(var d = 0; d < n.length; d++) {
										var l = '<tr class="rankInfo"><td>No.' + (d + 1) + "</td><td>" + s + '</td><td class="userName">' + e.encodeHtml(n[d].name) + "</td><td >" + n[d].achievement + '<span class="scoreUnit">' + r + "</span></td></tr>";
										o.append(l)
									}
									var g = parseInt($("#showRankNum").text()) - 1;
									$("#rankInfoBox tr.rankInfo:gt(" + g + ")").hide()
								} else e.logDog(1000010, 0), g_config.firstTouchRank && ($(".ajaxLoadBg").show(), $(".ajaxLoadBar").addClass("ajaxLoad"), $("#noRank").hide(), $("#rankMain").hide(), i.getRankData())
							}(s) : 2 === s ? function(a) {
								_manage || (g_config.showSkillSup && e.logDog(1000200, 1), g_config.localPoupPage = 1, e.logDog(1000009), 2 != skillSupportType && 3 != skillSupportType || (e.hdSkillLog(!1, 1000069), e.logDog(1000028, 2)));
								isLimitDraw && drawTimesLimitShow == drawTotalLimitShow ? ($("#explaiDrawInfoBox").find(".dayFont").hide(), $("#explaiDrawInfoBox").find(".drawTotalFont").hide(), $("#explaiDrawInfoBox").find(".chanceFont").show(), $("#explaiDrawInfoBox").find(".everyOneFont").show()) : $("#directDrawInfoBox").find(".drawTotalFont").show();
								isLimitDraw || ($("#explaiDrawInfoBox").find(".drawTotalFont").hide(), $("#explaiDrawInfoBox").find(".chanceFont").show(), $("#explaiDrawInfoBox").find(".everyOneFont").show());
								isLimitDraw && 4 == gameType && $(".drawTotalFont").hide();
								$("#ruleBox .poupMainInfo").css("height", $("#ruleBox").height() - $("#ruleBox .attentionBox").height() - 18), g_config.isPaymentGame && $("#ruleBox .poupMainInfo").css("height", $("#ruleBox").height() - $("#ruleBox .attentionBox").height() - 50);
								$("#ruleBox").show(), $("#poupInfoBox").show(), (!t.mhaveScore && 61 != g_config.style && 62 != g_config.style || 39 == g_config.style || 9 == g_config.style || 58 == g_config.style || 50 == g_config.style) && $("#haveScore").hide();
								parent.game && parent.game._flagC.f2048 && 2 === parent.game._setting.accessrule ? 3 == gameType && $("#explainPlayInfoBox").hide() : 3 == gameType && g_config.isCheckPlayTimes && 63 != g_config.style ? (PlayInfo.isLimitPlay.show && playTimesLimit == playTotalLimit && ($("#explainPlayInfoBox").find(".dayFont").hide(), $("#explainPlayInfoBox").find(".playTotalFont").hide(), $("#explainPlayInfoBox").find(".chanceFont").show(), $("#explainPlayInfoBox").find(".everyOneFont").show()), PlayInfo.isLimitPlay.show || ($("#explainPlayInfoBox").find(".playTotalFont").hide(), $("#explainPlayInfoBox").find(".chanceFont").show(), $("#explainPlayInfoBox").find(".everyOneFont").show()), $("#explainPlayInfoBox").canShow()) : 3 == gameType && 51 == g_config.style ? ($("#directDrawInfoBox").hide(), $("#explainPlayInfoBox").mustHide()) : $("#explainPlayInfoBox").mustHide();
								0 != gameType && 5 != gameType && $("#directDrawInfoBox").hide();
								e.toggleActiveRuleView()
							}() : 3 === s ? n(s) : 4 === s ? function(a) {
								if($("#regAwardBox .poupMainInfo").css("height", $("#regAwardBox").height() - $("#regAwardBox .attentionBox").height() - 18), $("#regAwardBox").show(), _manage) {
									e.homePoup(a);
									var i = ["lvox、hubert", '<span style="color:#fff000">magazine</span>、tina', "monica、hth"],
										n = $(".regAwardList");
									n.find(".playerName").html(""), n.each(function(e) {
										$(this).find(".playerName").html(i[e])
									})
								} else {
									e.logDog(1000034);
									var s = t.getRegAwardUrl;
									if(g_config.isDoubleGame) var s = s + "&openIdB=" + e.otherOpenId;
									g_config.firstTouchWinList && (e.ajaxLoad.show(), $.ajax({
										type: "post",
										url: s,
										error: function() {
											e.ajaxLoad.hide()
										},
										success: function(t) {
											e.ajaxLoad.hide(), e.tlog("poupRegAward", t);
											var a = $.parseJSON(t);
											$("#Mingdan_Round_Dot").hide();
											var i = function(e) {
												var t = !1;
												if($("#regAwardMain").empty(), !e) return t;
												for(var a = e.regAwardList, i = 0; i < a.length; ++i) {
													var n = a[i];
													if(n) {
														var s = n.level;
														$("#regAwardMain").append(o(s));
														for(var r = n.list, c = $(".regAwardList"), d = [], l = 0; l < r.length; ++l) {
															var g = r[l].name,
																f = r[l].isSelf;
															f ? d.push('<span style="color:#fff000;">' + g + "</span>") : d.push(g)
														}
														c.eq(i).find(".playerName").append(d.join("、")), t = !0
													}
												}
												return t
											}(a);
											setTimeout(function() {
												i ? ($("#noRegAward").hide(), $("#regAwardMain").show()) : ($("#noRegAward").show(), $("#regAwardMain").hide())
											}, 500), g_config.firstTouchWinList = !1
										}
									}))
								}
							}(s) : 5 === s && function(e) {
								$("#informBox").show(), $(".unPublish").hide(), $("#inform-reason-page").show(), $("#inform-reason-box .reasonItem").removeClass("checked"), $("#informResultBox .confirm-btn").off("touchend").on("touchend", function() {
									event.preventDefault(), _manage || ($(".gameBox,.home,.body").removeClass("overflow-y-hidden"), g_config.showSkillSup && $(".bottomSkill").show()), $("#informBox").hide(), $("#informResultBox").hide(), $(".unPublish").show(), $("#inform-reason-box .reasonItem").removeClass("checked"), $("#inform-reason-box .reasonItem em").hide(), $("#poupInfoBox").hide(), hg.fire("hidePoup", e)
								}), $("#cancel-inform-btn").off("touchend").on("touchend", function() {
									event.preventDefault();
									var t = $("#poupInfoBox");
									t.removeClass("retrans"), _manage || ($(".gameBox,.home,.body").removeClass("overflow-y-hidden"), g_config.showSkillSup && $(".bottomSkill").show()), t.hide(), $(".unPublish").show(), $("#informBox").hide(), $("#inform-reason-box .reasonItem").removeClass("checked"), $("#inform-reason-box .weui-check").prop("checked", !1), hg.fire("hidePoup", e)
								})
							}(s);
							hg.fire("showPoup", s)
						}(s, c), $(".popTabBox").css("left", -$(window).width() * r)
				}, e.epImg_default = _resRoot + "/image/ptchl_zf/describeImg.png", e.refreshImgTextBox = function(t, a) {
					var i = $(t);
					if(i.length > 0) {
						i.find(".imgTextList").length <= 0 && i.append($('<div class="imgTextList"></div>'));
						var n = i.find(".imgTextList");
						n.css("display", "block");
						for(var o = 0; o < a.count; o++) {
							var s = n.children(".imgTextItem:eq(" + o + ")");
							s.length <= 0 && (s = $('<div class="imgTextItem"><img/><div></div></div>'), n.append(s));
							var r = a.imgList && a.imgList[o] || e.epImg_default,
								c = a.textList && e.encodeHtml(a.textList[o]) || "";
							s.children("img").attr("src", r), s.children("div").html(c).css("margin", c.length > 0 ? "15px 0" : 0)
						}
						if(n.children(".imgTextItem").length > a.count)
							for(var d = n.children(".imgTextItem").length - 1; d >= a.count; d--) n.children(".imgTextItem:eq(" + d + ")").remove()
					}
				}, e.refreshExplainBox = function() {
					if($("#exlainInfo").length > 0) {
						var t = !_preview && parent.game && parent.game._setting._ep || $.parseJSON(g_config.explainInfo);
						if(!t) return;
						$("#exlainInfo").html(e.encodeHtml(t.top)), $("#explainBox").css("display", "block"), 2 === t.type ? e.refreshImgTextBox("#exlainInfo", t) : 1 === t.type && ($("#explainBox").find(".imgTextList").css("display", "none"), t.top || $("#explainBox").css("display", "none"))
					}
				}, e.refreshBandIntroductionBox = function() {
					if($("#bandIntroductionBox").length > 0) {
						var t = !_preview && parent.game && parent.game._setting._bi || $.parseJSON(g_config.bandInfo) || {};
						if(void 0 === t) return;
						t.count || (t.count = 1), e.refreshImgTextBox("#bandIntroductionBox", t)
					}
				}, e.refreshExplainBox(), -1 !== [106].indexOf(g_config.style) && e.refreshBandIntroductionBox();
				var n = function(a) {
					!_manage && g_config.showSkillSup && (e.logDog(1000011, 0), e.logDog(1000200, 2), g_config.localPoupPage = 2);
					var i = new Array;
					if(75 == g_config.style) $("#myAwardInfo");
					else $("#awardInfo");
					$("#awardInfoBox").css("height", $("#awardBox").height() - $("#awardBox .attentionBox").height() - 18), 75 == g_config.style && $("#awardInfoBox").css("height", "auto"), $("#poupInfoBox,#awardBox").show(), !_manage && g_config.showSkillSup && (e.hdSkillLog(!0, 1000069), e.logDog(1000028, 1), "number" == typeof g_config.isAOpenId && e.logDog(1000115, 1 + g_config.isAOpenId)), g_config.showMenu && e.logDog(1000036), _manage ? e.showAwardDetail([parent.awardList[0]]) : (i.push("gameId=", t.gameId), i.push("&openId=", t.openId), g_config.isPaymentGame && i.push("&mchCode=", $("#resule-gift-sucImg").data("openCode")), g_config.isDoubleGame && i.push("&openIdB=", e.otherOpenId), g_config.isPaymentGame && $("#poupInfoBox").hide(), g_config.firstTouchAward && (e.ajaxLoad.show(), $.ajax({
						type: "post",
						url: t.awardUrl,
						data: i.join(""),
						error: function() {
							e.ajaxLoad.hide()
						},
						success: function(t) {
							e.ajaxLoad.hide(), e.tlog("poupAward", t);
							var a = $.parseJSON(t);
							if(e.awardList = a.list, $("#Award_Round_Dot").hide(), e.logDog(1000011), e.tlog("success", a.success), a.success ? ((!g_config.isPaymentGame || 4 != e.awardList[0].codeStatus) && e.showAwardDetail(a.list), g_config.isPaymentGame && $("#poupInfoBox").hide()) : (g_config.isPaymentGame && $(".gameBox,.home,.body").removeClass("overflow-y-hidden"), $("#awardInfo").html('<div style="line-height: 2.6rem; padding-left: 0.05rem;">暂无中奖纪录</div>')), g_config.userInfo = a.userInfo, a.userInfo) {
								var i = !1;
								if(a.userInfo.ausername || a.userInfo.aphone || a.userInfo.aadress) i = !0;
								else
									for(var n in a.userInfo)
										if(/^aprop.*/.test(n) && null != a.userInfo[n] && "" !== a.userInfo[n]) {
											i = !0;
											break
										}
								i && !g_config.isYKY && ($("#awardContactInfo").show(), e.updateContactView(a.userInfo))
							}
							g_config.firstTouchAward = !1
						}
					})))
				};

				function o(e) {
					return "<div class='regAwardList'><div class='mainTitle'>" + (9 == e ? g_config.comfort.cas : g_config.awardList[e - 1].style) + "</div><div class='playerName' style='margin-bottom:12px;'></div></div>"
				}
				e.updateContactView = function(t) {
						var a = !1,
							i = $.parseJSON(g_config.contactNoDraw);
						if(i && "object" == typeof i[0]) {
							$contactGroup = $("#awardContactInfo .contactGroup"), $contactGroup.empty();
							for(var n = 0; n < i.length; n++) {
								var o = i[n];
								if(o.isOpen) {
									var s = e.encodeHtml(o.name),
										r = t[o.key];
									if(null != r && "" != r) {
										r = e.encodeHtml(r);
										var c = '<div class="contactItem contact-' + o.key + ' hide" style="display: block;">' + s + "： <span>" + r + "</span></div>";
										$contactGroup.append(c), a = !0
									}
								}
							}
						} else {
							t.ausername && ($("#awardContactInfo .contactName").show(), $("#awardContactInfo .contactName span").text(t.ausername), a = !0), t.aphone && ($("#awardContactInfo .contactPhone").show(), $("#awardContactInfo .contactPhone span").text(t.aphone), a = !0);
							var d = t.aadress && t.aadress.replace(/,/g, "");
							d && ($("#awardContactInfo .contactAddress span").text(d), $("#awardContactInfo .contactAddress").show(), a = !0)
						}
						$("#awardContactInfo").toggle(a)
					}, parseAward = function(e) {
						if(!e._award && e.awardInfo) {
							var a = g_config.$$awardTypeInfo,
								i = e._award = $.parseJSON(e.awardInfo);
							if(i.$type = $.extend(!0, {}, a.def, a[i.awardtype]), 1 == i.awardtype ? (void 0 === i.jumptype && (i.jumptype = 0), $.extend(i.$type, i.$type[i.jumptype])) : 2 == i.awardtype && t.afterWxCard ? ($.extend(i.$type, i.$type[i.cashtype]), 1 == i.cashtype && $.extend(i.$type, i.$type[i.onlinect])) : -1 != $.inArray(i.awardtype, [5, 6, 7, 8, 11, 12, 13, 15, 16, 17]) ? (void 0 === i.payment && (i.payment = 0), $.extend(i.$type, i.$type[i.payment])) : 10 == i.awardtype && $.extend(i.$type, i.$type[i.cashtype]), i["$cashsite_" + i.$type.sitetype] = i.cashsite, i.$opqrc = i.opqrc, t.afterWxCard && "auto" != i.$type.qrcode && (i.$opqrc = i.$type.qrcode), void 0 === i.attention && (i.attention = i.oct ? 2 : 1), i.genewxcard) !e.depositTime || (e.depositTime, (new Date).getTime());
							console.log("itemInfo.awardCode", e.awardCode), e.awardCode || (e.awardCode = e.custom && e.custom.length > 0 ? e.custom : e.code ? e.code : e.code1, e.anwei && (e.awardCode = e.cusCode && e.cusCode.length > 0 ? e.cusCode : e.code1)), e.isTrash && (e.codeStatus = 4)
						}
					}, e.changeCodeInfo = function(t, a) {
						e.awardList && ($.each(e.awardList, function(i, n) {
							n.code == t.code && (e.awardList[i] = a)
						}), e.showAwardDetail(e.awardList))
					}, e.showAwardDetail = function(t) {
						if(!_manage || !e.showAwardDetail.hasRun) {
							if(75 == g_config.style) var a = $("#myAwardInfo");
							else a = $("#awardInfo");
							for(var i = "", n = $("#resule-gift-sucImg").data("openCode"), o = null, s = 0; s < t.length; s++) {
								var r = t[s];
								if(_manage) var c = r.awardtype;
								else c = $.parseJSON(r.awardInfo).awardtype;
								var d = "",
									l = !1,
									g = !1;
								if(_manage) {
									var f = 1,
										u = "未核销";
									l = 2 == r.mainStyle, g = 5 == r.mainStyle
								} else {
									parseAward(r);
									f = r.anwei ? r.awardLevel : r.level, u = e.getStatusName(r.codeStatus);
									l = 2 == r._award.mainStyle, g = 5 == r._award.mainStyle, r._award.genewxcard && ($("#awardCollectionBtn").attr("isWxCard", !0), "DATE_TYPE_FIX_TERM" != r._award.t_type || r.depositTime || (d = "领取后" + (0 == r._award.cfbt ? "当" : r._award.cfbt) + "天生效，有效天数" + r._award.cft + "天"))
								}
								i += '<div id="codeInfo' + s + '" class="codeInfoBox' + (9 == c ? " isJZCoupon" : "") + (g_config.isYKY || l || g ? " isYKY" : "") + '" _level="' + f + '"><div class="goDetailIcon"></div><div class="djqImgBox"></div><div class="isEmptyAward ellipsis" style="width: 11rem;margin-left:0.6rem;font-size:0.7rem;"><span class="awardStyle"></span>：<span class="awardName"></span></div><div class="noPartnersBox"><div class="codeperiod" style="margin: 0.25rem 0.6rem;line-height:1.4rem;"><span class="awardTypeName"></span>：' + ("" != d ? d : '<span class="awardBgTime"></span> 至 <span class="awardEndTime"></span>') + '</div><div class="codeStatusName" style="color: #ecb208;margin-left:0.6rem;">' + u + "</div></div></div>", _manage || void 0 === n || n != r.awardCode && n != r._awardCode || (o = r)
							}
							a.html(i), $.each(t, function(t, i) {
								var n = _manage ? i : i._award,
									o = a.find("#codeInfo" + t);
								e.watch("awardList[0].style", i.awardStyle, function(e) {
									o.find(".awardStyle").text(e)
								}), e.watch("awardList[0].name", i[i.anwei ? "award" : "awardName"], function(e) {
									o.find(".awardName").text(e)
								});
								var s = 6 == i.codeStatus && !i.isTrash;
								e.watch('awardList[0].needlessconsume && awardList[0].$type.sitetype == "url"', s, function(e) {
									o.find(".codeStatusName").toggle(!e)
								}), e.watch("awardList[0].awardtype == 9", 9 == n.awardtype, function(e) {
									o.toggleClass("isJZCoupon", e).find(".noPartnersBox").toggle(!e)
								}), g_config.isYKY || (e.watch("awardList[0].$type.deadline", n.$type.deadline, function(e) {
									o.find(".awardTypeName").text(e)
								}), e.watch("awardList[0].cbt", n.cbt, function(e) {
									o.find(".awardBgTime").text(e.substring(0, 10).replace("-", ".").replace("-", "."))
								}), e.watch("awardList[0].cet", n.cet, function(e) {
									o.find(".awardEndTime").text(e.substring(0, 10).replace("-", ".").replace("-", "."))
								})), o.data("data", i)
							}), o && (e.openAwardDetail(o), $("#resule-gift-sucImg").removeData("openCode")), _manage && (e.showAwardDetail.hasRun = !0)
						}
					}, e.openStoreLocation = function(e) {
						var t = $(e).parent().data("store"),
							a = $.parseJSON(t.point);
						wx.openLocation({
							latitude: a.lat,
							longitude: a.lng,
							name: t.name,
							address: t.address,
							scale: 22,
							infoUrl: ""
						})
					},
					function() {
						function a(t, a) {
							if(g_config.afterLinkModify) {
								if(e.shouldRegInfo([2, 3, 4])) return !0
							} else if(void 0 !== t.continfo) {
								if(a && (0 == gameType || 4 == gameType || 5 == gameType) && g_config.wxAward.oplink) {
									var i = t.continfo,
										n = 2 & i,
										o = 4 & i,
										s = 1 & i && !g_config.awardUsername,
										r = n && !g_config.awardPhone,
										c = o && !g_config.awardAddress;
									if(s || r || c) return !0
								}
							} else if(!g_config.awardUsername && !g_config.awardPhone && !g_config.awardAddress && g_config.award && (0 == gameType || 4 == gameType) && g_config.wxAward.oplink) return !0;
							return !1
						}

						function i(t, a, i) {
							var o = $("#awardDetailBox");
							if(t && 0 != t.length) {
								if(null != a && null != i) {
									for(var s = 0; s < t.length; s++) {
										var r = t[s],
											c = $.parseJSON(r.point),
											d = e.computeDistance(a, i, c.lat, c.lng);
										r.distance = parseInt(d), e.tlog("distance", r.distance)
									}
									t.sort(function(e, t) {
										return e.distance - t.distance
									})
								} else t.sort(function(e, t) {
									return t.id - e.id
								});
								var l = t[0],
									g = $("#useStoreBox");
								if(g.find(".storeInfoBox").data("store", l), n(l, g.find(".storeInfoBox")), o.find("#useStoreBox").removeClass("initHide"), o.find("#useStoreBox").canShow("listNotNull"), t.length > 1 ? (g.find(".storeNumText").show(), g.find("#storeNum").text(t.length), g.find(".moreBtn").show()) : (g.find(".storeNumText").hide(), g.find(".moreBtn").hide()), !_manage && t.length > 1) {
									var f = $("#storeListBox .list");
									f.empty();
									for(s = 0; s < t.length; s++) {
										r = t[s];
										var u = $('<div class="storeInfoBox"><div class="locationBtn" onclick="HdGame.openStoreLocation(this)"></div><div class="info"><div class="storeNameBox"><span id="storeName"></span><span id="distance"></span></div><div class="storeAdress"></div></div></div>');
										u.data("store", r), n(r, u), f.append(u)
									}
								}
							} else o.find("#useStoreBox").mustHide("listNotNull")
						}

						function n(e, t) {
							var a = "",
								i = "",
								n = "";
							if(e) {
								a = e.name, i = function(e) {
									if("北京" == e.province || "天津" == e.province || "上海" == e.province || "重庆" == e.province) return e.city + e.county + e.address;
									return e.province + e.city + e.county + e.address
								}(e);
								var o = e.distance;
								o && o > 0 && (n = o > 1e3 ? parseInt(o / 1e3) + "km" : o + "m")
							}
							t.find("#storeName").text(a), t.find(".storeAdress").text(i), t.find("#distance").text(n)
						}
						e.checkContact = a, e.openAwardDetail = function(n) {
							var o = $("#awardDetailBox"),
								s = $("#ticketDetailBox"),
								r = o.find("#bottomCusBtnBox"),
								c = {};
							if(_manage) $$(function() {
								c = n = parent.game.$cAward
							});
							else {
								if(n && n.awardInfo || (n = $(this).data("data")), $(".codeInfoBox.checked").removeClass("checked"), $(this).addClass("checked"), parseAward(n), c = n._award, g_config.award = n, g_config.wxAward = c, Fai.checkBit(n.flag, 64)) {
									if(e.fission.isNeedFisLinkInfo([2, 3, 4])) return e.aUserInfo.show(arguments, this, !0)
								} else if(a(c, n)) return e.aUserInfo.show(arguments, this);
								if(g_config.isYKY) return void(function(a) {
									if(isPublish) {
										var i = "_loadYKY_" + a.awardCode;
										if(!e.openAwardDetail[i]) {
											var n = $.parseJSON(a.prop),
												o = function(t) {
													e.replaceUrlByTime(), window.open(t)
												};
											return n && n.ykyurl ? (e.tlog("getYKYAwardUrl", n), void o(n.ykyurl)) : !g_config.ykyRelationId || void(e.openAwardDetail[i] = $.ajax({
												type: "post",
												url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=getYKYAwardUrl&gameId=" + t.gameId + "&openId=" + t.openId + "&code=" + a.awardCode + "&ykyRelationId=" + g_config.ykyRelationId,
												error: function() {
													e.showMsgToast("服务繁忙，请稍候重试")
												},
												success: function(t) {
													e.tlog("getYKYAwardUrl", t);
													var i = $.parseJSON(t);
													e.tlog("result", i), i.success ? 0 !== i.status && (a.prop = $.toJSON({
														ykyurl: i.data.url
													}), o(i.data.url)) : e.showMsgToast(i.data.failMessages)
												},
												complete: function() {
													e.hideLoadToast(), delete e.openAwardDetail[i]
												}
											}))
										}
									} else e.showMsgToast("活动尚未发布<br>无法查看奖品详情")
								}(n) && e.aUserInfo.show(arguments, this));
								if(-1 !== [106].indexOf(g_config.style)) return hg.fire("getAwardEvent");
								if(g_config.isPartnerAcct && 2 == n._award.mainStyle || !g_config.isPartnerAcct && 5 == n._award.mainStyle) return function(t) {
									if(!isPublish) return e.showMsgToast("活动尚未发布<br>无法查看奖品详情");
									if(Fai.checkBit(t.flag, 256)) {
										var a = $.parseJSON(t.prop);
										a && a.cdUrl ? (-1 == a.cdUrl.indexOf("http") && (a.cdUrl = "http://" + a.cdUrl), window.location.href = a.cdUrl) : e.showMsg("当前该礼品无详情介绍")
									} else {
										e.showLoadToast("数据加载中");
										var i = 2 == t._award.mainStyle ? "distributePartnerGift" : "distrbuteInternalGift";
										$.ajax({
											type: "post",
											url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=" + i + "&gameId=" + g_config.gameId + "&awardCode=" + t.awardCode + (2 == t._award.mainStyle ? "&playerId=" + g_config.playerId : "&uid=" + g_config.uid)
										}).done(function(t) {
											var a = $.parseJSON(t);
											a.success ? a.cdUrl ? window.location.href = a.cdUrl : e.showMsg("派发成功，当前该礼品无详情介绍", !0, "知道了", function() {
												location.reload(!0)
											}) : e.showMsg(a.msg || "系统繁忙，请稍后重试")
										}).always(function() {
											e.hideLoadToast(), e.otherAjaxComplete()
										})
									}
								}(n);
								! function(e, t) {
									var a = $(".codeDetailInfoBox").hide(),
										i = $("#codeStatusBox").show(),
										n = i.find("#codeStatusInfo").show(),
										o = i.find("#codeStatusBtn"),
										s = i.find("#codeStatusTips").hide(),
										r = $.parseJSON(t.awardInfo).awardtype;
									if(s.css("fontSize", ""), $("#awardCollectionBtn").show(), o.show(), 4 == t.codeStatus) o.html("已作废"), 5 == t.status ? n.html("微信检测到您有刷红包嫌疑，为保证公平公正<br>已取消您的领取资格") : 4 == t.status ? n.html("红包超过24小时未领取，已退回至商家账户") : n.html("商家已将该兑奖码设置为作废<br>详情请联系商家");
									else if(1 == t.codeStatus) o.html("已核销"), n.hide();
									else if(5 == t.codeStatus) {
										o.html("已失效");
										var c = 5 == r ? "红包已失效，详细请联系商家" : "已失效，详细请联系商家";
										n.html(c)
									} else if(3 == t.codeStatus) o.html("已过期"), n.hide();
									else if(t.theGiftDate < 0) {
										o.html("未到兑奖时间"), n.hide(), s.show().find(".giftNameA").text(e.$type.collect);
										var d = -1 * t.theGiftDate / 864e5,
											l = (new Date).setHours(23, 59, 59),
											g = d < 1 && t.codeStartTime <= l ? "今天" : Math.ceil(d) + "天后";
										s.find(".targetDateMin").text(g), e.genewxcard && (e.depositTime || (e.depositTime = t.depositTime), e.depositTime ? (s.show().find(".giftNameA").text("打开微信卡券"), s.css("fontSize", "")) : (s.show().find(".giftNameA").text("领取到微信卡包"), o.hide(), s.css("fontSize", "0.75rem")))
									} else {
										var f = e.depositTime || t.depositTime;
										e && e.genewxcard && !f ? (o.hide(), n.text("请先领取到微信卡包，以获取优惠码")) : (a.show(), i.hide())
									}
									var u = a.find(".redPacketTip").hide(),
										h = a.find(".codeOptInfo").canShow("redPacket");
									Fai.checkBit(t.flag, 1) && (0 == t.status ? (a.show(), u.show().html("您的红包正在发送中，请耐心等待"), h.mustHide("redPacket")) : 1 == t.status ? n.show().html("红包已发送，请留意服务通知！") : 2 == t.status && (a.show(), u.show(), h.mustHide("redPacket"), "FREQ_LIMIT" == t.result_code ? u.html("目前领取人数过多，请稍后点击“立即领取”重试！") : u.html("红包发送失败，点击“立即领取”重试，如多次失败请联系管理员！")))
								}(c, n);
								var d = n.gameid || n.gameId;
								$("#awardCodeLayer,#awardDetailBox").find(".codeImg").attr("src", "http://" + e.gameDomain + "/manage/qrCode.jsp?cmd=qrurl&siteUrl=" + e.encodeUrl(900 == n.awardLevel ? "id=" + n.id + "&code=" + n.code1 + "&gameId=" + d : "code=" + n.awardCode + "&gameId=" + d)), o.find(".code,.copyCode").text(n.awardCode), $("#awardCodeLayer").find(".code").text(n.awardCode), o.find(".code").attr("code", n.code);
								var l = o.find("#bottomCusBtnInfo");
								e.log(l);
								var g = n._award;
								if(l.removeAttr("href").unbind("click").off(".cusBtn"), $("#awardDetailBox #ticketDetailBox .addressLine .guideMap").data("pointData", g.addressData), t.afterWxCard) {
									if("wxUrl" == c.$type.sitetype) {
										var f = /\?/.test(g_config.sendGiftUrl),
											u = function(t) {
												var a = t + (f ? "&" : "?") + "typeB=" + g_config.award._award.giftTypeItem.val + "&awardCode=" + n.awardCode + "&gameId=" + g_config.gameId;
												_fromCardBag ? l.click(function() {
													e.copyContent(a)
												}) : l.attr("href", a)
											}; - 1 != $.inArray(c.awardtype, [6, 7]) ? u(g_config.sendGiftUrl) : -1 != $.inArray(c.awardtype, [8, 11, 12, 13, 15, 16, 17]) ? u(g_config.sendVideoVipUrl) : e.checkDiffRedPacketSendWay().then(function(t) {
											if(t) l.click(function() {
												e.showMsgToast2({
													bodyMsg: "商家更换了红包派发方式，当前无法派发红包，请联系商家"
												})
											});
											else {
												var a = g_config.redPacketUrl + "&redCode=" + n.awardCode;
												_fromCardBag ? l.click(function() {
													e.copyContent(a, "请点击“复制链接”按钮，然后在微信会话粘贴访问链接")
												}) : l.attr("href", a)
											}
										})
									} else if("url" == c.$type.sitetype) {
										var h = c.cashsite.indexOf("https:") > -1 ? "https:" : "http:",
											p = e.fixUrl(h + "//" + c.cashsite.replace(/^(http(s)?:\/\/)+/g, ""));
										/[?&]hd_code=djm\b/.test(p) && (p = e.setUrlArg(p, ["hd_code", n.awardCode])), "http://" == p ? l.click(function() {
											e.showMsgToast2({
												bodyMsg: "商家暂未填写兑奖网页链接<br/>请联系商家"
											})
										}) : _fromCardBag ? l.click(function() {
											e.copyContent(p)
										}) : l.click(function() {
											window.open(p)
										})
									} else "taopw" == c.$type.sitetype ? l.off(".cusBtn").on("click.cusBtn", function() {
										! function(t, a) {
											var i = $("#taopwPoup");

											function n() {
												var e = $("#codeStatusBtn"),
													n = e.text();
												i.show(), i.find(".taopwtext").text(t.cashsite), e.is(":visible") && n ? i.find(".codetext").text(n) : i.find(".codetext").text(a.awardCode);
												var o = Fai.checkBit(a.flag, 32) ? Fai.checkBit(a.flag, 16) : 6 == a.codeStatus;
												i.toggleClass("needlessconsume", o);
												var s = i.find(".attentionPoup");
												s.css("margin-top", Math.max($(window).height() - s.outerHeight(), 0) / 2)
											}
											0 == i.length ? ((i = $('<div id="taopwPoup" class="homePoupMask"><div class="attentionPoup"><div class="close"></div><div class="tips tips1">点击“一键复制”按钮复制淘口令</div><div class="tips taopwtext"></div><div class="tips copyBtn">一键复制</div><div class="tips tips2">在手机中打开淘宝APP即可进入对应商品链接</div><div class="needconsume"><div class="tips tips3">联系客服并发送优惠码即可兑奖<br><span class="note">注：淘口令优惠券可直接领取</span></div><div class="tips tips4">您的优惠码</div><div class="tips codetext"></div></div></div></div>').appendTo("body")).find(".close").on("click", function(e) {
												i.hide()
											}), e.showLoadToast("数据加载中"), e.Res.load("js_clipboard").then(function() {
												e.hideLoadToast(), new ClipboardJS(i.find(".copyBtn"), {
													text: function() {
														return i.find(".taopwtext").text()
													}
												}).on("success", function(t) {
													e.showSuccessToast("复制成功")
												}), n()
											})) : n()
										}(c, n)
									}) : "img" == c.$type.sitetype ? (2 == c.awardtype && 1 == c.cashtype && 1 == c.onlinect ? (e.createQrImg($("#plAttentionPoup"), c.onlinewxnum, c), e.createQrImg($("#newAttentionPoup"), c.onlinewxnum, c)) : (2 == c.awardtype && 3 == c.cashtype || -1 != $.inArray(c.awardtype, [5, 6, 7, 8, 11, 12, 13, 15, 16, 17])) && (e.createQrImg($("#plAttentionPoup"), g_config.qrCodeUrl, c), e.createQrImg($("#newAttentionPoup"), c.attentionimg, c)), l.off(".cusBtn").on("click.cusBtn", function() {
										_fromCardBag && e.logDog(1000314, 8), $("#plAttentionMask").show()
									})) : "text" == c.$type.sitetype ? l.off(".cusBtn").on("click.cusBtn", function() {
										! function(t, a) {
											var i = $.parseJSON(t.tlmt),
												n = (new Date).getDay(),
												o = !1,
												s = g_config.verInfo.authVer >= 2;
											if(0 != g_config.status && (s = s || g_config.verInfo.createAuthVer >= 2), o = 1 == i.length && 8 == i[0] || i.some(function(e) {
													return 7 == e && (e = 0), e == n
												}), t.iscancelver && s) {
												if(1 == a.codeStatus) return void e.statusMsg("该兑奖码已被核销！", "");
												if(3 == a.codeStatus) return void e.statusMsg("该兑奖码已过期！", "");
												if(4 == a.codeStatus) return void e.statusMsg("该兑奖码已作废！", "");
												if(!o) return void e.showMsg("该奖项未到可用时段！");
												var r = {
														hasHead: !0,
														headMsg: "请联系核销员确认核销",
														bodyMsg: '<div class="weui-cell" style="border: 1px solid #D5D5D6"><div class="weui-cell__bd"><input class="weui-input" type="text" placeholder="请输入核销码" style="color: #000" onblur="window.scroll(0, 0);"></div></div>',
														isTwoFootBtn: !0,
														primaryBtnText: "确认核销",
														defaultBtnText: "取消",
														primaryBtnFn: function() {
															var i = c.find(".weui-input").val().trim().toLowerCase();
															if("" == i) return setTimeout(function() {
																e.statusMsg("请先输入核销码", "")
															}, 200), "stop";
															t.vercodeFlow || (t.vercodeFlow = !0, $.ajax({
																url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=checkVerificationCode",
																type: "post",
																data: {
																	storeId: g_config.storeId,
																	areaId: g_config.areaId,
																	vcode: i,
																	id: g_config.playerId,
																	gameId: g_config.gameId,
																	openId: g_config.openId,
																	code: a.code
																},
																success: function(t) {
																	t = JSON.parse(t), e.tlog("cancelVer", t), $("#verifictionCodeLayer").hide(), c.find(".weui-input").val("");
																	var i = a.codeStatus;
																	if(t.success ? (e.statusMsg(t.msg, ""), a.codeStatus = 1) : (-6 == t.rt ? a.codeStatus = 1 : -15 == t.rt ? a.codeStatus = 3 : -12 == t.rt ? a.codeStatus = 4 : 71 == t.rt && (a.codeStatus = 6), e.statusMsg(t.msg, 0, 0, "", function() {
																			-1 != t.rt || $("#bottomCusBtnInfo").click()
																		})), i != a.codeStatus) {
																		var n = {
																			gameId: g_config.gameId,
																			openId: g_config.openId
																		};
																		g_config.isPaymentGame ? n.mchCode = a.code : n.code = a.code, $.ajax({
																			type: "post",
																			url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=getGiftList",
																			data: n,
																			success: function(t) {
																				var i = $.parseJSON(t);
																				i.success && (g_config.isPaymentGame ? (e.tlog(a), e.openAwardDetail(a)) : (e.changeCodeInfo(a, i.list[0]), e.openAwardDetail(i.list[0])))
																			}
																		})
																	}
																},
																error: function() {
																	e.statusMsg("服务器繁忙，请稍后再试", "")
																},
																complete: function() {
																	t.vercodeFlow = !1
																}
															}))
														},
														defaultBtnFn: function() {
															return c.find(".weui-input").val(""), "delay"
														}
													},
													c = e.showMsgToast2(r);
												c.on("focus", ".weui-input", function() {
													$("#spxdPage").addClass("spxdPageHide")
												}), c.find(".weui-input").focus()
											} else $("#awardCodeLayer").show()
										}(c, n)
									}) : "serviceWx" == c.$type.sitetype && l.off(".cusBtn").on("click.cusBtn", function() {
										! function(t) {
											var a = $("#serviceWxPoup");
											if(!t.serviceWxImg) return e.showMsg("商家暂未上传客服微信二维码，请联系商家");
											0 == a.length ? (a = $('<div id="serviceWxPoup" class="homePoupMask"><div class="content flexBox flex-column justify-center align-center"><img class="serviceWxImg" src="' + t.serviceWxImg + '" /><div class="flexBox justify-center align-center"><div class="merchantIcon"></div><div><div class="p1">长按识别二维码</div><div class="p2">添加商家客服微信</div></div></div></div><div class="closeBtn"></div></div>').appendTo("body").show()).on("click", ".closeBtn", function() {
												a.hide()
											}) : a.show().find(".serviceWxImg").attr("src", t.serviceWxImg)
										}(c)
									});
									n && (6 == n.codeStatus ? n.aid && 17396608 == n.aid || $(".codeImgBox .codeLine").hide() : $(".codeImgBox .codeLine").show())
								} else $(".awardCusText").toggle(c.optx), o.find("#awardCusTextInfo").text(c.txc);
								if(c.genewxcard ? r.hdToggle("codeStatus", n.theGiftDate < 0 || 1 != n.codeStatus) : r.find("#bottomCusBtnInfo").hdToggle("codeStatus", !(n.theGiftDate < 0 || ["text", "serviceWx"].indexOf(c.$type.sitetype) > -1 && -1 != $.inArray(n.codeStatus, [4, 1, 5, 3]))), e.logDog(1000085), 3 == c.attention) e.createQrImg($("#newAttentionPoup"), c.attentionimg, c), $("#awardCusBtnInfo").off(".cusBtn").on("touchend.cusBtn", function() {
									e.logDog(1000086), _fromCardBag && e.logDog(1000314, 8), $("#newAttentionMask").show()
								});
								else if(2 == c.attention) {
									var m = $("#awardCusBtnInfo");
									m.off(".cusBtn").unbind("click");
									var w = e.fixUrl(c.btl);
									_fromCardBag ? m.click(function() {
										e.copyContent(w)
									}) : m.attr("href", w)
								}
								var v = $("#hostInfoDetail").off("click.hostDetail");
								c.isOpenHostInfo && v.on("click.hostDetail", function() {
									e.jumpToHostUrl(!0)
								}), $("#awardCusBtnInfo").hdToggle("attention", 1 != c.attention), e.wxConfig.setWxShareUrlArg(["fromFav", n.awardCode]), e.logDog(1000056), e.logDog(1000045, 1), $("#awardDeailBg").show(), setTimeout(function() {
									$("#awardDeailBg").hide()
								}, 800)
							}
							var _ = e.watch.bind(["award", "game. $cAward", c], ["type", "game.$cAward.$type", c.$type]),
								y = g_config.isPaymentGame;
							_("{award}.cbt", function(e) {
								var a = c.awardtype;
								_manage && $$(function() {
									a = parent.game.$cAward.awardtype
								});
								var i = g_config.createTime > 15561576e5 && -1 == $.inArray(a, [4, 9]) ? 16 : 10;
								(o.find(".awardCodeTime .codeBgTime")[0] || o.find(".awardCodeTime").append(" : <span class='codeBgTime'></span> - "), "string" != typeof e && (e = e.toString()), o.find(".awardCodeTime .codeBgTime").text(e.substring(0, i).replace(/-/g, ".")), t.afterWxCard) && (o.find(".itemList .beginTime")[0] || o.find(".itemList.dateLine.codeTimeFixedRange .box").html("").append("<span class='beginTime'></span>至"), s.find(".itemList .beginTime").html(e.substring(0, i)))
							}), _("{award}.cet", function(e) {
								var a = c.awardtype;
								_manage && $$(function() {
									a = parent.game.$cAward.awardtype
								});
								var i = g_config.createTime > 15561576e5 && -1 == $.inArray(a, [4, 9]) ? 16 : 10;
								(o.find(".awardCodeTime .codeEndTime")[0] || o.find(".awardCodeTime").append("<span class='codeEndTime'></span>"), "string" != typeof e && (e = e.toString()), o.find(".awardCodeTime .codeEndTime").text(e.substring(0, i).replace(/-/g, ".")), t.afterWxCard) && (o.find(".itemList .endTime")[0] || o.find(".itemList.dateLine.codeTimeFixedRange .box").append("<span class='endTime'></span>"), s.find(".itemList .endTime").html(e.substring(0, i)))
							}), e.watch("game.$cAward.name", n.awardName, function(e) {
								o.find(".awardName").text(e)
							}), _("{award}.stl", function(e) {
								o.find(".awardSubTitle").text(e)
							}), _("{type}.showsitebox?{award}.opti:{type}.opti", function(e) {
								o.add("#awardCodeLayer").find(".codeOptInfo").text(e)
							}), _("{type}.deadline", function(e) {
								if(c && c.genewxcard && "DATE_TYPE_FIX_TERM" == c.t_type && !c.depositTime && !c.depositTime && !_manage) {
									var t = (a = c.cfbt, i = c.cft, "领取后" + (0 == a ? "当" : a) + "天生效，有效天数" + i + "天");
									return o.find(".awardCodeTime").html("<em>" + t + " </em>"), void o.find(".itemList.dateLine.codeTimeFixedRange .box").text(t)
								}
								var a, i;
								e = y ? "兑换期限" : e, o.find(".awardCodeTime em").text(e)
							}), _("{type}.collect", function(t) {
								t = y ? "收藏兑换券" : t, $("#awardCollectionBtn").html('<span class="icon-shoucang"></span>' + e.encodeHtml(t))
							}), _("{type}.codename", function(e) {
								e = y ? "兑换码" : e, $("#codeName").text(e)
							}), _("{award}.btn", function(e) {
								o.find(".awardCusBtn .text").text(e)
							}), _("{award}.awardtype", function(e) {
								6 == e || 7 == e || 8 == e ? ($(".codeDetailInfoBox").find(".codeOptInfo_Gift").canShow(), $(".codeDetailInfoBox").find(".codeOptInfo").mustHide(), s.find(".addressLine").mustHide()) : ($(".codeDetailInfoBox").find(".codeOptInfo_Gift").mustHide(), $(".codeDetailInfoBox").find(".codeOptInfo").canShow(), s.find(".addressLine").canShow())
							}), _("{type}.btn", function(e) {
								e = y ? "立即兑换" : e, o.find("#bottomCusBtnInfo .text").text(e)
							}), _("{award}.genewxcard", function(e) {
								e && (n.depositTime || (n.depositTime = c.depositTime), c.depositTime && o.find("#bottomCusBtnInfo .text").text("打开微信卡券"))
							}), _("{type}.sitetype == 'url' && !{award}.$cashsite_url", function(e) {
								o.find("#bottomCusBtnBox #bottomCusBtnInfo,.codeOptInfo").hdToggle("emptyUrl", !e)
							}), _("{award}.$opqrc", function(e) {
								void 0 === e || e ? $("#awardDetailBox .codeImg ").show() : $("#awardDetailBox .codeImg,#awardDetailBox .codeDetailImgBox").hide()
							}), _("{award}.addressType == 0", function(e) {
								$("#awardDetailBox #ticketDetailBox .addressLine").toggleClass("addGuideMap", e)
							}), t.afterWxCard ? (_("{type}.details", function(e) {
								e = y ? "兑换券详情" : e, s.find(".awardCusText .text,.ticketitle .text").html(e)
							}), _("{type}.sitetype == 'text'", function(e) {
								o.find("#useStoreBox").hdToggle("address", e), s.find(".addressLine").toggleClass("addressHide", !e)
							}), _("{type}.site", function(e) {
								e = y ? "兑换地址" : e, s.find(".itemList .titleAdress").text(e)
							}), _("{type}.term", function(e) {
								s.find(".itemList .timelimit").parents(".itemList").toggle(e)
							}), _("{type}.showcopy", function(e) {
								$(".codeDetailInfoBox .copy").toggle(e)
							}), _("{type}.showsitebox?{award}.opti:{type}.opti", function(e) {
								e && (e = e.replace(/点击下方/, "点击上方")), o.find(".codeOptInfo").text(e), o.find(".codeOptInfo_Gift").text(e)
							}), _("{award}.$cashsite_text", function(e) {
								(console.log(e), _manage && y) && (e = 0 == parent.game._setting.addressCategory ? parent.game._setting.payData.site : parent.game._setting.businessInfo.site);
								s.find(".itemList .address").toggleClass("fintColor", "请填写您的兑奖地址或者门店地址" == e), s.find(".itemList .address").text(e)
							}), _("{type}.notice", function(e) {
								e = y ? "兑换须知" : e, s.find(".itemList .titleNotice").text(e)
							}), _("{award}.servicepho", function(e) {
								_manage ? o.find(".servicePhone .text").html("客服电话" + (e ? "" : "<span>（未开启）</span>")) : (o.find(".servicePhone").toggle(!!e), o.find(".servicePhone").parent("a").attr("href", "tel:" + e)), o.find(".servicePhone .phoneText").text(e)
							}), _("{award}.isOpenHostInfo", function(e) {
								_manage ? o.find(".jumptoHostInfo .text").html((g_config.isYKY ? "主办方" : "主办单位") + "介绍" + (e ? "" : "（未开启）")) : o.find(".jumptoHostInfo").toggle(!!e)
							}), _("{award}.tlmt", function(t) {
								s.find(".itemList .timelimit").text(e.changeTimeLimit(t))
							}), _("{award}.cashinfo", function(t) {
								null == t || "" == t ? _manage ? t = "<span style='color: #999;'>不填写则不显示</span>" : s.find(".noticeLine").hide() : (t = e.encodeHtml(t), s.find(".noticeLine").show()), s.find(".itemList .notice>pre").html(t)
							}), _("{award}.storeType", function(e) {
								e && 1 != e ? (o.find("#useStoreBox").canShow("storeType"), s.find(".addressLine").mustHide()) : (o.find("#useStoreBox").mustHide("storeType"), s.find(".addressLine").canShow())
							}), _("{award}.$$useStoreList", function(t) {
								(_manage || t && !(t.length <= 0)) && (_manage || g_config.test ? i(t) : wx.ready(function() {
									wx.getLocation({
										type: "gcj02",
										success: function(e) {
											var a = e.latitude,
												n = e.longitude;
											i(t, a, n)
										},
										fail: function(a) {
											e.statusMsg("当前微信版本不支持定位或没开启定位服务，请联系活动主办单位", ""), i(t)
										},
										cancel: function() {
											e.statusMsg("用户拒绝了授权地理位置信息", ""), i(t)
										}
									})
								}))
							})) : _("{award}.txn", function(e) {
								o.find(".awardCusText .text").text(e)
							});
							var x = $("#seeFsnDetail").hide();
							$("#awardCusBtnInfo").nextAll(".hold").height("3.15rem"), x.off(".fsnBtn").on("click.fsnBtn", function() {
								e.fission.showFissionDetail(n)
							});
							var I = Fai.checkBit(n.flag, 128);
							if(9 == c.awardtype) _manage || (o.hide(), $.ajax({
								type: "post",
								url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=getJzCouponAwardUrl",
								data: {
									gameId: g_config.gameId,
									openId: g_config.openId,
									code: o.find(".code").attr("code")
								},
								success: function(t) {
									var a = $.parseJSON(t);
									if(a.success) {
										var i = a.url ? a.url : a.data.url;
										_fromCardBag ? e.copyContent(i) : window.location.href = i
									} else {
										var n = {
											bodyMsg: "游戏未发布" == a.msg ? "活动尚未发布<br>无法查看奖品详情" : a.msg,
											primaryBtnFn: function() {
												hg.fire("scrollEvent", !0)
											}
										};
										e.showMsgToast2(n)
									}
								}
							}));
							else if(_manage || !I || n.fissileOriginCode) o.show();
							else {
								var b = $.parseJSON(n.prop);
								$(this).hasClass("seeCurAwaFsn") || -1 != [1, 3, 4, 5].indexOf(n.codeStatus) || b.fissileFinish || g_config.isFromFav ? (g_config.isFromFav = !1, o.show(), x.toggle(-1 == [1, 3, 4, 5].indexOf(n.codeStatus)), $("#awardCusBtnInfo").nextAll(".hold").height("5.4rem")) : e.fission.showFissionDetail(n)
							}
						}, e.showWxCodePage = function(a, i) {
							if(a) {
								var n = new Array;
								n.push("gameId=", t.gameId), n.push("&openId=", t.openId), g_config.isDoubleGame && n.push("&openIdB=", e.otherOpenId), e.ajaxLoad.show(), $.ajax({
									type: "post",
									url: t.awardUrl,
									data: n.join(""),
									error: function() {
										e.ajaxLoad.hide()
									},
									success: function(t) {
										e.ajaxLoad.hide();
										var i = $.parseJSON(t);
										if(i.success)
											for(var n = i.list, o = n.length, s = 0; s < o; s++)
												if(n[s].code == a) {
													e.openAwardDetail(n[s]);
													break
												}
									}
								})
							}
						}, e.getScrollWidth = function() {
							var e = $('<div class="outerDiv"></div>').prependTo($("body")),
								t = $('<div class="innerDiv"></div>').appendTo(e),
								a = e.width() - t.width();
							return e.remove(), a
						}
					}(), e.shouldRegInfo = function(t, a, i) {
						var n = c.slice.call(arguments);
						if($.isArray(t)) {
							for(var o = 0; o < t.length; o++)
								if(n[0] = t[o], e.shouldRegInfo.apply(e, n)) return !0;
							return !1
						}
						var s = !1;
						if(g_config.afterLinkModify) {
							if(1 != g_config.linkInfoType && g_config.linkInfoType == t && (s = !0), !e._isZhuliPlayer || 2 != g_config.linkInfoType && 3 != g_config.linkInfoType || (s = !1), 4 == t && !g_config.linkInfoAll && g_config.award) {
								var r = g_config.award.level;
								g_config.award.awardName;
								900 == r ? (r = g_config.award.awardLevel, s = g_config.comfort.comOplink) : s = g_config.awardList[r - 1].oplink
							}
						} else 3 != gameType && 1 != gameType || !g_config.openAwardLinkNoDraw || (s = !0);
						return !(!s || function() {
							if(g_config.awardUsername || g_config.awardPhone || g_config.awardAddress) return !0;
							var e = g_config.userInfo;
							if(e)
								for(var t in e)
									if(/^aprop.*/.test(t) && null != e[t] && "" !== e[t]) return !0;
							return !1
						}()) && (n.length > 1 && e.aUserInfo.show(a, i), !0)
					}, $("#inform-reason-box .reasonItem").on("touchend", function() {
						var t = $(this).attr("_index");
						e.logDog(1000068, t), $("#inform-reason-box .reasonItem").removeClass("checked"), $(this).addClass("checked"), $("#submit-inform-btn").toggleClass("disable", Number($("#inform-reason-box .reasonItem.checked").attr("_index")) + 1 && !$("#inform-desc-box #informDesc").val());
						var a = $("#inform-desc-box #informDesc").val();
						null != a && "" != a && $("#submit-inform-btn").removeClass("disable")
					}), $("#inform-desc-box #informDesc").on("focus", function() {
						$("#spxdPage").addClass("imp-hide")
					}), $("#inform-desc-box #informDesc").on("load input", function() {
						var e = $("#inform-desc-box #informDesc").val();
						e = $.trim(e), $("#inform-desc-page #informDesc-counter span").text(e.length), e.length > 100 ? $("#inform-desc-page #informDesc-counter").addClass("addWarn") : $("#inform-desc-page #informDesc-counter").removeClass("addWarn"), Number($("#inform-reason-box .reasonItem.checked").attr("_index")) + 1 && $("#submit-inform-btn").removeClass("disable")
					}), $("#submit-inform-btn").on("touchend", function() {
						if(t.hasReport) $("#informResultBox h3").text("你已经投诉过了"), $("#informResultBox").show(), $("#informBox").hide();
						else {
							var a = Number($("#inform-reason-box .reasonItem.checked").attr("_index")) + 1,
								i = $("#inform-desc-box #informDesc").val();
							if(i = $.trim(i), e.tlog("informRea", a), !a) return void e.showMsgToast("请选择投诉原因");
							if(null == i || "" == i) return void e.showMsgToast("描述不能为空");
							if(i.length > 100) return void e.showMsgToast("填写超出限制");
							$.ajax({
								type: "post",
								url: t.informUrl,
								data: {
									informRea: a,
									detail: i
								},
								error: function(t) {
									e.tlog("submit-inform-btn-err", t)
								},
								success: function(a) {
									e.tlog("submit-inform-btn", a), t.hasReport = !0, $("#informResultBox h3").text("投诉成功"), $("#informResultBox").show(), $("#informBox").hide()
								}
							})
						}
						$("#poupInfoBox");
						setTimeout(function() {
							$("#spxdPage").removeClass("imp-hide")
						}, 400)
					}), $("#awardContactInfo .updateBtn").on("click", function() {
						_manage || e.aUserInfo.show()
					}), window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
						window.setTimeout(e, 1e3 / 60)
					}
			}(),
			function() {
				e.sortRuleBox = {
					init: function(t, a, i, n) {
						e.tlog("initRule");
						var o = a || $("#ruleBox > .poupMainInfo"),
							s = i || o.find(".poupLine");
						if(s.length > t.length)
							for(var r = "a".charCodeAt(), c = t.length; c < s.length; c++) t += String.fromCharCode(r + c);
						var d = s.sort(function(e, a) {
							var i = t.indexOf($(e).data("sortkey")),
								n = t.indexOf($(a).data("sortkey"));
							return -1 == i || -1 == n ? 0 : i > n ? 1 : -1
						});
						o.append(d), n || (75 == g_config.style ? $("#ruleBox").append('<div id="informLine" class="noMove"><div id="newInformBtn" ontouchend="HdGame.changePoup(5,\'\',true);hg.fire(\'scrollEvent\',false);" class="noMove">投诉</div></div>') : 69 == g_config.style ? o.append('<div id="informLine" class="noMove"><div id="newInformBtn" ontouchend="HdGame.changePoup(5,\'\',true);$(\'.body\').scrollTop(0);" class="noMove">投诉</div></div>') : -1 !== [106].indexOf(g_config.style) ? $("#activeRuleInfoBox").append('<div id="informLine" class="noMove"><div id="newInformBtn" ontouchend="HdGame.changePoup(5,\'\',true);hg.fire(\'scrollEvent\',false);" class="noMove">投诉</div></div>') : o.append('<div id="informLine" class="noMove"><div id="newInformBtn" ontouchend="HdGame.changePoup(5,\'\',true);" class="noMove">投诉</div></div>'))
					}
				}
			}(), r = {
				show: function(t, a, i) {
					e.lastDisplayStatus || (e.lastDisplayStatus = {
						gameBox: $(".gameBox").is(":visible"),
						home: $(".home").is(":visible")
					}), e.tlog(e.lastDisplayStatus);
					var n = g_config.ajaxUrl.replace("/ajax/", "");
					$("#awardUserInfoBg").data({
						_aUserInfoArg: t,
						_aUserInfoThis: a
					}).show(), !_manage && e.ajaxLoad.hide(), 0 == $("#contactInputIframe").length && setTimeout(function() {
						!_manage && e.ajaxLoad.show();
						var t = $('<iframe id="contactInputIframe" frameborder="0" scrolling="yes" src="' + n + "/contactInfo.jsp?afterLinkModify=" + g_config.afterLinkModify + "&fromCanal=" + fromCanal + "&awardLinkMsg=" + e.encodeUrl(e._awardLinkMsg) + "&isSetFissileInfo=" + i + "&_manage=" + _manage + '" style="height: 100%; width: 100%;"></iframe>');
						$("#awardUserInfoBg").append(t), t.load(function() {
							!$("#contactInputIframe").length && $(".gameBgBox, .home").hide(), !_manage && e.ajaxLoad.hide()
						})
					}, 50), $("#spxdPage").addClass("spxdPageHide"), $("#nameInput").val(g_config.awardUsername), $("#phoneInput").val(g_config.awardPhone), $("#addressInput").text(g_config.awardAddress), t || $("#awardUserInfoBg").removeData("_aUserInfoArg")
				},
				hide: function() {
					e.tlog(e.lastDisplayStatus), e.lastDisplayStatus && (e.lastDisplayStatus.gameBox && $(".gameBgBox").show(), e.lastDisplayStatus.home && $(".home").show(), e.lastDisplayStatus = null);
					var t = $("#awardUserInfoBg");
					t.hide(), $("#spxdPage").removeClass("spxdPageHide");
					var a = t.data("_aUserInfoArg");
					if(a) {
						if(function(e) {
								if("undefined" != typeof gameOver && e.callee === gameOver) return !0;
								if("undefined" != typeof startBtnAjax && e.callee === startBtnAjax) return !0;
								if("undefined" != typeof luckDraw && e.callee === luckDraw) return !0;
								return !1
							}(a)) {
							var i = a[2];
							i && i.info && (i.info = $.parseJSON(i.info), i.info.ausername = g_config.awardUsername, i.info.aphone = g_config.awardPhone, i.info.aadress = g_config.awardAddress, i.info = $.toJSON(i.info))
						}
						r.afterUserInfoHide = !0;
						var n = t.data("_aUserInfoThis");
						a.callee.apply(n, a), setTimeout(function() {
							r.afterUserInfoHide = !1
						}, 0), setTimeout(function() {
							$("#contactInputIframe").remove()
						}, 510)
					}
				},
				refresh: function() {
					var e = $("#contactInputIframe");
					e.length > 0 && e.attr("src", $("#contactInputIframe").attr("src"))
				}
			}, e.aUserInfo = r, e.showLotsWait = function(e, t) {
				var a = $("#lots-wait-Box #lots-wait-hint-num");
				a.text(e), $("#lots-wait-Box").show();
				var i = setInterval(function() {
					e--, a.text(e), e <= 0 && (clearInterval(i), $("#lots-wait-Box").hide(), t())
				}, 1e3)
			},
			function() {
				Math.max($(window).height() / $(window).width(), $(window).width() / $(window).height());
				var t, a, i, n, o, s, r, c = {
						startStatus: !1,
						exposeFlag: !1,
						disable: !1,
						result_disable: !1,
						gift_disable: !1
					},
					d = {
						drawType: !1,
						home: function() {},
						again: function() {},
						giftInit: function(e) {
							e && e()
						}
					},
					g = (r = 0, function(e) {
						if(c.startStatus && (!g_config.$$hasLuckShakePage || 3 == g_config.shakeModel)) {
							var l = (new Date).getTime();
							if(l - r > 100) {
								$("input").blur();
								var g = e.accelerationIncludingGravity;
								r = l, t = g.x, a = g.y, i = g.z, Math.sqrt(t * t + a * a + i * i) / Math.sqrt(n * n + o * o + s * s) > 1.5 && (c.startStatus = !1, d.giftInit(function(e) {
									hg.sound.play("yiy"), setTimeout(function() {
										c.showGift(e)
									}, 1500)
								})), n = t, o = a, s = i
							}
						}
					}),
					f = {};
				c.initArg = function(e) {
					this.disable || $.extend(f, e)
				}, c.init = function(t) {
					if(!this.disable) {
						$.extend(d, t), $.extend(d, f), this.giftBox = $("#resule-gift-box"), this.resuleBox = $(".resuleBox"), this.statusBox = $("#resule-status-box");
						var a = this,
							i = $("#resule-status-lots").width(),
							n = $("#resule-status-lots").height(),
							o = $("#lots-wait-img").width(),
							s = $("#lots-wait-img").height();
						$("#lots-wait-img").css({
							width: i / (6.15 * g_rem) * o,
							height: n / (12.4 * g_rem) * s
						}), e.currentScore >= g_config.scoreSet && "" != g_config.scoreSet ? e.isplaySucess = !0 : e.isplaySucess = !1, $(document).on("touchend", ".resule-status-home , .resule-gift-home, .resule-gift-home2", function() {
							event.preventDefault(), event.stopPropagation(), _manage || (e.logDog(1000015), e.fadIn(a.resuleBox, function() {
								a.giftBox.hide(), a.statusBox.hide(), $(".gameBox,.home,.body").removeClass("overflow-y-hidden"), g_config.showSkillSup && (e.logDog(1000028, 0), $(".bottomSkill").show())
							}), d.home(), switchPage("home"))
						}), $("#resule-status-lotsHand .waitDrawBtn").off("touchend").on("touchend", function() {
							c.startStatus = !1, d.giftInit(function(e) {
								a.showGift(e)
							})
						}), e.watch("game._setting.shakeModel", g_config.shakeModel, function(e, t) {
							if(g_config.$$hasLuckShakePage && _manage) {
								var a = $("#resule-status-lotsBox");
								switch(e) {
									case 0:
										a.find("#lucyClick-wrap").show().siblings().hide();
										break;
									case 1:
										a.find("#drawPrize-wrap").show().siblings().hide(), initDrawPrize(), initDrawEvent(c, d);
										break;
									case 2:
										a.find("#lukyWheel-wrap").show().siblings().hide(), initLuckWheel(c, d), updateAwardImg(parent.game._setting.an, parent.game._flag.f16);
										break;
									case 3:
										a.find("#yaoyiyao-wrap").show().siblings().hide()
								}
							}
						}), hg.assets.onload(function() {
							if(!_manage && g_config.$$hasLuckShakePage) switch(g_config.shakeModel) {
								case 0:
									$("#resule-status-lucyClick").off("touchend").on("touchend", function() {
										openBoxAnimation.isAnimation || (c.startStatus = !1, d.giftInit(function(e) {
											openBoxAnimation.isAnimation = !0, openBoxAnimation(c, e)
										}))
									});
									break;
								case 1:
									guagualeDraw(c, d);
									break;
								case 2:
									initLuckWheel(c, d)
							}
						}), $(".resule-gift-draw").off("touchend").on("touchend", function() {
							if(!_manage) {
								if(e.ajaxLoad.show(), window.addEventListener("devicemotion", g, !1), c.exposeFlag && e.logDog(1000025, 29), c.exposeFlag && e.logDog(1000026, 29), !g_config.openAccessKeyOnce) return g_config.isOpenCreditJoin ? e.checkMemberCredit(t) : 2 == g_config.internalJoinLimit ? e.checkMallJoinLimit(t) : void e.refreshDrawTimes().then(function(i) {
									if(!i) {
										if(a.resuleArg.isLimitDrawTotal && a.resuleArg.totalCount <= 1) return e.ajaxLoad.hide(), void e.statusMsg(6);
										if(a.resuleArg.count <= 1) return e.ajaxLoad.hide(), e.statusMsg(4), void(g_config.showHelpGuide || $(this).data("awarded") || d.home())
									}
									t(), setTimeout(function() {
										a.resuleArg.totalCount > 0 && a.resuleArg.totalCount--, a.resuleArg.count > 0 && a.resuleArg.count--
									}, 1e3)
								});
								e.checkAccessKeyLuckyDrawTotal().then(t, e.ajaxLoad.hide)
							}

							function t() {
								e.ajaxLoad.hide(), $("#resule-status-scrollWrap,#resule-gift-box").hide(), $("#resule-status-lotsBox,#resule-status-box").show(), clearTimeout(e.lotTimer), $("#resule-status-lotsHand .shakeHand,#resule-status-lotsHand .shakeTxt").show(), $("#resule-status-lotsHand .waitDrawBtn").hide(), e.lotTimer = setTimeout(function() {
									window.drawStatusLuckDraw && ($("#resule-status-lotsHand .shakeHand,#resule-status-lotsHand .shakeTxt").hide(), $("#resule-status-lotsHand .waitDrawBtn").show())
								}, 5e3), c.exposeFlag = !1, c.startStatus = !0
							}
						}), 0 !== d.drawType && 2 !== d.drawType || 61 == g_config.style || 27 == g_config.style || 47 == g_config.style || 98 == g_config.style ? 1 !== d.drawType && 61 != g_config.style && 27 != g_config.style && 47 != g_config.style && 98 != g_config.style || ($(".resule-status-seeRank,.resule-gift-seeRank").on("touchstart", function() {
							event.preventDefault(), event.stopPropagation(), _manage || (g_config.createTime > 1520265601e3 && 1 == gameType ? window.showRule() : window.showRank())
						}), $(".resule-status-again").on("touchstart", function() {
							if(event.preventDefault(), event.stopPropagation(), !_manage) {
								if(e.ajaxLoad.show(), !g_config.openAccessKeyOnce) return g_config.isOpenCreditJoin ? e.checkMemberCredit(t) : 2 == g_config.internalJoinLimit ? e.checkMallJoinLimit(t) : (e.logDog(1000016), 3 == gameType && g_config.isCheckPlayTimes && PlayInfo.getTotalRemainTimes() <= 0 ? (e.ajaxLoad.hide(), void e.statusMsg(8)) : 3 == gameType && g_config.isCheckPlayTimes && PlayInfo.getTodayRemainTimes() <= 0 ? (e.ajaxLoad.hide(), void e.statusMsg(7)) : void t());
								e.checkAccessKeyLuckyDrawTotal().then(t, e.ajaxLoad.hide)
							}

							function t() {
								e.ajaxLoad.hide(), $(".gameBox,.home,.body").removeClass("overflow-y-hidden"), g_config.isDoubleGame || e.fadIn(a.resuleBox, function() {
									a.giftBox.hide(), a.statusBox.hide()
								}), d.again()
							}
						}), hg.sound.load(_resRoot + "/image/yaoyiyao.mp3", "yiy"), window.addEventListener("devicemotion", g, !1), (m_debug || g_config.test) && $("#resule-status-lotsHand").on("touchstart", function() {
							c.startStatus = !1, d.giftInit(function(e) {
								a.showGift(e)
							})
						}), this.giftEvent = function() {
							if(!_manage && (e.ajaxLoad.show(), !g_config.afterLinkModify || !e.shouldRegInfo(3, arguments, this)))
								if(g_config.openAccessKeyOnce) e.checkAccessKeyLuckyDrawTotal().then(t, e.ajaxLoad.hide);
								else {
									if(g_config.isOpenCreditJoin) return e.checkMemberCredit(t);
									if(2 == g_config.internalJoinLimit) return e.checkMallJoinLimit(t);
									if(c.exposeFlag && e.logDog(1000014), 47 != g_config.style && 98 != g_config.style) return e.refreshDrawTimes().then(function(i) {
										if(!i) {
											if(a.resuleArg.isLimitDrawTotal && 0 === a.resuleArg.totalCount) return e.ajaxLoad.hide(), void e.statusMsg(6);
											if(0 === a.resuleArg.count) return e.ajaxLoad.hide(), void e.statusMsg(4)
										}
										t()
									});
									hg.fireWith("beforeStartGiftEvent") ? t() : e.ajaxLoad.hide()
								}
							function t() {
								e.ajaxLoad.hide(), $("#resule-status-scrollWrap").hide(), $("#resule-status-lotsBox").show(), $("#resule-status-lotsHand .shakeHand,#resule-status-lotsHand .shakeTxt").show(), $("#resule-status-lotsHand .waitDrawBtn").hide(), e.resulePoup.statusBox.show(), e.resulePoup.resuleBox.show(), c.startStatus = !0, e.lotTimer = setTimeout(function() {
									window.drawStatusLuckDraw && ($("#resule-status-lotsHand .shakeHand,#resule-status-lotsHand .shakeTxt").hide(), $("#resule-status-lotsHand .waitDrawBtn").show())
								}, 5e3), c.exposeFlag = !1
							}
						}, $(".resule-status-gift").on("touchstart", this.giftEvent), this.regEvent = function() {
							if(!_manage && !e.shouldRegInfo(3, arguments, this)) {
								e.logDog(1000032), e.ajaxLoad.show();
								var t = d.regUrl;
								g_config.isDoubleGame && (t += "&openIdB=" + e.otherOpenId), $.ajax({
									type: "post",
									url: t,
									error: function() {
										e.ajaxLoad.hide()
									},
									success: function(t) {
										var a;
										(e.ajaxLoad.hide(), (a = $.parseJSON(t)).isOutofTestNum) ? e.statusMsg("活动尚未发布", "最多测试人数为100人！"): a.isOutofRegNum ? g_config.createTime > 1520265601e3 ? (console.log("参与"), e.statusMsg("本活动参与人数已达到最大限制如需继续参与，请与主办方联系。")) : (console.log("报名"), e.statusMsg("本活动报名人数已达到最大限制如需继续参与，请与主办方联系。")) : (g_config.isReg = !0, (a = $.parseJSON(t)).success && ($(".resule-foot-one .resule-status-again").html("继续刷记录"), $(".resule-foot-one .resule-status-reg").hide(), $(".resule-foot-one .resule-status-again").show(), $("#resule-status-count").mustHide(), $("#resule-sucReg").show()))
									}
								})
							}
						}, $(".resule-status-reg").on("touchstart", this.regEvent), this.show = this.showResult) : ($(".resule-gift-home").css({
							width: "10rem",
							height: "1.75rem",
							"line-height": "1.75rem"
						}), $(".resule-gift-home2").css({
							width: "4.75rem",
							height: "1.75rem",
							"line-height": "1.75rem"
						}), this.giftBox.find(".resule-gift-seeRank").remove(), this.show = this.showGift)
					}
				}, c.showResult = function(t) {
					if(!this.disable && !this.result_disable) {
						var a = $.extend({
							isSuc: !1,
							gameScore: 0,
							minScore: 0,
							bestScore: 10,
							rank: 10,
							count: 3,
							beat: 99,
							notreal: !1,
							gameType: 0,
							gameCostTime: 0,
							bestCostTime: 0
						}, t);
						e.tlog("resuleDef---", a.gameScore), !_manage && g_config.showSkillSup && (a.isSuc ? (e.logDog(1000200, 5), g_config.localPoupPage = 5) : (e.logDog(1000200, 6), g_config.localPoupPage = 6)), this.resuleArg = a, !a.notreal && (e.currentRank = a.rank), !a.notreal && (e.currentScore = a.bestScore), e.wxConfig.setWxShareByStatus(), $("#resule-status-scrollWrap").show(), $("#resule-status-lotsBox,#resule-gift-box").hide(), $(".resule-one-button").hide(), $("#resule-status-playinfo").mustHide(), $(".resule-status-userImg").toggleClass("failCup", !t.isSuc && 3 != a.gameType), $("#resule-status-body .youraward").toggleClass("youraward-fail", !t.isSuc && 3 != a.gameType), $(".resule-foot-box").css("margin-top", "-2.6rem"), this.statusBox.show(), e.fadOut(this.resuleBox);
						var i = $(".resuleArg");
						if(a && void 0 !== a.gameType)
							if(4 == a.gameType || 0 == a.gameType) $("#drawMenuBtnBox").toggleClass("hide", !0);
							else {
								var n = _manage ? g_config._preview ? !g_config.showMenu : 1 == parent.game._setting.ms : !g_config.showMenu;
								$("#drawMenuBtnBox").toggleClass("hide", n)
							}
						if(a.notreal || g_config.sortType != a.gameScore >= g_config.drawLimitDef || (void 0 === e.oss_aof && (e.oss_aof = 0), e.oss_aof++, e.oss_aof >= 2 && (e.logDog(1000033, g_config.failSrcId), e.oss_aof = 0)), $("#resule-status-scrollWrap").css("height", $(window).height() - 1.2 * g_rem), !_manage && g_config.showSkillSup && (e.hdSkillLog(!0, 1000069), e.logDog(1000028, 1), "number" == typeof g_config.isAOpenId && e.logDog(1000115, 1 + g_config.isAOpenId)), 1 != a.gameType && 3 != a.gameType || g_config.showMenu && e.logDog(1000036), _manage || ($(".gameBox,.home,.body").addClass("overflow-y-hidden"), $(".bottomSkill").is(":visible") && $(".bottomSkill").hide()), 42 != g_config.style && 56 != g_config.style && 85 != g_config.style && 80 != g_config.style || g_config.createTime > 15421608e5 && ($(".youraward.costTime").show(), $("#bestCostTime").show()), 3 == a.gameType) $("#resule-foot-box").css("padding-bottom", "1rem"), "fail" == a.gameScore ? ($("#resule-status-bird").show(), $("#resule-status-ribbon").removeClass("resule-status-ribbon").addClass("resule-status-faiRibbon"), $("#resule-status-bird").removeClass("resule-status-birdfly").addClass("resule-status-birdfly"), $("#resule-status-box .resule-bgLight").hide(), $(".resule-status-userImg").css("border-color", "#B5B5B5"), $("#resule-status-body .beat-Percent").hide(), 0 == a.rank || $("#resule-status-body .result-scoreUnit").show(), i.eq(0).text("无"), 0 == i.eq(2).text().length ? (i.eq(2).text(a.bestScore), i.eq(3).text(a.rank > 0 ? a.rank : "无")) : "无" == i.eq(0).text() ? $("#resule-status-body .youraward .result-scoreUnit").hide() : $("#resule-status-body .result-scoreUnit").show(), e.isplaySucess = !1) : ($("#resule-status-bird").hide(), $(".resule-status-userImg").css("border-color", "#70D572"), $("#resule-status-ribbon").removeClass("resule-status-faiRegRibbon").removeClass("resule-status-faiRibbon").addClass("resule-status-ribbon"), $("#resule-status-box .resule-bgLight").show(), $("#resule-status-body .beat-Percent span").text(a.beat), $("#resule-status-body .beat-Percent").show(), i.eq(0).text(a.gameScore), i.eq(1).text(a.gameCostTime), i.eq(3).text(a.bestScore), i.eq(4).text(a.bestCostTime), i.eq(5).text(a.rank), $("#resule-status-body .result-scoreUnit").show(), e.isplaySucess = !0), $(".resule-status-minscore").hide(), $("#resule-status-count").mustHide(), $(".resule-foot-one .resule-status-gift").hide(), $(".resule-foot-one .resule-status-reg").hide(), $(".resule-foot-one .resule-status-again").show(), $(".resule-foot-one .resule-status-again").html("再玩一次"), $(".resule-foot-two .resule-status-again").hide(), $(".resule-foot-two .resule-status-home").show(), 3 == gameType && g_config.isCheckPlayTimes ? $("#resule-status-playinfo").canShow() : $("#rank_showRule").show();
						else if("fail" === a.gameScore ? ($(".resuleArg-fail").text(a.minScore), $("#resule-status-body").hide(), $("#resule-status-other").show()) : ($("#resule-status-body").show(), $("#resule-status-other").hide()), a.isSuc) {
							e.isplaySucess = !0, $("#resule-status-bird").hide(), 18 != g_config.style && 28 != g_config.style && 100 != g_config.style || ($(".youraward").show(), $(".youraward.costTime").hide(), $(".youraward.special").hide(), $("#bestArg").show(), $("#bestRank").show(), $(".resule-status-minscore").css("margin", 0)), $("#resule-status-ribbon").removeClass("resule-status-faiRibbon").removeClass("resule-status-faiRegRibbon").addClass("resule-status-ribbon"), $(".resule-status-userImg").css("border-color", "#70D572"), $(".resule-status-minscore").hide(), $("#resule-status-count").canShow(), 0 == a.gameType ? ($(".resule-foot-one .resule-status-gift").show(), $(".resule-foot-one .resule-status-again").hide(), $(".resule-foot-two .resule-status-again").show(), $(".resule-foot-two .resule-status-home").hide(), e.logDog(1000027)) : 4 == a.gameType ? ($(".resule-foot-one .resule-status-send").show(), $(".resule-foot-two .resule-status-again").hide(), $(".resule-foot-two .resule-status-home").show(), $("#resule-status-count").mustHide()) : 1 == a.gameType && ($("#resule-status-count").mustHide(), $("#resule-foot-box").css("margin-top", "0.6rem"), $(".resule-foot-two .resule-status-again").hide(), $(".resule-foot-two .resule-status-home").show(), e.logDog(1000035), g_config.createTime > 1520265601e3 ? ($(".resule-foot-one .resule-status-again").html("刷记录"), $(".resule-foot-one .resule-status-reg").hide(), $(".resule-foot-one .resule-status-again").show(), $("#resule-sucReg").show()) : g_config.isReg ? ($(".resule-foot-one .resule-status-again").html("继续刷记录"), $(".resule-foot-one .resule-status-reg").hide(), $(".resule-foot-one .resule-status-again").show(), $("#resule-sucReg").show()) : $(".resule-foot-one .resule-status-reg").show()), c.exposeFlag = !0, $("#resule-status-box .resule-bgLight").show();
							for(var o = 0, s = (r = [a.gameScore, a.gameCostTime, a.minScore, a.bestScore, a.bestCostTime, a.rank, a.totalCount, a.count, a.count]).length; o < s; o++) i.eq(o).text(r[o]);
							$("#resule-status-body .dayDrawCount").text(_manage ? parent.game._setting.dtl : a.count), $("#resule-status-body #totalDrawCount").text(_manage ? parent.game._setting.drawTotal : a.totalCount), $("#msxbSucTip").text("恭喜你获得密室小能手称号！"), $("#resule-status-body .beat-Percent span").text(a.beat), $("#resule-status-body .beat-Percent").show()
						} else {
							$("#resule-status-bird").show(), 18 != g_config.style && 28 != g_config.style && 100 != g_config.style || ($(".youraward").hide(), $(".youraward.special").show(), $("#bestArg").hide(), $("#bestRank").hide(), $(".resule-status-minscore").css("margin", "10px 0 10px")), 1 != a.gameType || g_config.createTime < 1520265601e3 ? $("#resule-status-ribbon").removeClass("resule-status-ribbon").addClass("resule-status-faiRibbon") : $("#resule-status-ribbon").removeClass("resule-status-ribbon").addClass("resule-status-faiRegRibbon"), $(".resule-foot-one .resule-status-again").html("再玩一次"), $(".resule-status-userImg").css("border-color", "#B5B5B5"), $(".resule-status-minscore").show(), $("#resule-status-count").mustHide(), $("#resule-status-box .resule-bgLight").hide(), $(".resule-foot-one .resule-status-gift").hide(), $(".resule-foot-one .resule-status-reg").hide(), $(".resule-foot-one .resule-status-again").show(), $(".resule-foot-two .resule-status-again").hide(), $(".resule-foot-two .resule-status-home").show(), $("#resule-status-bird").removeClass("resule-status-birdfly").addClass("resule-status-birdfly");
							var r;
							for(o = 0, s = (r = [a.gameScore, a.gameCostTime, a.minScore, a.bestScore, a.bestCostTime, a.rank, a.count]).length; o < s; o++) i.eq(o).text(r[o]);
							$("#resule-status-body .beat-Percent").hide(), e.isplaySucess = !1
						}
						e.optReSize(), hg.fire("showResult", a, i)
					}
				}, c.showGift = function(t) {
					if(!this.disable && !this.gift_disable) {
						var a = $.extend({}, {
								isSuc: !1,
								giftName: "",
								giftStyle: "",
								giftCode: 0,
								giftImage: "",
								awardImageW: "9rem",
								awardImageH: "9rem",
								awardTypeNum: 0,
								awardIndex: 1,
								genewxcard: !1
							}, t),
							i = 0 == gameType && g_config.isShowNoAwardTips && a.isOutAwardNum;
						if(!_manage && g_config.showSkillSup && (a.isSuc ? (e.logDog(1000200, 7), g_config.localPoupPage = 7) : (e.logDog(1000200, 8), g_config.localPoupPage = 8)), this.statusBox && !i && e.fadIn(this.statusBox), i) e.showMsg("来得太晚啦<br>奖品已经派完，下次请早点哦", 0, "返回首页", function() {
							51 == g_config.style || 62 == g_config.style ? window.location.reload() : home("luckDraw")
						}, !0);
						else {
							if($("#resule-gift-sucImg").data("openCode", a.giftCode), e.fadOut(this.resuleBox), e.fadOut(this.giftBox), (0 == gameType || 4 == gameType || 5 == gameType) && !_manage) {
								var n = $(".cannotGetThePriceBox").height(),
									o = $(".resuleBox").height() - $("#resule-gift-box").find(".attentionBox").height() - 2.5 * g_rem;
								if(n > (o = 75 == g_config.style ? o + 2.5 * g_rem : o)) {
									$(".cannotGetThePriceBox").height(o);
									var s = 16 * g_rem - parseFloat($("#faiImgBox img").css("left")),
										r = o - parseFloat($("#faiImgBox img").css("top")),
										c = $("#faiImgBox img").width() / $("#faiImgBox img").height();
									$("#faiImgBox img").height() > r && (r * c > s ? $("#faiImgBox img").height(s / c).width(s) : $("#faiImgBox img").height(r).width(r * c))
								}
							}
							$(".TellToOther").toggle(a.isSuc), $(".backToListen,.tellToTA").css({
								bottom: "-2.5rem",
								"line-height": "1.9rem"
							}), $(".menuAgain").length > 0 ? $("#resule-gift-scrollWrap").css("height", $(window).height() - $(".menuAgain").outerHeight(!0) - 6.7 * g_rem) : $("#resule-gift-scrollWrap").css("height", $(window).height() - $(".menuBtnBox").outerHeight(!0) - 6.7 * g_rem);
							var d = $(".gifArg"),
								g = $(".seeAwardDetail");
							!_manage && g_config.showSkillSup && (e.hdSkillLog(!0, 1000069), e.logDog(1000028, 1), "number" == typeof g_config.isAOpenId && e.logDog(1000115, 1 + g_config.isAOpenId)), g_config.showMenu && e.logDog(1000036);
							var f = $("#resule-gift-box .attentionBox"),
								u = f.find(".hdskillInfo").outerHeight(!0) + f.find(".holdBox").outerHeight(!0) + .5 * g_rem;
							if(isOldAwardPage ? $("#resule-gift-scrollWrap").css("height", $(window).height() - 1.2 * f.height() - 6.8 * g_rem) : 75 == g_config.style ? $("#resule-gift-scrollWrap").css("height", $(window).height() - 1.2 * f.height() - 1.2 * g_rem) : $("#resule-gift-scrollWrap").css("height", $(window).height() - u - 8.2 * g_rem), a.isSuc) {
								$("#resule-gift-box").css("height", "auto"), $("#faiImgBox").hide(), !isOldAwardPage && $(".attentionBox .tellToOthers,#resule-gift-box .attentionBox .menuBtnBox").css({
									visibility: "hidden"
								}), $("#Award_Round_Dot").css("display", "inline-block"), $("#resule-gift-scrollWrap").show(), l(g_config.flagB, 8388608) && $(".attentionBox").show().html("返回首页").addClass("attentionBox_mobi2");
								var h = function(e) {
									var t = $("#resule-gift-sucImg").height();
									e && (t = $("#luckContainer .imgContainer").height());
									var a = u + .5 * g_rem,
										i = $(window).height() - 18.45 * g_rem - a;
									25 != g_config.style && 27 != g_config.style && (2.5, i += 3.1 * g_rem), 75 != g_config.style && (t > i ? ($("#resule-gift-buttonMenu").hide(), $("#resule-gift-buttonMenu-bottom").show().css({
										bottom: a + 1.4 * g_rem,
										height: "4.5rem"
									}), $("#resule-gift-scrollWrap").css("height", $(window).height() - u - 8.2 * g_rem)) : ($("#resule-gift-buttonMenu").show(), $("#resule-gift-buttonMenu-bottom").hide(), $("#resule-gift-scrollWrap").css("height", $(window).height() - u - 2.2 * g_rem)))
								};
								isOldAwardPage || (_manage ? $("#resule-gift-sucImg").off("hd-resizable-resize.setAwardPageCSS").on("hd-resizable-resize.setAwardPageCSS", h) : setTimeout(h, 0)), $("#resule-gift-sucImg").trigger("hd-resizable-resize"), !e.currentAwardLevel && (e.currentAwardLevel = []), e.wxConfig.setCurrentAward(e.currentAwardLevel.join("") + a.awardIndex), 58 != g_config.style && 59 != g_config.style && 60 != g_config.style && 61 != g_config.style && 62 != g_config.style && 63 != g_config.style && 70 != g_config.style && 79 != g_config.style && e.wxConfig.setWxShareByStatus(), this.hasGift = !0, d.eq(0).text(a.giftStyle), d.eq(1).text(a.giftName), 9 == a.awardTypeNum ? g.addClass("jzCouponBtn").attr("code", a.giftCode).text("点击领取") : g.removeClass("jzCouponBtn").text("查看奖品详情"), $("#resule-gift-sucImg").css({
									width: a.awardImageW,
									height: a.awardImageH
								});
								var p = $("#resule-gift-sucImg").parent().height() / 2 - parseRemToPx(g_config.clickTips.pointH) / 2;
								$("#lightPoint").css("top", p), p += .4 * g_rem, $("#click-view").css("top", p), 900 == a.awardIndex ? $("#resule-gift-sucImg").attr("src", e.modifyVersion(_manage ? a.giftImage : g_config.comfort.comimg)) : (g_config.award || (g_config.award = g_config.awardList[a.awardIndex - 1], g_config.wxAward = g_config.awardList[a.awardIndex - 1]), $("#resule-gift-sucImg").attr("src", e.modifyVersion(_manage ? a.giftImage : g_config.awardList[a.awardIndex - 1].aimg))), e.logDog(1000003, 0), e.logObjDog(1000092, 3, g_config.gameId), _manage || ($(".gameBox,.home,.body").addClass("overflow-y-hidden"), $(".bottomSkill").is(":visible") && $(".bottomSkill").hide())
							} else _preview && $("#theGetPricePic,#theGetPricePicTwo,#theGetPricePicThree").attr("src", e.modifyVersion($("#theGetPricePic,#theGetPricePicTwo,#theGetPricePicThree").attr("src"))), 75 != g_config.style && $(".attentionBox .menuBtnBox.faiMenuBtn ").css("margin-bottom", "0.8rem"), $("#resule-gift-box").css("height", $(window).height() - $("#resule-gift-box .attentionBox").height()), 75 != g_config.style && ($("#resule-gift-box .cannotGetThePriceDecs").css("margin-top", $(".cannotGetThePriceBox").height() + 1.6 * g_rem + $("#faiImgBox .theUnPriceImg").position().top), _manage || _preview || $("#resule-gift-box .cannotGetThePriceDecs").css("margin-top", $("#faiImgBox .theUnPriceImg").position().top + 1.6 * g_rem + $("#faiImgBox .theUnPriceImg").height())), $("#resule-gift-scrollWrap,#resule-status-lotsBox").hide(), isOldAwardPage || ($(".attentionBox .tellToOthers,#resule-gift-box .attentionBox .menuBtnBox").css({
								visibility: "visible"
							}), $("#resule-gift-buttonMenu-bottom").hide()), !_manage && isLimitDraw && drawTotalLimit - totalCount == 0 && $("#resule-gift-box .resule-gift-home.menuAgain").text("返回首页"), $("#faiImgBox").show(), l(g_config.flagB, 8388608) && ($("#xydzpAgainImg").attr("src", _resRoot + "/image/xydzp/backToHomeImg.png"), $("#xydzpCloseImg").attr("src", _resRoot + "/image/xydzp/backToHomeImg.png"), $(".attentionBox").hide());
							$(".menuAgain,.menuBack,.backListen,.repeatDraw,.TellToOther").css({
								bottom: $("#resule-gift-box").find(".attentionBox").height() + .3 * g_rem,
								"line-height": "1.75rem"
							}), $(".menuAgain,#resule-gift-box .menuBack,.repeatDraw,.backListen").css({
								bottom: "auto"
							}), g_config.haveAward && ("findAct" == _fromCbGameOrigin && e.logDog(1000314, 103), $("#myAwardBtn").show())
						}
					}
				}, e.resulePoup = c
			}(), e.Img = {
				MODE_SCALE_FILL: 1,
				MODE_SCALE_WIDTH: 2,
				MODE_SCALE_HEIGHT: 3,
				MODE_SCALE_DEFLATE_WIDTH: 4,
				MODE_SCALE_DEFLATE_HEIGHT: 5,
				MODE_SCALE_DEFLATE_FILL: 6,
				MODE_SCALE_DEFLATE_MAX: 7
			}, e.Img.isNull = function(e) {
				return void 0 === e || null == e
			}, e.Img.optimize = function(t, a, i) {
				var n = new Image;
				n.src = t.src;
				var o = n.width,
					s = n.height;
				(e.Img.isNull(o) || 0 == o || e.Img.isNull(s) || 0 == s) && (o = t.width, s = t.height);
				var r = e.Img.calcSize(o, s, a.width, a.height, a.mode, i);
				return t.width = r.width, t.height = r.height, 1 == a.display ? t.style.display = "inline" : 2 == a.display ? t.style.display = "none" : t.style.display = "block", {
					width: t.width,
					height: t.height
				}
			}, e.Img.calcSize = function(t, a, i, n, o, s) {
				isNaN(i) && (i = parseFloat(i) * g_rem), isNaN(n) && (n = parseFloat(n) * g_rem);
				var r = {
					width: t,
					height: a
				};
				if(o == e.Img.MODE_SCALE_FILL)(c = t / i) > (d = a / n) ? (r.width = i, r.height = a / c) : (r.width = t / d, r.height = n);
				else if(o == e.Img.MODE_SCALE_WIDTH) {
					var c = t / i;
					r.width = i, r.height = a / c
				} else if(o == e.Img.MODE_SCALE_HEIGHT) {
					var d = a / n;
					r.width = t / d, r.height = n
				} else o == e.Img.MODE_SCALE_DEFLATE_WIDTH ? (c = t / i) > 1 && (r.width = i, r.height = a / c) : o == e.Img.MODE_SCALE_DEFLATE_HEIGHT ? (d = a / n) > 1 && (r.width = t / d, r.height = n) : o == e.Img.MODE_SCALE_DEFLATE_FILL ? (c = t / i) > (d = a / n) ? c > 1 && (r.width = i, r.height = a / c) : d > 1 && (r.width = t / d, r.height = n) : o == e.Img.MODE_SCALE_DEFLATE_MAX && t > i && a > n && ((c = t / i) < (d = a / n) ? (r.width = i, r.height = a / c) : (r.width = t / d, r.height = n));
				return s || (r.width = Math.floor(r.width), r.height = Math.floor(r.height)), 0 == r.width && (r.width = 1), 0 == r.height && (r.height = 1), r
			},
			function() {
				var t, a, i, n, o = 0;
				$.each({
					tlog: function(t, a) {
						/log/.test(g_config.testCMD) && e.logStd(t, a), this.log(t, a)
					},
					tlogErr: function(e, t) {
						this.log(e, t, !0)
					},
					log: function(s, r, c) {
						m_debug && $(function() {
							try {
								t || function() {
									t = $('<div id="logBox"><div id="log_head"><div id="log_close" class="log_icon">╳</div><div id="log_min" class="log_icon">━</div>' + ("undefined" != typeof g_config && g_config.test ? '<div id="log_share" class="log_icon">share</div>' : "") + '</div><div id="log_text_wrap"><div id="log_text"></div></div></div>'), a = t.find("#log_text"), i = t.find("#log_text_wrap"), n = $('<div id="log_max" class="hide"><div id="log_max_inner"><div id="log_max_innerText">＋</div></div></div>');
									var s = t.find("#log_head"),
										r = {},
										c = $("body");
									if(c.length < 0) return;
									c.append(t), c.append(n), s.on("touchstart", function(e) {
										e.preventDefault(), e.stopPropagation();
										var t = e.originalEvent.targetTouches[0];
										r.x = t.pageX, r.y = t.pageY
									}).on("touchmove", function(e) {
										e.preventDefault(), e.stopPropagation();
										var a = e.originalEvent.targetTouches[0],
											i = t.offset().left + a.pageX - r.x,
											n = t.offset().top + a.pageY - r.y;
										r.x = a.pageX, r.y = a.pageY, i > -.2 * t.width() && i + .5 * t.width() < $(window).width() && (t[0].style.left = i + "px"), n > 0 && n + .5 * t.height() < $(window).height() && (t[0].style.top = n + "px")
									}), t.find("#log_close").on("touchstart", function() {
										n.hide(), t.hide(), a.empty(), o = 0
									}), t.find("#log_min").on("touchstart", function() {
										n.show(), t.hide()
									}), t.find("#log_share").on("touchstart", function() {
										var t = e.wxConfigArg.url;
										if(e.log("shareUrl", t), g_config.test) {
											t = escape(t).replace(/\+/g, "%2B").replace(/\"/g, "%22").replace(/\'/g, "%27").replace(/\//g, "%2F");
											var a = "http://" + e.gameDomain + "/hdtest.jsp?cmd=setUrl&url=" + t;
											window.open(a)
										}
									}), n.on("touchstart", function() {
										n.hide(), t.show(), n.removeClass("hasNewErr")
									}), a.on("touchstart", ".log_flag", function() {
										var e = $(this).parent();
										e.hasClass("log_line_ellipsis") ? e.removeClass("log_line_ellipsis") : e.addClass("log_line_ellipsis")
									})
								}(), 0 === o && t.show(), o++, a.append('<div class="log_line log_line_ellipsis' + (c ? " log_line_err" : "") + '"><span class="log_flag">' + e.decodeHtml(s) + '</span><span class="log_text">' + e.decodeHtml(r) + "</span></div>"), i[0].scrollTop = i[0].scrollHeight, c && n.is(":visible") && n.addClass("hasNewErr")
							} catch(e) {
								console.log(e)
							}
						})
					}
				}, function(t, a) {
					e[t] = function(t, i, n) {
						e.IsPC() || (arguments.length <= 1 && (i = t, t = "###"), i = "object" === e.getType(i) || "array" === e.getType(i) ? $.toJSON(i) : String(i), a.call(e, t, i, n))
					}
				})
			}(), e.initEdit = function(t) {
				var a = t.origin,
					n = t.originDef,
					o = t.originMod,
					s = /\b(editTarget|editRelate)(-\w+?)(-\d+?)?\b/,
					r = {};

				function c(e, t, a) {
					var i, n = a ? t.defVal : t.val,
						o = a ? t.defTra : t.tra;
					n && (t.from && (e = $(t.from)), "color" !== t.type ? "font-size" !== t.name || isNaN(Number(n)) ? e.css(t.name, n) : e.css(t.name, n / 20 + "rem") : (n = function(e) {
						if(e = $.trim(e), /^#[0-9a-fA-f]{3}$/.test(e)) {
							for(var t = "#", a = 1; a < 4; a += 1) {
								var i = e.slice(a, a + 1);
								t += i + i
							}
							e = t
						}
						return /^#[0-9a-fA-f]{6}$/.test(e) ? ["rgb(", (e = parseInt(e.substring(1), 16)) >> 16, ",", (65280 & e) >> 8, ",", 255 & e, ")"].join("") : e
					}(n), "text-shadow" === t.name ? e.css(t.name, (i = d(n, o)) + " -1px -1px 0px, " + i + " 0px -1px 0px, " + i + " 1px -1px 0px, " + i + " 1px 0px 0px, " + i + " 1px 1px 0px, " + i + " 0px 1px 0px, " + i + " -1px 1px 0px, " + i + " -1px 0px 0px") : e.css(t.name, d(n, o))))
				}

				function d(e, t) {
					return void 0 === t || -1 == t ? e : "rgba" + e.substring(e.indexOf("("), e.indexOf(")")) + "," + (t || 0) + ")"
				}

				function l(e) {
					for(var t = 0; t < a.length; t++) {
						var i = a[t];
						if(i.name === e) return [i, n[t]]
					}
					return [!1, !1]
				}

				function g(t, a, i, n) {
					var o = {};
					o.from = t, o.title = a[1], o.limit = a[2], o.defSrc = e.getSrc(a[0]);
					var s = i.showPath[n];
					return "number" == typeof s && s >= 0 && (o.showPath = i.showPath, o.showPathIndex = n), a[3] && (o.defSize = a[3]), o
				}

				function f(t, a) {
					if(1 == arguments.length) {
						if(!(a = t.attr("edit_defer_src"))) return;
						t.removeAttr("edit_defer_src")
					}
					return a || e.log("setJqSrc src null"), t.each(function() {
						var t, i;
						/img/i.test($(this)[0].nodeName) ? $(this).attr("src", a) : ($(this).css({
							"background-image": 'url("' + a + '")',
							"background-position": "center center",
							"background-repeat": "no-repeat"
						}).addClass("hd-game-theBg-fillAuto"), t = this, i = a, e.imgReady(i, function() {
							if(!$(t).hasClass("hd-img-fillDiv")) {
								var a = {
										width: $(t).outerWidth(),
										height: $(t).outerHeight()
									},
									i = e.Img.calcSize(this.width, this.height, a.width, a.height, e.Img.MODE_SCALE_DEFLATE_FILL, !0),
									n = 100 * i.width / a.width,
									o = 100 * i.height / a.height;
								$(t).css("background-size", n + "% " + o + "%")
							}
						}))
					}), t
				}

				function u(e, t, a) {
					var i = e;
					$.isArray(e) ? (void 0 === t && (t = 0), void 0 === (i = e[t]) && (i = void 0 === a ? e[0] : u(a, t))) : void 0 === i && void 0 !== a && (i = a);
					return i
				}

				function h(a, i, n) {
					var o = a[0],
						s = a[1],
						c = void 0 !== n;
					i || (i = $(".editTarget-" + o.name).not(".cacheDiv"));
					! function(a, i, n) {
						var o = -2,
							s = null,
							c = !1,
							d = null,
							f = i.targetName || !0,
							u = "editTarget-" + a.name;
						if(!i._initModuleLayerArgs) {
							if((i.css || i.cssAll) && (i.cssAll ? (d = [], $.each(i.cssAll, function(e, t) {
									l(t)[1].css && (d = d.concat(l(t)[1].crrCssArg))
								})) : d = i.crrCssArg, c = !d[0].targetName || d[0].targetName, 1 == i.cssEdit && "_backgroundAll" !== i.edit)) {
								var h = d;
								$$(function() {
									parent.Edit.addEditBtn(d[0].targetName || "编辑背景", "." + u, function() {
										return parent.Edit.Css.showCssByGame.call($("." + u), "." + u, h, h[0].targetName), parent.operateFlagList[21] = !0, e.logPhoneDog(5), !1
									})
								}), c = !1, d = null
							}
							if(void 0 !== i.edit)
								if("number" == typeof i.edit) o = i.edit;
								else {
									if(p(i.edit)) {
										!t.bgList && (t.bgList = []);
										var m = null,
											w = $.isArray(i.path[0]),
											v = "advertising" === i.name,
											_ = i.name,
											y = i.from || ".editTarget-" + _ + ",.editRelate-" + _;
										if(w) {
											(m = {}).paths = [];
											for(var x = 0; x < 4; x++) {
												var I = i.path[x] || i.path[0];
												x > 0 && (y = ".editTarget-" + _ + "-" + x + ",.editRelate-" + _ + "-" + x), m.paths.push(g(y, I, a, x))
											}
										} else m = g(y, i.path, a, 0);
										if(m._flag = -1, "_backgroundAll" === i.edit && d && (m._cssArg = d, m._flag = -5, c = !1, d = null), v && (m._flag = -7), n.closest(".home,.gameBgBox,.gameBgBox2").length > 0 && -1 == $.inArray(g_config.style, [49, 67, 69, 71, 75, 77, 87, 94, 96, 102, 106])) t.bgList.push(m);
										else {
											var b = {
													title: "背景图片",
													size: "640px*1600px",
													limit: "5000k",
													defSize: "640px*1600px"
												},
												T = [$.extend({}, m, b)];
											w && (T = m.paths.map(function(e) {
												return $.extend({}, e, m, b)
											})), $$(function() {
												var t = ".editTarget-" + a.name;
												v && (t = ".advertisingBox"), e.saveModuleLayerImg(T), parent.Edit.addEditBtn(i.targetName || "编辑背景", t, function() {
													return hg.fire("editBackground", m, !0), parent.Edit.showEditByGame(m._flag, "", T), !1
												})
											})
										}
										return void n.data("hasBindEdit", !0)
									}
									if("_none" !== i.edit) {
										if(s = [], r["edit-" + i.edit]) s = r["edit-" + i.edit];
										else {
											var B = [];
											"all" === i.edit ? $.each(t.originDef, function(e, a) {
												a.formDefaultStyle || p(a.edit) || B.push([t.origin[e], a])
											}) : $.each(i.edit.split(","), function(e, t) {
												B.push(l(t))
											}), $.each(B, function(t, a) {
												var i = a[1].path,
													n = a[1].name,
													o = ".editTarget-" + n + ",.editRelate-" + n;
												void 0 !== i && ("array" === e.getType(i[0]) ? $.each(i, function(e, t) {
													e > 0 && (o = ".editTarget-" + n + "-" + e + ",.editRelate-" + n + "-" + e), s.push(g(o, t, a[0], e))
												}) : s.push(g(o, i, a[0], 0)))
											}), !r["edit-" + i.edit] && (r["edit-" + i.edit] = s)
										}
										o = -1
									} else f = !1
								}
							else f = !1;
							i.text && (f = !i.text[0].targetName || i.text[0].targetName, a.text = $.extend(!0, [], i.text, a.text), 1 == i.text[0].type && (f = !1), a.text.filter(function(e) {
								return 2 == e.type
							}).length > 0 && (o = 0, u = function() {
								(function(t, a, i) {
									var n = this;
									return parent.Edit.editPoup.show({
										className: "editText",
										title: a[0].allTitel || "编辑内容",
										info: function(o, s, r) {
											$.each(t, function(t, n) {
												if(2 == n.type) {
													var r = a[t],
														c = (r.title || "文字内容") + "：",
														d = n.val,
														l = (r.remark, '<div class="editLine">');
													n.shouInput ? l += function(t, a, i) {
														return '<div class="answerLine clearfix" style="margin-top:' + (i > 0 ? "20px" : "0px") + '"><div class="floatLeft newTextT" style="width: 100px; padding-right:16px; text-align:right;" >' + t + '</div><div style="width: 320px;" class="floatLeft"><div class="newTextArea"><input type="text" class="input scrollBox activeInput" style="width: 300px;height: 32px; padding-left: 5px;" value="' + e.encodeHtml(a) + '" ' + (isPublish ? "disabled" : "") + '><div style="color:#888; padding-top: 5px;">确认发布后无法修改，请认真输入！</div><div class="editErr inputErrMsg ERR_errMsg hide" style="color: red;">输入文字不能为空</div><div class="editErr2 inputErrMsg ERR_errMsg hide" style="color: red;display: none;">输入仅限中文字母跟数字</div></div></div></div>'
													}(c, d, t) : l += function(t, a, i, n) {
														var o = e.encodeHtml(a);
														return '<div class="answerLine clearfix"><div class="floatLeft newTextT" style="width: 100px; padding-right: 16px; text-align:right;">' + t + '</div><div class="floatLeft" style="width: 320px;"><div><input id="editWriteDef_' + i + '" type="radio" name="theRealOnly_' + i + '"' + (n ? "" : "checked") + '><label for="editWriteDef_' + i + '" style="height: 16px;line-height: 16px;">默认</label><input id="editWriteSelf_' + i + '" type="radio" name="theRealOnly_' + i + '"' + (n ? "checked" : "") + '><label for="editWriteSelf_' + i + '" style="height: 16px;line-height: 16px;">自定义</label></div><div class="newTextArea"><textarea class="input scrollBox activeInput" style="width:300px;height:100px;padding:5px;margin-top:7px;">' + o + '</textarea><div class="editErr inputErrMsg ERR_errMsg hide" style="color: red;">输入文字不可少于10个</div><div class="editErr2 inputErrMsg ERR_errMsg hide" style="color: red; display: none;">输入仅限中文</div></div></div></div>'
													}(c, d, t, n.txtopt), l += "</div>", l += '<div class="cutLine"></div>', l = s.$(l), o.append(l);
													var g = r.numLimit;
													"array" != e.getType(g) && (r.numLimit = g = [0, g]), r.from || (r.from = ".editTarget-" + i + ",.editRelate-" + i);
													var f = $(r.from),
														u = l.find(".newTextArea .activeInput"),
														h = !0;
													u.on("blur.text", function() {
														var e = $(this).val();
														$.trim(e).length < g[0] + 1 && ($(this).addClass("inputErr"), $(this).parent().find(".editErr").show().text("输入的文字不可少于" + (g[0] + 1) + "个"), f.text(n.val))
													}).on("focus.text", function() {
														$(this).removeClass("inputErr").siblings(".editErr,.editErr2").hide()
													}).on("compositionstart.text", function() {
														h = !1
													}).on("compositionend.text", function() {
														h = !0;
														var e = {};
														e.str = $(this).val(), e.str = e.str.substr(0, g[1]), e.len = $.trim($(this).val()).length, e.len > g[1] && $(this).val(e.str), $(this).trigger("text-beforeSave", [e, n, r]), e.str.length > g[0] && (void 0 === g[1] || e.str.length <= g[1]) && (n.val = e.str, f.text(n.val))
													}).on("input.text", function() {
														var e = {};
														e.str = $(this).val(), e.str = e.str.substr(0, g[1]), e.len = $.trim($(this).val()).length, e.len > g[1] && h && $(this).val(e.str), $(this).trigger("text-beforeSave", [e, n, r]), e.str.length > g[0] && (void 0 === g[1] || e.str.length <= g[1]) && (n.val = e.str, f.text(n.val))
													}).on("input.text", function() {
														parent.changeIsSave()
													}), n.txtopt ? u.show().val(n.val) : u.hide(), n.shouInput || (l.find("#editWriteDef_" + t).on("click", function() {
														1 == n.txtopt && parent.changeIsSave(), n.txtopt = 0, f.text(r.val), u.hide().removeClass("inputErr").val(r.val), u.siblings(".editErr,.editErr2").hide(), hg.fire("afterEditWrite")
													}), l.find("#editWriteSelf_" + t).on("click", function() {
														0 == n.txtopt && parent.changeIsSave(), n.txtopt = 1, u.show().val(n.val), f.text(n.val), hg.fire("afterEditWrite")
													}))
												}
											}), $(n).hdTrigger("hd-editUpload-textEdit", [s, t, a])
										}
									}), !1
								}).call(this, a.text, i.text, a.name)
							})), i.textarea && (o = "showEditTextareaPoup"), i.textContent && (o = "showEditTextContentPoup"), i.swiperConfig && g_config.useSwiperBanner && (o = -8), "banner" !== i.name && "banner1" !== i.name && "banner2" !== i.name && "homeBanner" !== i.name && "detailBanner" !== i.name || g_config.useSwiperBanner || ((s = s.slice(0, 1))[0].title = s[0].title.replace(/01/, "")), i._initModuleLayerArgs = [o, u, s, c, d, f]
						}(void 0 !== i.edit || i._initModuleLayerArgs[4]) && (n.hdTrigger("hd-editUpload-initModuleLayer", [i]), e.initModuleLayer.apply(e, [n].concat(i._initModuleLayerArgs)))
					}(o, s, i.not(function() {
						return $(this).data("hasBindEdit")
					}));
					var d = "array" === e.getType(s.pos) && "array" !== e.getType(s.size),
						f = function(t, a) {
							var i = $(a).data("editName", o.name);
							if(!i.data("hasBindEdit")) {
								var n = u(s.size, t),
									r = u(s.pos, t),
									c = u(o.size, t, s.size),
									l = u(o.pos, t, s.pos);
								if(c && n && (i.addClass("slaveImg"), i.parents().hasClass("imgContainer") || i.wrap('<div class="imgContainer absCenter"></div>'), i.parent(".imgContainer").css("height", 0), !n.disable)) {
									if(d) {
										var g = null;
										i.addResizableFn("start", function(e, t) {
											g = $(".editTarget-" + o.name).not(this), /n|w/.test(t.axis) && !n.noSyncOffset && g.each(function(e, a) {
												var i = $(this),
													n = i.parents(".ui-wrapper");
												i.data("originalPosition-relative", {
													left: parseFloat(n.css("left")) - t.originalPosition.left,
													top: parseFloat(n.css("top")) - t.originalPosition.top
												})
											})
										}), i.addResizableFn("resize", function(e, t) {
											g.add(g.parents(".ui-wrapper")).css({
												width: $(t.element).width(),
												height: $(t.element).height()
											}), /n|w/.test(t.axis) && !n.noSyncOffset && g.each(function(e, a) {
												var i = $(this),
													n = i.data("originalPosition-relative");
												i.add(i.parents(".ui-wrapper")).css({
													left: t.position.left + n.left,
													top: t.position.top + n.top
												})
											})
										}), i.addResizableFn("stop", function(e, t) {
											n.noSyncOffset || g.each(function(e, t) {
												$(this).removeData("originalPosition-relative").attr("resize", "1")
											}), g = null
										})
									}
									var f = {
										width: n.width,
										height: n.height,
										handles: n.handles
									};
									r && r.disable && (f.left = r.left, f.top = r.top), e.moduleSlaveImgResize(i, f, n.containment), d && i.addResizableFn("recover", function() {
										var e = $(this).parents(".ui-wrapper");
										$(".editTarget-" + o.name).each(function(t, a) {
											if(a !== i[0]) {
												var n = $(a).add($(a).parents(".ui-wrapper"));
												n.width(e.width()).height(e.height());
												var o = u(s.pos, t);
												o && o.disable && n.css({
													left: o.left,
													top: o.top
												}), n.attr("resize", 0)
											}
										})
									})
								}
								if(l && r && !r.disable) {
									var h = "false" != r.forParent,
										p = r.containment;
									h && !i.parents().hasClass("imgContainer") && i.wrap('<div class="imgContainer absCenter"></div>'), e.moduleDraggale(i, h, p)
								}
							}
						};
					c ? f(n, i) : i.each(f), i.data("hasBindEdit", !0)
				}

				function p(e) {
					return /^_background/.test(e)
				}

				function m(e, t) {
					if(0 != e.length) {
						var a, i = e.attr("class").match(s);
						i && (a = l(i[2].slice(1)))[0] && a[1] && t && t(a)
					}
				}

				function w(e) {
					$.each(a, function(e, t) {
						v(t, n[e], $(".editTarget-" + t.name))
					})
				}

				function v(t, a, i, n) {
					var o, r, d, l, g, h, m, w, v, y, x, I = void 0 !== n,
						b = ".editTarget-" + t.name + ",.editRelate-" + t.name;
					if(I && 0 == i.length) return !1;
					if(p(a.edit) && (a.from ? $(a.from).addClass("hd-Special-bgImgInfo") : i.addClass("hd-Special-bgImgInfo")), _manage && a.cacheDiv && 0 == $(".cacheDiv.editTarget-" + t.name).length ? ($("body").append('<div class="cacheDiv editTarget-' + t.name + ' hide"></div>'), i = $(".editTarget-" + t.name)) : i = i.not(".cacheDiv"), (g = function(e) {
							var i = function(e, i) {
								var n = u(t.pos, e, a.pos),
									o = u(t.size, e, a.size);
								a.pos && n && n.top && n.left && $(i).css({
									top: n.top,
									left: n.left
								}).addClass("abs"), a.size && o && o.width && o.height && $(i).css({
									width: o.width,
									height: o.height
								})
							};
							I ? i(n, e) : e.each(i)
						})(i), t.swiperConfig && (_manage ? e.renderSwiperByManage({
							name: a.name
						}, i) : e.renderSwiper({
							name: a.name,
							config: $.extend({}, a.swiperConfig, t.swiperConfig)
						}, i)), t.path)
						if(l = function(t, a) {
								var n;
								return(t = t.not(i)).length > 0 && !t.is(i) && (n = e.getJqSrc(t)), n || a || ""
							}, r = ".editRelate-" + t.name, h = function(e, i, n) {
								0 != e.length && (0 !== t.showPath[n] ? a.deferPath && !_manage ? e.attr("edit_defer_src", i) : f(e, i) : e.attr("edit_store_src", i))
							}, a.from && (i = $(a.from)), "array" === e.getType(t.path[0]))
							if(I) {
								if((o = i.attr("class").match(s)) && o[2] == "-" + t.name) {
									o[3] && (d = parseInt(o[3].slice(1)));
									var T = l($(".editTarget-" + t.name + (isNaN(d) ? "" : "-" + d)));
									isNaN(d) && (d = 0), !T && (T = e.getSrc(t.path[d][0])), h(i, T, d)
								}
							} else $.each(t.path, function(n, o) {
								var s = e.getSrc(o[0]),
									c = "editTarget-" + t.name,
									d = i;
								0 !== n && (c = "editTarget-" + t.name + "-" + n, r = ".editRelate-" + t.name + "-" + n, d = $("." + c)), 0 == d.length ? _manage && _(a) && $("body").append('<input class="' + c + '" type="hidden" value="' + s + '">') : 0 !== n && g(d), h(d.add(r), s, n)
							});
					else I ? h(i, l($(".editTarget-" + t.name), e.getSrc(t.path[0])), 0) : h(i.add(r), e.getSrc(t.path[0]), 0);
					return t.css && (m = function(e, t, a) {
						var n;
						if(I) {
							if(!i.is(e)) return;
							n = i
						} else n = $(e);
						c(n, t, a)
					}, $.extend(!0, a.css, t.css), $.each(a.css, function(e, t) {
						t.from || (t.from = b), t.css ? $.each(t.css, function(e, a) {
							a.from || (a.from = t.from), m(a.from, a, 0 === a.opt)
						}) : m(t.from, t, 0 === t.opt)
					})), t.text && $.each(t.text, function(e, t) {
						a.text;
						var n = a.text;
						if(n) {
							var o, s = n[e];
							if(s) {
								if(!s.from && (s.from = b), I) {
									if(!i.is(s.from)) return;
									o = i
								} else o = $(s.from);
								if(2 == s.type) {
									var r = Fai.encodeHtml(t.txtopt ? t.val : s.val);
									o.html(r)
								} else o.val(t.value)
							}
						}
					}), t.textarea && (w = t, v = a, y = $.extend(!0, [], v.textarea, w.textarea), x = _(v), y.forEach(function(e, t) {
						var a = t > 0 ? v.name + "-" + t : v.name,
							i = function(e) {
								var t = ".editTarget-{{name}},.editRelate-{{name}}".replace(/{{name}}/g, e),
									a = $(t);
								return !a.length && _manage && x && (a = $('<div style="display: none;" class="hideImpl editTarget-' + e + '"></div>'), $("body").append(a)), a
							}(a),
							n = e.value;
						if(i.data(v.name, y), i.data("notUseTextArea", v.notUseTextArea), v.notUseTextArea) i.text(n);
						else {
							var o = function(e) {
								var t = e.find(".editTextarea");
								return t.length || (t = $('<textarea class="editTextarea" readonly="readonly"></textarea>'), e.append(t)), t
							}(i);
							! function(e) {
								"static" === e.css("position") && e.css("position", "relative");
								var t = e.find(".editTextareaMask");
								t.length || (t = $('<div class="editTextareaMask"></div>'), e.append(t))
							}(i), o.val(n).trigger("contentChange", n)
						}
					})), t.textContent && function(e, t) {
						var a = $.extend(!0, [], t.textContent, e.textContent),
							i = _(t);
						a.forEach(function(e, n) {
							var o = n > 0 ? t.name + "-" + n : t.name,
								s = function(e) {
									var t = ".editTarget-{{name}},.editRelate-{{name}}".replace(/{{name}}/g, e),
										a = $(t);
									!a.length && _manage && i && (a = $('<div style="display: none;" class="hideImpl editTarget-' + e + '"></div>'), $("body").append(a));
									return a
								}(o);
							s.css({
								"white-space": "pre-wrap"
							});
							var r = e.value;
							s.data(t.name, a), s.text(r).trigger("contentChange", r)
						})
					}(t, a), !0
				}

				function _(e) {
					return !e.notAutoGeneration
				}
				return o && ($.each(o, function(e, i) {
					if(-1 == n.indexOf(i)) {
						var o = a[e],
							s = n[e],
							r = function(e) {
								e.pos = $.extend({}, s.pos), e.size = $.extend({}, s.size), e.path[0][0] = s.path[0][0]
							};
						if(g_config.isOldFaiImgGame || -1 == i.name.indexOf("theGetPricePic") || (r(i), (g_config.isNewGame || t.isMod) && r(o)), i.css) {
							var c = function(e) {
								void 0 !== e.opt && (e.opt = 0), "undefined" !== e.tra && (e.defTra = e.tra), e.defVal = e.val
							};
							$.each(i.css, function(e, t) {
								t.css ? $.each(t.css, function(e, t) {
									c(t)
								}) : c(t)
							}), (g_config.isNewGame || t.isMod) && $.extend(!0, o.css, i.css)
						}
						i.text && $.each(i.text, function(e, a) {
							(g_config.isNewGame || t.isMod) && $.extend(!0, o.text, i.text), 2 == a.type && (a.txtopt = 0, delete a.numLimit)
						})
					}
				}), $.extend(!0, n, o)), $.each(a, function(t, a) {
					var i = n[t];
					if(!a.showPath && (a.showPath = [], n[t].showPath))
						for(var o = 0, s = n[t].showPath.length; o < s; o++) a.showPath.push(1);
					i.swiperConfig && !a.swiperConfig && (a.swiperConfig = $.extend(!0, {}, i.swiperConfig));
					! function(t, a) {
						-1 != $.inArray(t.name, a) && t.path && $.each(t.path, function(t, a) {
							a[0] = e.modifyVersion(a[0])
						})
					}(a, ["advertising", "theGetPricePic", "theGetPricePicTwo", "theGetPricePicThree"])
				}), _manage ? t.setAllEdit = function() {
					w(), t.hasInitEle = !0, $.each(n, function(e, t) {
						t.css && !t.crrCssArg && (t.crrCssArg = $.extend(!0, [], t.css, a[e].css))
					}), $.each(a, function(e, t) {
						h([t, n[e]])
					})
				} : (t.hasInitEle = !0, w()), t.setEdit = function(e, t) {
					m(e, function(n) {
						void 0 === t && (t = 0), v(n[0], n[1], e, t), _manage && (n[1].css && !n[1].crrCssArg && (n[1].crrCssArg = $.extend(!0, [], n[1].css, a[i].css)), h(n, e, t))
					})
				}, t.getImgInfo = function(t, a) {
					var i = "getImgInfo-" + t;
					a && (i = "getImgInfo-rem-" + t);
					var n = r[i];
					if(n) return n;
					var o = l(t)[0];
					if(o) {
						if(n = {
								name: t,
								css: o.css
							}, o.path)
							if("array" === e.getType(o.path[0])) {
								n.path = [];
								for(var s = 0; s < o.path.length; s++) n.path[s] = e.getSrc(o.path[s][0])
							} else n.path = e.getSrc(o.path[0]);
						var c = a ? parseFloat : parseRemToPx,
							d = {
								size: ["width", "height"],
								pos: ["left", "top"]
							};
						for(var i in d) {
							var g = d[i],
								f = o[i];
							f && ("array" === e.getType(f) ? (n[g[0]] = [], n[g[1]] = [], $.each(f, function(e, t) {
								n[g[0]].push(c(t[g[0]])), n[g[1]].push(c(t[g[1]]))
							})) : (n[g[0]] = c(f[g[0]]), n[g[1]] = c(f[g[1]])))
						}
						return r[i] = n, n
					}
				}, t.getInfoByName = l, t.getRgba = d, t.initEdit = w, t.initByElem = function(e, t) {
					m(e, function(a) {
						void 0 === t && (t = 0), v(a[0], a[1], e, t)
					})
				}, t.cache = r, t.setJqSrc = f, delete t.originMod, t
			}, e.initSound = function(t, a, i) {
				i && a && $.each(i, function(e, i) {
					a[e].path = i.path, a[e].fileName = i.fileName, g_config.isModel && (t[e].optFlag = a[e].optFlag)
				}), t && a && $.each(t, function(t, i) {
					var n = a[t];
					0 !== t && 1 === i.optFlag && (i.optFlag = 2), i.path = e.getSrc(i.path), n.path = e.getSrc(n.path)
				});
				var n = {},
					o = LF.sound.webAudioEnabled,
					s = {
						list: t,
						listDef: a,
						allowPlay: !0,
						setPlayPower: function(e, t) {
							return "boolean" == typeof e && (this.allowPlay = e), this.get(e, function(e) {
								e._allowPlay = t
							}), this
						},
						play: function(a, i, n) {
							if(_manage || tryPlay) return this;
							if(!this.allowPlay && 9 != g_config.style && 58 != g_config.style) return this;
							if(t && "number" === e.getType(a)) {
								var s = 0 === a ? 1 : 3;
								if(t[a].optFlag === s) return this
							}
							return 0 !== a && t && 1 !== t[0].optFlag && !o ? this : (this.get(a, function(e) {
								if(e._allowPlay && !(e.isWebAudio && e.isOnec && e.playing)) {
									var t = !e.playing;
									e.play(i, n), e.isWebAudio ? t && e.fire("play", e) : !e.playing && wx.checkJsApi && wx.checkJsApi({
										jsApiList: ["checkJsApi"],
										success: function() {
											e.play(i, n)
										}
									})
								}
							}), this)
						},
						readyPlay: function(t, a, i) {
							return _manage ? this : l(g_config.flagB, 8388608) ? this : (this.get(t, function(n) {
								var o = this;
								n.isWebAudio || o.play(t, a, i), o.onReady(t, function() {
									!n.isWebAudio && n.playing || (o.play(t, a, i), e.tlog("sound_play2:" + t + "|" + n.playing))
								})
							}), this)
						},
						pause: function(e) {
							return _manage ? this : (this.get(e, function(e) {
								var t = e.playing;
								e.stop(), t && e.isWebAudio && e.fire("pause", e)
							}), this)
						},
						pauseAll: function() {
							if(_manage) return this;
							var e;
							for(e in n) this.pause(e);
							return this
						},
						load: function(t, a, i, s) {
							if(_manage) return this;
							if(n[a]) return e.tlog("Sound_load_err", "这个key:" + a + " 已经存在!"), this;
							var r = null,
								c = o;
							if("boolean" == typeof i && (c = i), /.wav$/.test(t) && e.isIPhone() && (c = !1), e.tlog("useWebAudio=" + c + ",key=" + a), c)(r = new LF.webAudio).isWebAudio = !0;
							else {
								r = new LF.media;
								try {
									r.data = new Audio
								} catch(e) {
									console.warn("ReferenceError: Can't find variable: Audio"), r.data = {}
								}
								r.data.loop = !1, r.data.autoplay = !1
							}
							return e.tlog("lsound", r), r.register([
								["ready", !0], "play", "pause"
							]), c || (r.data.addEventListener("play", function() {
								r.playing = !0, r.fire("play", r)
							}, !1), r.data.addEventListener("pause", function() {
								r.playing = !1, r.fire("pause", r)
							}, !1)), r.isOnec = !!s, r._type = "audio", t && (e.tlog("load", a + "_wuhao"), r.load(t)), r.on("complete", function(t) {
								r.complete = !0, r.fire("ready", r), e.tlog("sound", a + " ready")
							}), r._allowPlay = !0, r.name = a, n[a] = r, this
						},
						onReady: function(e, t) {
							return _manage ? this : (this.get(e, function(e) {
								e.complete ? t(e) : e.on("ready", t)
							}), this)
						},
						setVolume: function(e, t) {
							return _manage ? this : (this.get(e, function(e) {
								e.isWebAudio ? e.volume = t : e.data.volume = t
							}), this)
						},
						get: function(t, a) {
							var i = n[t];
							return i ? a && a.call(this, i) : e.tlog("sound_get_err", "这个key:" + t + " 不存在!"), i
						},
						cache: n
					};
				s.load(_resRoot + "/image/button.mp3", "startButton"), t && $.each(t, function(t, a) {
					var i = a.path;
					if(0 === t) {
						var n = !1,
							o = e.UA;
						o.isWX() && !o.isIOS() && o.getWxVerNum() >= o.getWxVerNum("6.6.6") && (n = !0), s.load(i, t, n, !0),
							function() {
								if(_manage || !s.cache[0]) return;
								s.get("0", function(t) {
									t.on("play", function() {
										$(function() {
											$(".soundIcon").length <= 0 && e.appendMusicIcon(), $(".soundIcon").removeClass("soundIconOff")
										})
									}).on("pause", function() {
										$(function() {
											$(".soundIcon").addClass("soundIconOff")
										})
									}), Audio && t.data instanceof Audio && document.getElementById("pageMusic").appendChild(t.data)
								})
							}()
					} else s.load(i, t)
				});
				return 1 == g_config.drawType || ~[40, 45, 60, 46, 59, 48, 9, 58, 55, 27, 62, 63, 61, 64, 70, 67, 78].indexOf(g_config.style) || (s.readyPlay(0, 0, "loop"), wx.ready(function() {
					s.readyPlay(0, 0, "loop")
				})), s
			}, e.initCallBack = function(e, t) {
				var a = new Fai.CallBack;
				return e = e || {}, $.each(a.getApiKeys(), function(t, i) {
					e[i] = function() {
						var e = a[i].apply(a, arguments);
						return e === a ? this : e
					}
				}), "array" == $.type(t) && a.register(t), e
			}, e.initTime = function(t) {
				var a, i = null,
					n = 0;

				function o(e) {
					var t = (Math.round(100 * e) / 100).toString(),
						a = t.indexOf(".");
					for(a < 0 && (a = t.length, t += "."); t.length <= a + 2;) t += "0";
					return t
				}
				var s = [70, 280];
				g_config.countsTimeType ? g_config.sortType && (s[1] = -1) : g_config.scoreType && g_config.sortType || (s[1] = -1);
				var r = {
					val: 0,
					pastTime: 0,
					interval: 140,
					range: s,
					target: null,
					isDesc: !g_config.countsTimeType,
					acceList: null,
					initTime: t,
					status: "ended",
					updateFlag: !0,
					targetFlag: !0,
					gameCostTime: 0,
					frameInc: 0,
					setAcceList: function(e) {
						if("number" == typeof e) {
							var t = e;
							e = [];
							for(var a = 0; a < t; a++) e.push((t - a) * (this.initTime / (t + 1)))
						}
						return this.acceList = e, this
					},
					setTarget: function() {
						var e = o(this.val);
						this.targetFlag && this.target.text(e), this.fireWith("setTime", this, [e])
					},
					init: function() {
						if(99999 !== this.initTime) return !this.target && (this.target = $(".time")), this.val = this.initTime, this.pastTime = 0, this.setTarget(), this
					},
					start: function() {
						if(99999 !== this.initTime) return a = (new Date).getTime() / 1e3, this.updateFlag && "ended" === this.status ? (this.status = "runing", this.play()) : this.status = "runing", this
					},
					isRunning: function() {
						return "runing" === this.status
					},
					pause: function() {
						this.status = "pause"
					},
					end: function() {
						if("ended" !== this.status) return clearTimeout(i), n = 0, this.update(), this.status = "ended", this
					},
					setTime: function() {
						var e = (new Date).getTime() / 1e3,
							t = e - a,
							o = this.isDesc ? -1 : 1;
						if(this.range[0] > 0 && t < this.range[0] / 1e3 ? t = this.range[0] / 1e3 : this.range[1] > 0 && t > this.range[1] / 1e3 && (t = this.range[1] / 1e3), this.val += o * t, this.pastTime = o * (this.val - this.initTime), a = e, this.isDesc) {
							if(this.acceList)
								for(var s = 0; s < this.acceList.length; s++)
									if(this.val <= this.acceList[s] && n == s) {
										n++, this.fireWith("acce", this, [n]);
										break
									}
							if(this.val <= 0) return this.val = 0, this.pastTime = this.initTime, this.setTarget(), clearTimeout(i), n = 0, this.status = "ended", void this.fireWith("end", this)
						}
						this.setTarget()
					},
					update: function() {
						99999 !== this.initTime && ("pause" !== this.status && this.setTime(), this.fireWith("timer", this, ["pause" !== this.status]))
					},
					play: function() {
						this.update(), "ended" !== this.status && (i = setTimeout(arguments.callee.bind(this), this.interval))
					},
					updateInFrame: function(e) {
						99999 !== this.initTime && "ended" !== this.status && (e < 0 && (e = 0), this.frameInc += e, this.frameInc >= this.interval && (this.update(), this.frameInc = 0))
					}
				};
				return e.initCallBack(r, ["end", "timer", "acce", "setTime"]), r.init(), r.changeTwoDecimal_f = o, r
			}, e.initGrade = function() {
				var t = function(e) {
					t.set(t.val + e)
				};
				return $.extend(t, {
					val: 0,
					set: function(e) {
						t.val = e, t.val < 0 && (t.val = 0), t.fireWith("setGrade", t, [t.val]), t.target && t.target.text(t.val)
					}
				}), $(function() {
					t.target = $("#grade")
				}), e.initCallBack(t, ["setGrade"]), t
			}, e.initAreaLimit = function(e) {
				if(!_manage && e) var t = 0,
					a = setInterval(function() {
						t >= 5 ? clearInterval(a) : (t++, g_config.ipInfo && g_config.ipInfo.provice ? clearInterval(a) : $.ajax({
							type: "post",
							url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=getIPInfo",
							success: function(e) {
								var t = $.parseJSON(e);
								t.success && (g_config.ipInfo = t.ipInfo)
							}
						}))
					}, 1500)
			}, e.checkAreaLimitByWx = function() {
				var t = !1;

				function a(a) {
					var n = Date.now();
					return e.tlog("gps:getAreaByWx5", a), $.Deferred(function(o) {
						if(g_config.test) return a.provice = "广东", a.city = "广州", o.resolve();
						var s;
						if(e.tlog("locationTime", null == a.locationTime), !(null == a.locationTime || Date.now() - a.locationTime > 3e5)) return o.resolve();
						try {
							wx.ready(function() {
								e.tlog("getAreaByWx: ", "wxReady callback"), wx.getLocation({
									type: "wgs84",
									success: function(r) {
										i("location", n), clearTimeout(s), n = Date.now();
										var c, d, l = r.latitude,
											g = r.longitude;
										e.tlog("gps:getLocation", l + "," + g), (c = l, d = g, $.Deferred(function(a) {
											var o, s = new qq.maps.Geocoder,
												r = new qq.maps.LatLng(c, d);
											s.getAddress(r), s.setComplete(function(t) {
												if(i("address", n), e.tlog("gps:getAddressByLatLng:setComplete", t), clearTimeout(o), !t) return a.reject();
												var s = t.detail.addressComponents.city,
													r = t.detail.addressComponents.province,
													c = t.detail.addressComponents.country;
												a.resolve({
													contry: c,
													provice: r,
													city: s,
													locationTime: Date.now()
												})
											}), s.setError(function(t) {
												i("address", n), e.tlog("gps:getAddressByLatLng:setError", t), clearTimeout(o), a.reject(t)
											}), o = setTimeout(function() {
												t = !0, e.tlog("gps:getAddressByLatLng:timeout"), a.resolve({
													contry: "海外",
													provice: "海外",
													city: "海外",
													locationTime: Date.now()
												})
											}, 6e3)
										})).then(function(t) {
											e.tlog("gps:getAddressByLatLng", t), a.contry = t.contry, a.provice = t.provice, a.city = t.city, a.locationTime = t.locationTime, o.resolve()
										}).fail(o.reject)
									},
									fail: function(t) {
										i("location", n), e.tlog("getAreaByWx: ", "fail"), e.tlog("fail:", t), "undefined" != typeof Fdp && Fdp.bssMonitor(142), e.logStd("wxlocationLog----fai", t), e.statusMsg("当前微信版本不支持定位或没开启定位服务，请联系活动主办单位", ""), clearTimeout(s), o.reject()
									},
									cancel: function() {
										i("location", n), e.tlog("getAreaByWx: ", "cancel"), e.statusMsg("用户拒绝了授权地理位置信息", ""), clearTimeout(s), o.reject()
									}
								})
							}), s = setTimeout(function() {
								e.tlog("gps:getAddressTimeout", "timeout: more than 5s."), e.statusMsg("无法开启活动,请在您的移动设备中开启定位服务后尝试", ""), o.reject()
							}, 5e3)
						} catch(e) {
							o.reject()
						}
					})
				}

				function i(t, a) {
					var i = (Date.now() - a) / 1e3,
						n = i > 9 ? "location" == t ? 10 : 20 : ("location" == t ? 0 : 10) + Math.ceil(i);
					e.logDog(1000295, n)
				}
				return function(i, n, o, s) {
					return e.showLoadToast("数据加载中"), $.Deferred(function(r) {
						a(i).then(function() {
							return e.Res.load("js_city")
						}).then(function() {
							return function(a) {
								return $.Deferred(function(i) {
									a && t ? (e.hideLoadToast(), e.otherAjaxComplete(), e.showMsgToast2({
										bodyMsg: "无法获取您当前的位置,您当前所在的位置是否为海外地区",
										isTwoFootBtn: !0,
										primaryBtnText: "是的,我在海外",
										defaultBtnText: "不,不在海外",
										primaryBtnFn: function() {
											i.resolve()
										},
										defaultBtnFn: function() {
											e.statusMsg("当前无法获取您的位置,无法开始活动", ""), i.reject("noLocation")
										}
									})) : i.resolve()
								})
							}(s).fail(function(e) {
								"noLocation" != e || r.reject({
									cmd: e
								})
							})
						}).then(function() {
							var t = function(t, a, i) {
								var n = t.provice,
									o = t.city;
								if(a.length > 0) {
									if(!n || !o) return e.logErr("ipInfo null", $.toJSON(t)), i || e.statusMsg("微信获取地理位置接口正在维护中，无法获取您的地理位置。请稍后重试", ""), "busyness";
									for(var s = !0, r = 0; r < a.length; r++) {
										var c = site_cityUtil.getInfo(a[r]);
										if(1 == c.parentId) {
											if(c.name.indexOf(n) > -1 || n.indexOf(c.name) > -1) {
												s = !1;
												break
											}
										} else {
											var d = site_cityUtil.getCounty(c.id).some(function(e) {
												return e.name.indexOf(o) > -1 || o.indexOf(e.name) > -1
											});
											if(c.name.indexOf(o) > -1 || o.indexOf(c.name) > -1 || d) {
												s = !1;
												break
											}
										}
									}
									if(s) return i || e.statusMsg("您当前所在的地区（" + o + "）不在可参与区域范围", ""), "limit"
								}
								return "ok"
							}(i, n, o);
							e.tlog("checkAreaLimit result: ", t), "ok" === t ? r.resolve() : r.reject({
								cmd: t
							})
						}).always(function() {
							e.hideLoadToast(), e.otherAjaxComplete()
						}).fail(function() {
							r.reject({
								cmd: "areaLimitFail"
							})
						})
					})
				}
			}(), e.checkMemberCredit = function() {
				return function(t) {
					return $.Deferred(function(a) {
						if(g_config.playerChance > 0) return t && t(), void a.resolve();
						e.hideLoadToast(), e.otherAjaxComplete(), e.showMsgToast2({
							bodyMsg: "消耗" + g_config.joinCreditNum + g_config.joinCreditName + "参与活动" + (isPublish ? "" : "<br>注：未发布状态仅做展示，不扣除积分"),
							primaryBtnText: "确认",
							isTwoFootBtn: !0,
							primaryBtnFn: function() {
								e.showLoadToast("数据加载中"), $.ajax({
									type: "post",
									url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=addPlayerChance&playerId=" + g_config.playerId + "&gameId=" + g_config.gameId
								}).then(function(i) {
									var n = $.parseJSON(i);
									n.success ? (g_config.playerChance++, t && t(), a.resolve()) : e.statusMsg(n.msg)
								}).always(function() {
									e.hideLoadToast(), e.otherAjaxComplete()
								}).fail(function() {
									a.reject({
										cmd: "addPlayerChanceFail"
									})
								})
							},
							defaultBtnFn: function() {
								a.reject()
							}
						})
					})
				}
			}(), e.checkMallLogin = function() {
				var e = !1;
				return $.each(g_config.awardList, function(t, a) {
					return !(t >= g_config.awardNum) && (5 == a.mainStyle ? (e = !0, !1) : void 0)
				}), 2 != g_config.internalJoinLimit && !e || g_config.uid ? $.Deferred("resolve") : (g_config.bindAuthorizerUrl && (window.location.href = g_config.bindAuthorizerUrl), $.Deferred("reject"))
			}, e.checkMallJoinLimit = function() {
				function t() {
					return $.Deferred(function(t) {
						$.ajax({
							type: "get",
							url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=checkInternalGame&gameId=" + g_config.gameId,
							success: function(a) {
								var i = $.parseJSON(a);
								i.success ? t.resolve() : (e.showMsgToast(i.msg || "系统繁忙，请稍后再试"), t.reject(i.msg))
							}
						})
					})
				}

				function a() {
					return $.Deferred(function(t) {
						!g_config.isOpenInternalCreditJoin || g_config.playerChance > 0 ? t.resolve() : (e.hideLoadToast(), e.otherAjaxComplete(), e.showMsgToast2({
							bodyMsg: "消耗" + g_config.internaljoinCreditNum + "商城积分参与活动" + (isPublish ? "" : "<br>注：未发布状态仅做展示，不扣除积分"),
							primaryBtnText: "确认",
							isTwoFootBtn: !0,
							primaryBtnFn: function() {
								e.showLoadToast("数据加载中"), $.ajax({
									type: "post",
									url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=addPlayerChance4Internal",
									data: {
										playerId: g_config.playerId,
										gameId: g_config.gameId,
										uid: g_config.uid
									},
									success: function(a) {
										var i = $.parseJSON(a);
										i.success ? (g_config.playerChance++, t.resolve()) : (e.showMsg(i.msg || "系统繁忙，请稍后再试"), t.reject(i.msg))
									}
								})
							},
							defaultBtnFn: function() {
								t.reject()
							}
						}))
					})
				}

				function i() {
					return $.Deferred(function(t) {
						g_config.isOpenInternalMemberLevelJoin ? $.ajax({
							type: "post",
							url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=checkLevel4Internal",
							data: {
								playerId: g_config.playerId,
								gameId: g_config.gameId,
								uid: g_config.uid
							},
							success: function(a) {
								var i = $.parseJSON(a);
								0 == i.rt ? i.success ? t.resolve() : (e.showMsg("会员等级不足，无法参与"), t.reject()) : (e.showMsg(i.msg || "系统繁忙，请稍后再试"), t.reject())
							}
						}) : t.resolve()
					})
				}
				return function(n) {
					return $.Deferred("resolve").then(t).then(i).then(a).then(function() {
						n && n()
					}).always(function() {
						e.hideLoadToast(), e.otherAjaxComplete()
					})
				}
			}(), e.getIsHasAttention = function(t, a) {
				e.tlog("g_config.acctOpenId=", g_config.acctOpenId), a || e.showLoadToast("数据加载中");
				var i = e.jointUrlArg(g_config.ajaxUrl + "hdgame_h.jsp", e.jointParams({
					cmd: "getMyAttention",
					gameId: g_config.gameId,
					openId: g_config.acctOpenId
				}));
				return $.Deferred(function(n) {
					$.ajax({
						type: "POST",
						url: i,
						dataType: "json",
						error: function() {
							var e = "系统繁忙，请稍后重试！";
							m_debug && alert(e), t && t(e), n.reject(e)
						},
						success: function(a) {
							e.tlog("查询结果", a);
							var i = a.msg || "系统繁忙，请稍后重试！";
							if(a.rt) return n.reject(i), void(t && t(i));
							a.data.isAttention && (console.log(a.data.isAttention), g_config.ishasAttentiosThisAPP = !1), t && t(), n.resolve(a)
						},
						complete: function() {
							a || e.hideLoadToast()
						}
					})
				})
			}, e.initWxConfig = function(t) {
				"findAct" == _fromCbGameOrigin && e.logDog(1000314, 102);
				var a = e.parseURL(document.URL).params.sTkPartnerId;

				function i(i, n, o) {
					console.log("setWxShare: " + n), _manage || g_config.$$sensitWordAndAdvance.forEach(function(e) {
						i = i.replace(new RegExp(e.sensword, "g"), e.adVance)
					}), i = e.decodeHtml(i), n = e.removeUrlArg(n, "code", "state"), g_config.isYKY && (n = e.removeUrlArg(n, "identity", "relationId")), g_config.internalJoinLimit > 0 && (n = e.removeUrlArg(n, "uid", "relationType", "sign"));
					var c = n;
					if(!t.dynamicShareUrlRootEmpty) {
						for(var d = n.split("?")[1].split("&"), l = "", g = 0; g < d.length; g++) {
							var f = d[g];
							"aid" !== f.split("=")[0] && "id" !== f.split("=")[0] && "style" !== f.split("=")[0] && (l.length > 0 && (l += "&"), l += f)
						}
						c = m_debug ? t.dynamicShareUrlRoot + "share.jsp?fsl=" + t.fsl + "&aid=" + g_config.aid + "&id=" + g_config.urlToken + "&" + l : t.dynamicShareUrlRoot + g_config.aid + "/" + g_config.urlToken + "/share.html?fsl=" + t.fsl + "&" + l
					}
					n = e.setUrlArg(n, ["otherplayer", g_config.openId]), c = e.setUrlArg(c, ["otherplayer", g_config.openId]), n = e.setUrlArg(n, ["shareDeep", t.shareDeep + 1]), c = e.setUrlArg(n, ["canal", fromCanal]), n = e.setUrlArg(n, ["canal", fromCanal]), c = e.setUrlArg(c, ["shareDeep", t.shareDeep + 1]), n = e.setUrlArg(n, ["notP4Share", !isPublish]), c = e.setUrlArg(c, ["notP4Share", !isPublish]), e.log(t.openStrongAttention), n = e.setUrlArg(n, ["isOfficialLianjie", "false"]), c = e.setUrlArg(c, ["isOfficialLianjie", "false"]), a && -1 == n.indexOf("sTkPartnerId") && (n = e.setUrlArg(n, ["sTkPartnerId", a]), c = e.setUrlArg(c, ["sTkPartnerId", a])), _showUnPublishPage && (n = e.setUrlArg(n, ["editQrcode", !0]), c = e.setUrlArg(c, ["editQrcode", !0])), n === e.wxConfigArg.url && e.wxConfigArg.desc === i && e.wxConfigArg.callBack === o && e.wxConfigArg.pyqUrl === c || (wx.ready(function() {
						var a = t.shareImg;
						!/^http:/.test(a) && /^\/\//.test(a) && (a = "http:" + a), e.tlog("checkdsffg---url=", n);
						try {
							wx.onMenuShareAppMessage({
								title: e.decodeHtml(t.activeName),
								desc: i,
								link: n,
								imgUrl: a,
								type: "link",
								success: function() {
									$.ajax({
										type: "post",
										url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=setShareNum&aid=" + g_config.aid + "&gameId=" + g_config.gameId + "&openId=" + g_config.openId + "&type=friend&shareDeep=" + g_config.shareDeep,
										error: function() {
											m_debug && alert("服务繁忙，请稍候重试")
										},
										success: function(t) {
											m_debug || (e.logDog(1000004, g_config.srcId), g_config.realVer >= HdVerDef.ZS ? e.logDog(1000181, g_config.realVer + 1) : e.logDog(1000181, g_config.authVer + 1), e.logObjDog(1000092, 2, g_config.gameId), e.logDog(1000055, 0), e.LogFaiOpenId(1000232, 0), g_config.fromGuideShare && e.logDog(1000239, 4), g_config.freeFirstPublish && e.logDog(1000240, g_config.aid % 2 + 5)), r(t), s(), o && o(t)
										}
									})
								},
								cancel: function() {},
								fail: function(t) {
									alert("分享失败请退出微信重新登录！"), e.logStd("wxShareFailErr", JSON.stringify(t), 2)
								}
							}), wx.onMenuShareTimeline({
								title: i,
								link: c,
								imgUrl: a + "xxxxx",
								success: function(t) {
									e.tlog("wyyytttttesthhhhh==========test", JSON.stringify(t));
									var a = function() {
										$.ajax({
											type: "post",
											url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=setShareNum&aid=" + g_config.aid + "&gameId=" + g_config.gameId + "&openId=" + g_config.openId + "&type=pyq&shareDeep=" + g_config.shareDeep,
											error: function(e) {
												m_debug && alert("服务繁忙，请稍候重试")
											},
											success: function(t) {
												m_debug || (e.logDog(1000004, g_config.srcId), g_config.realVer >= HdVerDef.ZS ? e.logDog(1000181, g_config.realVer + 1) : e.logDog(1000181, g_config.authVer + 1), e.logObjDog(1000092, 2, g_config.gameId), e.logDog(1000055, 1), e.LogFaiOpenId(1000232, 0), g_config.fromGuideShare && e.logDog(1000239, 4), g_config.freeFirstPublish && e.logDog(1000240, g_config.aid % 2 + 5)), r(t), s(), o && o(t)
											}
										})
									};
									e.isIPhone() ? setTimeout(a, 100) : a()
								},
								cancel: function(e) {},
								fail: function(e) {
									m_debug && alert("3:" + JSON.stringify(e))
								}
							}), e.tlog("当前分享朋友链接：", n), e.tlog("当前分享朋友圈链接：", c)
						} catch(e) {
							alert("4:" + e.message)
						}
					}), e.wxConfigArg.desc = i, e.wxConfigArg.url = n, e.wxConfigArg.callBack = o, e.wxConfigArg.pyqUrl = c, g_config._minapp_findAct && wx.miniProgram.postMessage({
						data: e.getminData()
					}))
				}

				function n(t) {
					return(t = t.replace(/\u200b/g, "").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">")).replace(/<span class=["']tag["'] contenteditable=["']?false["']?>(.+?)<\/span>/g, function(t, a) {
						switch(a) {
							case "玩家名称":
								return 48 == g_config.style ? e.hykjUserName : e.captainUserName ? e.captainUserName : g_config.userName;
							case "游戏成绩":
							case "当前成绩":
								if(49 == g_config.style) return parseInt(e.currentScore) + g_config.scoreUnit;
								console.log(e.currentScore);
								var i = isNaN(parseInt(e.currentScore)) ? 0 : parseInt(e.currentScore);
								return g_config.scoreType ? e.currentScore + g_config.scoreUnit : i + g_config.scoreUnit;
							case "游戏排名":
								return e.currentRank;
							case "奖品名称":
								return e.currentAward;
							case "奖项等级":
								return e.currentAwardStyle;
							case "收集的字":
								return '"' + e.ccndrmTitle + '"'
						}
					})
				}

				function o(a, o) {
					if(!_manage && (void 0 === a && (a = e.wxConfigArg.url), void 0 === o && (o = e.wxConfigArg.callBack), 3 != g_config.drawType)) {
						if(49 == g_config.style || 69 == g_config.style) return void i(n(t.wxShareText_def), a, o);
						e.currentAward ? i(n(t.wxShareText_award), a, o) : e.currentRank ? i(n(t.wxShareText_rank), a, o) : i(n(t.wxShareText_def), a, o)
					}
				}

				function s() {
					var e = {
						aid: g_config.aid,
						gameId: g_config.gameId
					};
					$.ajax({
						type: "post",
						url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=logShare2WXAst",
						data: e,
						error: function() {
							Fai.ing("服务正忙。", !1)
						},
						success: function() {}
					})
				}

				function r(a) {
					var i = $.parseJSON(a);
					if(i && i.shareaward) {
						if(drawTimesLimit += t.addDrawTime, 50 != g_config.style && (drawTotalLimit += t.addDrawTime), 0 == g_config.drawType && 27 != g_config.style || !e.resulePoup.resuleArg || (e.resulePoup.resuleArg.count += t.addDrawTime, e.resulePoup.resuleArg.totalCount += t.addDrawTime), $(".dayDrawCount").text(drawTimesLimit - count < 0 ? 0 : drawTimesLimit - count), $(".totalDrawCount,#totalDrawCount").text(drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount), g_config.showHelpGuide = !1, PlayInfo.addPlayTimesLimit(t.addDrawTime), 50 == g_config.style) {
							var n = $(".gameScoreUnit").eq(0).text();
							qdydjAddText($("#grade .specil"), t.addDrawTime), e.statusMsg("分享成功，获得" + t.addDrawTime + n)
						}
						var o = drawTimesLimit - count < 0 ? 0 : drawTimesLimit - count,
							s = drawTotalLimit - totalCount < 0 ? 0 : drawTotalLimit - totalCount;
						isLimitDraw && drawTimesLimit - count > 0 && drawTotalLimit - totalCount > 0 && (2 == helpType || 3 == helpType) ? ($(".dayDraw4Total").html('今天可抽 <span class="count specil dayDrawCount">' + o + "</span> 次"), $(".totalDraw").html('您还有 <span class="totalDrawCount specil">' + s + "</span> 次抽奖机会"), $(".dayDraw").html('您今天还有 <span id="count" class="specil dayDrawCount">' + o + "</span> 次抽奖机会"), $(".dayDraw").off("onclick"), $(".dayDraw4Total").off("onclick")) : !isLimitDraw && drawTimesLimit - count > 0 && (2 == helpType || 3 == helpType) && ($(".dayDraw4Total").html('今天可抽 <span class="count specil dayDrawCount">' + o + "</span> 次"), $(".totalDraw").html('您还有 <span class="totalDrawCount specil">' + s + "</span> 次抽奖机会"), $(".dayDraw").html('您今天还有 <span id="count" class="specil dayDrawCount">' + o + "</span> 次抽奖机会"), $(".dayDraw").off("onclick"), $(".dayDraw4Total").off("onclick"))
					}
					$("#helpGuideBox").hide()
				}

				function d(t) {
					if(!_manage) {
						t.haveAward && t.plInfo.$awardLevel && l(t.plInfo.$awardLevel.join(""), t.plInfo.isFissilePlayer);
						var a = t.bestRankInfo;
						e.currentRank = a.rank, 63 == g_config.style && !a.score && (a.score = "0"), e.currentScore = a.score, o()
					}
				}

				function l(t, a) {
					var i = [],
						n = [],
						o = [];
					g_config.awardList.map(function(e) {
						new RegExp(e.level).test(t) && (n.push(e.style), i.push(a ? "裂变优惠券" : e.name), o.push(e.level))
					}), /900/.test(t) && (n.push(g_config.comfort.cas), i.push(g_config.comfort.ca), o.push(900)), e.currentAward = i.join(","), e.currentAwardStyle = n.join(","), e.currentAwardLevel = o
				}
				e.wxConfigArg = {
					url: t.fullUrl
				}, d({
					haveAward: g_config.haveAward,
					plInfo: t.plInfo,
					bestRankInfo: g_config.bestRankInfo,
					comfortAwardStyle: g_config.comfort.cas
				}), e.tlog("HdGame.initWxConfig"), e.logStd("checkwxconfig------appId", t.jsSdkAppid), wx.config({
					debug: !1,
					appId: t.jsSdkAppid,
					timestamp: t.timestamp,
					nonceStr: t.nonce_str,
					signature: t.signature,
					jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "startRecord", "stopRecord", "onRecordEnd", "playVoice", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "translateVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"]
				}), wx.ready(function() {
					$("#bottomCusBtnInfo").on("touchstart", function() {
						var a = !0,
							i = g_config.wxAward,
							n = i.genewxcard,
							o = "DATE_TYPE_FIX_TERM" == i.t_type,
							s = i.cfbt,
							r = i.cft,
							c = g_config.acctOpenId || g_config.openId;
						if(n) {
							if(0 == g_config.status) return void e.statusMsg("活动尚未发布", "无法加入到微信卡券");
							var d = i.wxcardid,
								l = $("#awardDetailBox .codeLine .code").text(),
								g = $("#awardDetailBox .codeLine .code").attr("code"),
								f = g_config.award.depositTime;
							e.log(d), e.log(l), $.ajax({
								type: "post",
								url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=getCardSign&cardTick=" + t.cardTicket + "&cardId=" + d + "&code=" + l + "&openId=" + c + "&gameId=" + g_config.gameId,
								error: function() {
									m_debug && alert("服务繁忙，请稍候重试")
								},
								success: function(t) {
									e.tlog("getCardSign", t);
									var n = $.parseJSON(t).data;
									if(1 != n.codeStatus) {
										var u = '{"timestamp":"' + n.timestamp + '","openid":"' + c + '","nonce_str":"' + n.nonce_str + '","code":"' + l + '","signature":"' + n.sign + '"}';
										(f && f < Date.parse(new Date) || "打开微信卡券" == $("#bottomCusBtnInfo .text").text()) && (a = !1), e.log("depositTime=" + f), e.log("isAddCard=" + a), a ? wx.addCard({
											cardList: [{
												cardId: d,
												cardExt: u
											}],
											success: function(t) {
												e.tlog("addCard", t), e.logDog(1000108, 1);
												var n = t.cardList[0];
												a = !1, n.isSuccess && $.ajax({
													type: "get",
													url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=setCode&code=" + g + "&gameId=" + g_config.gameId,
													error: function() {
														m_debug && alert("服务繁忙，请稍候重试")
													},
													success: function(t) {
														e.tlog("setCode", t);
														var a = $.parseJSON(t);
														g_config.award.depositTime = Date.parse(new Date), i.code = g, $(".codeDetailInfoBox").show(), $("#codeStatusBox").hide(), $("#bottomCusBtnInfo .text").text("打开微信卡券"), e.refreshGiftListAndAwardDetail(g_config.gameId, g_config.openId, g, g_config.award);
														var n = (new Date).getTime();
														if(o) {
															var c = a.depositTime;
															n = c + 864e5 * s;
															var d = c + 864e5 * r,
																l = $.format.date(new Date(n), "yyyy-MM-dd"),
																f = $.format.date(new Date(d), "yyyy-MM-dd");
															$(".awardDetail .awardCodeTime em").html("使用期限：" + l + " - " + f), $("#ticketDetailBox .codeTimeFixedRange .box").html(l + " 至 " + f), (new Date).getTime() < n && ($("#codeStatusBox #codeStatusBtn").show(), $("#codeStatusBox").show(), $("#codeStatusTips").css("fontSize", "0.55rem"), $("#codeStatusTips").find(".giftNameA").text("打开微信卡券"), $(".codeDetailInfoBox").hide())
														} else e.tlog("award.cbt", i.cbt), i.cbt && (n = new Date(i.cbt).getTime());
														e.tlog("sTime", n), (new Date).getTime() < n && ($("#codeStatusBox #codeStatusBtn").show(), $("#codeStatusBox").show(), $("#codeStatusTips").css("fontSize", "0.55rem"), $("#codeStatusTips").find(".giftNameA").text("打开微信卡券"), $(".codeDetailInfoBox").hide())
													}
												})
											},
											fail: function(t) {
												e.tlog("addCardErr=", t)
											}
										}) : wx.openCard({
											cardList: [{
												cardId: d,
												code: l
											}]
										})
									} else e.statusMsg("该兑奖码已被核销，无法放入微信卡包")
								}
							})
						}
					})
				}), wx.ready(function() {
					wx.hideMenuItems({
						menuList: ["menuItem:copyUrl"]
					}), e.tlog("isForbidShareactivity=" + g_config.isForbidShareactivity), wx[g_config.isForbidShareactivity ? "hideMenuItems" : "showMenuItems"]({
						menuList: ["menuItem:copyUrl", "menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:originPage", "menuItem:openWithQQBrowser", "menuItem:openWithSafari"]
					}), e.tlog("isCloseShareCircleOfFriends=" + g_config.isCloseShareCircleOfFriends), !g_config.isForbidShareactivity && g_config.isCloseShareCircleOfFriends && wx.hideMenuItems({
						menuList: ["menuItem:share:timeline"]
					});
					try {
						t.isHideShareBtn && wx.hideMenuItems({
							menuList: ["menuItem:share:timeline", "menuItem:share:qq"]
						}), wx.error(function(e) {
							m_debug && (console.log($.toJSON(e)), alert("1:" + $.toJSON(e)))
						})
					} catch(e) {
						alert("2:" + e.message)
					}
					if(void 0 !== t.checkControlLevel) {
						var a = 0 == g_config.authVer;
						switch(t.checkControlLevel) {
							case 1:
								a && wx.hideMenuItems({
									menuList: ["menuItem:share:timeline"]
								});
								break;
							case 2:
								a && wx.hideMenuItems({
									menuList: ["menuItem:share:timeline", "menuItem:share:appMessage"]
								});
								break;
							case 3:
								wx.hideMenuItems({
									menuList: ["menuItem:share:timeline"]
								});
								break;
							case 4:
								wx.hideMenuItems({
									menuList: ["menuItem:share:timeline", "menuItem:share:appMessage"]
								})
						}
					}
					/VIVO Y66I/i.test(navigator.userAgent) && wx.showMenuItems({
						menuList: ["menuItem:favorite"]
					})
				}), wx.ready(function() {
					var t = window.navigator.userAgent.indexOf("iPhone") > -1 || window.navigator.userAgent.indexOf("iPad") > -1 || window.navigator.userAgent.indexOf("iPod") > -1,
						a = window.navigator.userAgent.indexOf("Android") > -1,
						i = "unknown";
					t ? i = "apple" : a && (i = "android"), !g_config.isFromZhuliShare && isPublish && wx.getNetworkType({
						success: function(t) {
							var a = "other";
							a = "wifi" === t.networkType ? "wifi" : "other", $.ajax({
								url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=setBehavior&gameId=" + g_config.gameId + "&openId=" + g_config.openId,
								type: "post",
								data: {
									netType: a,
									sysType: i
								},
								success: function(t) {
									e.tlog("setBehavior success")
								}
							})
						}
					})
				});
				var g = {};
				g.handleShareAward = r, g.setWxShareByStatus = o, g.setShareText = n, g.removeWxShareUrlArg = function() {
					var t = c.slice.call(arguments);
					t.unshift(e.wxConfigArg.url), i(e.wxConfigArg.desc, e.removeUrlArg.apply(e, t), e.wxConfigArg.callBack)
				}, g.setWxShareUrlArg = function() {
					var t = c.slice.call(arguments);
					t.unshift(e.wxConfigArg.url), i(e.wxConfigArg.desc, e.setUrlArg.apply(e, t), e.wxConfigArg.callBack)
				}, g.setWxShare = i, g.setWxShareArg = d, g.setCurrentAward = l, e.wxConfig = g
			}, e.addJoinGameBehavior = function() {
				var t = void 0 !== g_config.ipInfo.city ? g_config.ipInfo.city : "",
					a = void 0 !== g_config.ipInfo.provice ? g_config.ipInfo.provice : "";
				$.ajax({
					url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=joinGameBehavior&openId=" + g_config.openId + "&canal=" + fromCanal,
					type: "post",
					data: {
						gameId: g_config.gameId,
						openId: g_config.openId,
						shareDeep: g_config.shareDeep,
						provice: a,
						city: t
					},
					error: function(e, t) {
						hg.fire("luckDrawErr")
					},
					success: function(t) {
						"findAct" == _fromCbGameOrigin && e.logDog(1000314, 107), "findAct" == _fromCbGameOrigin && _fromCardBag && (1 == _isShowWinnersList && e.logDog(1000314, 110), 2 == _isShowWinnersList && e.logDog(1000314, 113)), _fromCardBag && (e.tlog("_qbAid", _qbAid), e.tlog("g_config.openId", g_config.openId), e.tlog("g_config.aid", g_config.aid), e.tlog("g_config.gameId", g_config.gameId), e.qbLogForTargetUserA(), _isTargetUser && e.logDog(1000314, 14), _isTargetUser && !_isFinishJoinGame && e.logDog(1000351, 7))
					}
				})
			}, e.qbLogForTargetUserA = function() {
				$.ajax({
					url: g_config.ajaxUrl + "hdCard_wx_h.jsp?cmd=logToUser",
					type: "post",
					data: {
						aid: _qbAid,
						faiOpenId: g_config.openId,
						fromPage: 3,
						gameAid: g_config.aid,
						gameId: g_config.gameId
					},
					success: function(t) {
						e.tlog("qbLogForTargetUserA_aid", _qbAid)
					}
				})
			}, e.setGameEnd = function() {
				var t = $(".bottomSkill");
				$(".home").html(""), $(".home").append(t), $(".home").append('<p style="font-size:0.9rem; color:#e7e7e7; text-align: center; padding-top:10rem; line-height: 1.3rem">活动已结束<br>请期待下次活动</p>'), $(".home").css({
					height: e.getBgHeight(),
					background: "#424242",
					width: "100%",
					position: "fixed",
					"z-index": "500"
				}), document.title = "活动已结束", $(".home").addClass("showImp"), $(".homeBtnBox").addClass("showImp"), $(".ruleImg,#ruleImg").addClass("showImp"), $(".gameInfoBox").addClass("hideImp"), $(".showAwardBox").addClass("hideImp"), $("#informBtn").addClass("hideImp"), hg.sound.allowPlay = !1, hg.sound.pauseAll()
			}, e.getBgHeight = function() {
				return Math.max($(window).width() * g_config.HWRatio, $(window).height())
			}, e.modifyVersion = function(t) {
				t = e.getSrc(t);
				return e.parseURL(t).params && "201910302130" == e.parseURL(t).params.v ? t : e.jointUrlArg(e.removeUrlArg(t, "v"), e.jointParams({
					v: "201910302130"
				}))
			},
			function() {
				function t(e, t) {
					$("#" + e).css({
						transform: "rotate(" + t + "deg)",
						"-webkit-transform": "rotate(" + t + "deg)"
					})
				}

				function a() {
					if(-1 === [75, 106].indexOf(g_config.style)) {
						var e = document.getElementById("ruleImg"),
							t = document.getElementById("arrow"),
							a = (document.getElementById("tip_txt"), parseInt($("#tip_txt").css("margin-left"))),
							i = e.x - t.clientWidth;
						i < a && i > 0 && $("#activityKit .arrow").css({
							width: e.x - a + "px",
							height: 1.13 * (e.x - a) + "px"
						})
					}
				}
				e.showRuleDecide = function() {
//					if(!(g_config.isNotSelf && g_config.createTime > 1494376826e3 || [69].indexOf(g_config.style) > -1)) {
//						var i = g_config.aid + "|" + g_config.gameId + "|" + g_config.openId;
//						e.getLocalStorage(i) || (e.setLocalStorage(i, "-"), g_config.createTime < 1494376826e3 ? showRule() : !g_config.$$fromMinapp_Jfly && function() {
//							$("#activityKit").show();
//							var e = $("#ruleImg"),
//								i = e.offset().left,
//								n = e.offset().top,
//								o = $("#ruleImg"),
//								s = $("#activityKit .arrow"),
//								r = $("#activityKit #tip_txt"),
//								c = (parseInt($("#tip_txt").css("margin-left")), i - s.width()),
//								d = $(window).width() - o.width() - i - s.width(),
//								l = o.width(),
//								g = o.height();
//							c <= 0 && d <= 0 && (l /= 2);
//							n + g / 2 < window.innerHeight / 2 ? ($("#arrow").css("top", n + o.height() + "px"), c > 0 ? (a(), $("#arrow").css("left", i - s.height() + "px")) : (t("arrow", 270), $("#arrow").css("left", i + l + "px")), $("#tip_txt").css("top", n + o.height() + s.height() + "px")) : (c > 0 ? (t("arrow", 90), a(), $("#arrow").css("left", i - s.height() + "px")) : (t("arrow", 180), $("#arrow").css("left", i + l + "px")), $("#arrow").css("top", n - s.height() + "px"), $("#tip_txt").css("top", n - s.height() - r.height() + "px"))
//						}())
//					}
				}, $(function() {
					$("#activityKit").click(function() {
						$("#activityKit").hide()
					})
				})
			}(), e.openLocation = function(e, t, a, i, n, o) {
				wx.openLocation({
					latitude: e,
					longitude: t,
					name: a,
					address: i,
					scale: n || 25,
					infoUrl: o || ""
				})
			}, e.computeDistance = function(e, t, a, i) {
				var n = new qq.maps.LatLng(e, t),
					o = new qq.maps.LatLng(a, i);
				return qq.maps.geometry.spherical.computeDistanceBetween(n, o)
			}, e.getHanziSize = function(e, t) {
				e = e || "";
				for(var a = /[^\x00-\xff]/, i = 0, n = 0, o = 0; o < e.length; o++) {
					var s = e.charAt(o);
					if(a.test(s) ? i += 2 : n++, t && i + n > t) return e.substr(0, o)
				}
				return t ? e : i + n
			}, e.sortBy = function(e) {
				return function(t, a) {
					var i, n;
					if("object" == typeof t && "object" == typeof a && t && a) return(i = t[e]) === (n = a[e]) ? 0 : typeof i == typeof n ? i < n ? -1 : 1 : typeof i < typeof n ? -1 : 1
				}
			}, e.checkWebp = function() {
				try {
					return 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
				} catch(e) {
					return !1
				}
			}, e.isSupportWebp = !_manage && e.checkWebp(), 10 == g_config.style || g_config.open_webp || (e.isSupportWebp = !1);
		var g, f, u, h, p, m, w, v, _ = /\.(bmp|jpg|jpeg|png)(\?.*)?$/i;

		function y(e) {
			switch(e) {
				case 1:
					return "周一";
				case 2:
					return "周二";
				case 3:
					return "周三";
				case 4:
					return "周四";
				case 5:
					return "周五";
				case 6:
					return "周六";
				case 7:
					return "周日"
			}
			return ""
		}
		e.getWebpOrOtherImg = function(t) {
				return e.isSupportWebp ? $.isArray(t) || $.isPlainObject(t) ? ($.forEach(t, function(a, i) {
					t[i] = e.getWebpOrOtherImg(a)
				}), t) : t && "string" == $.type(t) && -1 !== t.indexOf(".h40.") ? t.replace(_, ".$1.webp$2") : t : t
			}, e.parseWebpSrc = function(t, a) {
				t.each(function(t, i) {
					var n = (i = $(this)).attr("webp_src"),
						o = i.attr("webp_key") || "src",
						s = e.getWebpOrOtherImg(n);
					"background" == o ? i.css("background-image", "url(" + s + ")") : i.attr(o, s), i.removeAttr("webp_src webp_key"), a && a(s, n, o)
				})
			}, e.initJsHead = function(t, a) {
				var i, n, o;
				t.showGameBox = !0, t.assets = (i = [], n = new Fai.CallBack(function() {
						return !0
					}), (o = {
						startTime: 0,
						complete: !1,
						loadComplete: !1,
						increment: a.maxIncrement,
						getGroup: function(e) {
							for(var t = 0, a = i.length; t < a; t++) {
								var n = i[t];
								if(n.name === e) return n
							}
						},
						addGroup: function(e) {
							if((e = $.extend({
									name: "other",
									path: [],
									priority: 100
								}, e)).priority <= 0 && "home" !== e.name) return console.warn("priority err"), this;
							if(this.getGroup(e.name)) return console.warn("the group has existed"), this;
							if(i.length < 2) return i.push(e), this;
							for(var t = i.length - 1; t >= 0; t--) {
								var a = i[t];
								if(e.priority >= a.priority) {
									i.splice(t + 1, 0, e);
									break
								}
							}
							return this
						},
						add: function(e, t) {
							if(!this.complete && !_manage && (1 === arguments.length && (t = arguments[0], e = "other"), t)) {
								var a = this.getGroup(e || "other");
								return a ? ($.isArray(t) ? a.path.push.apply(a.path, t) : $.isPlainObject(t) ? $.forEach(t, function(e) {
									a.path.push(e)
								}) : a.path.push(t), this) : (console.warn("add name err"), this)
							}
						},
						onReady: function(e, t) {
							if(1 === arguments.length) n.on("ready", arguments[0]);
							else if(2 === arguments.length)
								if($.isArray(e)) {
									var a = throttle(t, e.length);
									$.each(e, function(e, t) {
										n.on("ready_" + t, a)
									})
								} else "string" === $.type(e) && n.on("ready_" + e, t);
							return this
						},
						onload: function(e) {
							return n.on("load", e), this
						},
						loadPage: function() {
							if(!_manage) {
								var t = this;
								t.startTime = Date.now(),
									function e(o) {
										var s = i[o];
										! function(e, a) {
											var i = 0;
											if(0 === e.length) return void(a && a());
											for(var o = 0, s = e.length; o < s; o++) {
												var r = new Image;
												r.onload = c, r.onerror = c, setTimeout($.proxy(c, r), 4e3), r.src = r.assets_key = e[o], t[e[o]] = r
											}

											function c() {
												this.assets_complete || (this.assets_complete = !0, this.assets_key ? n.fire("ready_" + this.assets_key, this) : console.log(this, "assets_key is undefined!"), ++i === e.length && a && a())
											}
										}(s.path, function() {
											n.fire("ready_" + s.name, s), ++o < i.length ? e(o) : (t.complete = !0, n.fire("ready")), "home" === s.name && (console.log("home is loaded!"), function e() {
												setTimeout(function() {
													if("undefined" != typeof $ && $.isReady) return console.log("dom is ready!"), void(g_config.test || !g_config.isForbidShareactivity || _manage ? a() : wx.ready(a));
													e()
												}, 100)
											}())
										})
									}(0)
							}

							function a() {
								t.loadComplete = !0;
								var a = e.getBgHeight();
								e.nootNeedFixHeight || $(".gameBgBox").css("height", a / g_rem + "rem");
								var i = function() {
									n.fire("load"), a > $(window).height() && $((55 == g_config.style ? ".gameBox" : ".home") + " .bottomSkill, #bottomSkill").css("top", (a - $(".bottomSkill").outerHeight()) / g_rem + "rem")
								};
								null != typeof preloadEnd ? preloadEnd(i) : i()
							}
						}
					}).addGroup({
						name: "home",
						priority: 0
					}).addGroup({
						name: "other"
					}), o),
					function() {
						t.edit = {};
						var i = a.editPropList,
							n = a.editPropListDef,
							o = a.editModPropList;

						function s(e) {
							var t = document.querySelector(".advertisingBox"),
								i = t.querySelector(".swiper-wrapper"),
								n = t.querySelector(".swiper-pagination"),
								o = {
									wrapper: "",
									pagination: ""
								},
								s = -1;
							_manage || 1 != g_config.advertisingDisplayModel || (s = Math.floor(Math.random() * a.advertisingNum));
							for(var r = 0, c = _manage ? 4 : a.advertisingNum; r < c; r++) {
								var d = (g[r] || e[0])[0];
								o.wrapper += '<div class="swiper-slide ' + (-1 !== s ? r === s ? "" : "hide" : "") + '"><div class="advertisingItem imgPreventDefault hd-Special-bgImgInfo editTarget-advertising' + (r > 0 ? "-" + r : "") + '" width="100%" style="background-image: url(' + d.replace("*_resRoot*", window._resRoot) + ');" data-src="' + d.replace("*_resRoot*", window._resRoot) + '"></div></div>', 1 != c && (o.pagination += '<span data-index="' + r + '" class="swiper-pagination-bullet ' + ((-1 !== s ? r === s : 0 === r) ? "swiper-pagination-bullet-active" : "") + " " + (r < a.advertisingNum ? "" : "hide") + '"></span>')
							}
							i.innerHTML = o.wrapper, n.innerHTML = o.pagination
						}
						t.edit.isMod = a.editPropListIsMod, 20 == g_config.style && (i && delete i[0].css, n && delete n[0].css, o && delete o[0].css);
						var r = function(e, t, a) {
								return t.map(function(t) {
									var i = e.filter(function(e) {
										return e.name === t.name
									})[0] || t;
									return a && a(i), i
								})
							},
							c = function(e, t) {
								t && e && $.isArray(e[0]) && ($.isArray(t[0]) || (t[0] = [t[0]], t.length = 1), e.length > t.length && e.forEach(function(e, a) {
									a >= t.length && t.push(e)
								}))
							},
							d = function(e) {
								if("wxCreateImageSharePatternCoverMap" === e.name) {
									var t = a.gameImg;
									if("" === t) return;
									var i = e.path[0];
									$.isArray(i) ? console.warn("beforeMergeDef: path is Array!") : !/^\/image\/game/.test(t) && _manage && (e.path[0] = t)
								}
							};
						i = (o = o ? r(o, n, d) : o) ? r(i, o) : r(i, n, d);
						for(var l = 0; l < n.length; l++) {
							var g = i[l].path = e.getWebpOrOtherImg(i[l].path),
								f = n[l].path,
								u = null,
								h = !n[l].deferPath,
								p = "advertising" == i[l].name;
							if(o && (u = o[l].path = e.getWebpOrOtherImg(o[l].path)), c(f, u), c(f, g), f = u || f)
								if(g || (i[l].path = g = f), $.isArray(g[0]))
									for(var m = 0; m < f.length; m++) g[m] || (g[m] = f[m]), g[m][0] || (g[m][0] = f[m][0]), h && t.assets.add(n[l].group, g[m][0].replace("*_resRoot*", _resRoot));
								else g[0] || (g[0] = f[0]), (!p && h || p && a.isOpenAdvertise) && t.assets.add(n[l].group, g[0].replace(/\*_resRoot\*/g, _resRoot));
							p && (_manage || a.isOpenAdvertise) && s(f)
						}
						a.openStrongAttention && !a.strongAttIMG && t.assets.add(a.strongAttIMG), 18 == g_config.style && i[1].path[0] == _resRoot + "/image/tgcm/answer.png" && (i[1].path[0] = [_resRoot + "/image/tgcm/drag.png"]), t.edit = {
							origin: i,
							originDef: n,
							originMod: o,
							isMod: a.editPropListIsMod
						}
					}();
				var s, r = {};
				e.isSupportWebp && $.forEach(["logoImg_path", "startImg_path", "gameBgPath", "homeBgPath", "titleImg_path"], function(e) {
						r[a[e]] = e
					}), e.parseWebpSrc($("[webp_src]"), function(t, i) {
						e.isSupportWebp && r[i] && (a[r[i]] = t)
					}), s = [a.logoImg_path, _resRoot + "/image/success.png", _resRoot + "/image/light.png", _resRoot + "/image/musicOff.png", _resRoot + "/image/musicOn.png", g_config.headImg], 0 != g_config.drawType && s.push(a.startImg_path, a.gameBgPath, _resRoot + "/image/lots2.png"), t.assets.add(s), t.assets.add("home", [a.homeBgPath, a.titleImg_path]), "function" == typeof loadGamePreAssets && loadGamePreAssets(), t.assets.loadPage(), s = null, _manage && !_preview && parent != self && ($(function() {
						parent.$$.fire("ready")
					}), parent.$$.win = window), e.initCallBack(t, ["startGame", "beforeStartGame", "startGamehead", "home", "again", "jsFootEnd", "showResult", "changeBottomBar", "showPoup", "hidePoup", "timeChange", "beforeDraw", "updateRankList", "afterDraw", "editBackground", "luckDrawErr", "scrollEvent", "beforeStartGiftEvent", "afterSwap", "afterEditWrite", "getAwardEvent"]), t.register(["setGameType", "hpInit", "hgLoadEnd", "save", "changeShow", "showTabByStyle", "changeAwardNum", "changeAwardImg", "changeContactImg", "isLimit", "changeTopBar", "advertisingSetting", "bannerNumberChange", "questionNumSet"]), e.initEdit(t.edit),
					function() {
						if(-1 != g_config.countsTimeType) {
							var i = g_config.initTime;
							g_config.countsTimeType || 0 !== i || (i = _manage ? 0 == a.gameTimeNumDef ? 30 : a.gameTimeNumDef : 99999, $(function() {
								$(".timeBox").hide()
							})), t.time = e.initTime(i)
						}
					}(), g_config.scoreType || (t.grade = e.initGrade()), t.sound = e.initSound(a.soundList, a.soundListDef, a.soundListMod), !_preview && (_manage || a.openAccessKey || g_config.openAccessKeyOnce && g_config.fromAccessKeyQrcode) && e.showAccessKeyPopup({
						title: g_config.accesspopuptitle,
						manage: _manage,
						isOnLoad: !0
					})
			}, e.initJsFoot = function(t) {
				e.jflyFn.addBackBtn(), e.jflyFn.addRuleBtn(), $("body").data("hd-initHdGameJsfootArg", {
					soundIcon_l: t.soundIcon_l,
					soundIcon_t: t.soundIcon_t
				}), g_config.showActiveEndPage && ($("#ruleImg").show().parent().css("z-index", 1499), $(".advertisingBox").hide(), setTimeout(function() {
					$(".activeEndTipsBox").after($("#ruleImg").parent())
				}, 300)), $(function() {
					var a;
					(e.sortRuleBox.init(t.rulesortstr), $(function() {
						$(".replaceBox").each(function(e, t) {
							var a = $(this),
								i = a.attr("_target");
							i && (i = $("#" + i)).length > 0 && (a.after(i), a.remove())
						})
					}), !g_config.$$fromMinapp_Jfly && e.unPublishMsg(), isPublish && $(".unPublish").css("top", "-2rem"), t.isHideTitle && $(".titleImg").addClass("hideTitleImg"), g_config.showActiveEndPage && ($("#ruleImg").show().parent().css("z-index", 1499), $(".advertisingBox").hide(), setTimeout(function() {
						$(".activeEndTipsBox").after($("#ruleImg").parent())
					}, 300)), "model" == g_config._minapp_preview || "active" == g_config._minapp_preview) && ("model" == g_config._minapp_preview ? a = $('<div class="homeBottomBtn createActiveBtn" onclick="createActiveForMinapp()">马上创建</div>') : "active" == g_config._minapp_preview && (a = $('<div class="homeBottomBtn shareActiveBtn" onclick="shareActiveForMinapp()"><span class="shareIcon"></span>分享活动</div>')), a.on("touchstart", function() {
						$(this).addClass("active")
					}).on("touchend", function() {
						$(this).removeClass("active")
					}), $("body").append(a));
					var i, n = e.decodeHtml(t.hostName),
						o = e.decodeHtml(t.hostLink).replace("http://", ""),
						s = e.decodeHtml(t.menuLink).replace("http://", ""),
						r = $(".menuName,.menuLinkBtn");

					function c(t) {
						var a = t && g_config.isU_PlusAccount;
						_fromCardBag && e.logDog(1000314, 8), $("#skillSupMask").show(), $("#skillSupMask .U_PlusSkill").toggle(a), $("#skillSupMask .hdSkill").toggle(!a)
					}
					if($("#skillSupMask .U_PlusSkill .applyBtn").on("click", function() {
							window.location.replace($(this).attr("data-url"))
						}), (t.fromFav && g_config.haveAward || t.fromFav && g_config.isPaymentGame) && ($("#resule-gift-sucImg").data("openCode", t.fromFav), g_config.isFromFav = !0, showAwardDetail4Draw()), !_manage && (!(g_config.createTime < 1494376826e3) || t.openAwardExp)) {
						g_config.isPaymentGame || -1 != $.inArray(g_config.style, [49, 69, 75]) ? e.showRuleDecide() : 0 != gameType && 4 != gameType && -1 == $.inArray(g_config.style, [48, 67]) || 3 != g_config.status ? 3 != gameType && 1 != gameType && -1 == $.inArray(g_config.style, [71]) || 3 != g_config.status ? e.showRuleDecide() : (i = function(t) {
							$("#activityKit").hide(), t ? e.changePoup(3, "", !1) : e.changePoup(4, "", !1)
						}, _manage || $.ajax({
							type: "post",
							url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=getGiftList",
							data: {
								gameId: g_config.gameId,
								openId: g_config.openId
							},
							success: function(e) {
								var t = $.parseJSON(e);
								console.log(t), t.success && t.list ? i && i(!0) : i && i(!1)
							}
						})) : e.changePoup(3, "", !1)
					}
					$("#showRankNum").text(rankShowNum), $(".hostName").text(n), $(".resule-status-send").on("touchstart", function() {
						_manage || (47 != g_config.style && 98 != g_config.style || hg.fireWith("beforeStartGiftEvent", this, [!0])) && (g_config.haveAward ? e.changePoup(3, "", !0) : luckDraw())
					}), $("#helpGuideBox").on("touchend", function() {
						$("#helpGuideBox").hide()
					}), $("#awardInfo").on("click", ".codeInfoBox", function(t) {
						_manage || e.openAwardDetail.call(this, t)
					});
					var d, g = 75 == g_config.style ? "#resule-gift-sucImg, .seeAwardDetailImg .seeDetail" : "#resule-gift-sucImg, .clickHere, .seeAwardDetail";
					if($(g).on("click", function(e) {
							_manage || 75 == g_config.style && l(g_config.flagB, 8388608) || (g_config.firstTouchRank = g_config.firstTouchAward = g_config.firstTouchWinList = !0, showAwardDetail4Draw())
						}), $(".awardCloseIcon").on("click", function() {
							_manage || (e.wxConfig.removeWxShareUrlArg("fromFav"), $("#awardDetailBox").hide(), $("#resule-gift-box,resule-status-box").hide(), $(".gameBox,.home,.body").removeClass("overflow-y-hidden"), g_config.showSkillSup && $(".bottomSkill").show(), g_config.firstTouchAward = !0)
						}), $(".codeImg").on("click", function() {
							$(".codeDetailImgBox").show()
						}), !_manage && $("#immediaAwardBtn").on("click", function() {
							$("#awardCodeLayer").show()
						}), $(".codeDetailImgBox").click(function() {
							$(this).hide()
						}), $("#useStoreBox .moreBtn").click(function() {
							_manage || $("#storeListBox").show()
						}), $("#storeListBox .closeBtn").click(function() {
							$("#storeListBox").hide()
						}), $(".codeDetailInfoBox .copy").on("click", function() {
							if(!_manage) {
								var t = $("#awardDetailBox").find(".copyCode").text();
								e.copyContent2("input-copyCode", t) ? e.showSuccessToast("复制成功") : $(".codeCopyDetailMask").show()
							}
						}), $(".codeCopyDetailMask").click(function() {
							$(this).hide()
						}), $("#awardDetailBox #ticketDetailBox .guideMap").on("click", function() {
							e.bindGolocation($.extend($(this).data("pointData"), {
								bindBtn: $(this),
								isOperation: !0
							}))
						}), g_config.afterWxCard || $(".awardCusText").on("touchstart", function() {
							var e = $("#awardCusTextInfo");
							"block" == e.css("display") ? ($(this).find(".awardDeailIcon").removeClass("awardIncoSlideDown"), $(this).find(".awardDeailIcon").addClass("awardIncoSlideUp")) : ($(this).find(".awardDeailIcon").removeClass("awardIncoSlideUp"), $(this).find(".awardDeailIcon").addClass("awardIncoSlideDown")), e.slideToggle()
						}), t.isHideFxts && $(".resule-fxts").hide(), 9 != g_config.style && g_config.showSkillSup && e.logDog(1000028, 0), !g_config.isHideskillInfo && !g_config.$$fromMinapp_Jfly) {
						var f = $(".home,.showBottomSkillPage"),
							u = '<div class="bottomSkill skillInfo">页面技术由 ' + t.skillSupport + " 提供</div>";
						55 == g_config.style ? $container = $(".gameBox,.showBottomSkillPage") : 69 == g_config.style && ($container = $(".home,.signUpPage,.joinDetailPage,.rank"), u = '<div class="specialSkill skillInfo">页面技术由 ' + t.skillSupport + " 提供</div>"), g_config.isOem && g_config.oemCloseSkillSupport || f.append(u), g_config._minapp_preview
					}
					_manage && $("a").on("click", function(e) {
						e.preventDefault()
					}), $(".homePoupMask").not(".noTouch").on("touchend", function(e) {
						"a" != e.target.localName && (e.preventDefault(), e.stopPropagation()), _manage || $(e.target).hasClass("homePoupMask") && $(this).hide()
					}), $(".menuBtnBox").on("touchend", function() {
						e.logDog(1000012)
					}), t.showJoinNum ? $("#joinNumLine").show() : $("#joinNumLine").hide(), t.showRedDot && $("#Award_Round_Dot").css("display", "inline-block"), t.showMDRedDot && $("#Mingdan_Round_Dot").css("display", "inline-block"), t.showAwardBtn && $("#myAwardBtn").show(), t.isSelAwardLine ? ($("#selfAwardLine").show(), $("#awardLineBox").hide()) : ($("#awardLineBox").show(), $("#selfAwardLine").hide()), t.showSkillSup || ($(".skillInfo").hide(), $(".skillInfo").addClass("hideSkill")), 1 == t.menuStyle ? $(".menuBtnBox").addClass("hide") : 2 == t.menuStyle ? 0 == $.trim(s).length ? r.css("text-decoration", "none") : _manage || r.attr("href", e.decodeHtml(t.menuLink)) : 3 == t.menuStyle && (d = $("#attentionMask"), e.parseURL(document.URL).params.fromhdhome ? e.createQrImg($("#attentionPoup"), _resRoot + "/image/hdQRcode/hdhome.jpg") : e.createQrImg($("#attentionPoup"), s), r.on("touchend", function() {
						return _fromCardBag && e.logDog(1000314, 8), d.show(), !1
					})), 0 == $.trim(o).length && ($(".hostName").css("text-decoration", "none"), $("a.hostName").attr("href", "javascript:;")), isLimitDraw ? ($(".totalDraw").show(), $(".dayDraw").hide(), drawTimesLimit - count < drawTotalLimit - totalCount && $(".dayDraw4Total").show()) : $(".totalDraw").hide(), 0 == $("#awardExplain").text().length && $("#awardExplain_h").hide(), $("a.hostName").click(function() {
						e.logDog(1000013), _manage || e.jumpToHostUrl(!1)
					}), 1 == skillSupportType ? ($(".skillLine").css("padding", "0"), $(".skillCont").hide()) : 3 != skillSupportType || t.isAdverQRCode || ($(".skillName").text(skillName), _fromCardBag ? $(".skillName").attr("href", "").click(function(t) {
						t.preventDefault(), e.copyContent(skillLink)
					}) : $(".skillName").attr("href", skillLink)), (3 != skillSupportType || skillLink.indexOf("mp.weixin.qq.com/s?__biz=MjM5MTk5MjI3OA==&mid=209854000&idx=1&sn=82241d924839270d3ea820ad2d56c01b#wechat_redirect") >= 0 && !_fromCardBag || t.isAdverQRCode) && $(".skillName").click(function() {
						if(!(_manage || $(this).attr("href") && ~$(this).attr("href").indexOf("https://hdm.fkw.com/pro6.jsp"))) return e.logDog(1000013), e.hdSkillLog(!1, 1000070), 0 == g_config.isAOpenId ? e.logDog(1000115, 7) : e.logDog(1000115, 8), 14788299 != g_config.aid ? (c(!1), !1) : void 0
					}), $(".U_PlusName").click(function() {
						if(!_manage) return c(!0), !1
					}), $(".hdskillInfo a").click(function() {
						return !_manage && (e.logDog(1000005, 0), e.hdSkillLog(!0, 1000070), "number" == typeof g_config.isAOpenId && e.logDog(1000115, 3 + g_config.isAOpenId), g_config.showSkillSup && e.logDog(1000201, g_config.localPoupPage), g_config.isOem || 14788299 == g_config.aid ? void 0 : (c(!0), !1))
					}), hg.sound.list && hg.sound.list.length > 0 && (e.appendMusicIcon(), 1 != t.drawType && -1 == $.inArray(g_config.style, [4, 40, 61, 64, 67, 78]) || $(".home .soundIcon").remove()), $("#resule-gift-sucImg").css({
						"margin-left": "auto",
						"margin-top": "1.6rem",
						"margin-right": "auto",
						"margin-bottom": "1.6rem"
					});
					var h = $(".homeBox");
					if(h.length || (h = $(".home")), h.append($(".editTarget-slogan")), h.append($("#logoImgBox")), _manage) e.Res.load("swiper_simple").then(function() {
						var e = new Swiper(".advertisingBox"),
							t = $(".advertisingBox > .swiper-pagination .swiper-pagination-bullet"),
							a = 0;
						e.detachEvents(), hg.on("advertisingSetting", function(t) {
							"changeNumberOrModel" === t && a < 1 && (a++, e.destroy(), e.init(), e.detachEvents())
						}), t.on("click", function() {
							e.slideTo($(this).data("index"))
						}), e.on("activeIndexChange", function() {
							t.removeClass("swiper-pagination-bullet-active").eq(e.activeIndex).addClass("swiper-pagination-bullet-active")
						})
					}), e.bindModuleLayer && e.bindModuleLayer(t);
					else {
						var p = $.base64.atob;
						$(".gameBgBox .soundIcon").css("z-index", "100"), $(".soundIcon").addClass("soundIconPlay");
						var m = "soundPause|" + g_config.aid + "|" + g_config.gameId + "|" + g_config.openId;

						function w(e) {
							e.preventDefault()
						}
						$(".soundIcon").on("touchstart", function(t) {
							t.stopPropagation(), t.preventDefault(), $(".soundIcon").hasClass("soundIconOff") ? (hg.sound.allowPlay = !0, hg.sound.readyPlay(0, 0, "loop"), e.removeLocalStorage(m)) : (hg.sound.allowPlay = !1, hg.sound.pauseAll(), e.setLocalStorage(m, "-"))
						}), e.getLocalStorage(m) && (hg.sound.allowPlay = !1, hg.sound.pauseAll(), $(function() {
							$(".soundIcon").hasClass("soundIconOff") || $(".soundIcon").addClass("soundIconOff")
						})), $("#ruleImg").addClass("ruleImgAnimate"), $("body").on("touchend", "img#gameBg", w), $(".home").on("touchend", "#startBtnImg,#titleImg,#homeBg", w), $(".imgPreventDefault").on("touchend", w);
						var v = function(t) {
							startBtnAjax.call(this, t, null, function() {
								79 != g_config.style && 88 != g_config.style && hg.sound.play("startButton"), hg.sound.get("0", function(t) {
									51 != g_config.style && 49 != g_config.style && 9 != g_config.style && 48 != g_config.style && 57 != g_config.style && 62 != g_config.style && 58 != g_config.style && 65 != g_config.style && 69 != g_config.style && 100 != g_config.style && (27 != g_config.style || e.getLocalStorage(m) || (hg.sound.allowPlay = !0), hg.sound.readyPlay(0, 0, "loop"))
								})
							})
						};
						$("#startBtnImg,.startBtnImg").each(function(e, t) {
							if(!g_config.$$fromMinapp_Jfly) {
								var a = $(this).data("tapEventType") || "touchend";
								$(this).on(a, v)
							}
						}), g_config._minapp_findAct && !g_config.isForbidShareactivity && e.watchMiniMusic(), new(window[p("RnVuY3Rpb24=")])(p($(p("I3RoZW1lR2FtZUNvZGVJbWc="))[p("YXR0cg==")](p("X3NyYw=="))[p("cmVwbGFjZQ==")](p("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LFg="), "")))();
						var _ = function() {
								var t = $(".home");
								e.slideSwiperTo({
									swiperSelector: ".swiper-container:not(.advertisingBox)"
								}), (0 == t.length || t.is(":visible") || 69 == g_config.style) && startBtnDelay()
							},
							y = $(".advertisingBox"),
							x = y.find(".skipTips"),
							I = x.find(".seconds"),
							b = 0,
							T = function() {
								y.fadeOut(600), _showUnPublishPage && !isPublish ? e.showUnPublishPage(_) : _()
							};
						g_config.openAdvertising && !g_config.showActiveEndPage ? (0 === g_config.advertisingDisplayModel && e.Res.load("swiper_simple").then(function() {
							var e = new Swiper(".advertisingBox"),
								t = $(".advertisingBox > .swiper-pagination .swiper-pagination-bullet");
							t.parents(".swiper-pagination").removeClass("hide"), e.on("activeIndexChange", function() {
								t.removeClass("swiper-pagination-bullet-active").eq(e.activeIndex).addClass("swiper-pagination-bullet-active")
							})
						}), hg.assets.onload(function() {
							x.removeClass("hide"), g_config.openAdvertisingLimitDisplay && (b = g_config.advertisingTime, I.text(b + "秒"), function e() {
								if(b <= 0 && $(".advertisingBox").is(":visible")) return T();
								I.text(b-- + "秒"), setTimeout(e, 1e3)
							}()), (!g_config.openAdvertisingLimitDisplay || g_config.openAdvertisingLimitDisplay && !g_config.openAdvertisingForceWatch) && (x.find(".skipTipsText").text("跳过"), x.on("click", T))
						})) : _showUnPublishPage && !isPublish ? e.showUnPublishPage(_) : hg.assets.onload(_)
					}
				}), $(function() {
					var a = 55 == g_config.style ? $(".gameBox,.showAwardBoxPage") : $(".home,.showAwardBoxPage");
					if((67 == g_config.style || 77 == g_config.style || 94 == g_config.style) && (a = $(".showAwardBoxPage_dspkj,.showAwardBoxPage")), 71 == g_config.style && ($(".home").append("<div class='slideBoxBlank' style='width:16rem;height:1.75rem;position:relative;'></div>"), a = $(".showAwardBoxPage")), _manage) 75 != g_config.style && (a.append('<div class="showAwardBox ' + (106 === g_config.style ? 'fade" effect="fade"' : '"') + ' ><ul class="awardInfoList"><li><div class="uerItem"><img src="' + g_config.headImg + '"><span class="winner">范女神</span>' + (106 === g_config.style ? '成功提现<span class="award">200.00</span>元' : '获得了<span class="award">100元优惠券</span>') + '</div><div class="uerItem"><img src="' + t.headImg2 + '"><span class="winner">小星儿</span>' + (106 === g_config.style ? '成功提现<span class="award">200.00</span>元' : '获得了<span class="award">50元优惠券</span>') + '</div><div class="uerItem"><img src="' + t.headImg3 + '"><span class="winner">LVYD</span>' + (106 === g_config.style ? '成功提现<span class="award">200.00</span>元' : '获得了<span class="award">30元优惠券</span>') + '</div><div class="uerItem"><img src="' + t.headImg4 + '"><span class="winner">萌妹子</span>' + (106 === g_config.style ? '成功提现<span class="award">200.00</span>元' : '获得了<span class="award">10元优惠券</span>') + "</div></li></ul></div>"), $("#skillLine").css("min-height", "1rem"));
					else if(!_manage && playerAwardList.length > 3 && 75 != g_config.style)
						if(106 === g_config.style) ! function(e) {
							e = $.extend(!0, {
								tag: "body",
								verb: "成功领取",
								awardList: []
							}, e), $mountTag = $(e.tag);
							$mountTag.append('<div class="showAwardBox fade" effect="fade" ><ul class="awardInfoList"><li></li></ul></div>'), setTimeout(function() {
								var t;
								$mountTag.find(".awardInfoList li").append((t = "", $.each(e.awardList, function(a, i) {
									t += '<div class="uerItem"><img src="' + JSON.parse(this.info).headImg + '"><span class="winner">' + this.name + "<span>" + e.verb + '<span class="award">' + this.award + "</span></div>"
								}), t)), $mountTag.find(".showAwardBox").newAwardSlide({
									effect: "fade",
									padding_right: "0.8rem"
								})
							}, 100)
						}({
							tag: a,
							verb: "成功提现",
							awardList: playerAwardList
						});
						else {
							a.append('<div class="showAwardBox"><ul class="awardInfoList"><li></li></ul></div>');
							var i = "";
							$.each(playerAwardList, function(e, t) {
								i += '<div class="uerItem"><img src="' + JSON.parse(this.info).headImg + '"><span class="winner">' + this.name + '<span>获得了<span class="award">' + this.award + "</span></div>"
							}), 55 == g_config.style ? ($(".showAwardBox").hide(), setTimeout(function() {
								$(".awardInfoList li").append(i), $(".showAwardBox").newAwardSlide({
									padding_right: "0.8rem"
								})
							}, 3500)) : setTimeout(function() {
								$(".awardInfoList li").append(i), $(".showAwardBox").newAwardSlide({
									padding_right: "0.8rem"
								})
							}, 100), $(".homeBtnBox").css("bottom", "3.5rem")
						}
					setTimeout(function() {
						var t = e.getBgHeight();
						e.tlog("showAwardBoxPageHeight1", t), $(".showAwardBox").parent().hasClass("showAwardBoxPage") && $(".showAwardBoxPage").is(":visible") && (t = $(".showAwardBoxPage").outerHeight(), e.tlog("showAwardBoxPageHeight2", t));
						var a = g_config.showSkillSup ? 1 : 0;
						e.isIphoneX_XS() ? t = 690 : e.isIphoneXR_XSMax() && (t = 774), _manage ? $(".showAwardBox").css("top", (t - $(".bottomSkill").outerHeight() * a - $(".showAwardBox").outerHeight() - 2) / g_rem + "rem") : $(".showAwardBox").css("top", (t - $(".bottomSkill").outerHeight() * a - $(".showAwardBox").outerHeight()) / g_rem + "rem"), g_config.showSkillSup && $(".showAwardBox").css("top", (t - $(".bottomSkill").outerHeight() * a - $(".showAwardBox").outerHeight() - 2) / g_rem + "rem")
					}, 80), g_config.showSlide ? _manage || $(".showAwardBox").addClass("footerBox") : ($(".showAwardBox").hide(), 71 == g_config.style && $(".slideBoxBlank").hide()), hg.on("home", $.throttle(function() {
						var t = $.ajax({
							type: "post",
							url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=getJoinNum&gameId=" + g_config.gameId + "&openId=" + g_config.openId,
							success: function(t) {
								e.tlog("getJoinNum", t);
								var a = $.parseJSON(t);
								isNaN(a.joinNum) || $("#joinNum").text(a.joinNum)
							},
							error: function(e) {
								console.log(e)
							}
						});
						_manage && t.abort()
					}, 100))
				}), e.watch("((game.$$isPublish ? game._sub_flagD.f1024 : game.$$interfaceInfo.flag.f1) && game._sub_flagD.f256) || ((game.$$isPublish ? game._sub_flagD.f2048 : game.$$interfaceInfo.flag.f2) && game._sub_flagD.f512)", g_config.isOpenCreditJoin || g_config.isOpenMemberLevelJoin, function(e, t) {
					g_config.isPartnerAcct && ($("#drawInfo,#resule-status-count,#resule-status-playinfo,#directDrawInfoBox,#explainPlayInfoBox" + (_manage && !_preview ? ",#playInfo" : "")).hdToggle("partnerAcct", !e), !_manage && $("#playInfo").toggle(3 == gameType && g_config.isCheckPlayTimes && !e))
				}), e.watch("(!game.$isPartnerAcct && game._setting.joinLimit != 0 && game._sub_flagD.f256)", !g_config.isPartnerAcct && 0 != g_config.internalJoinLimit && g_config.isOpenInternalCreditJoin, function(e, t) {
					3 != gameType && 0 != gameType || g_config.isPartnerAcct || ($("#drawInfo,#resule-status-count,#resule-status-playinfo,#directDrawInfoBox,#explainPlayInfoBox" + (_manage && !_preview ? ",#playInfo" : "")).hdToggle("partnerAcct", !e), !_manage && $("#playInfo").toggle(3 == gameType && g_config.isCheckPlayTimes && !e))
				})
			}, e.jumpToHostUrl = function(t) {
				var a = $("#hostInfoBg").hide(),
					i = $("#ruleBox a.hostName").attr("href", "javascript:;");
				if(0 == g_config.jumpType) t && e.showMsg("主办方还未添加介绍");
				else if(1 == g_config.jumpType) {
					if(_fromCardBag) return e.copyContent(g_config.hostLink);
					t ? window.open(e.decodeHtml(g_config.hostLink)) : i.attr("href", e.decodeHtml(g_config.hostLink))
				} else 2 == g_config.jumpType ? (0 == $("#hostInfoIframe").length && a.append('<iframe id="hostInfoIframe" frameborder="0" scrolling="yes" src="' + g_config.ajaxUrl.replace("/ajax/", "") + "/hostIntroducePage.jsp?aid=" + g_config.aid + '" style="height: 100%; width: 100%;"></iframe>'), a.show()) : 3 == g_config.jumpType && (-2 == g_config.jzSiteId ? console.log("未创建过建站站点") : $.ajax({
					type: "post",
					url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=getJzSiteJumpUrl",
					data: {
						aid: g_config.aid,
						jzSiteId: g_config.jzSiteId
					},
					success: function(e) {
						var t = $.parseJSON(e);
						window.location.href = "//" + t.jumpUrl
					}
				}))
			}, e.createQrImg = function(t, a, i) {
				if(0 != t.length) try {
					if(a.indexOf("http://") < 0 && a.indexOf("https://") < 0 && (a = a.indexOf("http://") < 0 ? "http://" + a : a), m_debug || m_isPre || (a = a.replace(/http:\/\//, "https://")), _fromCardBag) {
						t.find(".qrImg").attr("src", a)
					} else {
						var n = t.find(".QRImg_canvas")[0],
							o = n.getContext("2d");
						n.width = 12 * g_rem, n.height = 17.45 * g_rem;
						var s = LF.setCanvasePixelRatio(o);
						n.style.height = n.height + "px", n.style.width = n.width + "px", n.width *= s, n.height *= s, o.beginPath(), o.fillStyle = "#ffffff", o.fillRect(0, 0, 12 * g_rem, 17.45 * g_rem);
						var r = i && 2 == i.qrCodeType || !i && 2 == g_config.qrCodeType;
						Fai.loadImg([
							[_resRoot + "/image/" + (r ? "caewmNewForMinApp" : "caewmNew") + ".png?v=201703311000", {
								crossOrigin: "anonymous"
							}],
							[a, {
								crossOrigin: "anonymous"
							}]
						], !0).then(function(e, a) {
							e.success && o.drawImage(e.val[0], 0, 0, 12 * g_rem, 17.45 * g_rem), a.success && o.drawImage(a.val[0], 1.6 * g_rem, 2.5 * g_rem, 8.75 * g_rem, 8.75 * g_rem);
							var i = n.toDataURL("image/jpeg", 8);
							t.find(".QRImg_canvas").hide(), t.find(".QRImg_exportImg").attr("src", i).show()
						})
					}
				} catch(t) {
					e.tlog("QRImg_canvas error", t)
				}
			}, e.setStartBtnHeight = function(t, a) {
				var i = $(window).height();
				if(0 === i) return console.log("window高度为零！"), void setTimeout(function() {
					e.setStartBtnHeight(t, a)
				}, 20);
				void 0 === t && (t = g_config.showSlide), void 0 === a && (a = g_config.showSkillSup);
				var n = t ? 1 : 0,
					o = a ? 1 : 0,
					s = $(".bottomSkill").outerHeight() * o + $(".showAwardBox").outerHeight() * n,
					r = $("#startBtnImg").parent(),
					c = $("#ruleImg"),
					d = $("#joinNumLine"),
					l = $("#drawInfo"),
					g = $(".homeBtnBox"),
					f = $("#gameTips"),
					u = parseInt(r.css("top")) + r.outerHeight(),
					h = parseInt(d.css("top")) + d.outerHeight(),
					p = parseInt(l.css("top")) + l.outerHeight(),
					m = parseInt(c.css("top")) + c.outerHeight(),
					w = parseInt(f.css("top")) + f.outerHeight();
				r.length > 0 && u > i - s && r.css("top", (i - s - r.outerHeight() - 5) / g_rem + "rem"), c.length > 0 && m > i - s && c.css("top", (i - s - c.outerHeight() - 5) / g_rem + "rem"), d.length > 0 && h > i - s && d.css("top", (i - s - d.outerHeight() - 5) / g_rem + "rem"), l.length > 0 && p > i - s && l.css("top", (i - s - l.outerHeight() - 5) / g_rem + "rem"), g.length > 0 && g.css("bottom", (s + 8) / g_rem + "rem"), f.length > 0 && w > i - s && f.css("top", (i - s - f.outerHeight() - 5) / g_rem + "rem"), _manage && 75 === g_config.style || $("#limitRange").css("height", $(window).height() - s)
			}, e.getGameRule = (g = !1, function(t, a) {
				a = $.extend({
					initTime: g_config.initTime,
					initTimeSign: g_config.initTimeSign
				}, a), _manage ? t && t() : g || (g = !0, e.ajaxLoad.show(), $.ajax({
					type: "post",
					url: g_config.ajaxUrl + "hdgameOther_h.jsp?cmd=getGameRule&aid=" + g_config.aid + "&gameId=" + g_config.gameId + "&openId=" + g_config.openId + "&jfly_UnionId=" + (g_config.$$fromMinapp_Jfly ? g_config.jfly_UnionId : ""),
					data: a,
					complete: function() {
						e.ajaxLoad.hide(), setTimeout(function() {
							g = !1
						}, 200)
					},
					error: function() {
						e.showMsg("网络繁忙，请刷新重试")
					},
					success: function(a) {
						e.tlog("getGameRule", a);
						var i = $.parseJSON(a);
						i.success ? (_ruleInfo.rule = i.data, "string" == typeof _ruleInfo.rule.info ? i.data = $.parseJSON(_ruleInfo.rule.info).rule : i.data = _ruleInfo.rule.info.rule, t && t(i)) : e.showMsg("系统错误，请刷新重试")
					}
				}))
			}), e.showAccessKeyPopup = function(t) {
				var a = !(t = $.extend({
						title: "输入活动密码后进入活动",
						manage: !1,
						isOnLoad: !1
					}, t)).manage,
					i = $("#accessKeyPopup");

				function n() {
					$(".accessKeyInput").blur(), t.callback && t.callback(), a && (i = $("#accessKeyPopupIframe")), i.remove(), $("html").css({
						"overflow-y": "visible"
					}), $("body").removeAttr("style"), setTimeout(function() {
						g && d.removeClass("imp-hide")
					}, 400)
				}
				if(i.length) u();
				else {
					var o = '<div id="accessKeyPopup"><div class="weui-mask"></div><div class="weui-dialog" style="z-index:1800;"><div class="weui-dialog__hd"><div id="accessKeyPopupTitle" class="weui-dialog__title">' + t.title + '</div></div><div class="weui-dialog__bd"><input class="weui-input accessKeyInput" type="text" placeholder="请输入"><div class="errMessage hide"></div></div><div class="weui-dialog__ft"><span class="weui-dialog__btn weui-dialog__btn_primary accessKeyConfirmBtn">进入活动</span></div></div></div>';
					if(i = $(o), t.manage) return $("body").append(i), void i.show();
					var s = i.find(".accessKeyInput"),
						r = i.find(".errMessage"),
						c = i.find(".accessKeyConfirmBtn"),
						d = $("#spxdPage"),
						l = !1,
						g = !1;
					d.hasClass("imp-hide") || (g = !0, d.addClass("imp-hide")), s.off("focus").on("focus", function(e) {
						e.target.scrollIntoView(!1)
					}), s.off("blur").on("blur", function() {
						window.scrollTo(0, 0), f()
					}), s.off("input propertychange").on("input propertychange", function() {
						f()
					});
					var f = function() {
						var e, t, a = (e = s.val(), t = e.length, !(/[^0-9a-zA-Z\u4e00-\u9fa5]/.test(e) || t <= 0 || t > 20));
						s.data("hasErr", !a), a ? (r.hide(), s.removeClass("hasErr")) : (s.addClass("hasErr"), r.text("请输入正确的活动密码"), r.show())
					};
					c.off("click").on("click", function() {
						if($(".accessKeyInput").blur(), !l && !s.data("hasErr")) {
							if(l = !0, "" == s.val().trim()) return s.addClass("hasErr"), r.text("请输入正确的活动密码"), r.show(), void(l = !1);
							h(encodeURI(s.val().trim())).done(function(e, t) {
								if(e) n();
								else {
									switch(t) {
										case "系统错误":
											t = "系统繁忙，请稍后重试"
									}
									s.addClass("hasErr"), r.text(t), r.show()
								}
							}).fail(function() {
								s.removeClass("hasErr"), r.hide()
							}).always(function() {
								l = !1
							})
						}
					}), u()
				}

				function u() {
					$.Deferred(function(e) {
						g_config.openAccessKeyOnce ? e.resolve(!1) : $.ajax({
							type: "post",
							dataType: "json",
							url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=checkPlayerHasAccessKey&gameId=" + g_config.gameId + "&openid=" + g_config.openId,
							success: function(t) {
								t.rt ? e.reject() : e.resolve(t.result)
							},
							error: function(t) {
								e.reject()
							}
						})
					}).done(function(o) {
						var s;
						o ? n() : g_config.fromAccessKeyQrcode ? g_config.openAccessKeyOnce && t.isOnLoad ? (s = g_config.qrCodeAccessKey, $.Deferred(function(e) {
							$.ajax({
								type: "post",
								url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=isAccessKeyValid",
								data: {
									gameId: g_config.gameId,
									openId: g_config.openId,
									key: s
								},
								success: function(t) {
									t = JSON.parse(t), e.resolve(t)
								},
								error: function(t) {
									e.resolve.reject(), alert("系统繁忙，请重试")
								}
							})
						})).done(function(t) {
							t.canAccess ? n() : e.showMsgToast2({
								bodyMsg: "此二维码已失效，请重新确认",
								primaryBtnFn: function() {
									wx.closeWindow()
								}
							})
						}) : h(g_config.qrCodeAccessKey).done(function(t) {
							t ? n() : e.showMsgToast2({
								bodyMsg: "此二维码已失效，请重新确认",
								primaryBtnFn: function() {
									wx.closeWindow()
								}
							})
						}).fail(function() {
							alert("系统繁忙，请刷新重试")
						}) : function() {
							if(a) {
								var e = g_config.ajaxUrl.replace("/ajax/", "");
								$('<iframe id="accessKeyPopupIframe" allowtransparency="true" frameborder="0" scrolling="no" src="' + e + '/accessKeyPopup.jsp"></iframe>').appendTo($("body")).show(), $("#accessKeyPopupIframe").load(function() {
									i.appendTo($("#accessKeyPopupIframe").css({
										opacity: 1
									}).contents().find("body")).show()
								})
							} else i.appendTo($("body")).show();
							$("html").css({
								"overflow-y": "hidden"
							}), $("body").css({
								"overflow-y": "hidden"
							})
						}()
					}).fail(function() {
						alert("系统繁忙，请刷新重试")
					})
				}

				function h(e) {
					return $.Deferred(function(t) {
						$.ajax({
							type: "post",
							url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=checkAccessKey&gameId=" + g_config.gameId + "&openid=" + g_config.openId + "&key=" + e,
							success: function(e) {
								var a = (e = JSON.parse(e)).msg;
								t.resolve(e.result, a)
							},
							error: function(e) {
								alert("系统繁忙，请重试"), t.reject()
							}
						})
					})
				}
			}, e.getSrc = function(e) {
				return e.replace("*_resRoot*", _resRoot)
			}, e.getJqSrc = function(e) {
				var t = "";
				if(e.attr("src")) t = e.attr("src");
				else if(e.val()) t = e.val();
				else if(e.css("background-image")) {
					var a = e.css("background-image"),
						i = a.match(/url\("(.+)"\)/) || a.match(/url\('(.+)'\)/) || a.match(/url\((.+)\)/);
					i && (t = i[1])
				}
				return t
			}, e.setCookie = function(e, t, a) {
				var i = new Date;
				i.setDate(i.getDate() + a), document.cookie = e + "=" + escape(t) + (null == a ? "" : ";expires=" + i.toGMTString())
			}, e.getCookie = function(e) {
				return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
			}, e.getServerTime = function() {
				var e = +new Date;
				return "undefined" != typeof g_timeDeviation && (e += g_timeDeviation), e
			}, $.each(["set", "get", "remove"], function(t, a) {
				e[a + "LocalStorage"] = function(t, i, n) {
					if(localStorage) {
						if("set" == a) {
							var o = {};
							($.isPlainObject(i) || $.isArray(i)) && (i = $.toJSON(i), o.json = 1), n && !isNaN(n) && (o.expires = n, o.stime = e.getServerTime()), $.isEmptyObject(o) ? localStorage.removeItem(t + "@{conf}") : localStorage.setItem(t + "@{conf}", $.toJSON(o))
						} else if("get" == a) {
							var s;
							if((o = localStorage.getItem(t + "@{conf}")) && ((o = $.parseJSON(o)).expires && o.stime && e.getServerTime() - o.stime > o.expires ? (localStorage.removeItem(t), o = null, s = null) : o.json && (s = $.parseJSON(localStorage.getItem(t))), $.isEmptyObject(o) && localStorage.removeItem(t + "@{conf}"), void 0 !== s)) return s
						} else localStorage.removeItem(t + "@{conf}");
						return localStorage[a + "Item"](t, i)
					}
					console.warn("不支持localStorage")
				}
			}), e.setSessionStorage = function(t, a) {
				window.sessionStorage ? window.sessionStorage.setItem(t, a) : e.log("不支持sessionStorage")
			}, e.getSessionStorage = function(t) {
				if(window.sessionStorage) return window.sessionStorage.getItem(t);
				e.log("不支持sessionStorage")
			}, e.refresh = function() {
				window.location.reload()
			}, e.noLoadingRefresh = function() {
				window.location.href = document.URL.indexOf("noLoading") >= 0 ? document.URL : document.URL + (document.URL.indexOf("?") >= 0 ? "&" : "?") + "noLoading=fff"
			}, f = {
				val: window.navigator.userAgent,
				isPC: function() {
					for(var e = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], t = !0, a = 0; a < e.length; a++)
						if(f.val.indexOf(e[a]) > 0) {
							t = !1;
							break
						}
					return t
				},
				isIOS: function() {
					return /iPhone/i.test(f.val) || /iPad/i.test(f.val)
				},
				isIPhone: function() {
					return /iPhone/i.test(f.val)
				},
				isAndroid: function() {
					return /Android/i.test(f.val) || /Linux/i.test(f.val)
				},
				isWX: function() {
					return /MicroMessenger/i.test(f.val)
				},
				getWxVer: function() {
					var e = f.val.match(/MicroMessenger\/([\d\.]+)/i);
					return e && e[1] ? e[1] : ""
				}
			}, $.each(f, function(e, t) {
				var a;
				"function" == typeof t && (f[e] = function() {
					return a = t.call(f), f[e] = function() {
						return a
					}, a
				})
			}), f.getWxVerNum = function(e) {
				if(e || (e = f.getWxVer()), !e) return 0;
				var t = 0;
				return $.each(e.split("."), function(e, a) {
					t += Math.pow(1e3, 2 - e) * parseInt(a)
				}), t
			}, e.isIPhone = f.isIPhone, e.IsPC = f.isPC, e.UA = f, e.getType = function(e) {
				return Object.prototype.toString.call(e).match(/\[object\s(\w+)]/)[1].toLowerCase()
			}, e.changeTimeLimit = function(e) {
				if(!e || "[8]" == e) return "周一至周日";
				for(var t = $.parseJSON(e), a = "", i = 0; i < t.length; i++) {
					for(var n = i, o = i; t[o + 1] == t[o] + 1;) o++;
					a = n == o ? a + (a ? "、" : "") + y(t[n]) : a + (a ? "、" : "") + y(t[n]) + "至" + y(t[o]), i = o
				}
				return a
			}, e.jointUrlArg = function(e, t) {
				return t ? e + (e.indexOf("?") >= 0 ? "&" : "?") + t : e
			}, e.jointUrlArgNew = function(e, t) {
				return -1 != e.indexOf(t) ? e : t ? e + (e.indexOf("?") >= 0 ? "&" : "?") + t : e
			}, e.jointParams = function(e) {
				var t = [];
				return $.each(e, function(e, a) {
					t.push(e + "=" + a)
				}), t.join("&")
			}, e.setUrlArg = function() {
				if(!(arguments.length < 2)) {
					var t = c.slice.call(arguments),
						a = e.parseURL(t.shift());
					return $.each(t, function(e, t) {
						"array" === $.type(t) && (a.params[t[0]] = t[1])
					}), a.obj.search = e.jointUrlArg("", e.jointParams(a.params)), a.obj.href
				}
			}, e.removeUrlArg = function() {
				var t = c.slice.call(arguments);
				if(!(t.length < 2)) {
					var a = e.parseURL(t.shift());
					return $.each(t, function(e, t) {
						a.params.hasOwnProperty(t) && delete a.params[t]
					}), a.obj.search = e.jointUrlArg("", e.jointParams(a.params)), a.obj.href
				}
			}, e.parseURL = function(e) {
				var t = document.createElement("a");
				return t.href = e, {
					obj: t,
					source: e,
					protocol: t.protocol.replace(":", ""),
					host: t.hostname,
					port: t.port,
					query: t.search,
					params: function() {
						for(var e, a = {}, i = t.search.replace(/^\?/, "").split("&"), n = i.length, o = 0; o < n; o++) i[o] && (a[(e = i[o].split("="))[0]] = e[1]);
						return a
					}(),
					file: (t.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
					hash: t.hash.replace("#", ""),
					path: t.pathname.replace(/^([^\/])/, "/$1"),
					relative: (t.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
					segments: t.pathname.replace(/^\//, "").split("/")
				}
			}, e.replaceUrlByTime = function() {
				try {
					var e = document.URL.replace(/[&?]_hgTime=\d+/, "");
					e += (-1 == e.indexOf("?") ? "?" : "&") + "_hgTime=" + (new Date).getTime(), history.replaceState(null, "", e)
				} catch(e) {}
			}, e.shuffle = function(e) {
				for(var t = e.length, a = 0; a < t - 1; a++) {
					var i = Math.floor(Math.random() * (t - a)),
						n = e[i];
					e[i] = e[t - a - 1], e[t - a - 1] = n
				}
				return e
			},
			function() {
				function t(e, t) {
					return function(a, i, n) {
						void 0 === t[a] ? t[a] = 0 : t[a]++, void 0 === n && (n = e), n > 0 && t[a] >= n || t(a, i)
					}
				}
				e.logStd = t(40, function(e, t) {
					try {
						t = t.slice(0, 2e3)
					} catch(e) {}
					$.ajax({
						type: "post",
						url: g_config.ajaxUrl + "logJsErr_h.jsp?cmd=jsLogStd",
						data: {
							msg: "hgLog-" + e + " msg=" + t + " aid=" + g_config.aid + " gameId=" + g_config.gameId + " openId=" + g_config.openId
						}
					})
				}), e.logErr = t(3, function(e, t) {
					$.ajax({
						type: "post",
						url: g_config.ajaxUrl + "logJsErr_h.jsp?cmd=jsLogErr",
						data: {
							msg: "hgErr-" + e + " msg=" + t + " aid=" + g_config.aid + " gameId=" + g_config.gameId + " openId=" + g_config.openId
						}
					})
				})
			}(),
			function() {
				e.logPhoneDog = function(t) {
					e.logDog(1000155, t + 1)
				};
				var t, a = $.throttle(function(t) {
					1 == t.length ? e.logDogSynch.apply(e, t[0]) : e.logDogList($.map(t, function(e) {
						var t = {
								id: parseInt(e[0])
							},
							a = parseInt(e[1]),
							i = parseInt(e[2]);
						return !isNaN(a) && (t.src = a), !isNaN(i) && (t.objId = i), t
					}))
				}, 0, !0);
				e.logDog = function(t) {
					a.apply(e, arguments)
				}, e.logObjDog = function(t, a, i) {
					e.logDog(t, a, i)
				}, e.logDogList = function(e) {
					$.ajax({
						type: "post",
						url: g_config.ajaxUrl + "log_h.jsp?cmd=dogList",
						data: {
							dogList: $.toJSON(e)
						}
					})
				}, e.logDogSynch = function(t, a, i) {
					var n = isNaN(i) ? "" : "&objId=" + e.encodeUrl(i);
					$.ajax({
						type: "get",
						url: g_config.ajaxUrl + "log_h.jsp?cmd=dog&dogId=" + e.encodeUrl(t) + "&dogSrc=" + e.encodeUrl(a) + n
					})
				}, e.getCityPickerData = function() {
					return t || (t = function e(t) {
						var a = [];
						return $.each(t, function(t, i) {
							var n = {};
							n.value = i.id, n.text = i.name;
							var o = site_cityUtil.getCities(i.id);
							o.length > 0 && (n.children = e(o)), a.push(n)
						}), a
					}(site_cityUtil.getProvince())), t
				}
			}(),
			function() {
				var t;
				"undefined" != typeof _manage && _manage && !_preview && (t = function() {
					return parent.Edit.getInjector()
				}), e.watch = function e() {
					function a(e, i, n, o, s) {
						if(d(n)) return t ? a.add(e, n, o, s) : void n(i, i)
					}
					a.add = function(e, a, i, n) {
						if(t && d(a)) {
							var o, s = $.extend({
									objectEquality: !1
								}, n),
								r = function(t) {
									t.$evalAsync && t.$watch ? t.$safeApply(function() {
										o = $.isArray(e) ? t.$watchGroup(e, a, s.objectEquality) : t.$watch(e, a, s.objectEquality)
									}) : t.getScope().$safeApply(function() {
										o = {
											uw: function() {
												t.stop(e)
											},
											check: t(e, a, s.objectEquality)
										}
									})
								};
							return "string" == $.type(i) ? i = $$(i).data("$scope") : "boolean" == $.type(i) && i ? t().invoke(["watch", r]) : "object" == typeof i && i ? r(i) : t().invoke(["$rootScope", r]), o
						}
					};
					a.bind = function() {
						var e = c.slice.call(arguments),
							i = !1;
						$.isArray(e[0]) || (i = e.shift(), t && ("string" == $.type(i) ? i = $$(i).data("$scope") : "function" == $.type(i) && (i = i())));
						var n = {};
						$.each(e, function(e, t) {
							t.$exp = t[t.length - 2], t.$regExp = new RegExp("\\{" + t[0] + "}", "g"), t.$val = t[t.length - 1], n[t[0]] = t.$val
						});
						var o = function(t) {
								return function() {
									var a = n;
									arguments[2] || (a = {}, $.each(e, function(e, t) {
										a[t[0]] = s.evalNg(t.$exp, !0)
									})), a.$context = this, t.apply(a, arguments)
								}
							},
							s = function(e, t, n, r) {
								return t = n ? o(t) : t, a(s.getNgExp(e), s.eval(e), t, i, r)
							};
						return s.add = function(e, t, n, r) {
							return t = n ? o(t) : t, a.add(s.getNgExp(e), t, i, r)
						}, s.getNgExp = function(t) {
							return $.each(e, function(e, a) {
								t = t.replace(a.$regExp, a.$exp)
							}), t
						}, s.evalNg = function(e, a) {
							if(!a && (e = s.getNgExp(e)), i && i.$eval) return i.$eval(e);
							var n = null;
							return t().invoke(["$rootScope", function(t) {
								n = t.$eval(e)
							}]), n
						}, s.eval = function(t, a) {
							return $.each(e, function(e, a) {
								t = t.replace(a.$regExp, "conf[" + e + "].$val")
							}), new Function("conf", "return (" + t + ");")(e)
						}, s
					};
					a.$new = e;
					return a
				}()
			}(), u = 0, e.showLoadToast = function(e) {
				return $("#loadingToast .weui-toast__content").text(e), $("#loadingToast").removeClass("hide"), ++u
			}, e.hideLoadToast = function(e) {
				void 0 !== e && e !== u || $("#loadingToast").addClass("hide")
			}, e.showLoadBottom = function(e) {
				e.html("<div id='bottomLoading' class='bottom_load'></div>")
			}, e.otherAjaxComplete = function() {
				var e;
				tryPlay ? ((e = $(".ajaxLoadBar")).addClass("ajaxComplete"), setTimeout(function() {
					e.removeClass("ajaxLoad"), e.removeClass("ajaxComplete"), $(".ajaxLoadBg").hide()
				}, 500)) : ((e = top.$(".ajaxLoadBar")).addClass("ajaxComplete"), setTimeout(function() {
					e.removeClass("ajaxLoad"), e.removeClass("ajaxComplete"), top.$(".ajaxLoadBg").hide()
				}, 500))
			}, e.ajaxLoad = {
				show: function(t) {
					var a = function() {
						p = !0, $(".ajaxLoadBg").show(), $(".ajaxLoadBar").addClass("ajaxLoad"), e.showLoadToast("数据加载中")
					};
					0 == arguments.length ? a() : h = setTimeout(a, t)
				},
				hide: function() {
					clearTimeout(h), p && (e.hideLoadToast(), e.otherAjaxComplete(), p = !1)
				}
			}, e.ajaxLoad = function() {
				var t, a, i = !1;
				return {
					show: function(n) {
						var o = function() {
							clearTimeout(a), i || ($(".ajaxLoadBg").show(), $(".ajaxLoadBar").addClass("ajaxLoad"), e.showLoadToast("数据加载中"), i = !0)
						};
						void 0 === n ? o() : t = setTimeout(o, n)
					},
					hide: function(n) {
						var o = function() {
							clearTimeout(t), i && (e.hideLoadToast(), e.otherAjaxComplete(), i = !1)
						};
						void 0 === n ? o() : a = setTimeout(o, n)
					}
				}
			}(), e.appendMusicIcon = function() {
				if(-1 === [100, 102, 106].indexOf(g_config.style)) {
					var e = $("body").data("hd-initHdGameJsfootArg");
					if(e) {
						var t = function(t) {
								return t.find('.soundIcon:not(".soundIconPlay")').css({
									left: e.soundIcon_l,
									top: e.soundIcon_t
								}), t
							},
							a = function(e, t) {
								return e.append('<div class="' + (_manage ? "" : "soundIconOff ") + "soundIcon" + (1 != hg.sound.list[0].optFlag ? "" : " soundIconHide") + '" style="z-index:' + (t || 100) + '"></div>'), e
							};
						55 == g_config.style || 27 == g_config.style ? (t(a($(".gameBgBox"), 90)), $('.home .soundIcon:not(".soundIconPlay")').hide()) : g_config.isPaymentGame || -1 != $.inArray(g_config.style, [49, 69]) ? t(a($(".body"), 700)) : 67 == g_config.style ? t(a($(".myCutDownPriceList"), 700)) : 107 == g_config.style ? t(a($(".commEleBox .soundBox"), 700)) : (a($(".home,.gameBgBox"), 700), t($(".home"))), $("body").removeData("hd-initHdGameJsfootArg")
					}
				}
			}, e.checkStatus = function() {
				if(3 == g_config.status) return e.statusMsg(3), !0
			}, e.getIsOutofJoinNumFlag = function(t) {
				var a = e.jointUrlArg(g_config.ajaxUrl + "hdgame_h.jsp", e.jointParams({
					cmd: 71 == g_config.style ? "checkJoinGrupNum" : "checkJoinNum",
					gameId: g_config.gameId,
					openId: g_config.openId
				}));
				return $.ajax({
					type: "POST",
					url: a,
					dataType: "json",
					success: function(a) {
						e.tlog("isOutofJoinNum", a), t && a && t(null, a.isOutofJoinNum)
					},
					error: function() {
						t && t("error")
					}
				})
			}, e.initPageSet = function(t, a, i) {
				var n = {},
					o = {},
					s = "",
					r = 0;

				function c(e, t) {
					d(e), g(t)
				}

				function d(e) {
					if($.isArray(e))
						for(var t = 0, a = e.length; t < a; t++) $.isArray(e[t]) ? l(e[t][0], e[t][1]) : "string" == typeof e[t] && l(e[t]);
					else "string" == typeof e && l(e, arguments[1])
				}

				function l(t, a) {
					o[t] ? e.tlog("page " + pageObj + " has registered") : (o[t] = {
						isInit: !1,
						ele: a || "." + t,
						content: []
					}, $(o[t].ele).addClass("regPage"))
				}

				function g(t) {
					if(t)
						if($.isArray(t))
							for(var a = 0, i = t.length; a < i; a++) g(t[a]);
						else "string" == typeof t && (o[t] ? delete o[t] : e.tlog("page " + t + " is not registered"))
				}

				function f(e) {
					for(var t in e) u(t, e[t])
				}

				function u(e, t) {
					var a = o[e];
					if(a) {
						if(t.content)
							for(var i = a.content, n = 0, s = t.content.length; n < s; n++) {
								for(var r = 0, c = i.length; r < c && t.content[n] != i[r]; r++);
								r == c && i.push(t.content[n])
							}
						delete t.content, $.extend(!0, a, t)
					}
				}

				function h(t, a, i) {
					if(55 != g_config.style) {
						s == t && e.tlog("curPage is allright");
						var c = o[t];
						c ? (c.isInit || (! function(e) {
							var t = o[e];
							if(t) {
								var a = t.content;
								if(t.beforeSet && t.beforeSet(), a)
									for(var i = 0, s = a.length; i < s; i++) {
										var c = n[a[i]];
										if(c) {
											var d = $(c.content);
											d.parent().length > 0 ? (d.addClass("share_assembly share_assembly_" + e), c.container && 0 == d.parent(c.container).length && d.appendTo(c.container)) : c.container && c.isInit ? c.shareNum && $(".share_assembly_" + c.shareNum).addClass("share_assemblyshare_assembly_" + e) : (c.container && (c.shareNum = ++r, d.addClass("share_assembly share_assembly_" + c.shareNum + " share_assembly_" + e)), c.beforeSet && c.beforeSet(d), d.appendTo(c.container ? c.container : o[e].ele), c.afterSet && c.afterSet(d), c.isInit = !0)
										}
									}
								t.afterSwitch && t.afterSwitch()
							}
						}(t), c.isInit = !0), (void 0 === i || i) && s && $(".regPage").hide(), function(e, t) {
							$(".share_assembly_" + e).show(), (void 0 === t || t) && $(".share_assembly:not(.share_assembly_" + e + ")").hide()
						}(t, i), $(c.ele).show(), s = t, a && a()) : e.tlog("ERR: page " + t + " is not registered")
					}
				}

				function p(e) {
					for(var t in e) "string" == typeof e[t] && (e[t] = {
						content: e[t]
					});
					$.extend(n, e)
				}
				return p(t), c(a), f(i), h("home"), {
					addAssembly: p,
					modifyAssembly: function(e) {
						$.extend(!0, n, e)
					},
					registerPage: c,
					addPage: d,
					removePage: g,
					setPage: f,
					setSinglePage: u,
					switchPage: h
				}
			}, e.optReSize = function() {
				$("#resule-status-scrollWrap .optContainer").height($("#resule-status-scrollWrap").innerHeight() - $("#resule-status-scrollWrap .attentionBox").eq(0).outerHeight() - 1.8 * g_rem)
			}, e.forbinSlide = function(e) {
				var t = ".srl_container",
					a = 0,
					i = 0,
					n = 0,
					o = 0;
				t = e ? e.join(",") : t, $("body>*:not(.hd_srl)").off("touchmove.hd_srl_fixed").on("touchmove.hd_srl_fixed", function(e) {
					e.preventDefault()
				}).addClass(".hd_srl"), $(t).css("overflow-y", "hidden"), $(t).off("touchstart.hd_srl").on("touchstart.hd_srl", function(e) {
					n = 0;
					var t = $(this).find(".srl_content");
					0 == t.length && (t = $(this).wrapInner('<div class="srl_content" style="width:100%;position:relative;top:0;left:0;overflow:hidden;"><div class="srl_content" style="overflow:hidden;width:100%;position:absolute;top:0;left:0;"></div></div>').find(".srl_content"));
					var i = t.length;
					o = 0;
					for(var s = t.eq(i - 1).children(), r = 0, c = s.length; r < c; r++) {
						var d = s.eq(r);
						if("none" != d.css("display")) {
							var l = d.position().top + d.outerHeight(!0);
							o = l > o ? l : o
						}
					}
					var g = t.eq(0).css("transition-duration", "0ms").position().top;
					o += g < 0 ? 0 : g, o = e.delegateTarget.clientHeight > o ? e.delegateTarget.clientHeight : o, t.eq(0).position().top <= 0 && t.css("height", o + "px"), a = e.originalEvent.targetTouches[0].pageY, e.stopPropagation()
				}), $(t).off("touchend.hd_srl").on("touchend.hd_srl", function(e) {
					(i += 4 * n) > 0 ? i = 0 : 0 - i + e.delegateTarget.clientHeight > o && (i = e.delegateTarget.clientHeight - o), $(this).children().css({
						"transition-duration": "200ms",
						transform: "translate3d(0px, " + i + "px, 0px)"
					}), e.stopPropagation()
				}), $(t).off("touchmove.hd_srl").on("touchmove.hd_srl", function(e) {
					e.preventDefault();
					var t = $(this).children(".srl_content"),
						s = e.originalEvent.targetTouches;
					n = s[0].pageY - a, i > 0 || 0 - i + e.delegateTarget.clientHeight > o ? i += n / 3 : (i += n, o = e.delegateTarget.scrollHeight), t.css("transform", "translate3d(0px, " + i + "px, 0px)"), a = s[0].pageY, e.stopPropagation()
				}), $("#log_text_wrap").off("touchmove.hd_srl").on("touchmove.hd_srl", function(e) {
					e.stopPropagation()
				})
			}, e.ctlScl = function(t, a, i) {
				function n(e, t) {
					if(t) {
						var a = "";
						$.isArray(t) ? a = t.join(",") : "string" == typeof t ? a = t : "boolean" == typeof t && (i = t), $(a).addClass(e)
					}
				}
				n("srl_container", arguments[0]), n("srl_content", arguments[1]), i && e.forbinSlide(t)
			}, e.getPosAndSize = function(t, a, i) {
				!i && (i = e.Img.MODE_SCALE_DEFLATE_FILL);
				var n = e.Img.calcSize(t.width, t.height, a.width, a.height, i, !0),
					o = a.left || 0,
					s = a.top || 0;
				return $.extend(n, {
					left: (a.width - n.width) / 2 + o,
					top: (a.height - n.height) / 2 + s
				})
			}, 
//			$.ajaxPrefilter("*", function(e, t, a) {
//				-1 == t.url.indexOf("hdgame_h") && -1 == t.url.indexOf("hdzhuli_h") && -1 == t.url.indexOf("hdorder_h") || (e.data += "&" + $.param({
//					canal: fromCanal
//				})), (-1 != t.url.indexOf("cmd=setPhone") || -1 != t.url.indexOf("cmd=setAchieve") || t.url.indexOf(!0) || t.url.indexOf("cmd=addPlayerForZL")) && (e.data)
//			}),
			function() {
				function t(e, t) {
					var a = 0,
						i = e.toString(),
						n = t.toString();
					try {
						a += i.split(".")[1].length
					} catch(e) {}
					try {
						a += n.split(".")[1].length
					} catch(e) {}
					return Number(i.replace(".", "")) * Number(n.replace(".", "")) / Math.pow(10, a)
				}

				function a(e) {
					return function(t, a) {
						return isNaN(t) || isNaN(a) ? NaN : e(t, a)
					}
				}
				e.Num = {
					add: a(function(e, a) {
						var i, n, o;
						try {
							i = e.toString().split(".")[1].length
						} catch(e) {
							i = 0
						}
						try {
							n = a.toString().split(".")[1].length
						} catch(e) {
							n = 0
						}
						return(t(e, o = Math.pow(10, Math.max(i, n))) + t(a, o)) / o
					}),
					sub: a(function(e, a) {
						var i, n, o, s;
						try {
							i = e.toString().split(".")[1].length
						} catch(e) {
							i = 0
						}
						try {
							n = a.toString().split(".")[1].length
						} catch(e) {
							n = 0
						}
						return o = Math.pow(10, Math.max(i, n)), s = i >= n ? i : n, Number(((t(e, o) - t(a, o)) / o).toFixed(s))
					}),
					mul: a(t),
					div: a(function(e, t) {
						var a = 0,
							i = 0;
						try {
							a = e.toString().split(".")[1].length
						} catch(e) {}
						try {
							i = t.toString().split(".")[1].length
						} catch(e) {}
						return Number(e.toString().replace(".", "")) / Number(t.toString().replace(".", "")) * Math.pow(10, i - a)
					})
				}, e.foreiganNum = function(e) {
					for(var t = (e + "").split("."), a = [], i = 0, n = (e = ((e = parseInt(t[0])) || 0).toString().split("")).length - 1; n >= 0; n--) i++, a.unshift(e[n]), i % 3 || 0 == n || a.unshift(",");
					var o = a.join("");
					return 2 == t.length && (o = o + "." + t[1]), o
				}
			}(), e.poupValidate = function(e, t) {
				if($("#spxdPage").hasClass("imp-hide") || $("#spxdPage").addClass("imp-hide"), g_config.theValiteCodeComeInTime = (new Date).getTime(), 0 == $("#valiteInputIframe").length) {
					var a = g_config.ajaxUrl.replace("/ajax/", "");
					$("#validteBoxerBg").data("_theCallBack", e).show(), $("#validteBoxerBg").append('<iframe id="valiteInputIframe" frameborder="0" scrolling="no" src="' + a + '/poupvalite.jsp" style="height: 25rem; width: 100%;"></iframe>')
				} else $("#validteBoxerBg").data("_theCallBack", e).show();
				t && (g_config.valiteOptions = t), void 0 === t && delete g_config.valiteOptions
			}, e.checkPhone = function(e) {
				return !!/^1[3456789]\d{9}$/.test(e)
			}, e.initSwiper = function(t, a, i, n) {
				var o = t instanceof $ ? t : $(t).eq(0);
				return e.tlog("initSwiperBanner: ", o), o.data("swiper") && o.data("swiper").initialized ? (e.tlog(t, "已经初始化"), console.warn(t + " 已经初始化")) : a <= 1 ? (o.find(".swiper-wrapper").css("transform", "translate3d(0px, 0px, 0px)"), o.find(".swiper-number-pagination").addClass("hide"), void(n && n({
					number: a,
					autoplay: i
				}))) : void e.Res.load("swiper_simple").then(function() {
					e.tlog("load swiper_simple: ", "ok");
					var o = {
						el: t,
						loop: !0
					};
					i && (o.autoplay = {
						enabled: !0,
						delay: 2500,
						disableOnInteraction: !1
					});
					var s = new Swiper(o),
						r = s.$el.find(".swiper-number-pagination");
					r.removeClass("hide").text(s.realIndex + 1 + "/" + a), s.on("realIndexChange", function() {
						r.text(s.realIndex + 1 + "/" + a)
					}), n && n({
						swiper: s,
						number: a,
						autoplay: i
					})
				})
			}, e.minShareTouch = function(t) {
				t = t || {}, $("body").append("<div id='minShareBtn'></div>");
				var a = $("#minShareBtn"),
					i = a.outerWidth(),
					n = a.outerHeight(),
					o = {
						width: $(window).width(),
						height: $(window).height()
					},
					s = {
						width: o.width - i,
						height: o.height - n
					},
					r = {
						status: !1,
						x: s.width - .64 * g_rem,
						y: s.height - 1.74 * g_rem,
						touchX: 0,
						touchY: 0
					};

				function c(e, t) {
					(r.status || t) && (a.css({
						"-webkit-transform": "translate(" + r.x + "px," + r.y + "px)",
						transform: "translate(" + r.x + "px," + r.y + "px)"
					}), requestAnimFrame(c))
				}
				c(0, !0), a.on({
					touchstart: function(e) {
						$(this).addClass("move");
						var t = e.originalEvent.targetTouches[0];
						r.touchX = t.pageX, r.touchY = t.pageY, r.status = !0, c()
					},
					touchmove: function(e) {
						var t = e.originalEvent.targetTouches[0],
							a = t.pageX > 0 ? t.pageX < o.width ? t.pageX : o.width : 0,
							i = t.pageY > 0 ? t.pageY < o.height ? t.pageY : o.height : 0,
							n = r.x + a - r.touchX,
							c = r.y + i - r.touchY;
						r.x = n > 0 ? n < s.width ? n : s.width : 0, r.y = c > 0 ? c < s.height ? c : s.height : 0, r.touchX = a, r.touchY = i, e.preventDefault()
					},
					touchend: function(e) {
						$(this).removeClass("move"), r.status = !1
					},
					click: $.throttle(function() {
						var a = e.getminData();
						for(var i in t) t.hasOwnProperty(i) && (a[i] = t[i]);
						var n = "";
						for(var i in a) a.hasOwnProperty(i) && (n && (n += "&"), n += i + "=" + a[i]);
						wx.miniProgram.navigateTo({
							url: "/pages/sharePage/sharePage?" + n
						})
					}, 500)
				})
			}, e.getminData = function() {
				return {
					gameUrl: encodeURIComponent(e.wxConfigArg.url + "&fromCardBag=true"),
					aid: g_config.aid,
					gameId: g_config.gameId,
					openId: g_config.openId,
					shareDeep: g_config.shareDeep
				}
			}, e.watchMiniMusic = function() {
				var e = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "mozHidden" in document ? "mozHidden" : null,
					t = !0;
				$(document).on("visibilitychange", function(a) {
					document[e] ? hg.sound.cache[0].playing ? hg.sound.pauseAll() : t = !1 : t && hg.sound.play(0)
				})
			}, e.renderSwiper = function(t, a) {
				var i = $.extend({}, t);
				if(!i.name) return console.warn("HdGame.renderSwiper(): name is not defined!");
				if(!a || !a.length) return console.warn("HdGame.renderSwiper(): container is not defined!");
				if(!i.config) return console.warn("HdGame.renderSwiper(): config is not defined!");
				for(var n = i.name, o = i.config, s = '<div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide swiper-slide-first"></div>', r = 1; r < o.bannerNumber; r++) s += '<div class="swiper-slide"><div class="editTarget-' + n + "-" + r + ' swiper-editTarget swiper-background-full"></div></div>';
				s += '</div><div class="swiper-number-pagination ' + (1 == o.bannerNumber ? "hide" : "") + '">1/' + o.bannerNumber + "</div></div>", s = $(s), a.addClass("swiper-editTarget swiper-background-full"), s.insertBefore(a).find(".swiper-wrapper .swiper-slide-first").append(a), e.initSwiper(s, o.bannerNumber, o.bannerAutoplay)
			}, e.slideSwiperTo = function(e) {
				var t = $.extend({
					page: 0
				}, e);
				return null == t.page ? console.warn("HdGame.slideSwiperTo(): page is not defined!") : t.swiperSelector ? void(t.swiperSelector instanceof $ ? t.swiperSelector : $(t.swiperSelector)).each(function() {
					var e = $(this).data("swiper");
					if(e) {
						var a = t.page,
							i = e.params.autoplay.enabled;
						e.params.loop && (a += 1), e.slideTo(a, 0, !1), i && (e.autoplay.stop(), e.autoplay.start())
					} else console.warn("HdGame.slideSwiperTo(): %s is not instantiate Swiper.", this)
				}) : console.warn("HdGame.slideSwiperTo(): swiperSelector is not defined!")
			}, e.changeSwiperAwardList = function(e) {
				var t = $.extend({}, e);
				if(null == t.index) return console.warn("HdGame.changeSwiperAwardList(): index is not defined!");
				$(t.selector).each(function(e) {
					$(this).toggleClass("hide", t.index !== e)
				})
			}, e.drawShareImage = function() {
				var t = $('<div id="createImageSharePoup" class="is-active"><div class="mask"><div class="tipsText">长按保存图片，发给好友一起参与</div></div><div id="createImageShareWrapper"><span style="display: inline-block; margin-top: 5rem;">生成图片中...</span></div></div>');
				t.find(".mask").on("touchstart", function(e) {
					e.stopPropagation(), e.preventDefault(), t.hide()
				}), $("body").append(t);
				var a = document.createElement("canvas"),
					i = a.getContext("2d"),
					n = void 0 !== i.__LF__pixel__ratio__,
					o = LF.setCanvasePixelRatio(i),
					s = 12.5 * g_rem,
					r = 20 * g_rem;
				a.width = s * o, a.height = r * o, a.style.width = s + "px", a.style.height = r + "px", e.tlog("canvas width: ", a.width), e.tlog("canvas height: ", a.height), e.tlog("canvas style width: ", a.style.width), e.tlog("canvas style height: ", a.style.height);
				var d = hg.edit.getInfoByName,
					l = .5 * g_rem,
					g = 1.4 * l,
					f = 7.5 * g_rem,
					u = {
						wxCreateImageSharePatternBackground: {
							order: 0,
							pos: {
								left: 0,
								top: 0
							},
							size: {
								width: s,
								height: r
							}
						},
						wxCreateImageSharePatternCoverMap: {
							order: 1,
							clip: function(e, t) {
								! function(e, t, a, i, n, o) {
									e.beginPath(), e.moveTo(t + o, a), e.arcTo(t + i, a, t + i, a + n, o), e.arcTo(t + i, a + n, t, a + n, o), e.arcTo(t, a + n, t, a, o), e.arcTo(t, a, t + i, a, o), e.clip(), e.closePath()
								}(e, t.left, t.top, t.width, t.height, .15 * g_rem)
							}
						},
						wxCreateImageSharePatternFansHead: {
							order: 2,
							path: g_config.headImg || "//hdg.faisys.com/image/manImg.jpg",
							clip: function(e, t) {
								var a = Math.min(t.width, t.height) / 2,
									i = {
										x: t.left + a,
										y: t.top + a
									};
								e.beginPath(), e.arc(i.x, i.y, a, 0, 2 * Math.PI), e.clip(), e.closePath()
							},
							after: function(e, t) {
								var a = Math.min(t.width, t.height) / 2,
									i = {
										x: t.left + a,
										y: t.top + a
									};
								e.strokeStyle = "#FFFFFF", e.lineWidth = .15 * g_rem * 2, e.beginPath(), e.arc(i.x, i.y, a, 0, 2 * Math.PI), e.stroke(), e.closePath()
							}
						}
					};

				function h(e) {
					var t = $.Deferred();
					return e(t.resolve, t.reject), t
				}

				function p(e) {
					switch($.type(e)) {
						case "string":
							return parseFloat(e) * g_rem;
						case "number":
						default:
							return e
					}
				}

				function m(e) {
					if(e.selected) {
						var t = e.key,
							a = d(t),
							i = $.extend({
								order: 10
							}, a[1], a[0], u[t]);
						return $.extend({}, {
							order: i.order,
							name: i.name,
							path: ($.isArray(i.path) ? i.path[0] : i.path) || "",
							text: function() {
								if(i.textarea && i.textarea[0]) return i.textarea[0].value ? i.textarea[0] : {
									value: a[1].textarea[0].value
								}
							}(),
							pos: i.pos,
							size: i.size,
							clip: i.clip,
							after: i.after
						})
					}
				}
				var w, v, _ = (w = g_config._zhuliGameCreateImageShare, v = [], $.each([{
						key: "wxCreateImageSharePatternBackground",
						selected: !0
					}].concat(w), function() {
						var e = m(this);
						e && v.push(e)
					}), v.sort(function(e, t) {
						return e.order - t.order
					})).map(function(t) {
						return new h(function(a) {
							if(e.tlog("config: ", t), t.path) {
								var i = new Image;
								i.crossOrigin = "Anonymous", i.onload = function() {
									e.tlog("resolve image: ", t.name);
									var n = $.extend({}, {
										img: i,
										left: p(t.pos.left),
										top: p(t.pos.top),
										width: p(t.size.width),
										height: p(t.size.height),
										clip: t.clip,
										after: t.after
									});
									e.tlog("data: ", n), a("image", n)
								}, i.src = t.path + "?" + Date.now()
							} else t.text && a("text", $.extend({}, {
								text: t.text.value,
								left: p(t.pos.left),
								top: p(t.pos.top),
								clip: t.clip,
								after: t.after
							}))
						})
					}),
					y = {};
				$.when.apply($, _).then(function() {
					c.slice.call(1 === _.length ? [arguments] : arguments).forEach(function(t) {
						e.tlog("resolve data: ", t);
						var a = t[0],
							n = t[1];
						switch(a) {
							case "image":
								i.save(), n.clip && n.clip(i, n), i.drawImage.apply(i, [n.img, n.left, n.top, n.width, n.height]), n.after && n.after(i, n), i.restore();
								break;
							case "text":
								i.save(), n.clip && n.clip(i, n), i.font = l + "px 微软雅黑", i.fillStyle = "#313131",
									function(e, t, a, i, n, o, s) {
										var r = 0,
											c = 0,
											d = 1;

										function l(e) {
											r = e, c = 0, d += 1
										}
										void 0 === s && (s = "\n"), t.split(s).forEach(function(t) {
											for(var s, g, f = 0; f < t.length; f++) s = t[f], g = t[f + 1] || "", c += e.measureText(s).width, n - c <= e.measureText(g).width && (e.fillText(t.slice(r, f + 1), a, i + d * o), l(f + 1));
											e.fillText(t.slice(r), a, i + d * o), l(0)
										})
									}(i, n.text, n.left, n.top - (g - l), f, g), n.after && n.after(i, n), i.restore();
								break;
							default:
								console.warn("HdGame.drawShareImage(): unknown type %s", a)
						}
					});
					var t = document.createElement("canvas"),
						s = t.getContext("2d");
					t.width = a.width, t.height = a.height, t.style.width = a.style.width, t.style.height = a.style.height, e.tlog("tmpCanvas width: ", t.width), e.tlog("tmpCanvas height: ", t.height), e.tlog("tmpCanvas style width: ", t.style.width), e.tlog("tmpCanvas style height: ", t.style.height);
					var r = n ? o : 1;
					s.drawImage(a, 0, 0, a.width / r, a.height / r), LF.setCanvasePixelRatio(s);
					var d = m({
							key: "wxCreateImageSharePatternQrCode",
							selected: !0
						}),
						u = function() {
							var a = e.wxConfigArg.url,
								i = "//" + window.location.host + "/qrCode.jsp?cmd=qrurl&siteUrl=" + e.encodeUrl(a);
							return new h(function(n) {
								var o = new Image;
								o.crossOrigin = "Anonymous", o.onload = function() {
									e.tlog("resolve image: ", d.name), s.save(), s.drawImage(o, p(d.pos.left), p(d.pos.top), p(d.size.width), p(d.size.height)), s.restore();
									var i = t.toDataURL("image/png");
									y[a] = i, n(i)
								}, o.src = i
							})
						};
					e.drawShareImage = function() {
						var t = $("#createImageSharePoup"),
							a = e.wxConfigArg.url;
						if(t.length) return t.show(), void 0 !== y[a] ? void $("#createImageSharePoup").find("#createImageShareWrapper").html('<img class="sharePicture" src="' + y[a] + '" />') : (t.find("#createImageShareWrapper").html('<span style="display: inline-block; margin-top: 5rem;">生成图片中...</span>'), void u().then(function(e) {
							$("#createImageSharePoup").find("#createImageShareWrapper").html('<img class="sharePicture" src="' + e + '" />')
						}))
					}, u().then(function(e) {
						$("#createImageSharePoup").find("#createImageShareWrapper").html('<img class="sharePicture" src="' + e + '" />')
					})
				})
			}, e.checkIsFaiOpenId = function() {
				var e = g_config.openId;
				return !!(e && e.length > 0) && (m_debug ? 0 == e.indexOf("osi") || 0 == e.indexOf("ofkc") : 0 == e.indexOf("osi") || 0 == e.indexOf("oosn"))
			}, e.LogFaiOpenId = function(t, a) {
				e.checkIsFaiOpenId() && $.ajax({
					type: "get",
					url: g_config.ajaxUrl + "log_h.jsp?cmd=logDogOss&id=" + e.encodeUrl(t) + "&src=" + e.encodeUrl(a) + "&cliId=" + e.encodeUrl(g_config.openId)
				})
			}, e.bindGolocation = function(t) {
				if(!_manage) {
					var a = {
						pointData: {
							province: "北京",
							city: "北京",
							county: "",
							address: "",
							point: '{"lat":39.91485,"lng":116.403765}'
						},
						isOperation: !1,
						bindBtn: null,
						success: function() {},
						fail: function() {
							e.showMsg("当前微信版本不支持定位或没开启定位服务，请联系活动主办单位")
						}
					};
					t = $.extend(!0, a, t), e.tlog("bindGolocation option", t);
					var i = function() {
						var a = "";
						$.forEach(["province", "city", "county", "address"], function(e) {
							t[e] && (a += t[e])
						});
						var i = t.point,
							n = this;
						wx.ready(wx.openLocation({
							latitude: i.lat,
							longitude: i.lng,
							name: t.address,
							address: a,
							scale: 22,
							success: function(e) {
								t.success.call(n, e, t)
							},
							fail: function(a) {
								e.tlog("res=" + a), t.fail.call(n, a, t)
							}
						}))
					};
					t.isOperation ? i.call(t.bindBtn) : t.bindBtn && t.bindBtn.length > 0 ? t.bindBtn.off("click.guideMap").on("click.guideMap", function() {
						i.call($(this))
					}) : console.warn("bindBtn can't be null or undefined ")
				}
			}, e.checkAccessKeyLuckyDrawTotal = function(t) {
				return t = $.extend({}, t), $.Deferred(function(a) {
					$.ajax({
						type: "post",
						url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=getLuckyDrawTotal",
						data: {
							gameId: g_config.gameId,
							openId: g_config.openId
						},
						dataType: "json",
						success: function(i) {
							var n = i.msg || "系统繁忙，请稍后重试";
							if(i.rt) return e.showMsgToast2({
								bodyMsg: n
							}), a.reject(), void console.log(a.state());
							i.total > 0 ? a.resolve() : (e.otherAjaxComplete(), e.hideLoadToast(), t.notLuckyDrawTotal && t.notLuckyDrawTotal(), e.showAccessKeyPopup({
								title: g_config.accesspopuptitle,
								callback: function() {
									a.resolve()
								}
							}))
						},
						error: a.reject
					})
				})
			}, e.showForcedAttPoup = function(t) {
				var a = (t = $.extend({}, t)).showPoup;
				return e.tlog("g_config.ishasAttentiosThisAPP: ", g_config.ishasAttentiosThisAPP), e.tlog("g_config.$isFollowWx: ", g_config.$isFollowWx), $.Deferred(function(t) {
					function i() {
						$("#attentionPrev").hide(), $("#strongAttion").off("touchend").on("touchend", function(e) {
							e.preventDefault(), e.stopPropagation()
						}), $("#strongAttionBgMark").show().off("touchend").on("touchend", function(e) {
							e.preventDefault(), e.stopPropagation(), $("#strongAttionBgMark, #strongAttentionTips").hide()
						}), $("#iamfans").off("touchend").on("touchend", function(a) {
							a.preventDefault(), a.stopPropagation(), e.getIsHasAttention().then(function(e) {
								var a = e.data;
								2 == a.type ? a.isAttention ? ($("#strongAttionBgMark, #strongAttentionTips").hide(), g_config.$isFollowWx = !0, t.resolve()) : $("#strongAttentionTips").show() : ($("#attentionPrev").show().off("touchend").on("touchend", function(e) {
									e.preventDefault(), e.stopPropagation()
								}).find(".iKnow").one({
									touchend: function() {
										$(this).removeClass("touchIng"), $("#attentionPrev").hide(), $("#attentionCur").show()
									},
									touchstart: function() {
										$(this).addClass("touchIng")
									}
								}), $("#attentionCur, #strongAttentionTips").hide())
							})
						}), $("#attentionCur").show(), a && a()
					}
					return void 0 !== g_config.$isFollowWx ? g_config.$isFollowWx ? t.resolve() : void i() : g_config.ishasAttentiosThisAPP ? void(g_config.hasWXAuth ? e.getIsHasAttention(null, !0).then(function(e) {
						var a = e.data;
						if(2 === a.type && a.isAttention) return g_config.$isFollowWx = !0, t.resolve();
						g_config.$isFollowWx = !1, i()
					}).fail(t.reject) : (g_config.$isFollowWx = !1, i())) : t.resolve()
				})
			}, e.checkDiffRedPacketSendWay = function() {
				return $.Deferred(function(e) {
					$.ajax({
						type: "post",
						url: g_config.ajaxUrl + "hdmobi_h.jsp?cmd=isDiffRedPacketSendWay",
						data: {
							storeId: g_config.storeId,
							areaId: g_config.areaId,
							gameId: g_config.gameId
						},
						success: function(t) {
							var a = $.parseJSON(t);
							a.success && e.resolve(a.isDiffSendWay)
						},
						error: function() {
							e.resolve(!1)
						}
					})
				})
			}, e.sendQuestionGameReq = function(t, a, i, n, o) {
				return $.Deferred(function(s) {
					if(g_config.openNew_Qt) {
						if("check" == t) {
							var r = [];
							if(void 0 === n) r = g_config.qtInfoParam.allAnswerList;
							else if("string" == typeof n) {
								(d = {}).answer = i, d.sign = n, r.push(d)
							} else if("object" == typeof n)
								for(var c = 0; c < n.length; c++) {
									var d;
									(d = {}).answer = $.parseJSON(i)[c], d.sign = n[c], r.push(d)
								}
							g_config.qtInfoParam.allAnswerList = r
						}
						g_config.qtInfoParam.qtNum = g_config.qtNum, g_config.questionScore && (g_config.qtInfoParam.qtScore = g_config.questionScore);
						var l = {
							gameId: g_config.gameId,
							req_Type: t,
							isManage: a,
							titleIndex: o,
							playerAnswer: i,
							qtInfoParam: g_config.qtInfoParam,
							openId: g_config.openId
						};
						$.ajax({
							type: "post",
							url: g_config.ajaxUrl + "hdgame_h.jsp?cmd=qtGame_Req&aid=" + g_config.aid,
							data: {
								questionObj: $.toJSON(l)
							},
							error: function() {
								e.showMsg("网络繁忙，请刷新重试")
							},
							success: function(a) {
								var i = $.parseJSON(a);
								i.success ? ("get" == t && (g_config.qtInfoParam.exposure_QtList = g_config.qtInfoParam.exposure_QtList ? g_config.qtInfoParam.exposure_QtList : [], g_config.qtInfoParam.exposure_QtList.push(i.data.titleIndex), g_config.qtInfoParam.moreAnswer = i.data.moreAnswer, g_config.qtInfoParam.allAnswerList = i.data.allAnswerList), "check" != t || $.isEmptyObject(i.data.score_Qt) || ($.isEmptyObject(g_config.qtInfoParam.score_Qt) ? g_config.qtInfoParam.score_Qt = i.data.score_Qt : i.data.score_Qt.score >= g_config.qtInfoParam.score_Qt.score && (g_config.qtInfoParam.score_Qt = i.data.score_Qt)), g_config.qtInfoParam.playingAns = i.data.playingAns, g_config.qtInfoParam.r_List = i.data.r_List, s.resolve(i.data)) : i.isModify ? e.showMsg(i.msg, 0, "返回首页", function() {
									window.location.reload()
								}) : e.showMsg("网络繁忙，请刷新重试")
							}
						})
					} else s.resolve()
				})
			}, e.isIphoneX_XS = function() {
				return /iphone/gi.test(navigator.userAgent) && 812 == screen.height && 375 == screen.width
			}, e.isIphoneXR_XSMax = function() {
				return /iphone/gi.test(navigator.userAgent) && 896 == screen.height && 414 == screen.width
			}, e.isFullScreen_Phone = function() {
				return e.isIphoneX_XS() || e.isIphoneXR_XSMax()
			}, e.copyContent2 = function(e, t) {
				if(!t) return !1;
				$("body").append('<input style="border: none;display: inline-block; position: absolute; top: -9999rem; left: 0; z-index: -100; opacity: 0;" type="text" readonly="" id="' + e + '" value="' + t + '">');
				var a = document.getElementById(e);
				a.setSelectionRange(0, t.length), a.focus();
				var i = !1;
				return document.execCommand("copy", !1, null) ? (document.execCommand("copy", !1, null), i = !0) : i = !1, a.blur(), a.remove(), i
			}, e.refreshDrawTimes = function() {
				return $.Deferred(function(t) {
					_fromCardBag && 2 == helpType ? $.ajax({
						type: "post",
						url: g_config.ajaxUrl + "hdgameOther_h.jsp?cmd=getGameDrawLimit",
						data: {
							gameId: g_config.gameId,
							openId: g_config.openId
						},
						error: function() {
							t.resolve(!1)
						},
						success: function(a) {
							var i = $.parseJSON(a);
							if(i.rt) return t.resolve(!1);
							var n = i.data;
							e.tlog("drawTimesLimit, data.drawTimesLimit = " + drawTimesLimit + " - " + n.drawTimesLimit), 2 == helpType && drawTimesLimit != n.drawTimesLimit ? (e.wxConfig.handleShareAward('{"shareaward": true}'), t.resolve(!0)) : t.resolve(!1)
						}
					}) : t.resolve(!1)
				})
			}, e.copyContent = function(t, a) {
				var i = $('<div class="weui-mask" style="z-index:5000"></div><div class="weui-dialog"><div class="weui-dialog__bd"><span id="statusTip-msg">' + (a || "请点击“复制链接”按钮，然后打开浏览器，粘贴进行登录") + '</span></div><div class="weui-dialog__ft"><a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">复制链接</a></div></div>');
				$("body").append(i), i.show(), e.logDog(1000314, 7), $("body").append('<input style="border: none;display: inline-block; position: absolute; top: -9999rem; left: 0; z-index: -100; opacity: 0;" type="text" readonly="" id="clipContent" value="' + t + '">'), i.find(".weui-dialog__btn").one("click", function() {
					var a = function() {
						var e = document.getElementById("clipContent");
						e.setSelectionRange(0, t.length), e.focus();
						var a = "";
						document.execCommand("copy", !1, null) ? (document.execCommand("copy", !1, null), a = "链接已复制") : a = "不兼容";
						return e.blur(), e.remove(), a
					}();
					i.fadeOut(150), e.showMsgToast3({
						msg: a
					})
				}), $("body").find(".weui-mask").one("click", function() {
					i.fadeOut(150)
				})
			}, e.jflyFn = (w = function(e, t, a) {
				var i = {
						aid: g_config.aid,
						gameId: g_config.gameId,
						unionId: g_config.jfly_UnionId
					},
					n = $.extend(i, t);
				$.ajax({
					type: "post",
					url: g_config.ajaxUrl + "jfly_h.jsp?cmd=" + e,
					data: n,
					success: function(e) {
						a && a(e)
					}
				})
			}, {
				ajaxCodeToMsg: m = function(e, t) {
					switch(e) {
						case -1:
							return "系统出错";
						case 1001:
							return "服务繁忙，请重试一次";
						case 1011:
							return "活动数据已重置，请点击左上角回到首页，点击开始活动重新进入";
						case 1201:
							return "游戏尚未开始";
						case 1202:
							return "游戏已经结束";
						case 1203:
							return "游戏已被删除";
						case 1204:
							return "由于活动时间已结束，当前无法进入游戏，建议修改活动时间后再进入";
						case 1401:
							return "你有疑似作弊行为，已被列入黑名单";
						case 4021:
							return "今日抽奖机会已用完<br/>可明日再来!";
						case 4031:
						case 4041:
						case 4051:
						case 4061:
							return "当前积分不足，快去获得更多积分！";
						case "notGetDoll":
						case 4052:
							return '很遗憾，挑战失败！<br/>是否消耗<span class="redColor">' + t.consumeVal + "个积分</span>继续游戏？";
						case 4062:
							return "本期积分正在瓜分中，请稍后进入";
						case 4063:
							return "游戏已结束<br/>可继续玩其他游戏获得积分呢！";
						case 4064:
							return "活动即将结束，当前游戏已关闭，可继续玩其他游戏获得积分";
						default:
							return "网络繁忙，请重试一次"
					}
				},
				draw_Xydzp: function(e) {
					w("wheelLotteryGoDraw", {}, e)
				},
				showResult_Draw: function(t, a) {
					var i = t.data.awardInfo || {},
						n = 0 != t.rt ? m(t.rt) : i.isAward ? '恭喜！<br/>获得<span class="redColor">' + t.data.awardInfo.awardedValue + "个积分</span>！" : "很遗憾，您没有中奖！";
					e.jflyFn.showGameMsg_Comm({
						msg: n,
						isSingleBtn: 0 != t.rt,
						popupBoxSty: "width: 11.25rem;",
						popupBodySty: "padding: 2.275rem 0 2.175rem; color:#5D5D5D;font-size:0.7rem;",
						popupFootSty: 0 != t.rt ? "padding:0.675rem;" : "padding: 0;",
						hasHead: !0,
						headImgSty: i.isAward ? 2 : 0,
						closeFn: a,
						confirmFn: a,
						cancelFn: v
					})
				},
				showGameMsg_Comm: function(e) {
					var t = [{
							src: _resRoot + "/image/jfly/popupLayout1.png",
							w: "7.05rem",
							h: "5.125rem"
						}, {
							src: _resRoot + "/image/jfly/popupLayout2.png",
							w: "6.55rem",
							h: "4.675rem"
						}, {
							src: _resRoot + "/image/jfly/popupLayout3.png",
							w: "7.125rem",
							h: "4.15rem"
						}, {
							src: _resRoot + "/image/jfly/popupLayout4.png",
							w: "6.975rem",
							h: "5.225rem"
						}],
						a = $.extend({
							hasHead: !1,
							headImgSty: 0,
							popupBoxSty: "",
							popupBodySty: "",
							popupFootSty: "",
							msg: "",
							isSingleBtn: !0,
							confirmText: "确定",
							confirmSty: "",
							confirmFn: null,
							cancelText: "返回主页",
							cancelSty: "",
							cancelFn: null,
							closeFn: null
						}, e),
						i = t[a.headImgSty],
						n = $('<div class="_popupBox_Jfly"><div class="weui-mask" style="z-index: 2000;"></div><div class="popupBox" style="z-index: 2000;' + a.popupBoxSty + '">' + (a.isSingleBtn ? "" : '<div class="closePopupBtn"></div>') + (a.hasHead ? '<div class="popupHead"><img src="' + i.src + '" style="width:' + i.w + ";height:" + i.h + ';"/></div>' : "") + '<div class="popupBody" style="' + a.popupBodySty + '">' + a.msg + '</div><div class="popupFoot" style="' + a.popupFootSty + '">' + (a.isSingleBtn ? '<div class="confirmBtn oneBtn">' + a.confirmText + "</div>" : '<div class="btn cancelBtn">' + a.cancelText + '</div><div class="btn confirmBtn">' + a.confirmText + "</div>") + "</div></div></div>");
					n.find(".confirmBtn").on("click", function() {
						a.confirmFn && a.confirmFn(), n.remove()
					}), n.find(".cancelBtn").on("click", function() {
						a.cancelFn && a.cancelFn(), n.remove()
					}), n.find(".closePopupBtn").on("click", function() {
						a.closeFn && a.closeFn(), n.remove()
					}), $("body").append(n)
				},
				endGame_Sssq: function(e, t) {
					w("sssqSetAchieve", e, t)
				},
				startNestedGame: function(t) {
					var a = $.extend({
						type: -1,
						level: -1,
						callback: null
					}, t);
					$.ajax({
						type: "post",
						url: g_config.ajaxUrl + "jfly_h.jsp?cmd=startNestedGame",
						data: {
							aid: g_config.aid,
							gameId: g_config.gameId,
							unionId: g_config.jfly_UnionId,
							achieve: e.encodeBase64('"' + a.type + "+" + (a.level > -1 ? a.level : 0) + '"')
						},
						success: function(e) {
							a.callback(e)
						}
					})
				},
				draw_Fkp: function(e) {
					w("fkpGoDraw", {}, e)
				},
				endGame_Jfz: function(e, t) {
					w("jfzSetAchieve", e, t)
				},
				endGame_Zww: function(e, t) {
					w("zwwSetAchieve", e, t)
				},
				addBackBtn: function() {
					if(g_config.$$fromMinapp_Jfly) {
						var e = $(".body"); - 1 != $.inArray(g_config.style, [0, 66, 90, 99, 103]) && (e.append('<div class="backBtn_jfly"><span class="arrow"></span><span class="text">返回主页</span></div>'), e.find(".backBtn_jfly").on("click", v))
					}
				},
				addRuleBtn: function() {
					if(g_config.$$fromMinapp_Jfly) {
						var e = $(".body");
						if(-1 != $.inArray(g_config.style, [0, 66, 90, 99, 103])) {
							var t = _resRoot + "/image/jfly/ruleIcon_" + g_config.style + ".png";
							e.append('<img class="ruleIcon_jfly ruleIcon_jfly_' + g_config.style + '" src="' + t + '" onClick="HdGame.jflyFn.showGameMsg_Comm({msg: \'' + {
								rule_0: "点击“开始”转盘开始转动，最终指针指着的即为您所中的奖品。",
								rule_66: "轻轻用手指把奖券刮开，即有机会获得积分奖励！",
								rule_90: "搭建房子，建的房屋层数越高越高分排名越前即有机会瓜分积分池",
								rule_99: "点击虚拟纸币向上拉，速度越快分数越高",
								rule_103: "当夹子落在对应娃娃上方时，点击【GO】，夹子落下，夹中娃娃获得积分，超过10秒未点击夹子将自动落下！"
							}["rule_" + g_config.style] + "'})\"/>")
						}
					}
				},
				returnToJfly: v = function() {
					wx.miniProgram.redirectTo({
						url: "/pages/home/home?scene=" + g_config.aid + "-" + g_config.gameId + "-1-45&_fromGame=true"
					})
				},
				getdivideUpRecord: function(e) {
					w("jfzGetDivideUpRecord", {}, e)
				}
			}), e.watch("game._setting.hideRank", g_config.hideRank, function(t, a) {
				if(g_config.$$isHasRank)
					if(_manage && parent.Edit && parent.Edit.showTabByStyle(!1), 69 == g_config.style) {
						t && ($(".mainGameBody .rank").hide(), _manage || $("#bottomTab #rankTab").hide().addClass("hide").siblings().eq(0).click()), _manage && (t ? $("#bottomTab #rankTab").hide().addClass("hide").siblings().eq(0).click() : $("#bottomTab #rankTab").show().removeClass("hide").click());
						var i = $("#bottomTab .bottomItem:visible").length;
						$("#bottomTab .bottomItem").css("width", 100 / i + "%")
					} else {
						if($("#ranBtn").toggle(!t), $("#seeRank_show_rankText").parent().toggle(!t).siblings().toggleClass("fullWidth", t), $(".myTwo .myRank").toggle(!t).parent().toggleClass("toOneBtn", t), t != a && e.initChangePoup(), t) _manage && $(".poupTitleBox").children(".poupTitleMune").not("hide").eq(0).trigger("click");
						else if(_manage) parent.$(".topBar .column").each(function() {
							if("排行榜" == $(this).find(".name").text()) return $(this).trigger("click", "formTabSetting"), !1
						}), $("#ranBtn").click()
					}
			}), e.watch.add(["game._setting.isToStorePay", "game._setting.isBeforeFullGPay"], function(e, t) {
				g_config.$$hasToStorePay && _manage && (g_config.isPTGame ? (parent.$("#paymentGamelimit").toggle(!e[1] && !e[0]), e[1] != t[1] && e[1] && (parent.game._setting.isToStorePay = !1)) : parent.$("#paymentGamelimit").toggle(!e[0]), e[0] != t[0] && ((e[0] || e[1]) && (parent.game.$$needSwitchLinkInfoTab = !1), parent.game._setting.isdelivery = !e[0], parent.game._setting.isgetself = e[0], e[0] != t[0] && 0 == e[0] && (parent.game._setting.isgetself = !0, parent.game._setting.isdelivery = !1)))
			})
	}(HdGame);
var PlayInfo = function() {
	var e = 0,
		t = 0,
		a = 5,
		i = a,
		n = 10,
		o = !1,
		s = {
			show: !1
		};

	function r() {
		var t = a - e,
			i = c();
		return t > i && (t = i), t < 0 && (t = 0), t
	}

	function c() {
		if(!o) return 100;
		var e = n - t;
		return e > 0 ? e : 0
	}

	function d() {
		$(".todayPlayCount").text(r()), $(".totalPlayCount").text(c()), $(".playTimesLimit").text(a), $(".playTimesLimitShow").text(i), $(".playTotalLimit").text(n), o ? ($(".dayPlayHint").hide(), $(".totalPlayHint").show(), $(".dayPlayHint4Total").show()) : ($(".dayPlayHint").show(), $(".totalPlayHint").hide(), $(".dayPlayHint4Total").hide(), $(".playTotalFont").hide())
	}
	return {
		isLimitPlay: s,
		initData: function(r, c, l, g, f, u) {
			e = r, t = c, a = l, i = g, n = f, o = u, s.show = u, d()
		},
		getTodayRemainTimes: r,
		getTotalRemainTimes: c,
		addPlayTimes: function(a) {
			e += a, t += a, d()
		},
		addPlayTimesLimit: function(e) {
			a += e, n += e, d()
		},
		setPlayTimesLimit: function(e) {
			a = e, d()
		},
		setPlayTimesLimitShow: function(e) {
			i = e, d()
		},
		setPlayTotalLimit: function(e) {
			n = e, d()
		},
		setLimitPlay: function(e) {
			o = e, s.show = e, d()
		}
	}
}();