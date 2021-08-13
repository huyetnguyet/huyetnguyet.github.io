import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "components/content";

import { Helmet } from "react-helmet";



/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '13/08/2021 09:21 AM',
"title": 'Trên tay cặp RAM "quái thú" Kingston Fury Renegade RGB 4600, nằm trong top đầu thế giới',
"description": 'Kingston Fury Renegade RGB 4600 sở hữu hiệu năng vô cùng khủng khiếp dành cho những game thủ hàng đầu và "dân chơi" công nghệ.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628702578003297069338.jpg',
"alt": 'RAM QUÁI THÚ,RAM MẠNH NHẤT THẾ GIỚI,LINH KIỆN MÁY TÍNH,RAM,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,',
"category": 'tech',
"date": '13/08/2021',
"time": '09:21 AM',
"link": '/tren-tay-cap-ram-quai-thu-kingston-fury-renegade-rgb-4600-nam-trong-top-dau-the-gioi',
"zcomponent": 'page_20210813092159',
"filepath": './20210813092159-tren-tay-cap-ram-quai-thu-kingston-fury-renegade-rgb-4600-nam-trong-top-dau-the-gioi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'tech';
const categoryLink = '/tech';
const title = 'Trên tay cặp RAM "quái thú" Kingston Fury Renegade RGB 4600, nằm trong top đầu thế giới';
const author = 'Đồ Chơi Game Thủ';
const source = 'Pháp luật và bạn đọc';
const timestamp = '13/08/2021 09:21 AM';
const description = 'Kingston Fury Renegade RGB 4600 sở hữu hiệu năng vô cùng khủng khiếp dành cho những game thủ hàng đầu và "dân chơi" công nghệ.';
const link = 'tren-tay-cap-ram-quai-thu-kingston-fury-renegade-rgb-4600-nam-trong-top-dau-the-gioi';
const tagparam = ["RAM QUÁI THÚ","RAM MẠNH NHẤT THẾ GIỚI","LINH KIỆN MÁY TÍNH","RAM","CỘNG ĐỒNG MẠNG","TIN TỨC GAME",];
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

