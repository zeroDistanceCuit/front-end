export const salesManage = {
    data() {
        return {
            orgOptions: {
                xAxis: {
                    type: 'category',
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [],
                    type: 'line',
                    smooth: true
                }]
            },
            orgOptions2:{xAxis: {
                    type: 'category',
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [],
                    type: 'line',
                    smooth: true
                }]}
        }
    },
    methods: {
        getCourseGradeById() {
            this.GET('/api/cart/search?bussinessId=' + this.storage.getItem('userId') + "&status=finish&userId=0").then(res => {
                let data = res.result.data

                // 先取出对象数组的index属性的值，然后根据该值进行操作
                let time = []
                data.forEach(item => {
                    time.push(item.Time)
                })
                
                let newTime = time.filter(function (item, index, array) {
                    return array.indexOf(item) === index;
                })
                // 

                this.orgOptions.xAxis.data = newTime
                this.orgOptions2.xAxis.data = newTime

                let yData0 = []
                let yData1=[]
                newTime.forEach(item => {
                    let sum = 0
                    let money =0
                    data.forEach(it => {
                        if (it.Time == item) {
                            sum += it.Num
                            money += Number(it.Shops.Goods.Money)
                        }
                    })
                    yData0.push(sum)
                    yData1.push(money)
                })
                this.orgOptions.series[0].data = yData0
                this.orgOptions2.series[0].data = yData1
            })
        }
    },
    mounted() {
        this.getCourseGradeById()
    }
}