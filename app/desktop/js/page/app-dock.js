/**
 * @fileOverview  应用（App）—— 页签（AppDock）
 * @author 吴钦飞(wuqf@pkusoft.net)
 *
 * @module module:page/app-dock
 * @requires module:jquery
 * @requires module:common/template
 */
define( function ( require ) {
    var $,
        Template
        ;

    $ = require( "jquery" );
    Template = require( "../common/template" );

    /**
     * @classDesc 页签（AppDock）类
     * @exports module:page/app-dock
     * @alias AppDock
     * @constructor
     * @param {Object} options 参数
     */
    function AppDock ( options ) {
        if ( typeof this.$container === "string" ) {
            this.$container = $( this.$container );
        }
        this.appInstance = null;
        this.$target = null;
        this.options = null;
        this._init( options );
    }

    /**
     * 页签（AppDock）实例的默认参数
     * @type {object}
     * @property {string} icon 页签（dock）图标的URL（推荐使用绝对路径）
     * @property {string} title 页签（dock）的标题
     * @property {string} dockTemplateName 页签（dock）的模板文件名
     */
    AppDock.prototype.defaults = {
        icon: "",
        title: "",
        dockTemplateName: ""
    };

    /**
     * 包裹所有页签（AppDock）的容器的CSS选择器
     * @type {string}
     */
    AppDock.prototype.$container = ".topbar-dock";



    // @public
    $.extend( AppDock.prototype, /** @lends AppDock.prototype */ {
        /**
         * 显示页签（AppDock） 即 让该dock处于active状态。
         * @return {AppDock} 链式调用
         */
        show: function () {
            this.$target.addClass( "active" ).siblings().removeClass( "active" );
            return this;
        },
        /**
         * 显示页签（AppDock） 即 让该dock处于非active状态。
         * @return {AppDock} 链式调用
         */
        inactive: function () {
            this.$target.removeClass( "active" );
            return this;
        },
        /**
         * 销毁AppDock。
         * @returns {AppDock}
         */
        destroy: function () {
            this.$target.remove();

            this.appInstance.isAppDockDestroy = true;

            this.$target = null;
            this.options = null;
            this.appInstance = null;

            return this;
        }
    } );

    // @private
    $.extend( AppDock.prototype, /** @lends AppDock.prototype */{
        /**
         * 初始化页签（AppDock）实例
         * @private
         * @param {Object} options 参数
         * @return {AppDock} 链式调用
         */
        _init: function ( options ) {
            // 1. 参数
            this.options = $.extend( {}, this.defaults, options );

            // 2. 创建target
            this._createTarget();

            // 3. 绑定事件
            this._bindEvent();

            return this;
        },
        /**
         * 创建页签（AppDock）节点，并将其添加到页签（AppDock）容器。
         *
         * @private
         * @return {AppDock} 链式调用
         */
        _createTarget: function () {
            var html,
                data,
                $target
                ;
            // 1. 数据 和 模板
            data = {
                icon: this.options.icon,
                title: this.options.title
            };

            // 2. 获取模板
            html = Template.getTemplate( this.options.dockTemplateName, data );
            $target = $( html );

            // 3. 添加进 container
            this.$container.append( $target );

            this.$target = $target;

            this.show();

            return this;
        },
        /**
         * 给页签（AppDock）绑定事件
         * @private
         * @param {Object} options 参数
         * @return {AppDock} 链式调用
         */
        _bindEvent: function () {
            var _this
            ;
            _this = this;

            // 1. 点击关闭，销毁应用
            _this.$target.find( ".dock-item-btn" ).on( "click.close.app", function ( event ) {
                // 阻止冒泡
                event.stopPropagation();
                _this.appInstance && ( ! _this.appInstance.isAppDestroy )
                && _this.appInstance.destroy();
            } );

            // 2. 点击dock，显示应用
            _this.$target.on( "click.show.app", function () {
                _this.appInstance.show();
            } );


            return this;
        }
    } );



    return AppDock;
} );