export default function page_20210813092159() {
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
              <div className="author">{author}</div> - Theo {source} | {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

         <div class="containerContent">
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">

<p>Gần đây, hãng Kingston đã bán mảng gaming gear với thương hiệu HyperX của mình cho HP và họ cũng đổi tên luôn dòng <strong>RAM</strong> đỉnh cao cho game thủ thành FURY. Tiêu biểu nhất cho chiến lược tập trung vào gamer và "dân chơi công nghệ" là cái tên Renegade với xung nhịp phải nói là siêu cấp lên tới 4600Mhz. Sau đây chúng ta sẽ cùng đập hộp và trải nghiệm nhanh hiệu năng của cặp Kingston Fury Renegade RGB 4600 phiên bản 16GB (2x8GB) để thấy rõ độ khủng khiếp của con "quái thú’"này.</p>
<p>Thông thường, cặp <strong>RAM</strong> DDR4 có tốc độ (hay gọi là bus) chỉ khoảng 2666Mhz mà thôi, người dùng cao cấp có thể chiến những cặp 3200 - 3600Mhz đã là rất nhanh rồi. Chính vì thế mà Kingston Fury Renegade RGB có thể lên tới 4600Mhz mà không cần ép xung tay thực sự là một bất ngờ lớn trên thị trường.</p>
<p>Vỏ hộp cũng như phụ kiện của Kingston Fury Renegade RGB 4600 trông khá đơn giản với hình ảnh sản phẩm nổi bật trên tông màu trắng đỏ đen quen thuộc. NSX tặng kèm thêm một miếng sticker FURY và tờ giấy hướng dẫn sử dụng.</p>
<p>Thiết kế của cặp <strong>RAM</strong> Kingston Fury Renegade RGB 4600 thực sự vô cùng quen mắt đối với những game thủ từng sử dụng sản phẩm HyperX Predator trước kia. Có lẽ cái tên Fury Renegade chính là sự thay thế trực tiếp cho dòng RAM cao cấp này. Chúng ta có thể thấy rõ phong cách thiết kế đặc trưng với giáp đen, các đường gân "xương cá" và logo Kingston Fury nổi bật.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287025766491100550584.jpg' alt='1, RAM QUÁI THÚ,RAM MẠNH NHẤT THẾ GIỚI,LINH KIỆN MÁY TÍNH,RAM,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,' note='Phía sau chúng ta sẽ có thông tin chung về sản phẩm bao gồm serial number, tốc độ, các chứng chỉ…'/>
<p>Ở phía trên chính là cụm đèn LED RGB sẽ toả sáng lung linh khi lắp vào case. NSX có cung cấp phần mềm riêng để người dùng tuỳ chỉnh hiệu ứng mang tên Fury Ctrl, tuy nhiên Kingston cũng kết hợp với các hãng bo mạch chủ lớn là MSI, Gigabyte, ASUS và ASRock để cặp <strong>RAM</strong> này đồng bộ được với hiệu ứng đèn trên mainboard, giúp cả hệ thống trông nuột hơn.</p>
<p>Dễ thấy là hiệu ứng ánh sáng đèn LED của Kingston Fury Renegade RGB khá mượt và đẹp, đem lại cảm giác thích mắt khi lắp vào hệ thống. Vốn các dòng HyperX Predator trước kia đã làm rất tốt rồi, lần này chỉ đơn giản là… bê nguyên về là đủ xài.</p>
<p>Về mặt hiệu năng, cần phải khẳng định rằng Kingston Fury Renegade RGB chắc chắn đứng trong hàng ngũ những cặp <strong>RAM</strong> khủng nhất thế giới. Tuy nhiên để phát huy được thì bạn cũng cần sở hữu hệ thống mạnh mẽ cùng đẳng cấp.</p>
<RelationNewsInPage category={category} />
<p>Bản thân người viết đã thử cắm vào bộ PC cũ sử dụng CPU AMD Ryzen 7 1700X và Mainboard X370 song tối đa chỉ lên được bus 4000. Sau khi thay thế bằng combo mới đến từ Intel là Core i9 11900K cùng mainboard ROG MAXIMUS XIII HERO dùng chipset Z570 thì mới đáp ứng để chạy được bus 4600. Có lẽ với phía AMD chúng ta cũng cần có combo đương đương là Ryzen 9 và X570 mới nhất.</p>
<p>Khi mới lắp đặt chúng ta cần vào bios thiết lập cấu hình XMP 2.0 lên 4600Mhz thì mới tận dụng được tối đa sức mạnh của Kingston Fury Renegade RGB nhé, nếu không hệ thống cũng chỉ tự nhận bus 3400 mà thôi.</p>
<p>Dễ thấy là để đạt được tốc độ 4600Mhz thì Kingston Fury Renegade RGB 4600 sẽ phải chạy với cas cao hơn mặc định là 19 26 26 45, đồng thời ăn điện lên tới 1,5V. Theo kết quả thử nghiệm với phần mềm MaxxMem chúng ta đạt được tốc độ vô cùng khủng khiếp: Tốc độ đọc 28.528 MB/s, tốc độ ghi siêu kinh điển 50.421 MB/s, tốc độ sao chép là 34.658 MB/s và độ trễ là 65,3ns.</p>
<p>Với kết quả đo đạc của phần mềm PassMark PerformanceTest, Kingston Fury Renegade RGB 4600 nằm trong top 2% những cặp <strong><strong>RAM</strong> mạnh nhất thế giới</strong>, vượt qua tới 98% còn lại, quả là đáng sợ.</p>
<p>Chắc chắn rằng Kingston Fury Renegade RGB phiên bản bus 4600 sẽ khiến hệ thống siêu khủng long của bạn trở nên càng bá đạo hơn nữa: Chạy mọi game hay tác vụ siêu nhanh. Tất nhiên cái giá phải trả ra cũng cao hơn mặt bằng chung kha khá đó nhé!</p>
<p></p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628702578003297069338.jpg' alt='2, RAM QUÁI THÚ,RAM MẠNH NHẤT THẾ GIỚI,LINH KIỆN MÁY TÍNH,RAM,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-2-1628702578512426224928.jpg' alt='3, RAM QUÁI THÚ,RAM MẠNH NHẤT THẾ GIỚI,LINH KIỆN MÁY TÍNH,RAM,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-3-16287025805761871354412.jpg' alt='4, RAM QUÁI THÚ,RAM MẠNH NHẤT THẾ GIỚI,LINH KIỆN MÁY TÍNH,RAM,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-4-16287025795552019998845.jpg' alt='5, RAM QUÁI THÚ,RAM MẠNH NHẤT THẾ GIỚI,LINH KIỆN MÁY TÍNH,RAM,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-5-1628702580065134753194.jpg' alt='6, RAM QUÁI THÚ,RAM MẠNH NHẤT THẾ GIỚI,LINH KIỆN MÁY TÍNH,RAM,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-6-16287025790481369737065.jpg' alt='7, RAM QUÁI THÚ,RAM MẠNH NHẤT THẾ GIỚI,LINH KIỆN MÁY TÍNH,RAM,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-7-16287025780251231326971.jpg' alt='8, RAM QUÁI THÚ,RAM MẠNH NHẤT THẾ GIỚI,LINH KIỆN MÁY TÍNH,RAM,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,' note=''/>


                    </div>
                  <AdsHorizontal />
                </div></div>

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
