(window.webpackJsonp = window.webpackJsonp || []).push([
    [101], {
        kop9: function(t, e) {},
        pGii: function(t, e, i) {
            "use strict";
            i.r(e);
            var s = i("L2JU"),
                n = i("nTKA"),
                a = i("apUr"),
                o = i("NPSE"),
                r = i("TWhf"),
                l = i("aLtq"),
                c = i("FIGb"),
                d = i("quPc"),
                h = i("WCs7"),
                p = i("L6hJ"),
                u = i("1LuD"),
                m = i("EVdn"),
                v = i.n(m),
                _ = i("aCH8"),
                g = i.n(_),
                f = i("sxGJ"),
                C = i.n(f),
                w = i("CBSA"),
                y = i.n(w),
                S = i("qwXs"),
                x = i("/+F6"),
                b = i("C4J2"),
                I = i("I1WC"),
                O = i("hBu7"),
                T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                A = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                    }
                    return t
                },
                N = {
                    data: function() {
                        var t, e = !!window.localStorage.getItem("rememberAccount") || !1;
                        return {
                            isAndroid: (t = navigator.userAgent.toLowerCase(), !!/android/.test(t)),
                            isIOS: function() {
                                var t = navigator.userAgent.toLowerCase();
                                return !!/iphone|ipad|ipod/.test(t)
                            }(),
                            username: "",
                            password: "",
                            pswType: "password",
                            isCheck: !0,
                            iskeyUp: !1,
                            paramPath: null,
                            beforeClickTime: 0,
                            beforeloginName: window.localStorage.lastCustName ? window.localStorage.lastCustName : "",
                            commiting: !1,
                            verifyCodeStr: "",
                            receiveMobile: "",
                            phoneType: "+86",
                            smsCode: "",
                            origionCountry: {},
                            origionNum: [],
                            countDownTimer: null,
                            smsText: this.$t("send-now"),
                            tabIndex: -1,
                            phoneAndPws: !1,
                            showSpecialDialog: !1,
                            payPwd: "",
                            realName: "",
                            cardNum: "",
                            picCodeCheck: !1,
                            specialCode: "0",
                            specialProblems: "",
                            loginStep: 1,
                            downloadBannerBtn: void 0 === window.downloadBannerBtn || window.downloadBannerBtn,
                            downloadLink: "",
                            logoImage: "",
                            logOrRegLoading: !1,
                            requireData: {},
                            hasPhone: !0,
                            remember: e
                        }
                    },
                    props: ["cust_id", "frompath", "loginedRechargeBack"],
                    computed: A({}, Object(s.e)("chatnew", ["loginToken"]), Object(s.e)("tenant", {
                        activeConfiguration: function(t) {
                            return t.activeConfiguration
                        },
                        aseq: function(t) {
                            return t.aseq
                        },
                        tenantInfo: function(t) {
                            return t.tenantInfo
                        },
                        sysOptions: function(t) {
                            return t.sysOptions
                        },
                        logo_manage: function(t) {
                            return t.tenantInfo.logo_manage
                        }
                    }), Object(s.c)("tenant", ["tRegisterUrl"]), Object(s.e)("user", {
                        verifyCode: function(t) {
                            return t.verifyCode
                        },
                        lastCustName: function(t) {
                            return t.lastCustName
                        },
                        isShow: function(t) {
                            return t.isShow
                        }
                    }), Object(s.c)("chat", ["customerGetUrlQuery"]), {
                        clipboardText: function() {
                            var t = "",
                                e = (localStorage.getItem("clipboardParams") ? JSON.parse(localStorage.getItem("clipboardParams")) : {}).code,
                                i = this.tid ? y.a.tenant[this.tid].install.downloadPage : {};
                            return this.isAndroid ? t = i.andAppid : this.isIOS && (t = i.iosAppid), {
                                appid: t,
                                code: e || i.code,
                                channelCode: i.channelCode
                            }
                        },
                        isApp: function() {
                            return this.utils.isApp()
                        },
                        isShowGuest: function() {
                            var t = !1;
                            return (this.ispromoteLink || this.tenantInfo && this.tenantInfo.tenant.app_reg_addr) && (t = !0), t
                        },
                        ispromoteLink: function() {
                            var t = !1;
                            return window.location.href.split("?").length > 1 && (t = !0), t
                        },
                        guestLink: function() {
                            var t = "javascript://";
                            return this.tenantInfo && this.tenantInfo.tenant && this.tenantInfo.tenant.online_addr && this.tenantInfo.tenant.online_addr.length > 0 && (0 === this.tenantInfo.tenant.type ? t = this.tenantInfo.tenant.online_addr + this.customerGetUrlQuery : 1 === this.tenantInfo.tenant.type && (t = this.tenantInfo.tenant.online_addr)), t
                        },
                        regLink: function() {
                            var t = "";
                            return this.tenantInfo.tenant && this.tenantInfo.tenant.app_reg_addr && (t = this.tenantInfo.tenant.app_reg_addr), t
                        },
                        downloadBanner: function() {
                            var t = "",
                                e = [];
                            if ((e = this.logo_manage) && e.length > 0) {
                                var i = e.filter((function(t) {
                                    return 34 === t.message_id
                                }));
                                i.length > 0 && (t = i[0].pic_addr)
                            }
                            return t
                        },
                        downUrl: function() {
                            var t = "";
                            return this.tenantInfo && this.tenantInfo.tenant && (t = this.utils.isIOS() ? this.tenantInfo.tenant.app_reg_addr : this.tenantInfo.tenant.official_addr), t
                        }
                    }),
                    watch: {
                        "tenantInfo.tid": function(t) {
                            t && (this.fetchVerifyCode({
                                type: 1
                            }), this.initInstallation(), "1" === this.sysOptions.CUST_LOGIN_MODE.account ? this.tabIndex = 0 : "1" === this.sysOptions.CUST_LOGIN_MODE.phone_captcha && (this.tabIndex = 1), this.setPhoneType(), this.getLogo(), this.reqRequireData())
                        },
                        tabIndex: function(t) {
                            this.verifyCodeStr = "", this.receiveMobile = "", this.smsCode = "", this.showSpecialDialog = !1, this.payPwd = "", this.realName = "", this.cardNum = "", this.picCodeCheck = !1, this.specialCode = "0", this.specialProblems = "", this.loginStep = 1
                        },
                        downloadBannerBtn: function() {
                            window.downloadBannerBtn = this.downloadBannerBtn
                        },
                        "sysOptions.CUST_LOGIN_MODE": function() {
                            "1" === this.sysOptions.CUST_LOGIN_MODE.account ? this.tabIndex = 0 : "1" === this.sysOptions.CUST_LOGIN_MODE.phone_captcha && (this.tabIndex = 1)
                        }
                    },
                    mixins: [I.a, O.a],
                    methods: A({}, Object(s.b)("user", ["login", "visitorsLogin", "weChatRegister", "saveUser", "reqSMSlogin", "reqSMSCode", "fetchVerifyCode", "reqSpecialStatus", "reqInvicode"]), Object(s.d)("chat", ["clearPersonChatItem"]), Object(s.d)("chatnew", ["setCurrentChatMessage", "setCurrentPersonMessage"]), Object(s.b)("account", ["reqBlanceCollect"]), Object(s.b)("tenant", ["modifyRegistrationID", "reqAseq", "reqDownloadLink", "reqContactConfig"]), {
                        clipboardFunc: function(t, e) {
                            var i = new C.a("#" + t);
                            i.on("success", (function(t) {
                                t.clearSelection(), e && e()
                            })), i.on("error", (function(t) {
                                alert("The operation failed，Please try again")
                            }))
                        },
                        handleDownUrl: function() {
                            this.utils.platform.sendNativeMsg("url:" + this.downUrl)
                        },
                        downAppByClipboard: function(t) {
                            var e = t.currentTarget.id,
                                i = t.currentTarget.href.split("code=")[1] ? t.currentTarget.href.split("code=")[1] : this.clipboardText.code;
                            this.clipboardText.appid && i && this.clipboardFunc(e)
                        },
                        goBack: function() {
                            this.$route.query && this.$route.query.isGoAccount ? this.$router.push("/paccountTrading") : this.$router.replace("/")
                        },
                        handleTabChange: function(t) {
                            this.tabIndex = t
                        },
                        clearUsername: function() {
                            this.username = ""
                        },
                        clickIcon: function() {
                            v()("#appLogo").addClass("animated rubberBand").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function() {
                                v()(this).removeClass("animated rubberBand")
                            }))
                        },
                        handleGuest: function() {
                            this.utils.isApp() ? this.utils.platform.sendNativeMsg("url:" + this.guestLink) : window.open(this.guestLink, "_blank")
                        },
                        handleReg: function() {
                            this.$store.commit("app/setData", {
                                key: "showDialogTag",
                                value: 2
                            }, {
                                root: !0
                            })
                        },
                        handleVisitorsLogin: function() {
                            var t = this;
                            if (this.utils.platform.sendNativeMsg("sound:Panel_Buttontap_Sound"), !this.commiting) {
                                t.$vux.loading.show();
                                var e = {
                                    chan_code: "MWEB",
                                    callback: function(e, i) {
                                        t.$vux.loading.hide(), t.commiting = !1, e ? (t.reqBlanceCollect({}), t.$router.push("/")) : t.errInfoI18n(i, 0)
                                    }
                                };
                                this.visitorsLogin(e)
                            }
                        },
                        handleLoginStep: function() {
                            var t = this;
                            1 !== this.tabIndex || this.receiveMobile ? !(this.picCodeCheck || this.sysOptions.CUST_LOGIN_CAPTCHA_MODE && "1" === this.sysOptions.CUST_LOGIN_CAPTCHA_MODE.PICTURE_SWITCH) || this.verifyCodeStr ? this.getSMSCode((function() {
                                t.loginStep = 2
                            })) : this.$vux.toast.show({
                                text: this.$t("verification code must be filled")
                            }) : this.$vux.toast.show({
                                text: this.$t("Phone number can not be blank")
                            })
                        },
                        handleLogin: function(t) {
                            var e = this;
                            if (0 === this.tabIndex) {
                                if (this.username = this.username.trim(), this.password = this.password.trim(), !this.username) return void this.$vux.toast.show({
                                    text: this.$t("Account cannot be empty"),
                                    type: "cancel"
                                });
                                if (/\s+/.test(this.username)) return void this.$vux.toast.show({
                                    text: this.$t("4000['Your input contains spaces or special characters，Please remove and log in again.']"),
                                    type: "cancel",
                                    width: "200px"
                                });
                                if (!this.password) return void this.$vux.toast.show({
                                    text: this.$t("password can not be blank"),
                                    type: "cancel"
                                });
                                if (this.verifyCodeStr = this.verifyCodeStr.trim(), this.sysOptions.CUST_LOGIN_CAPTCHA_MODE && "1" === this.sysOptions.CUST_LOGIN_CAPTCHA_MODE.PICTURE_SWITCH && !this.verifyCodeStr) return void this.$vux.toast.show({
                                    text: this.$t("verification code must be filled")
                                })
                            } else if (this.smsCode = this.smsCode.trim(), !this.smsCode) return void this.$vux.toast.show({
                                text: this.$t("SMS verification code cannot be empty"),
                                type: "cancel"
                            });
                            this.remember ? window.localStorage.setItem("rememberAccount", JSON.stringify({
                                loginMode: 0 === this.tabIndex ? "account" : "phone_captcha",
                                username: this.username,
                                receiveMobile: this.receiveMobile
                            })) : window.localStorage.setItem("rememberAccount", ""), "1" !== this.sysOptions.CUST_LOGIN_SPECIAL_CAPTCHA || "login" === t ? this.logOrRegLoading ? this.$vux.toast.show({
                                text: this.$t("operation too frequently")
                            }) : (this.logOrRegLoading = !0, this.reqContactConfig({
                                callback: function() {
                                    e.logOrRegLoading = !1, e.sysOptions.CUST_LOGIN_CAPTCHA_MODE && "1" === e.sysOptions.CUST_LOGIN_CAPTCHA_MODE.SMART_SWITCH && Number(e.sysOptions.CUST_LOGIN_CAPTCHA_MODE.W2_M_SMART_CAPTCHA_MODE) ? e.initLoginAIValidate(!0, e.doLogin) : e.doLogin()
                                }
                            })) : this.checkSpecialStatus()
                        },
                        checkSpecialStatusOnly: function(t) {
                            this.reqSpecialStatus({
                                cust_name: 0 === this.tabIndex ? this.username : this.receiveMobile,
                                callback: function(e, i) {
                                    "function" == typeof t && t(e, i)
                                }
                            })
                        },
                        checkSpecialStatus: function() {
                            var t = this;
                            this.checkSpecialStatusOnly((function(e, i) {
                                e ? (t.picCodeCheck = "1" === e.PICTURE_CAPTCHA_MODE, t.specialCode = e.SPECIAL, -1 !== ["1", "2", "3"].indexOf(t.specialCode) ? t.showSpecialDialog = !0 : t.handleLogin("login")) : t.errInfoI18n(i, 0)
                            }))
                        },
                        doLogin: function() {
                            var t = this;
                            if (1 !== this.tabIndex)
                                if (this.utils.platform.sendNativeMsg("sound:Panel_Buttontap_Sound"), this.clearPersonChatItem(), this.sysOptions.CUST_LOGIN_CAPTCHA_MODE || "1" !== this.sysOptions.CUST_LOGIN_CAPTCHA_MODE.SMART_SWITCH || !Number(this.sysOptions.CUST_LOGIN_CAPTCHA_MODE.W2_M_SMART_CAPTCHA_MODE) || this.aiValidateCode) {
                                    var e = (new Date).getTime(),
                                        i = this;
                                    if (e - i.beforeClickTime >= 5e3) {
                                        i.beforeClickTime = e;
                                        var s = {
                                            user: i.username.trim(),
                                            password: i.password,
                                            verifycode: this.verifyCodeStr,
                                            validate: this.aiValidateCode,
                                            special_problems: this.specialProblems,
                                            app_key: this.appData && this.appData.deviceUDID ? this.appData.deviceUDID : "",
                                            callback: function(e, s) {
                                                t.clearSpecialInput(), s ? (i.$vux.loading.hide(), i.password = "", "2199" === s.code ? t.handleLoginErr(s) : i.errInfoI18n(s)) : e.access_token && 0 !== e.access_token.length && t.handleLoginDialog(e)
                                            }
                                        };
                                        this.phoneAndPws ? (s.phone = i.username.trim(), s.phoneAndPws = i.phoneAndPws) : s.user = i.username.trim(), i.$vux.loading.show({
                                            text: this.$t("Loading")
                                        }), i.login(s)
                                    }
                                } else this.$vux.toast.show({
                                    text: this.$t("Smart verification failed")
                                });
                            else this.doSMSLogin()
                        },
                        handleLoginErr: function(t) {
                            var e = JSON.parse(t.info);
                            this.picCodeCheck = "1" === e.PICTURE_CAPTCHA_MODE, e.msg && this.errInfoI18n(e.msg)
                        },
                        handleJump: function() {
                            if (this.beforeloginName && this.username === this.beforeloginName)
                                if (this.frompath) {
                                    var t = "/" + this.frompath;
                                    this.loginedRechargeBack && (t += "?loginedRechargeBack=" + this.loginedRechargeBack), this.$router.replace(t)
                                } else this.paramPath ? this.$router.replace("/" + this.paramPath) : this.$router.replace("/");
                            else this.$router.replace("/")
                        },
                        handleLoginDialog: function(t) {
                            var e = this;
                            this.$store.commit("app/setData", {
                                key: "showDialogTag",
                                value: -1
                            }, {
                                root: !0
                            }), this.$vux.loading.hide(), window.localStorage.setItem("winnerRadio", "1"), this.setCurrentChatMessage({
                                cust_id: this.userInfo.cust_id
                            }), this.setCurrentPersonMessage({
                                cust_id: this.userInfo.cust_id
                            }), x.a.platform.isIOS() ? this.rnBridger.getInfo("registrationID", null, (function(t) {
                                var i = JSON.parse(t),
                                    s = {
                                        registration_id: "string" === (void 0 === i ? "undefined" : T(i)) ? i : i.registerID
                                    };
                                e.modifyRegistrationID(s)
                            })) : x.a.platform.isAndroid() && this.rnBridger.addObserver("registrationIDKey", "registrationID", (function(t) {
                                var i = JSON.parse(t),
                                    s = {
                                        registration_id: "string" === (void 0 === i ? "undefined" : T(i)) ? i : i.registerID
                                    };
                                e.modifyRegistrationID(s), e.rnBridger.removeObserver("registrationIDKey", "registrationID")
                            }));
                            var i = this.utils.checkPwdLevel(this.password);
                            Number(this.sysOptions.PASSWORD_MODE || 1) > Number(i) ? this.$vux.confirm.show({
                                className: "toChangeChpass",
                                title: this.$t("安全提示"),
                                content: this.$t("亲爱的用户，由于系统密码规则变化，") + '<span style="color: #e01509">' + this.$t("建议您修改登录密码。") + "</span>",
                                confirmText: this.$t("去修改"),
                                cancelText: this.$t("下次吧"),
                                onCancel: function() {
                                    e.handleJump()
                                },
                                onConfirm: function() {
                                    e.$router.push("/chpass?isGoLogin=true")
                                }
                            }) : t.pwd_is_expired && "yes" === t.pwd_is_expired ? this.$vux.confirm.show({
                                className: "toChangeChpass",
                                title: this.$t("安全提示"),
                                content: this.$t('亲爱的用户，您的登录密码已连续使用超过一个月，为了您的账户安全，<span style="color: {key}">建议您修改登录密码。</span>', {
                                    key: "#e01509"
                                }),
                                confirmText: this.$t("去修改"),
                                cancelText: this.$t("下次吧"),
                                onCancel: function() {
                                    e.handleJump()
                                },
                                onConfirm: function() {
                                    e.$router.push("/chpass?isGoLogin=true")
                                }
                            }) : t.pwd_acct_pwd && 1 === t.pwd_acct_pwd ? this.$vux.confirm.show({
                                className: "toChangeTxpass",
                                title: this.$t("登录成功"),
                                content: this.$t("您的提现密码与登录密码相同，为保证资金安全，") + '<span class="fc-red">' + this.$t("请修改提现密码。") + "</span>",
                                confirmText: this.$t("去修改"),
                                cancelText: this.$t("下次吧"),
                                onCancel: function() {
                                    e.handleJump()
                                },
                                onConfirm: function() {
                                    e.$router.push("/txpass?isGoLogin=true")
                                }
                            }) : this.$vux.toast.show({
                                text: this.$t("登录成功"),
                                type: "success",
                                onHide: function() {
                                    e.handleJump()
                                }
                            }), this.password = ""
                        },
                        getPromoteLinkCode: function() {
                            var t = "";
                            return this.config.promote && 0 !== this.config.promote.length && (t = this.config.promote), (this.utils.platform.isIOS() || this.utils.platform.isAndroid()) && 0 !== this.config.versionCode.length && 0 === t.length && this.regAddr && (t = this.regAddr), 1 === this.tenantInfo.is_promote && (t = g()(window.location.host)), t
                        },
                        doReqInvicode: function() {
                            var t = this,
                                e = function(e) {
                                    var i = {
                                        link_addr: e,
                                        callback: function(e, i) {
                                            e.promote_code && (t.inviteCode = e.promote_code || "", t.inviteReadOnly = !0)
                                        }
                                    };
                                    t.reqInvicode(i)
                                },
                                i = this.getPromoteLinkCode();
                            0 !== i.length ? (b.a.write("linkaddr", JSON.stringify(i)), e(i)) : b.a.read("linkaddr", (function(t) {
                                t && JSON.parse(t) && (i = JSON.parse(t), e(i))
                            }))
                        },
                        dan: function() {
                            this.pswType = "password" === this.pswType ? "text" : "password"
                        },
                        getSMSCode: function(t) {
                            var e = this,
                                i = "";
                            for (var s in this.origionCountry) this.origionCountry[s] === this.phoneType && (i = s);
                            if (!this.countDownTimer) {
                                this.smsText = 60, this.countDownTimer = setInterval((function() {
                                    e.smsText ? e.smsText -= 1 : (e.smsText = e.$t("重新发送"), clearInterval(e.countDownTimer), e.countDownTimer = null)
                                }), 1e3);
                                var n = {
                                    receive_mobile: this.receiveMobile,
                                    verifycode: this.verifyCodeStr,
                                    country: i,
                                    type: 2,
                                    callback: function(i, s) {
                                        s ? (clearInterval(e.countDownTimer), e.countDownTimer = null, e.smsText = e.$t("立即发送"), e.errInfoI18n(s, 0)) : i && "9999" === i.response_code && (t && t(), e.$vux.toast.show({
                                            text: e.$t("发送成功")
                                        }))
                                    }
                                };
                                this.reqSMSCode(n)
                            }
                        },
                        doSMSLogin: function() {
                            var t = this;
                            if (this.receiveMobile = this.receiveMobile.trim(), this.receiveMobile)
                                if (this.verifyCodeStr = this.verifyCodeStr.trim(), !this.sysOptions.CUST_LOGIN_CAPTCHA_MODE || "1" !== this.sysOptions.CUST_LOGIN_CAPTCHA_MODE.PICTURE_SWITCH || this.verifyCodeStr)
                                    if (this.sysOptions.CUST_LOGIN_CAPTCHA_MODE || "1" !== this.sysOptions.CUST_LOGIN_CAPTCHA_MODE.SMART_SWITCH || !Number(this.sysOptions.CUST_LOGIN_CAPTCHA_MODE.W2_M_SMART_CAPTCHA_MODE) || this.aiValidateCode) {
                                        var e = {
                                            receiveMobile: this.receiveMobile,
                                            smsCode: this.smsCode,
                                            verifycode: this.verifyCodeStr,
                                            validate: this.aiValidateCode,
                                            special_problems: this.specialProblems,
                                            callback: function(e, i) {
                                                t.clearSpecialInput(), i ? (t.errInfoI18n(i, 0), t.verifyCodeStr && (t.verifyCodeStr = "")) : e.access_token && 0 !== e.access_token.length && t.handleLoginDialog(e)
                                            }
                                        };
                                        this.reqSMSlogin(e)
                                    } else this.$vux.toast.show({
                                        text: this.$t("智能验证未通过")
                                    });
                            else this.$vux.toast.show({
                                text: this.$t("验证码不能为空")
                            });
                            else this.$vux.toast.show({
                                text: this.$t("手机号码不能为空")
                            })
                        },
                        clearSpecialInput: function() {
                            this.payPwd = "", this.realName = "", this.cardNum = "", this.specialProblems = ""
                        },
                        handleSpecialCancel: function() {
                            this.showSpecialDialog = !1
                        },
                        handleSpecialOk: function() {
                            if ("1" !== this.specialCode || this.payPwd)
                                if ("2" !== this.specialCode || this.realName && !this.utils.checkRealName(this.realName))
                                    if ("3" !== this.specialCode || this.cardNum && 4 === this.cardNum.length) {
                                        switch (this.showSpecialDialog = !1, this.specialCode) {
                                            case "1":
                                                this.specialProblems = this.helperState.getp(this.payPwd);
                                                break;
                                            case "2":
                                                this.specialProblems = this.realName;
                                                break;
                                            case "3":
                                                this.specialProblems = this.cardNum
                                        }
                                        this.handleLogin("login")
                                    } else this.$vux.toast.show({
                                        text: this.$t("请输入正确的银行卡后4位")
                                    });
                            else this.$vux.toast.show({
                                text: this.$t("请输入正确的真实姓名")
                            });
                            else this.$vux.toast.show({
                                text: this.$t("请输入正确的资金密码")
                            })
                        },
                        getLogo: function() {
                            var t = [];
                            if ((t = this.logo_manage) && t.length > 0) {
                                var e = t.filter((function(t) {
                                    return 27 === t.message_id
                                }));
                                e.length > 0 && (this.logoImage = e[0].pic_addr)
                            }
                        },
                        setPhoneType: function() {
                            if (this.sysOptions.SMS_OPEN_COUNTRY) {
                                for (var t in this.origionCountry = this.sysOptions.SMS_OPEN_COUNTRY, this.origionCountry) this.origionNum.push(this.origionCountry[t]);
                                this.phoneType = this.origionNum[0]
                            }
                        },
                        reqRequireData: function() {
                            var t = this;
                            this.reqContactConfig({
                                callback: function(e, i) {
                                    e && e.sysOptions && (e.sysOptions.CUST_CONTACT_LIST.split(";").map((function(e) {
                                        e.split(",").map((function(e) {
                                            t.$set(t.requireData, e.split(":")[0], e.split(":")[1])
                                        }))
                                    })), t.hasPhone = "1" === t.requireData.W1_mobile_phone)
                                }
                            })
                        }
                    }),
                    components: {
                        XHeader: c.a,
                        CheckIcon: n.a,
                        Box: o.a,
                        XButton: a.a,
                        mapState: s.e,
                        XInput: r.a,
                        Group: l.a,
                        XDialog: d.a,
                        Flexbox: p.a,
                        FlexboxItem: u.a,
                        ComHeader: S.a
                    },
                    directives: {
                        TransferDom: h.a
                    },
                    beforeCreate: function() {},
                    created: function() {
                        var t = this;
                        this.$vux.loading.hide(), this.isShow && this.$store.dispatch("user/changeIsShow", {
                            isShow: !1
                        }), this.$route.query.pramas && (this.paramPath = this.$route.query.pramas), this.rnBridger.addObserver("weChatKey", "weChat", (function(t) {
                            alert("weChat-res-parse2" + t)
                        })), this.socket.webSocket && 1 === this.socket.webSocket.readyState && setTimeout((function() {
                            t.socket.webSocketClose("close")
                        }), 500), this.setPhoneType(), this.reqRequireData();
                        var e = window.localStorage.getItem("rememberAccount");
                        if (e) switch ((e = JSON.parse(e)).loginMode) {
                            case "account":
                                this.username = e.username;
                                break;
                            case "phone_captcha":
                                this.receiveMobile = e.receiveMobile
                        }
                    },
                    beforeMount: function() {},
                    mounted: function() {
                        if (this.getLogo(), this.isLogined && this.logout(), this.lastCustName && this.lastCustName.length > 0 ? (this.username = this.lastCustName, this.password = "", "task" === this.frompath && this.$vux.toast.show({
                                text: this.$t("亲，请先登录哦")
                            })) : "ucenter" === this.frompath && this.$vux.toast.show({
                                text: this.$t("亲，请先登录哦")
                            }), this.$store.commit("app/setData", {
                                key: "isLotteryTicket",
                                value: !1
                            }, {
                                root: !0
                            }), this.loadAIScript(1), this.tenantInfo.tid && (this.fetchVerifyCode({
                                type: 1
                            }), "1" === this.sysOptions.CUST_LOGIN_MODE.account ? (this.tabIndex = 0, "3" === this.sysOptions.CUST_LOGIN_MODE.phone_captcha && (this.phoneAndPws = !1)) : "1" === this.sysOptions.CUST_LOGIN_MODE.phone_captcha && (this.tabIndex = 1), this.initInstallation()), !this.utils.isApp()) {
                            var t = v()(window).height();
                            v()(window).resize((function() {
                                var e = v()(this).height() - t;
                                v()("#downloadBanner").css({
                                    bottom: e + "px"
                                })
                            }))
                        }
                    },
                    beforeUpdate: function() {},
                    updated: function() {},
                    beforeDestroy: function() {
                        this.countDownTimer && clearInterval(this.countDownTimer)
                    },
                    destroyed: function() {}
                },
                $ = i("JFUb"),
                k = Object($.a)(N, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "page-login",
                        class: t.themeOptions.prefixCls + "-login"
                    }, ["themeWZSHUADAN4" !== t.tResLoc && "themeWZSHUADAN5" !== t.tResLoc ? i("x-header", {
                        staticClass: "headers",
                        attrs: {
                            slot: "header",
                            "left-options": {
                                backText: t.$t("返回"),
                                preventGoBack: !0,
                                showBack: !0
                            },
                            "right-options": {
                                showMore: !1
                            },
                            title: t.$t("登录")
                        },
                        on: {
                            "on-click-back": t.goBack
                        },
                        slot: "header"
                    }) : t._e(), t._v(" "), t.tenantInfo.tenant && t.tenantInfo.tenant.online_addr ? ["themeWZSHUADAN11" === t.tResLoc ? [i("div", {
                        staticClass: "wzsd-header wzsd-header-text wzsd-header-left",
                        on: {
                            click: t.handleGuest
                        }
                    }, [i("img", {
                        attrs: {
                            src: "/static/images/wzshuadan/theme11/login_kefu.png?v=2540"
                        }
                    }), i("span", {
                        staticClass: "text-ellipsis"
                    }, [t._v(t._s(t.$t("客服")))])]), t._v(" "), i("div", {
                        staticClass: "wzsd-header wzsd-header-text",
                        on: {
                            click: function(e) {
                                return t.$router.push("/chooseLan")
                            }
                        }
                    }, [i("span", {
                        staticClass: "text-ellipsis"
                    }, [t._v(t._s(t.$t("语言")))])])] : "themeWZSHUADAN13" !== t.tResLoc ? [t.utils.isApp() ? i("div", {
                        staticClass: "wzsd-header",
                        on: {
                            click: t.handleGuest
                        }
                    }, [i("img", {
                        attrs: {
                            src: "/static/images/i_kefu.png?v=2540"
                        }
                    })]) : i("a", {
                        staticClass: "wzsd-header",
                        attrs: {
                            href: t.guestLink,
                            target: "_blank"
                        }
                    }, [i("img", {
                        attrs: {
                            src: "/static/images/i_kefu.png?v=2540"
                        }
                    })])] : t._e()] : t._e(), t._v(" "), t.tid ? i("div", {
                        staticClass: "main-bg noFooter",
                        style: t.iskeyUp && t.isApp ? "top:-50px;" : "themeWZSHUADAN4" !== t.tResLoc && "themeWZSHUADAN5" !== t.tResLoc ? "top:46px" : "top:0"
                    }, [i("div", {
                        staticClass: "topPart sd-topPart",
                        style: "background-image: url(" + ("themeWZSHUADAN12" !== t.tResLoc && "themeWZSHUADAN13" !== t.tResLoc ? t.logoImage : "/static/images/background-img.png?v=2540") + ")",
                        attrs: {
                            "data-tabIndex": t.tabIndex
                        }
                    }), t._v(" "), i("div", {
                        class: {
                            "sd-input-main": !0
                        },
                        style: {
                            overflowY: "scroll",
                            flex: 1,
                            paddingBottom: t.downloadBannerBtn ? "90px" : "50px"
                        }
                    }, ["themeWZSHUADAN12" === t.tResLoc || "themeWZSHUADAN13" === t.tResLoc ? i("div", {
                        staticClass: "sd-top-c"
                    }, [i("div", [i("h6", [t._v(t._s(t.$t("登录")))]), t._v(" "), i("p", [t._v(t._s(t.$t("您好，欢迎来到")) + t._s(t.tenantInfo && t.tenantInfo.tenant ? t.tenantInfo.tenant.tenant_name : ""))]), t._v(" "), i("p", [t._v(t._s(t.tenantInfo && t.tenantInfo.tenant ? t.tenantInfo.tenant.tenant_name : ""))]), t._v(" "), i("div")]), t._v(" "), i("img", {
                        attrs: {
                            src: "/static/images/header-img.425b8d34.png?v=2540"
                        }
                    })]) : t._e(), t._v(" "), "themeWZSHUADAN11" === t.tResLoc ? i("div", {
                        staticClass: "login-or-reg-title"
                    }, [i("div", {
                        staticClass: "title-item active"
                    }, [i("span", {
                        on: {
                            click: function(e) {
                                return t.$router.push("/login")
                            }
                        }
                    }, [t._v(t._s(t.$t("登录")))])]), t._v(" "), i("div", {
                        staticClass: "title-item"
                    }, [i("span", {
                        on: {
                            click: function(e) {
                                return t.$router.push("/reg")
                            }
                        }
                    }, [t._v(t._s(t.$t("注册")))])])]) : t._e(), t._v(" "), 0 === t.tabIndex ? i("group", [i("div", {
                        staticClass: "vux-x-input weui-cell"
                    }, [t.phoneAndPws ? [i("div", {
                        staticClass: "weui-cell__hd"
                    }, [i("label", {
                        staticClass: "weui-label",
                        staticStyle: {
                            width: "3em"
                        }
                    }, [t._v(t._s(t.$t("手机号码")))])]), t._v(" "), i("div", {
                        staticClass: "weui-cell__bd weui-cell__primary",
                        staticStyle: {
                            display: "flex",
                            "align-items": "center"
                        }
                    }, ["themeWZSHUADAN5" !== t.tResLoc && "themeWZSHUADAN12" !== t.tResLoc && "themeWZSHUADAN13" !== t.tResLoc || t.hasPhone ? i("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.phoneType,
                            expression: "phoneType"
                        }],
                        staticStyle: {
                            height: "28px",
                            margin: "0 10px 0 0",
                            width: "0"
                        },
                        on: {
                            change: function(e) {
                                var i = Array.prototype.filter.call(e.target.options, (function(t) {
                                    return t.selected
                                })).map((function(t) {
                                    return "_value" in t ? t._value : t.value
                                }));
                                t.phoneType = e.target.multiple ? i : i[0]
                            }
                        }
                    }, t._l(t.origionNum, (function(e, s) {
                        return i("option", {
                            key: s,
                            domProps: {
                                value: e
                            }
                        }, [t._v(t._s(e))])
                    })), 0) : i("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.phoneType,
                            expression: "phoneType"
                        }],
                        staticStyle: {
                            height: "28px",
                            margin: "0 10px 0 0"
                        },
                        on: {
                            change: function(e) {
                                var i = Array.prototype.filter.call(e.target.options, (function(t) {
                                    return t.selected
                                })).map((function(t) {
                                    return "_value" in t ? t._value : t.value
                                }));
                                t.phoneType = e.target.multiple ? i : i[0]
                            }
                        }
                    }, t._l(t.origionNum, (function(e, s) {
                        return i("option", {
                            key: s,
                            domProps: {
                                value: e
                            }
                        }, [t._v(t._s(e))])
                    })), 0), t._v(" "), i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.username,
                            expression: "username"
                        }],
                        staticClass: "input-zc",
                        staticStyle: {
                            width: "calc(100% - 20px)"
                        },
                        attrs: {
                            type: "text",
                            placeholder: t.$t("请输入手机号")
                        },
                        domProps: {
                            value: t.username
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.username = e.target.value)
                            }
                        }
                    }), t._v(" "), t.username ? i("i", {
                        staticClass: "weui-icon weui_icon_clear weui-icon-clear",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.clearUsername.apply(null, arguments)
                            }
                        }
                    }) : t._e()])] : [i("div", {
                        staticClass: "weui-cell__hd"
                    }, [i("label", {
                        staticClass: "weui-label",
                        staticStyle: {
                            width: "3em"
                        }
                    }, [t._v(t._s(t.$t("账号")))])]), t._v(" "), i("div", {
                        staticClass: "weui-cell__bd weui-cell__primary",
                        staticStyle: {
                            display: "flex",
                            "align-items": "center"
                        }
                    }, ["themeWZSHUADAN5" !== t.tResLoc && "themeWZSHUADAN12" !== t.tResLoc && "themeWZSHUADAN13" !== t.tResLoc || t.hasPhone ? i("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.phoneType,
                            expression: "phoneType"
                        }],
                        staticStyle: {
                            height: "28px",
                            margin: "0 10px 0 0",
                            width: "0"
                        },
                        on: {
                            change: function(e) {
                                var i = Array.prototype.filter.call(e.target.options, (function(t) {
                                    return t.selected
                                })).map((function(t) {
                                    return "_value" in t ? t._value : t.value
                                }));
                                t.phoneType = e.target.multiple ? i : i[0]
                            }
                        }
                    }, t._l(t.origionNum, (function(e, s) {
                        return i("option", {
                            key: s,
                            domProps: {
                                value: e
                            }
                        }, [t._v(t._s(e))])
                    })), 0) : i("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.phoneType,
                            expression: "phoneType"
                        }],
                        staticStyle: {
                            height: "28px",
                            margin: "0 10px 0 0"
                        },
                        on: {
                            change: function(e) {
                                var i = Array.prototype.filter.call(e.target.options, (function(t) {
                                    return t.selected
                                })).map((function(t) {
                                    return "_value" in t ? t._value : t.value
                                }));
                                t.phoneType = e.target.multiple ? i : i[0]
                            }
                        }
                    }, t._l(t.origionNum, (function(e, s) {
                        return i("option", {
                            key: s,
                            domProps: {
                                value: e
                            }
                        }, [t._v(t._s(e))])
                    })), 0), t._v(" "), i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.username,
                            expression: "username"
                        }],
                        staticClass: "input-zc",
                        staticStyle: {
                            width: "calc(100% - 20px)"
                        },
                        attrs: {
                            type: "text",
                            placeholder: t.$t("请输入账号")
                        },
                        domProps: {
                            value: t.username
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.username = e.target.value)
                            }
                        }
                    }), t._v(" "), t.username ? i("i", {
                        staticClass: "weui-icon weui_icon_clear weui-icon-clear",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.clearUsername.apply(null, arguments)
                            }
                        }
                    }) : t._e()])]], 2), t._v(" "), i("x-input", {
                        attrs: {
                            title: t.$t("密码"),
                            type: t.pswType,
                            autocomplete: "new-password",
                            "show-clear": !1,
                            placeholder: t.$t("请输入密码")
                        },
                        on: {
                            "on-focus": t.utils.inputKeyBoardUp,
                            "on-blur": t.utils.inputKeyBoardDown
                        },
                        model: {
                            value: t.password,
                            callback: function(e) {
                                t.password = e
                            },
                            expression: "password"
                        }
                    }, ["password" === t.pswType ? i("i", {
                        staticClass: "iconfont icon-hide",
                        attrs: {
                            slot: "right"
                        },
                        on: {
                            click: t.dan
                        },
                        slot: "right"
                    }) : i("i", {
                        staticClass: "iconfont icon-show",
                        attrs: {
                            slot: "right"
                        },
                        on: {
                            click: t.dan
                        },
                        slot: "right"
                    })]), t._v(" "), t.picCodeCheck || t.sysOptions.CUST_LOGIN_CAPTCHA_MODE && "1" === t.sysOptions.CUST_LOGIN_CAPTCHA_MODE.PICTURE_SWITCH ? i("div", {
                        staticClass: "vux-x-input weui-cell"
                    }, [i("div", {
                        staticClass: "weui-cell__hd"
                    }, [i("label", {
                        staticClass: "weui-label",
                        staticStyle: {
                            width: "3em"
                        }
                    }, [t._v(t._s(t.$t("验证码")))])]), t._v(" "), i("div", {
                        staticClass: "weui-cell__bd weui-cell__primary"
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.verifyCodeStr,
                            expression: "verifyCodeStr"
                        }],
                        staticClass: "weui-input",
                        attrs: {
                            type: "text",
                            placeholder: t.$t("请输入验证码")
                        },
                        domProps: {
                            value: t.verifyCodeStr
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.verifyCodeStr = e.target.value)
                            }
                        }
                    }), t._v(" "), i("img", {
                        staticStyle: {
                            position: "absolute",
                            top: "0",
                            right: "5px",
                            height: "100%"
                        },
                        attrs: {
                            src: t.verifyCode.image
                        },
                        on: {
                            click: function(e) {
                                return t.fetchVerifyCode({
                                    type: 1
                                })
                            }
                        }
                    })])]) : t._e()], 1) : t._e(), t._v(" "), 1 === t.tabIndex ? i("group", [1 === t.loginStep ? [i("div", {
                        staticClass: "vux-x-input weui-cell"
                    }, [i("div", {
                        staticClass: "weui-cell__hd"
                    }, [i("label", {
                        staticClass: "weui-label",
                        staticStyle: {
                            width: "3em"
                        }
                    }, [t._v(t._s(t.$t("手机号码")))])]), t._v(" "), i("div", {
                        staticClass: "weui-cell__bd weui-cell__primary",
                        staticStyle: {
                            display: "flex",
                            "justify-content": "space-between",
                            "align-items": "center"
                        }
                    }, [i("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.phoneType,
                            expression: "phoneType"
                        }],
                        staticStyle: {
                            height: "28px",
                            margin: "0 10px",
                            width: "80px"
                        },
                        on: {
                            change: function(e) {
                                var i = Array.prototype.filter.call(e.target.options, (function(t) {
                                    return t.selected
                                })).map((function(t) {
                                    return "_value" in t ? t._value : t.value
                                }));
                                t.phoneType = e.target.multiple ? i : i[0]
                            }
                        }
                    }, t._l(t.origionNum, (function(e, s) {
                        return i("option", {
                            key: s,
                            domProps: {
                                value: e
                            }
                        }, [t._v(t._s(e))])
                    })), 0), t._v(" "), i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.receiveMobile,
                            expression: "receiveMobile"
                        }],
                        staticClass: "input-zc",
                        staticStyle: {
                            width: "calc(100% - 100px)"
                        },
                        attrs: {
                            type: "number",
                            placeholder: t.$t("请输入手机号")
                        },
                        domProps: {
                            value: t.receiveMobile
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.receiveMobile = e.target.value)
                            }
                        }
                    })])]), t._v(" "), t.picCodeCheck || t.sysOptions.CUST_LOGIN_CAPTCHA_MODE && "1" === t.sysOptions.CUST_LOGIN_CAPTCHA_MODE.PICTURE_SWITCH ? i("div", {
                        staticClass: "vux-x-input weui-cell"
                    }, [i("div", {
                        staticClass: "weui-cell__hd"
                    }, [i("label", {
                        staticClass: "weui-label",
                        staticStyle: {
                            width: "3em"
                        }
                    }, [t._v(t._s(t.$t("验证码")))])]), t._v(" "), i("div", {
                        staticClass: "weui-cell__bd weui-cell__primary"
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.verifyCodeStr,
                            expression: "verifyCodeStr"
                        }],
                        staticClass: "weui-input",
                        attrs: {
                            type: "text",
                            placeholder: t.$t("请输入验证码")
                        },
                        domProps: {
                            value: t.verifyCodeStr
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.verifyCodeStr = e.target.value)
                            }
                        }
                    }), t._v(" "), i("img", {
                        staticStyle: {
                            position: "absolute",
                            top: "0",
                            right: "5px",
                            height: "100%"
                        },
                        attrs: {
                            src: t.verifyCode.image
                        },
                        on: {
                            click: function(e) {
                                return t.fetchVerifyCode({
                                    type: 1
                                })
                            }
                        }
                    })])]) : t._e()] : t._e(), t._v(" "), 2 === t.loginStep ? [i("div", {
                        staticClass: "vux-x-input weui-cell"
                    }, [i("div", {
                        staticClass: "weui-cell__hd"
                    }, [i("label", {
                        staticClass: "weui-label",
                        staticStyle: {
                            width: "3em"
                        }
                    }, [t._v(t._s(t.$t("短信验证")))])]), t._v(" "), i("div", {
                        staticClass: "weui-cell__bd weui-cell__primary",
                        staticStyle: {
                            display: "flex",
                            "justify-content": "space-between",
                            "align-items": "center"
                        }
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.smsCode,
                            expression: "smsCode"
                        }],
                        staticStyle: {
                            height: "28px",
                            width: "calc(100% - 90px)",
                            "padding-left": "10px"
                        },
                        attrs: {
                            type: "text",
                            required: "required",
                            placeholder: t.$t("请输入短信验证码")
                        },
                        domProps: {
                            value: t.smsCode
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.smsCode = e.target.value)
                            }
                        }
                    }), t._v(" "), i("span", {
                        staticClass: "send-now",
                        on: {
                            click: function(e) {
                                return t.getSMSCode(!1)
                            }
                        }
                    }, [t._v(t._s("number" == typeof t.smsText ? t.smsText + "s" : t.smsText))])])]), t._v(" "), t.picCodeCheck || t.sysOptions.CUST_LOGIN_CAPTCHA_MODE && "1" === t.sysOptions.CUST_LOGIN_CAPTCHA_MODE.PICTURE_SWITCH ? i("div", {
                        staticClass: "vux-x-input weui-cell"
                    }, [i("div", {
                        staticClass: "weui-cell__hd"
                    }, [i("label", {
                        staticClass: "weui-label",
                        staticStyle: {
                            width: "3em"
                        }
                    }, [t._v(t._s(t.$t("验证码")))])]), t._v(" "), i("div", {
                        staticClass: "weui-cell__bd weui-cell__primary"
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.verifyCodeStr,
                            expression: "verifyCodeStr"
                        }],
                        staticClass: "weui-input",
                        attrs: {
                            type: "text",
                            placeholder: t.$t("请输入验证码")
                        },
                        domProps: {
                            value: t.verifyCodeStr
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.verifyCodeStr = e.target.value)
                            }
                        }
                    }), t._v(" "), i("img", {
                        staticStyle: {
                            position: "absolute",
                            top: "0",
                            right: "5px",
                            height: "100%"
                        },
                        attrs: {
                            src: t.verifyCode.image
                        },
                        on: {
                            click: function(e) {
                                return t.fetchVerifyCode({
                                    type: 1
                                })
                            }
                        }
                    })])]) : t._e()] : t._e()], 2) : t._e(), t._v(" "), i("check-icon", {
                        attrs: {
                            slot: "title",
                            value: t.remember
                        },
                        nativeOn: {
                            click: function(e) {
                                t.remember = !t.remember
                            }
                        },
                        slot: "title"
                    }, [t._v(t._s(t.$t("记住账号")))]), t._v(" "), i("div", {
                        staticClass: "ops"
                    }, [1 === t.tabIndex && 1 === t.loginStep ? i("x-button", {
                        staticClass: "btn-login sdbtn_act",
                        staticStyle: {
                            padding: "4px 0"
                        },
                        attrs: {
                            type: "warn"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.handleLoginStep.apply(null, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("下一步")))]) : 0 === t.tabIndex || 2 === t.loginStep ? i("x-button", {
                        staticClass: "btn-login sdbtn_act",
                        staticStyle: {
                            padding: "4px 0"
                        },
                        attrs: {
                            type: "warn"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.handleLogin.apply(null, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("登录")))]) : t._e()], 1), t._v(" "), "themeYP" === t.tResLoc && t.activeConfiguration[37] ? i("div", {
                        staticClass: "operate"
                    }, [i("div", {
                        staticStyle: {
                            margin: "20px 0",
                            color: "#e01509"
                        },
                        on: {
                            click: t.handleVisitorsLogin
                        }
                    }, [t._v(t._s(t.$t("游客登录")))])]) : t._e(), t._v(" "), i("div", {
                        staticClass: "operate"
                    }, [1 === t.tabIndex && "1" === t.sysOptions.CUST_LOGIN_MODE.account || 0 === t.tabIndex && "1" === t.sysOptions.CUST_LOGIN_MODE.phone_captcha ? i("label", [1 === t.tabIndex && t.sysOptions.CUST_LOGIN_MODE && "1" === t.sysOptions.CUST_LOGIN_MODE.account ? i("div", {
                        staticClass: "zc",
                        on: {
                            click: function(e) {
                                return t.handleTabChange(0)
                            }
                        }
                    }, [t._v(t._s(t.$t("密码登录")))]) : t._e(), t._v(" "), 0 === t.tabIndex && t.sysOptions.CUST_LOGIN_MODE && "1" === t.sysOptions.CUST_LOGIN_MODE.phone_captcha ? i("div", {
                        staticClass: "zc",
                        on: {
                            click: function(e) {
                                return t.handleTabChange(1)
                            }
                        }
                    }, [t._v(t._s(t.$t("短验登录")))]) : t._e()]) : t._e(), t._v(" "), "themeWZSHUADAN11" !== t.tResLoc && "themeWZSHUADAN12" !== t.tResLoc && "themeWZSHUADAN13" !== t.tResLoc ? i("label", [i("span", {
                        staticClass: "zc",
                        on: {
                            click: function(e) {
                                return t.$router.push("/chooseLan")
                            }
                        }
                    }, [t._v(t._s(t.$t("语言")))])]) : t._e(), t._v(" "), "themeWZSHUADAN11" !== t.tResLoc && "themeWZSHUADAN12" !== t.tResLoc && "themeWZSHUADAN13" !== t.tResLoc ? i("label", [i("span", {
                        staticClass: "zc",
                        on: {
                            click: function(e) {
                                return t.$router.push("/reg")
                            }
                        }
                    }, [t._v(t._s(t.$t("注册新账户")))])]) : t._e()]), t._v(" "), "themeWZSHUADAN12" === t.tResLoc || "themeWZSHUADAN13" === t.tResLoc ? i("div", {
                        staticClass: "sd-menu-tab"
                    }, [i("span", {
                        on: {
                            click: function(e) {
                                return t.$router.push("/reg")
                            }
                        }
                    }, [t._v(t._s(t.$t("注册")))])]) : t._e(), t._v(" "), t.activeConfiguration[18] ? i("div", {
                        staticStyle: {
                            "margin-top": "20px",
                            "text-align": "center"
                        }
                    }, [t.isApp ? i("div", {
                        staticStyle: {
                            display: "inline-block",
                            color: "#fff",
                            background: "#dbb72d",
                            padding: "6px",
                            "border-radius": "4px",
                            "box-shadow": "0px 0px 1px 0px #3a1d1d"
                        },
                        on: {
                            click: t.handleDownUrl
                        }
                    }, [i("img", {
                        staticStyle: {
                            width: "18px",
                            "vertical-align": "bottom"
                        },
                        attrs: {
                            src: "/static/images/down_btn.png?v=2540"
                        }
                    }), t._v(" " + t._s(t.$t("下载APP")))]) : t.isShowGuest ? i("a", {
                        staticClass: "downloadBtn",
                        staticStyle: {
                            color: "#fff",
                            background: "#dbb72d",
                            padding: "6px",
                            "border-radius": "4px",
                            "box-shadow": "0px 0px 1px 0px #3a1d1d"
                        },
                        attrs: {
                            href: t.downUrl
                        }
                    }, [i("img", {
                        staticStyle: {
                            width: "18px",
                            "vertical-align": "bottom"
                        },
                        attrs: {
                            src: "/static/images/down_btn.png?v=2540"
                        }
                    }), i("span", {
                        staticStyle: {
                            color: "#fff"
                        }
                    }, [t._v(" " + t._s(t.$t("下载APP")))])]) : t._e()]) : t._e()], 1)]) : i("div", {
                        staticStyle: {
                            height: "50px",
                            "text-align": "center",
                            color: "#d81603",
                            "line-height": "50px",
                            "margin-top": "80px"
                        }
                    }, [t._v(t._s(t.$t("啊偶，请检查网络")))]), t._v(" "), !t.utils.isApp() && t.downloadBannerBtn && !t.config.isWD && t.activeConfiguration[18] ? i("div", {
                        staticStyle: {
                            position: "fixed",
                            left: "0",
                            bottom: "0",
                            width: "100%"
                        },
                        attrs: {
                            id: "downloadBanner"
                        }
                    }, ["" !== t.downloadBanner ? i("i", {
                        staticClass: "iconfont icon-close",
                        on: {
                            click: function(e) {
                                t.downloadBannerBtn = !1
                            }
                        }
                    }) : t._e(), t._v(" "), t.installServiceLoading ? i("div", {
                        staticStyle: {
                            "line-height": "0"
                        }
                    }, [i("img", {
                        staticStyle: {
                            width: "100%",
                            "max-height": "100px"
                        },
                        attrs: {
                            src: t.downloadBanner
                        }
                    })]) : t.appInstallKey && t.appInstallReady ? i("div", {
                        staticClass: "downloadButton",
                        staticStyle: {
                            "line-height": "0"
                        }
                    }, [i("img", {
                        staticStyle: {
                            width: "100%",
                            "max-height": "100px"
                        },
                        attrs: {
                            src: t.downloadBanner
                        }
                    })]) : i("a", {
                        staticStyle: {
                            display: "block",
                            "line-height": "0"
                        },
                        attrs: {
                            id: "downloadBannerCode",
                            "data-clipboard-text": JSON.stringify(t.clipboardText),
                            href: t.downUrl
                        },
                        on: {
                            click: t.downAppByClipboard
                        }
                    }, [i("img", {
                        staticStyle: {
                            width: "100%",
                            "max-height": "100px"
                        },
                        attrs: {
                            src: t.downloadBanner
                        }
                    })])]) : t._e(), t._v(" "), i("div", {
                        directives: [{
                            name: "transfer-dom",
                            rawName: "v-transfer-dom"
                        }]
                    }, [i("x-dialog", {
                        staticClass: "dialog-special",
                        model: {
                            value: t.showSpecialDialog,
                            callback: function(e) {
                                t.showSpecialDialog = e
                            },
                            expression: "showSpecialDialog"
                        }
                    }, [i("div", {
                        staticClass: "dialog-special-b"
                    }, [i("h3", [t._v(t._s(t.$t("特殊登陆验证")))]), t._v(" "), i("div", {
                        staticClass: "dialog-special-t"
                    }, ["1" === t.specialCode ? [i("h5", [t._v(t._s(t.$t("资金密码")))]), t._v(" "), i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.payPwd,
                            expression: "payPwd"
                        }],
                        attrs: {
                            type: "text",
                            placeholder: t.$t("默认资金密码为注册时的登陆密码")
                        },
                        domProps: {
                            value: t.payPwd
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.payPwd = e.target.value)
                            }
                        }
                    })] : t._e(), t._v(" "), "2" === t.specialCode ? [i("h5", [t._v(t._s(t.$t("真实姓名")))]), t._v(" "), i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.realName,
                            expression: "realName"
                        }],
                        attrs: {
                            type: "text",
                            placeholder: t.$t("请输入会员真实姓名")
                        },
                        domProps: {
                            value: t.realName
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.realName = e.target.value)
                            }
                        }
                    })] : t._e(), t._v(" "), "3" === t.specialCode ? [i("h5", [t._v(t._s(t.$t("默认银行卡后4位")))]), t._v(" "), i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.cardNum,
                            expression: "cardNum"
                        }],
                        attrs: {
                            type: "text",
                            placeholder: t.$t("请输入默认银行卡后4位")
                        },
                        domProps: {
                            value: t.cardNum
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.cardNum = e.target.value)
                            }
                        }
                    }), t._v(" "), i("p", [t._v(t._s(t.$t("您也可输入支付宝(If it contains '@', please enter the last 4 digits before the character)或虚拟货币后4位")))])] : t._e()], 2), t._v(" "), i("flexbox", [i("flexbox-item", [i("x-button", {
                        nativeOn: {
                            click: function(e) {
                                return e.stopPropagation(), t.handleSpecialCancel.apply(null, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("取消")))])], 1), t._v(" "), i("flexbox-item", [i("x-button", {
                        staticStyle: {
                            color: "red"
                        },
                        nativeOn: {
                            click: function(e) {
                                return e.stopPropagation(), t.handleSpecialOk.apply(null, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("确定")))])], 1)], 1)], 1)])], 1), t._v(" "), i("div", {
                        directives: [{
                            name: "transfer-dom",
                            rawName: "v-transfer-dom"
                        }]
                    }, [i("x-dialog", {
                        staticClass: "dialog-special",
                        attrs: {
                            "hide-on-blur": ""
                        },
                        model: {
                            value: t.aiShowDialog,
                            callback: function(e) {
                                t.aiShowDialog = e
                            },
                            expression: "aiShowDialog"
                        }
                    }, [i("div", {
                        staticClass: "dialog-special-b",
                        staticStyle: {
                            padding: "0"
                        }
                    }, [t.aiValidateLoading ? [i("img", {
                        staticStyle: {
                            width: "150px",
                            margin: "20px 0"
                        },
                        attrs: {
                            src: "/static/images/ani_scan.gif"
                        }
                    }), t._v(" "), i("p", {
                        staticStyle: {
                            "margin-bottom": "10px",
                            "text-align": "center"
                        }
                    }, [t._v(t._s(t.$t("安全检测中")))])] : t._e(), t._v(" "), i("div", {
                        attrs: {
                            id: "aiValidate2"
                        }
                    })], 2)])], 1)], 2)
                }), [], !1, (function(t) {
                    i("kop9")
                }), null, null);
            e.default = k.exports
        }
    }
]);