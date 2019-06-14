<template>
    <div>
        <header class="province_header_bar">
            <div class="province_header_con">
                <a href="javascript:history.go(-1)" class="province_header_left_btn">
                    <i class="icon iconfont icon_leftarrow"></i>
                </a>
                <div class="province_header_title">选择省份</div>
            </div>
        </header>
        <div class="province_content">
            <div class="province_group">
                <ul>
                    <li data-group="定位省份">定位省份</li>
                    <li>广东</li>
                </ul>
            </div>
        </div>
        <div class="province">
            <div class="province_content">
                <div class="province_group">
                    <ul>
                        <span>
                            <li data-group="常用省份">常用省份</li>
                            <li>北京</li>
                            <li>上海</li>
                            <li>广东</li>
                            <li>浙江</li>
                            <li>江苏</li>
                        </span>
                        <span style="display: none;">
                            <li data-group="#"> #</li>
                            <li></li>
                        </span>
                        <span>
                            <li data-group="A"> A</li>
                            <li>安徽</li>
                        </span>
                        <span>
                            <li data-group="B"> B</li>
                            <li>北京</li>
                        </span>
                        <span>
                            <li data-group="C"> C</li>
                            <li>重庆</li>
                        </span>
                        <span>
                            <li data-group="F"> F</li>
                            <li>福建</li>
                        </span>
                        <span>
                            <li data-group="G"> G</li>
                            <li>甘肃</li>
                            <li>广东</li>
                            <li>广西</li>
                            <li>贵州</li>
                        </span>
                        <span>
                            <li data-group="H"> H</li>
                            <li>海南</li>
                            <li>河北</li>
                            <li>河南</li>
                            <li>黑龙江</li>
                            <li>湖北</li>
                            <li>湖南</li>
                        </span>
                        <span>
                            <li data-group="J"> J</li>
                            <li>吉林</li>
                            <li>江苏</li>
                            <li>江西</li>
                        </span>
                        <span>
                            <li data-group="L"> L</li>
                            <li>辽宁</li>
                        </span>
                        <span>
                            <li data-group="N"> N</li>
                            <li>内蒙古</li>
                            <li>宁夏</li>
                        </span>
                        <span>
                            <li data-group="Q"> Q</li>
                            <li>青海</li>
                        </span>
                        <span>
                            <li data-group="S"> S</li>
                            <li>山东</li>
                            <li>陕西</li>
                            <li>山西</li>
                            <li>上海</li>
                            <li>四川</li>
                        </span>
                        <span>
                            <li data-group="T"> T</li>
                            <li>天津</li>
                        </span>
                        <span>
                            <li data-group="X"> X</li>
                            <li>新疆</li>
                            <li>西藏</li>
                        </span>
                        <span>
                            <li data-group="Y"> Y</li>
                            <li>云南</li>
                        </span>
                        <span>
                            <li data-group="Z"> Z</li>
                            <li>浙江</li>
                        </span>
                    </ul>
                </div>
            </div>
            <div class="province_list_bar">
                <ul>
                    <li :data-index="a.num" v-for="(a,index) in abc" :key="index" v-text="a.num"></li>
                </ul>
            </div>
            <div class="province_tips" style="display: none;">A</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            abc:[{
                num : '#'
            },{
                num : 'A'
            },{
                num : 'B'
            },{
                num : 'C'
            },{
                num : 'F'
            },{
                num : 'G'
            },{
                num : 'H'
            },{
                num : 'G'
            },{
                num : 'L'
            },{
                num : 'N'
            },{
                num : 'Q'
            },{
                num : 'S'
            },{
                num : 'T'
            },{
                num : 'X'
            },{
                num : 'Y'
            },{
                num : 'Z'
            },]
        }
    }
}
</script>
