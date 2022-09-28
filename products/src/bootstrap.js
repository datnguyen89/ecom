import faker from 'faker'

const mount = (el) => {
    let products = ''

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }
    el.innerHTML = products
}

// Context/Situation #1
// File đang chạy độc lập ở môi trường development
// Sử dụng file local index.html
// Sử dụng chính xác element với id là 'dev-products
// Render ngay lập tức element trên
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products')
    if (el) {
        mount(el)
    }
}


// Context/Situation #2
// File đang chạy trên môi trường dev hoặc production quan container app
// Không đảm bảo element với id là 'dev-products có tồn tại
// Không cần thiết render app ngay lập tức
export {mount};