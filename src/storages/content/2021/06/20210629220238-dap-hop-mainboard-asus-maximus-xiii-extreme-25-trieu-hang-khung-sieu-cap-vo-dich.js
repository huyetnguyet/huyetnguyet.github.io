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
"timestamp": '29/06/2021 10:02 PM',
"title": 'Đập hộp mainboard ASUS Maximus XIII Extreme: 25 triệu, hàng khủng siêu cấp vô địch',
"description": 'Chỉ một chiếc mainboard đã có giá cao hơn cả một bộ case hoàn chỉnh của nhiều anh em mất rồi...',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-162497655243056236696.jpg',
"alt": 'MAINBOARD,BO MẠCH CHỦ,ASUS,ASUS MAXIMUS XIII EXTREME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,',
"category": 'tech',
"date": '29/06/2021',
"time": '10:02 PM',
"link": '/dap-hop-mainboard-asus-maximus-xiii-extreme-25-trieu-hang-khung-sieu-cap-vo-dich',
"zcomponent": 'page_20210629220238',
"filepath": './20210629220238-dap-hop-mainboard-asus-maximus-xiii-extreme-25-trieu-hang-khung-sieu-cap-vo-dich.js'
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
  "Đập hộp mainboard ASUS Maximus XIII Extreme: 25 triệu, hàng khủng siêu cấp vô địch";
const author = "Đồ Chơi Game Thủ";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 10:02 PM";
const description =
  "Chỉ một chiếc mainboard đã có giá cao hơn cả một bộ case hoàn chỉnh của nhiều anh em mất rồi...";
const link =
  "dap-hop-mainboard-asus-maximus-xiii-extreme-25-trieu-hang-khung-sieu-cap-vo-dich";
