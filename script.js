// यह डमी डेटा दोनों फ़ाइलों (index.html और medicine_detail.html) में होना चाहिए
const medicineData = {
    'Benadryl': {
        name: 'Benadryl',
        manufacturer: 'Johnson & Johnson',
        price: 12,
        image: 'https://images.apollo247.in/pub/media/catalog/product/b/e/ben0053_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w',
        buy_link: 'Benadryl.html',
        alternatives: [
            { name: 'Corex', manufacturer: 'Pfizer', price: 100, image: 'https://shreedashrath.com/wp-content/uploads/2021/06/corex-600x600.jpg' },
            { name: 'Ascoril-D', manufacturer: 'Gzlenmark', price:100 , image: 'https://images.apollo247.in/pub/media/catalog/product/a/s/asc0019.jpg' ,
                buy_link3:'detail.html'
            },
        ]
    },
     'Daraprin': {
        name: 'Daraprin',
        manufacturer: 'indico laboratories ',
        price: 250,
        image: 'https://dwaey.com/medrg/upload/1723992724.png',
        buy_link:'detail.html', // खरीदने का लिंक
        alternatives: [
            { name: 'Daramin', manufacturer: 'indico laboratories ', price: 15,
            image: 'https://www.netmeds.com/images/product-v1/600x600/1136339/daramin_25mg_tablet_10s_742022_0_0.jpg' ,
        
            },
            
        ]
    },
    'Zytiga':{
        name:'Zytiga',
        manufacturer:'Mylan Pharma',
        price: 75000,
        image:'/a.jpg',
        buy_link:'Zytiga.html',
        alternatives: [
            {
                name:'Mytera',
                manufacturer:'Mylan pharma',
                price:15000,
                image:'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cx456kwzkuscoxk4bl4d.jpg?format=auto'
            },
            {
                name:'Abitate',
                manufacturer:'RPG Life Sciences',
                price:29000,
                image:'https://assets.mrmed.in/product-images/product-images-1632405352428-700552497-100012_1.jpg',
            }
        ]
    },
    'Glivec':{
        name:'Glivec',
        manufacturer:'Natco Pharma',
        price:6600,
        image:'https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a0f76dfdb04146cfb0ec1f5099800eb6.jpg',
        buy_link:'Glivec.html',
        alternatives:[
            {
                name:'Veenat',
                manufacturer:'Natco Pharma',
                price:1500,
                image:'https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a5f53d8d234d45a695d7c6f59707c652.jpg'
            }
        ]
    },  
    'Paracetamol':{
        name:'Paracetamol',
        manufacturer:'GlaxoSmithKline',
        price:30 ,
        image :'https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg',
        buy_link:'Paracetamol.html',
        alternatives:[
        {
            name:'Crocin',
            manufacturer:'GlaxoSmithKline',
            price:30,
            image:'https://cdn01.pharmeasy.in/dam/products_otc/H45820/crocin-650-tablet-15-nos-3-1689759566.jpg'
        },
        {
            name:'Dolo 65' ,
            manufacturer:'Micro labs',
            price:30,
            image:'https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_1.png'
        },
        {
            name:'Calpol',
            manufacturer:'GSK',
            price:30,
            image:'https://drugstreet.in/wp-content/uploads/2023/12/1000046750.jpg'
        }
        ]
    },
    'Combiflam':{
        name:'Combiflam',
        manufacturer:'Sanofi',
        price:30,
        image:'https://images.apollo247.in/pub/media/catalog/product/c/o/combiflam_tablet_20_s-1.png?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w',
        buy_link:'Combiflam.html',
        alternatives:[
            {
                name:'Ibuprofen',
                manufacturer:'Abbott',
                price:20,
                image:'https://5.imimg.com/data5/SELLER/Default/2023/9/344827499/TG/YT/FY/192270567/ibuprofen-tablet-400mg.png'
            },
            { 
                name:'Brufen',
                manufacturer:'Abbott',
                price:20,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUmWwHGkFj5M1SKY0GM-af-pHOyLMcLqRdQ&s'
            }
        ]
    },
    'Disprin':{
        name:'Disprin',
        manufacturer:'Reckitt Benckiser',
        price:20,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfABbWyZY3yywBJtf60mpv4GyfpwTHVj5yGA&s',
        buy_link:'Disprin.html',
        alternatives:[
            {
                name:'Ecosprin',
                manufacturer:'USV Ltd.',
                price:20,
                image:'https://assets.truemeds.in/Images/ProductImage/TM-TACR1-012745/ecosprin-75-tablet-14_ecosprin-75-tablet-14--TM-TACR1-012745_1.png'
            },
            {
                name:'Aspirin',
                manufacturer:'Bayer',
                price:20,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeIfr0UEUuInFvEhsJRyF3aVQKXuaMSIalA&s'
            },
            {
                name:'Aspro',
                manufacturer:'Nicholas Healtcare Limited',
                price:20,
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SvOcNgxiuLa4yDomGtmGL5e22x6BHuX5qQ&s'
            }
        ]
    },
    'ORS':{
        nane:'ORS',
        manufacturer:'FDC Ltd',
        price:25,
        image:'https://cdn01.pharmeasy.in/dam/products_otc/W81928/prolyte-ors-orange-drink-sachet-21-gm-2-1654249497.jpg',
        buy_link:'ORS.html',
        alternatives:[
            {
                name:'Electral',
                manufacturer:'FDC Ltd',
                price :'<p>Rs. 15-25 per sachet</p>',
                image:'https://m.media-amazon.com/images/I/81jrDrIJoNL.jpg'
            },
            {
                name:'ORSL',
                manufacturer:'Dabur',
                price:25,
                image:'https://images.apollo247.in/pub/media/catalog/product/o/r/ors0011_1-1-_1_.jpg'
            },
            {
                name:'Peditral',
                manufacturer:'Cipla',
                price:25,
                image:'https://images.apollo247.in/pub/media/catalog/product/P/E/PED0040_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w'
            }
        ]
    },
    'Vicks Vaporub':{
        name :'Vicks Vaporub',
        manufacturer:'Procter & Gamble',
        price:60,
        image:'https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1677525570.jpg',
        buy_link:'Vicks Vaporup.html',
        alternatives:[
            {
                name:'Zandu Balm',
                manufacturer:'Emami',
                price:40,
                image:'https://m.media-amazon.com/images/I/617dG3SoVKL.jpg'
            },
            {
                name:'Amrutanjan',
                manufacturer:'Amrutanjan Healthcare',
                price:60,
                image:'https://cdn01.pharmeasy.in/dam/products_otc/010715/amrutanjan-strong-doub-50-ml-2-1674209955.jpg?dim=400x0&dpr=1&q=100'
            },
            {
                name:'Tiger Balm',
                manufacturer:'Haw Par Healtcare',
                price:40,
                image:'https://rukminim2.flixcart.com/image/850/1000/jd1z9u80/body-pain-relief/v/n/b/30-red-ointment-30g-tiger-balm-original-imaf224hjngnfmhs.jpeg?q=90&crop=false'
            }
        ]
    },
    'Digene':{
        name:'Digene',
        manufacturer:'Abbott',
        price:80 ,
        image:'https://cdn01.pharmeasy.in/dam/products_otc/255390/digene-gel-acidity-gas-relief-200ml-mint-flavour-sugar-free-2-1710939921.jpg',
        buy_link:'Digene.html',
        alternatives:[
            {
                name:'ENO',
                manufacturer:'GlaxoSmithKline',
                price:20,
                image:'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/home/mobile/homepage-header-carousal-1-v3_mobile.jpg?auto=format'
            },
            {
                name:'Gelusil',
                manufacturer:'Pfizer',
                price:60,
                image:'https://images.apollo247.in/pub/media/catalog/product/G/E/GEL0002_3_1.jpg'
            }
        ]
    },
    'Strepsils':{
        name:'Strepsils',
        manufacturer:'Reckitt Benckiser',
        price:10,
        image:'https://5.imimg.com/data5/SELLER/Default/2023/2/RX/ZI/IF/81505918/strepsils-blister.jpg',
        buy_link:'Strepsils.html',
        alternatives:[
            {
                name:'Vicks',
                manufacturer:'Procter & Gamble',
                price:8,
                image:'https://images.ctfassets.net/umpxkz97ty8t/4tjmmu8xgFdItABWjhpWTA/88afdcd6055df8b4fac3fdea0098dfa5/VCD4-Packs.png'
            },
            {
                name:'Dabur Honitus',
                manufacturer:'Dabur India Ltd',
                price:50,
                image:'https://5.imimg.com/data5/UF/HY/GLADMIN-43545561/dabur-honitus-cough-drops.png'
            },
            {
                name:'Cofsils',
                manufacturer:'Cipla Healtcare',
                price:10,
                image:'https://5.imimg.com/data5/SELLER/Default/2020/9/HW/ZE/YJ/14356045/cosils-orange.jpg'
            }
        ]
    },
    'Augmentin 1000 Duo Tablet':{
        name:'Augmentin 1000 Duo Tablet	',
        manufacturer:'Alkem Laboratories',
        price:1000,
        image:'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/bodminug3xmfcubbrdix.jpg?format=auto',
        buy_link:'Augmentin 1000 Duo Tablet.html',
        alternatives:[
            {
                name:'Clavam',
                manufacturer:'Alkem Laboratories',
                price:193,
                image:'https://images.apollo247.in/pub/media/catalog/product/c/l/cla0004.jpg'
            }
            
        ]
    },
    'Crestor':{
        name:'Crestor',
        manufacturer:'Astrazeneca',
        price:732,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jd-k1uea3upVeTJNmtS8y9ASkNOwsxN8Uw&s',
        buy_link:'Crestor.html',
        alternatives:[
            {
                name:'Rosuvas',
                manufacturer:'	Sun Pharmaceutical Indsutries Ltd',
                price:277,
                image:'https://5.imimg.com/data5/SELLER/Default/2024/6/425035920/PX/LR/WN/147700842/rosuvas-10-mg-tablet1-500x500.jpg',
            }
        ]
    },
    'Lantus':{
        name:'Lantus',
        manufacturer:'Sanofi India Ltd',
        price:634,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pt0WVYQOROwvBFQi4lo5Fy0HvifJla0VUw&s',
        buy_link:'Lantus.html',
        alternatives:[
            {
                name:'Basalog',
                manufacturer:'Bicon',
                price:481,
                image:'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/0c379a5816da4e63b74cd6889b2d382a.jpg?format=auto'
            }
        ]
    },
    'Tamiflu':{
        name:'Tamiflu',
        manufacturer:'Roche Products India Pvt Ltd',
        price:1238,
        image:'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_170422580.jpg',
        buy_link:'detail.html',
        alternatives:[
            {
                name:'Fluvir',
                manufacturer:'Hetero Drugs Ltd',
                price:447,
                image:'https://images.apollo247.in/pub/media/catalog/product/f/l/flu0174.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w'
            }
        ]
    },
    'Eliquis':{
        name:'Eliquis',
        manufacturer:'Pfizer Ltd',
        price:1086,
        image:'https://5.imimg.com/data5/SELLER/Default/2022/9/KS/UI/TA/136059498/eliquis-5mg-tablet.jpg',
        buy_link:'detail.html',
        alternatives:[
            {
                name:'Apigat',
                manufacturer:'Nacto Pharma Ltd',
                price:533,
                image:'https://www.practostatic.com/practopedia-images/v3/res-750/apigat-2-5-mg-tablet-30-s_15fa3947-9fad-47f2-bbed-8d5f500e66e9.JPG'
            }
        ]
    }
};

