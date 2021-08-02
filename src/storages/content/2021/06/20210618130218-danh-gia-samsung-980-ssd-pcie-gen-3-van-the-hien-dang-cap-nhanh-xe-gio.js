import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '18/06/2021 01:02 PM',
"title": 'Đánh giá Samsung 980 - SSD PCIe gen 3 vẫn thể hiện đẳng cấp nhanh "xé gió"',
"description": 'Samsung 980 là phiên bản thấp hơn của chiếc SSD hàng khủng 980 Pro, sử dụng kết nối PCIe gen 4, nhưng với nhu cầu sử dụng phổ thông thì vẫn hết sức ấn tượng.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-16239370492261108255459.jpg',
"alt": 'SSD,SAMSUNG,SAMSUNG 980,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,',
"category": 'tech',
"date": '18/06/2021',
"time": '01:02 PM',
"link": '/danh-gia-samsung-980-ssd-pcie-gen-3-van-the-hien-dang-cap-nhanh-xe-gio',
"zcomponent": 'page_20210618130218',
"filepath": './20210618130218-danh-gia-samsung-980-ssd-pcie-gen-3-van-the-hien-dang-cap-nhanh-xe-gio.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title =
  'Đánh giá Samsung 980 - SSD PCIe gen 3 vẫn thể hiện đẳng cấp nhanh "xé gió"';
const author = "Đồ Chơi Game Thủ";
const source = "Pháp luật và bạn đọc";
const timestamp = "18/06/2021 01:02 PM";
const description =
  "Samsung 980 là phiên bản thấp hơn của chiếc SSD hàng khủng 980 Pro, sử dụng kết nối PCIe gen 4, nhưng với nhu cầu sử dụng phổ thông thì vẫn hết sức ấn tượng.";
const link =
  "danh-gia-samsung-980-ssd-pcie-gen-3-van-the-hien-dang-cap-nhanh-xe-gio";