const tagparam = [
  "MAINBOARD",
  "BO MẠCH CHỦ",
  "ASUS",
  "ASUS MAXIMUS XIII EXTREME",
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

export default function page_20210629220238() {
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
                    <strong>ASUS</strong> ROG Maximus XIII Extreme được chính
                    nhà sản xuất định vị nằm trong top đầu những chiếc{" "}
                    <strong>bo mạch chủ</strong> sử dụng chipset Z590 của Intel.
                    Sản phẩm tuyệt đỉnh này thực sự là niềm mơ ước đối với nhiều
                    người, và là sự lựa chọn hoàn hảo cho các game thủ đỉnh cao
                    lẫn dân chơi công nghệ muốn lắp đặt bộ PC thuộc dạng "khủng
                    long".
                  </p>
                  <p>
                    Ngay từ vỏ hộp hay bộ phụ kiện của chiếc{" "}
                    <strong>bo mạch chủ</strong> này đã toát lên sự đẳng cấp.
                    Ngoài những thứ thường thấy như sách vở, sticker, các loại
                    dây kết nối (LED, SATA...) dồi dào thì <strong>ASUS</strong>{" "}
                    ROG Maximus XIII Extreme còn có những phụ phẩm vô cùng hấp
                    dẫn và đáng giá như module gắn 2 chiếc SSD cổng DIMM.2, hộp
                    LED Controller riêng biệt, USB Sound Card xịn sò, thanh
                    chống card đồ họa.
                  </p>
                  <p>
                    Nhưng điều hay ho nhất cần phải nhắc tới là một cái... tô
                    vít. Nhiều người sẽ tự hỏi là tại sao{" "}
                    <strong>mainboard</strong> lại đi kèm một chiếc tô vít? Và
                    muốn biết tại sao chiếc tô vít lại đặc biệt trong bộ phụ
                    kiện của <strong>ASUS</strong> ROG Maximus XIII Extreme thì
                    chúng ta sẽ đi vào xem kỹ hơn thiết kế của chiếc{" "}
                    <strong>bo mạch chủ</strong> này.
                  </p>
                  <p>
                    Câu trả lời ở đây chính là bộ giáp được phủ kín gần như từ
                    đầu tới chân của <strong>ASUS</strong> ROG Maximus XIII
                    Extreme, chỉ trống mỗi khu vực lắp đặt CPU và RAM. Và để có
                    thể gắn được SSD vào các khe bên dưới lớp tản thì bạn sẽ
                    phải dùng tới tô vít để tháo chúng ra. Rõ ràng là ASUS đã
                    rất tinh tế khi tặng luôn một chiếc, nhìn thôi đã thấy xịn
                    rồi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-16249765514432000235510.jpg"
                    alt="1, MAINBOARD,BO MẠCH CHỦ,ASUS,ASUS MAXIMUS XIII EXTREME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note="Chiếc mainboard này có giá tới 25 triệu đồng"
                  />
                  <p>
                    Đi vào các khu vực chính trên chiếc{" "}
                    <strong>mainboard</strong> <strong>ASUS</strong> ROG Maximus
                    XIII Extreme, tôi sẽ giới thiệu luôn các tính năng kỹ thuật
                    của sản phẩm:
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-162497655243056236696.jpg"
                    alt="2, MAINBOARD,BO MẠCH CHỦ,ASUS,ASUS MAXIMUS XIII EXTREME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Chiếc <strong>mainboard</strong> này sử dụng chipset Z590 và
                    rõ ràng là sẽ hỗ trợ bộ vi xử lý Intel® Core™ thế hệ 11 và
                    Intel Core thế hệ 10, bộ vi xử lý Pentium® Gold và Celeron®
                    với socket LGA 1200. Nói dài như vậy nhưng mà gần như là ai
                    mua <strong>ASUS</strong> ROG Maximus XIII Extreme cũng sẽ
                    kèm với Core i9 hoặc bét nhất là Core i7 để ép xung mà thôi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-2-1624976552957218000612.jpg"
                    alt="3, MAINBOARD,BO MẠCH CHỦ,ASUS,ASUS MAXIMUS XIII EXTREME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Để cấp điện cho các loại CPU hiệu năng cao ăn nhiều năng
                    lượng thì dĩ nhiên <strong>mainboard</strong> phải có giải
                    pháp cấp nguồn mạnh mẽ. Đó là 18+2 tụ nguồn kết hợp - hoạt
                    động ở mức 100 Ampe, cổng nguồn ProCool II, cuộn cảm hợp kim
                    MicroFine và tụ điện kim loại đen 10K do Nhật Bản sản xuất.
                    Tất cả được đặt dưới lớp tản nhiệt lớn và trông cũng cực
                    đẹp.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-3-1624976555000768866021.jpg"
                    alt="4, MAINBOARD,BO MẠCH CHỦ,ASUS,ASUS MAXIMUS XIII EXTREME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Vẫn ở phần trên và đi sang bên cạnh chúng ta có 4 khe RAM
                    dual channel hiệu năng cao, hỗ trợ tới 128GB tối đa. Thêm
                    một thứ hay ho khác nữa vốn là truyền thống trên các dòng{" "}
                    <strong>mainboard</strong> cao cấp của <strong>ASUS</strong>{" "}
                    chính là khe DIMM.2 cung cấp thêm 2 khe M.2 cho người dùng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-4-1624976554505794858212.jpg"
                    alt="5, MAINBOARD,BO MẠCH CHỦ,ASUS,ASUS MAXIMUS XIII EXTREME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Đi xuống dưới chúng ta có loạt cổng PCIe chuẩn 4.0 xịn sò, 3
                    khe cắm M.2. Đặc biệt ở khe M.2 đầu tiên là chiếc tản nhiệt
                    kiêm màn hình độc đáo có kích thước 2 inch mang tên LiveDash
                    hiển thị những thông tin hữu ích bao gồm xung nhịp, nhiệt
                    độ… hoặc game thủ cũng có thể tự tinh chỉnh thêm bằng phần
                    mềm.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-5-1624976553994668413354.jpg"
                    alt="6, MAINBOARD,BO MẠCH CHỦ,ASUS,ASUS MAXIMUS XIII EXTREME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Ở tấm che I/O đi kèm có rất nhiều tiện ích với công tắc
                    V_Latch, BIOSFlashBack™, Q-Code, FlexKey, Q-Connector, khe
                    bảo vệ SafeSlot. Tiếp đến là tha hồ cổng USB Type A, Type C
                    tốc độ cao kèm với các cổng kết nối mạng xịn sò gồm Wi-Fi 6E
                    (802.11ax), Marvell® AQtion 10 Gb Ethernet, Intel® 2.5 Gb
                    Ethernet và <strong>ASUS</strong> LANGuard. Âm thanh cũng
                    rất đỉnh với ROG SupremeFX ALC4082 cùng DACESS® ES9018Q2C.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-6-16249765534721443436851.jpg"
                    alt="7, MAINBOARD,BO MẠCH CHỦ,ASUS,ASUS MAXIMUS XIII EXTREME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Ngoài ra, <strong>ASUS</strong> ROG Maximus XIII Extreme còn
                    cung cấp thêm phần mềm và firmware tiện ích độc quyền của
                    ASUS giúp đơn giản hóa việc thiết lập và cải thiện hiệu
                    suất: Ép xung bằng trí tuệ nhân tạo AI, làm mát bằng trí tuệ
                    nhân tạo AI, kết nối mạng bằng trí tuệ nhân tạo AI và tính
                    năng khử ồn hai chiều chủ động thông minh AI.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-7-1624976552455235037468.jpg"
                    alt="8, MAINBOARD,BO MẠCH CHỦ,ASUS,ASUS MAXIMUS XIII EXTREME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Phải nói rằng <strong>ASUS</strong> ROG Maximus XIII Extreme
                    trông quá đẹp, quá hoành tráng và trang bị sẵn rất rất nhiều
                    tính năng ăn chơi, không những đem lại khả năng vận hành
                    tuyệt hảo cho người sử dụng bình thường mà cả các OCer thích
                    tự mình tinh chỉnh, overclock hệ thống để tăng cao hiệu năng
                    nữa. Phải nói là hoàn hảo và quá đỉnh cho anh em game thủ!
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-8-16249765529701009292299.jpg"
                    alt="9, MAINBOARD,BO MẠCH CHỦ,ASUS,ASUS MAXIMUS XIII EXTREME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
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
