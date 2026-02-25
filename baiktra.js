let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];


for (let i = 0; i < orders.length; i++) {
    const allString = orders[i].concat(revenues[i])
    console.log(`"${orders[i]} mang về ${revenues[i]}",`);

}
let sum = 0;
for (let i = 0; i < revenues.length; i++) {
    if (revenues[i] > 0) {
        sum += revenues[i];
    } 
}
console.log(sum);

