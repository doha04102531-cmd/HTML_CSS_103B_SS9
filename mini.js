const products = [
    ["iPhone 15", 1200, 10],
    ["Samsung S23", 900, 5],
    ["Oppo Reno", 450, 0],
    ["Xiaomi 13", 600, 8],
    ["Nokia C20", 80, 15]
];

// hien thi dsach
const displayListProduct = (listProduct) => {
    listProduct.forEach((product) => {
        console.log(`${product[0]} - ${product[1]} USD - Tồn kho: ${product[2]}`);
    });
};


// loc sp trên 500
const filterHighEnd = (listProduct) => {
    let result = listProduct.filter((product) => {
        return product[1] > 500;
    });

    result.forEach((product) => {
        console.log(`${product[0]} - ${product[1]} USD`);
    });
};


// tìm kiếm sp
const findProduct = (searchName, listProduct) => {
    let findItem = listProduct.find((product) => {
        return product[0].includes(searchName);
    });

    if (findItem) {
        console.log(`${findItem[0]} - ${findItem[1]} USD - Tồn kho: ${findItem[2]}`);
    } else {
        console.log("Không tìm thấy sản phẩm");
    }
};


// tổng $ kho
const totalValue = (listProduct) => {
    let total = listProduct.reduce((sum, product) => {
        return sum + product[1] * product[2];
    }, 0);

    console.log("Tổng giá trị kho:", total, "USD");
};


// kiểm tra kho có hàng kh
const checkStock = (listProduct) => {
    let hasOut = listProduct.some((product) => product[2] === 0);
    let allAbove100 = listProduct.every((product) => product[1] > 100);

    console.log("Có sản phẩm hết hàng:", hasOut ? "Có" : "Không");
    console.log("Tất cả sản phẩm giá > 100:", allAbove100 ? "Đúng" : "Sai");
};


let choice;

const displayMenu = () => {
    choice = +prompt(`
--- QUẢN LÝ KHO HÀNG ---

1. Xem danh sách
2. Lọc sản phẩm cao cấp (>500)
3. Tìm kiếm sản phẩm
4. Tổng giá trị kho
5. Kiểm tra tồn kho
0. Thoát
`);
};


do {
    displayMenu();

    switch (choice) {

        case 1:
            displayListProduct(products);
            break;

        case 2:
            filterHighEnd(products);
            break;

        case 3:
            let searchName = prompt("Nhập tên sản phẩm:");
            findProduct(searchName, products);
            break;

        case 4:
            totalValue(products);
            break;

        case 5:
            checkStock(products);
            break;

        default:
            break;
    }

} while (choice != 0);