// **1. सर्च फंक्शन:** इनपुट के आधार पर रिजल्ट डिस्प्ले करता है
function searchAlternatives() {
    const query = document.getElementById('medicineInput').value.trim();
    const resultsContainer = document.getElementById('resultsContainer');
    const searchControl = document.getElementById('searchControl');

    // पहले, सर्च कंट्रोल को वापस इनपुट/बटन मोड में रीसेट करें
    searchControl.innerHTML = `
        <input type="text" id="medicineInput" placeholder="दवा का नाम लिखें..." value="${query}">
        <button onclick="searchAlternatives()">Find Alternatives</button>
    `;

    if (query === "") {
        resultsContainer.innerHTML = '<p>कृपया दवा का नाम दर्ज करें।</p>';
        return;
    }

    const medicineKey = Object.keys(medicineData).find(key => 
        key.toLowerCase() === query.toLowerCase()
    );
    
    resultsContainer.innerHTML = ''; 

    if (medicineKey) {
        const data = medicineData[medicineKey];
        let htmlContent = '';


        
        // --- B. ओरिजिनल मेडिसिन कार्ड (क्लिकेबल) ---
        htmlContent += `
.      <div class="card-label" style="top: 0; margin-bottom: 10px;">Original Medicine</div>
            
            <div class="medicine-card clickable-card" 
                 > 
                
                <img src="${data.image}" alt="${data.name} Image">
                <div class="card-info">
                    <p>Name: <strong>${data.name}</strong></p>
                    <p>Manufacturer: ${data.manufacturer}</p>
                    <p class="price">Per Unit Price: Rs. ${data.price}</p>
                    <a href="${data.buy_link}"  class="link"
                    }>Buy</a>
                </div>
            </div>
        `;

        // --- C. बेस्ट अल्टरनेटिव्स (क्लिकेबल) ---
        htmlContent += `<div class="card-label2">Best Alternatives</div>`;
        
        data.alternatives.forEach(alt => {
             htmlContent += `
                <div class="medicine-card clickable-card" 
                     style="background-color: #e8f5e9;"> 
                    
                    <img src="${alt.image}" alt="${alt.name} Image" style="background-color: #006400;"> 
                    <div class="card-info">
                        <p>Name: <strong>${alt.name}</strong></p>
                        <p>Manufacturer: ${alt.manufacturer}</p>
                        <p class="price">Per Unit Price: Rs. ${alt.price}</p>
                    </div>
                </div>
            `;
        });

        resultsContainer.innerHTML = htmlContent;

    } else {
        resultsContainer.innerHTML = `<p><strong>"${query}"</strong> के लिए कोई विकल्प नहीं मिला।</p>`;
    }
}