const tagparam = [
  "SSD",
  "SAMSUNG",
  "SAMSUNG 980",
  "CỘNG ĐỒNG MẠNG",
  "TIN TỨC GAME",
];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_20210618130218() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              {">"}
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Cách đây không lâu, chúng tôi đã có dịp trải nghiệm chiếc{" "}
                    <strong>SSD</strong> flagship của <strong>Samsung</strong>{" "}
                    là 980 Pro sử dụng những công nghệ mới nhất đi kèm với PCIe
                    gen 4 băng thông lớn đem tới tốc độ "xé gió". Thế nhưng điểm
                    hạn chế nhỏ là chỉ có những nền tảng mới nhất của Intel (CPU
                    gen 11 và Mainboard Z590) hoặc AMD (CPU Ryzen 3000, 5000 và
                    Mainboard X570, B550) mới hỗ trợ.{" "}
                  </p>{" "}
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-16239370492261108255459.jpg"
                    alt="1, SSD,SAMSUNG,SAMSUNG 980,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Vậy thì với những ai dùng các đời cũ hơn hay thấp hơn thì
                    mua <strong>SSD</strong> nào đỉnh? Câu trả lời chính là{" "}
                    <strong>Samsung</strong> 980.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-1623937050669830148351.jpg"
                    alt="2, SSD,SAMSUNG,SAMSUNG 980,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    <strong>Samsung</strong> 980 vẫn sử dụng chuẩn kết nối M2
                    PCIe gen 3 phổ biến, tương thích với đại đa số các hệ thống
                    từ cũ tới mới, tốc độ không hề tồi và quan trọng là giá
                    thành rất vừa tầm không bị quá cao như các dòng PCIe gen 4.
                    Đây chính là lý do để các game thủ đang có ý định nâng cấp
                    hoặc dựng PC mới chiến game lựa chọn sản phẩm này.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-2-1623937052718495836820.jpg"
                    alt="3, SSD,SAMSUNG,SAMSUNG 980,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Về mặt thiết kế, đóng gói thì <strong>Samsung</strong> 980
                    tương tự như <strong>Samsung 980</strong> Pro trước đây chỉ
                    thay bằng tông chữ màu vàng mà thôi. Chiếc{" "}
                    <strong>SSD</strong> vẫn sử dụng quy chuẩn M.2. 2280 "quốc
                    dân". Một chút hấp dẫn là Samsung 980 vẫn được dán một nhãn
                    kiêm tản nhiệt ở mặt sau giúp giải phóng độ nóng tốt hơn
                    trong quá trình sử dụng.
                  </p>
                  <p>
                    Ở bên trong, <strong>Samsung</strong> 980 sử dụng chip nhớ
                    V-NAND thế hệ thứ 6 của Samsung, 128 lớp, thiết kế DRAMless
                    với controller Samsung Pablo. Để tăng tốc thì{" "}
                    <strong>SSD</strong> này tích hợp công nghệ TurboWrite 2.0,
                    nhưng khác với <strong>Samsung 980</strong> Pro thì sản phẩm
                    chỉ có bộ đệm TLC động (thay vì kết hợp cả tĩnh cả động)
                    cộng với controller thấp cấp hơn. Do đó, dù có dung tích lớn
                    nhưng khi dữ liệu đầy bộ đệm thì tốc độ sẽ không cao bằng
                    đàn anh.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-3-16239370521981774518791.jpg"
                    alt="4, SSD,SAMSUNG,SAMSUNG 980,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Để thử nghiệm tốc độ của <strong>Samsung</strong> 980, chúng
                    tôi sẽ cắm chiếc <strong>SSD</strong> vào dàn máy cấu hình
                    như sau:
                  </p>
                  <p>CPU: AMD Ryzen 7 3700X</p>
                  <p>Mainboard: Asus X570 ROG Strix F-Gaming</p>
                  <p>RAM: Corsair Vengeance RGB Pro 32GB bus 3200</p>
                  <p>Card đồ họa: INNO3D RTX 3080 Ti iChill x4</p>
                  <p>Nguồn: Corsair RM850</p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Thử nghiệm đầu tiên là benchmark với phần mềm Crystal Disk
                    Mark quen thuộc:
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-4-16239370507211191263131.jpg"
                    alt="5, SSD,SAMSUNG,SAMSUNG 980,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Tốc độ đọc ghi tuần tự của <strong>Samsung</strong> 980
                    tương đối cao nhưng vẫn thấp hơn một chút so với công bố của
                    NSX khi đạt 3200 MB/s (đọc) và 2320 MB/s (ghi). Tiếp đến tốc
                    độ đọc ghi ngẫu nhiên (4K) rất ổn với 62 MB/s (đọc) và 161
                    MB/s (ghi), cho phép load game hay phần mềm rất nhanh.
                  </p>
                  <p>
                    Tiếp theo sẽ là bài test thực tế hơn khi copy tựa game
                    Assassin's Creed Valhalla có dung lượng hơn 60GB vào{" "}
                    <strong>SSD</strong>.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-5-16239370516961168274526.jpg"
                    alt="6, SSD,SAMSUNG,SAMSUNG 980,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Tốc độ thu được là khoảng 1,6 GB/s ở khoảng ⅔ chặng đường
                    trước khi hết bộ nhớ đệm và tụt xuống 800 - 900 MB/s ở cuối.
                    Phải nói là khá nhanh và ổn định khi copy dữ liệu nặng lại
                    "hỗn hợp" như thế này.
                  </p>
                  <p>
                    Về mặt tải game, chúng ta sẽ cùng thử với phần mềm benchmark
                    Final Fantasy XIV: Shadowbringers
                  </p>
                  <p>
                    Tốc độ tải 5 màn chơi là 11 giây, thuộc dạng rất nhanh so
                    với các mẫu <strong>SSD</strong> PCIe gen 3 trên thị trường.
                  </p>
                  <p>
                    Nhiệt độ vận hành của <strong>Samsung</strong> 980 có thể
                    lên 68 độ C trong điều kiện case đóng kín, nhiệt độ phòng
                    khoảng 29 độ C và chạy stress test. Còn với phòng điều hòa
                    khoảng 24 độ C và chạy tác vụ thông thường như load game hay
                    copy dữ liệu thì khoảng 55 độ C mà thôi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/17/photo-6-16239370512061846755072.jpg"
                    alt="7, SSD,SAMSUNG,SAMSUNG 980,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Nhìn chung, <strong>Samsung</strong> 980 là một chiếc{" "}
                    <strong>SSD</strong> rất hợp lý cho game thủ hay content
                    creator trong điều kiện hiện tại, khi mà chuẩn kết nối PCIe
                    gen 3 vẫn phổ biến hơn và điều quan trọng là tốc độ của sản
                    phẩm vẫn đáp ứng tốt các nhu cầu sử dụng thông thường.
                  </p>
                  <p>
                    Hiện tại <strong>Samsung</strong> 980 có 3 phiên bản bao gồm
                    250GB giá 1,58 triệu đồng, 500GB giá khoảng và 1TB giá 4,1
                    triệu đồng, được bán rộng rãi tại các đại lý trên toàn lãnh
                    thổ Việt Nam, phân phối chính thức bởi công ty máy tính Vĩnh
                    Xuân.
                  </p>
                  <p></p>
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source}</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
