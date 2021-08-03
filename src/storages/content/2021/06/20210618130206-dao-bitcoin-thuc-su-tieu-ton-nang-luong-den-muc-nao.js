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
"title": 'Đào Bitcoin thực sự tiêu tốn năng lượng đến mức nào?',
"description": 'Đào Bitcoin thực sự tốn năng lượng?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-2-16239487061001019874080.jpg',
"alt": 'MUA XE HƠI,Ô NHIỄM MÔI TRƯỜNG,GIAO DỊCH BITCOIN,SỬ DỤNG CÔNG NGHỆ,TIÊU THỤ ĐIỆN,',
"category": 'tech',
"date": '18/06/2021',
"time": '01:02 PM',
"link": '/dao-bitcoin-thuc-su-tieu-ton-nang-luong-den-muc-nao',
"zcomponent": 'page_20210618130206',
"filepath": './20210618130206-dao-bitcoin-thuc-su-tieu-ton-nang-luong-den-muc-nao.js'
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
const title = "Đào Bitcoin thực sự tiêu tốn năng lượng đến mức nào?";
const author = "Minh T.T";
const source = "Pháp luật và bạn đọc";
const timestamp = "18/06/2021 01:02 PM";
const description = "Đào Bitcoin thực sự tốn năng lượng?";
const link = "dao-bitcoin-thuc-su-tieu-ton-nang-luong-den-muc-nao";
const tagparam = [
  "MUA XE HƠI",
  "Ô NHIỄM MÔI TRƯỜNG",
  "GIAO DỊCH BITCOIN",
  "SỬ DỤNG CÔNG NGHỆ",
  "TIÊU THỤ ĐIỆN",
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

export default function page_20210618130206() {
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
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      CEO Tesla, Elon Musk, từng khiến thị trường tiền mã hoá
                      chao đảo, trong đó giá Bitcoin tụt đến 14%, khi nói rằng
                      công ty của ông sẽ không chấp nhận thanh toán tiền{" "}
                      <strong>mua xe hơi</strong> bằng Bitcoin với lý do: hoạt
                      động đào tiền mã hoá sử dụng than đá và các loại nhiên
                      liệu hoá thạch khác gây{" "}
                      <strong>ô nhiễm môi trường</strong>.
                    </p>
                    <p>
                      Sau khi liên tiếp lập đỉnh mới trong năm nay, những đồng
                      tiền mã hoá như Bitcoin, Ethereum, Dogecoin… cũng làm dấy
                      lên nhiều quan ngại về lượng điện năng cần để đào tiền mã
                      hoá. Nhiều cơ sở đào Bitcoin hoạt động 24/7,{" "}
                      <strong>tiêu thụ điện</strong> năng còn nhiều hơn toàn bộ
                      Argentina. Đi kèm theo đó hiển nhiên là hàm lượng khí thải
                      carbon và nhiều phụ phẩm khác, góp phần làm trầm trọng
                      thêm khủng hoảng khí hậu toàn cầu.
                    </p>
                    <h3>Đào tiền mã hoá là gì?</h3>
                    <p>
                      Khi <strong>giao dịch Bitcoin</strong> được thực hiện, các
                      máy tính trên toàn cầu bước vào một cuộc chạy đua để hoàn
                      thành một phép tính mà kết quả là một con số thập lục phân
                      64-bit, gọi là "hash", cho Bitcoin đó. Hash này được đưa
                      vào một sổ cái công khai để bất kỳ ai cũng có thể xác nhận
                      rằng giao dịch Bitcoin nói trên đã diễn ra. Máy tính đầu
                      tiên giải quyết được phép tính sẽ được thưởng 6,2 bitcoin,
                      tương đương khoảng 248.703 USD ở thời điểm hiện tại.
                    </p>
                    <p>
                      Những đồng tiền mã hoá khác cũng{" "}
                      <strong>sử dụng công nghệ</strong> đào tương tự, góp phần
                      vào lượng điện năng tổng thể.
                    </p>
                    <h3>Hệ thống đào tiền ảo là gì?</h3>
                    <p>
                      Đó là một máy tính barebones với nhiều card đồ hoạ (GPU)
                      thay vì chỉ một card như thông thường. Những hệ thống này
                      thường sử dụng GPU "khủng" từ Nvidia và AMD để xử lý các
                      phép tính và đòi hỏi nguồn điện công suất rất cao. Vì hoạt
                      động đào tiền mã hoá ngày càng phổ biến, nên thị trường
                      card đồ hoạ cũng rơi vào tình trạng thiếu hụt trầm trọng.
                    </p>
                    <h3>
                      Tại sao đào tiền mã hoá lại cần nhiều điện năng như vậy?
                    </h3>
                    <p>
                      Đầu tiên, card đồ hoạ trong hệ thống đào tiền mã hoá phải
                      hoạt động 24/7, do đó nó tiêu thụ nhiều điện năng hơn hẳn
                      so với việc chỉ lướt internet thông thường. Một hệ thống
                      với 3 GPU có thể tiêu thụ 1.000 W điện hoặc hơn khi hoạt
                      động hết công suất, tương đương với lượng điện năng hoạt
                      động của một máy điều hoà không khí.
                    </p>
                    <p>
                      Các cơ sở đào tiền mã hoá có thể chứa hàng trăm, thậm chí
                      hàng nhìn, hệ thống đào tại một địa điểm duy nhất. Ví dụ,
                      một trung tâm đào tiền mã hoá ở Kazakhstan được trang bị
                      đến 50.000 hệ thống đào.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-162394870445348148143.jpg"
                      alt="1, MUA XE HƠI,Ô NHIỄM MÔI TRƯỜNG,GIAO DỊCH BITCOIN,SỬ DỤNG CÔNG NGHỆ,TIÊU THỤ ĐIỆN,"
                      note="Một trang trại đào tiền mã hoá ở Nadvoitsy, Nga"
                    />
                    <p>
                      Những hệ thống này không chỉ{" "}
                      <strong>tiêu thụ điện</strong>, chúng còn toả nhiệt nữa.
                      Càng nhiều hệ thống vận hành, không khí càng oi bức. Nếu
                      bạn không muốn những dàn máy đắt đỏ này nóng chảy, bạn cần
                      một vài giải pháp làm mát. Một số hệ thống đào được tích
                      hợp nhiều cụm quạt máy tính. Nhưng nếu bạn có nhiều hệ
                      thống, căn phòng nơi chúng hoạt động sẽ nhanh chóng nóng
                      lên, đòi hỏi bạn phải trang bị những giải pháp làm mát từ
                      bên ngoài. Nếu quy mô "cò con", một chiếc quạt cây có thể
                      giải quyết vấn đề. Tuy nhiên, những trung tâm đào tiền mã
                      hoá sẽ cần nhiều hơn thế, và việc tiêu tốn thêm điện năng
                      là điều không thể tránh khỏi.
                    </p>
                    <h3>Đào tiền mã hoá tiêu tốn bao nhiêu năng lượng?</h3>
                    <p>
                      Theo thống kê của Digiconomist, một{" "}
                      <strong>giao dịch Bitcoin</strong> cần 1.544 kWh điện để
                      hoàn thành, tương đương xấp xỉ 53 ngày sử dụng điện của
                      một hộ gia đình tại Mỹ.
                    </p>
                    <p>
                      Quy ra tiền, chi phí trung bình mỗi kWh điện tại Mỹ là 13
                      xu. Có nghĩa là một <strong>giao dịch Bitcoin</strong> sẽ
                      tiêu tốn đến hơn 200 USD tiền điện. Nếu tính giá điện ở
                      mức 2.000 đồng mỗi kWh thì một Bitcoin tiêu hao khoảng hơn
                      3 triệu đồng tiền điện.
                    </p>
                    <p>
                      Hoạt động đào Bitcoin sử dụng nhiều điện hơn cả Argentina
                      - theo một phân tích của Đại học Cambridge hồi tháng 2 vừa
                      qua. Ở mức 121,36 terawatt-giờ, hoạt động đào tiền mã hoá
                      có thể được xếp vào top 30 quốc gia trên thế giới dựa trên
                      mức <strong>tiêu thụ điện</strong>.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h3>
                      Tại sao tiêu thụ nhiều điện như vậy lại gây hại cho môi
                      trường?
                    </h3>
                    <p>
                      Nhiên liệu hoá thạch chiếm hơn 60% các nguồn năng lượng
                      tại Mỹ, với phần lớn là khí tự nhiên, và một phần nhỏ hơn
                      là than đá. Khí carbon dioxide sản sinh ra bởi nhiên liệu
                      hoá thạch sẽ được thải vào khí quyển, nơi nó hấp thụ nhiệt
                      từ mặt trời và gây nên hiệu ứng nhà kính.
                    </p>
                    <p>
                      Các hệ thống đào càng tiêu thụ nhiều điện, các nhà máy
                      điện gần đó càng phải sản xuất ra nhiều điện hơn để bù
                      đắp, lượng nhiên liệu hoá thạch vì vậy cũng được dùng đến
                      nhiều hơn. Nhiều bang tại Mỹ có các nhà máy điện than đá
                      đang gặp khó khăn, như Montana, New York, và Kentucky,
                      hiện đang tìm cách kiếm tiền từ việc khuyến khích hoạt
                      động của các công ty đào tiền mã hoá.
                    </p>
                    <h3>
                      Những giải pháp giải quyết vấn đề năng lượng hiện nay?
                    </h3>
                    <p>
                      Chưa có nhiều giải pháp được đưa ra cho các vấn đề nêu
                      trên. Nghiên cứu đánh giá tài sản mã hoá toàn cầu lần 3
                      của Đại học Cambridge cho thấy 70% thợ đào chọn loại tiền
                      họ muốn đào dựa trên lượng phần thưởng mỗi ngày. Mức{" "}
                      <strong>tiêu thụ điện</strong> chỉ ảnh hưởng 30% đến lựa
                      chọn của họ.
                    </p>
                    <p>
                      Tuy nhiên, các thợ đào tiền mã hoá vẫn bị thu hút bởi
                      những nơi có thể dễ dàng tiếp cận những nguồn năng lượng
                      tái tạo giá rẻ. Tỉnh Tứ Xuyên ở Trung Quốc là nơi có số
                      lượng thợ đào lớn nhất quốc gia này bởi tại đây, điện sản
                      sinh từ các nhà máy thuỷ điện có giá rất rẻ. Mùa mưa ở Tứ
                      Xuyên giúp tạo ra nhiều điện đến mức các thành phố trong
                      vùng này từng kêu gọi các công ty blockchain đến hoạt động
                      nhằm tránh bỏ phí điện năng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-16239487055681482814222.jpg"
                      alt="2, MUA XE HƠI,Ô NHIỄM MÔI TRƯỜNG,GIAO DỊCH BITCOIN,SỬ DỤNG CÔNG NGHỆ,TIÊU THỤ ĐIỆN,"
                      note="Một bức tường lắp đầy các hệ thống đào tiền mã hoá ở Quebec, Canada"
                    />
                    <p>
                      Musk từng thảo luận với Hội thợ đào Bắc Mỹ hồi tháng 5 vừa
                      qua, và họ đã cam kết sẽ sử dụng các nguồn năng lượng tái
                      tạo. Vị tỷ phú sau đó đăng tweet hôm 13/6 rằng Tesla sẽ
                      chấp thuận Bitcoin trở lại nếu tỉ lệ sử dụng năng lượng
                      sạch để đào đồng tiền mã hoá này đạt mức hợp lý, cụ thể là
                      xấp xỉ 50%.
                    </p>
                    <p>
                      Các nhà điều hành Ethereum, blockchain phổ biến thứ hai
                      sau Bitcoin, cũng đang tìm cách thay đổi lượng điện năng
                      mà các thợ đào của họ tiêu thụ. Ethereum 2.0 là một bản
                      nâng cấp sắp hoàn thiện vào năm nay, hoặc chậm nhất là
                      2022. Với Ethereum 2.0, thay vì các máy tính tìm cách giải
                      quyết các phép toán - một giao thức gọi là proof-of-work -
                      các máy tính sẽ được lựa chọn ngẫu nhiên để tạo block cho
                      blockchain, trong khi các máy tính không được chọn sẽ thẩm
                      định những block đã được tạo ra ở trên.
                    </p>
                    <p>
                      Nhằm đảm bảo các thợ đào làm đúng công việc của mình, mỗi
                      thợ đào phải cọc 32 Ether, tức tương đương 85.000 USD - đó
                      cũng là lý do giao thức này được gọi là proof-of-stake.
                      Thay đổi này sẽ giảm đáng kể lượng điện năng cần để đào
                      Ethereum.
                    </p>
                    <h3>
                      Những đồng tiền mã hoá nào tiết kiệm điện hơn Bitcoin?
                    </h3>
                    <p>
                      Một loạt các đồng tiền mã hoá - hiện tại là khoảng hơn
                      10.000 - sử dụng giao thức proof-of-stake mà Ethereum 2.0
                      dự định chuyển sang, nhờ đó lượng điện tiêu thụ đã được
                      giảm đáng kể.
                    </p>
                    <p>
                      Ví dụ, Cardano sử dụng giao thức proof-of-stake của riêng
                      mình và tiêu thụ 6 gigawatt-giờ điện mỗi năm. Để dễ so
                      sánh, thì mức <strong>tiêu thụ điện</strong> của Cardano
                      thấp hơn 1,5 GWh so với lượng điện đủ để cung cấp cho đảo
                      quốc Niue ở Nam Thái Bình Dương, với dân số 1.620 người,
                      trong một năm. Trong khi đó, Bitcoin sử dụng 126,09
                      terawatt-giờ mỗi năm, tương đương lượng điện Pakistan, với
                      dân số 225 triệu người, dùng mỗi năm.
                    </p>
                    <p>
                      Sau đoạn tweet ngày 13/5 của Musk, Cardano đã vọt lên mốc
                      cao kỷ lục bởi nó được xem là một giải pháp thân thiện môi
                      trường thay thế cho Bitcoin. Giá của đồng tiền mã hoá này
                      đạt đỉnh 2,47 USD hôm 16/5, nhưng nay đã giảm còn 1,58
                      USD.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-2-16239487061001019874080.jpg"
                      alt="3, MUA XE HƠI,Ô NHIỄM MÔI TRƯỜNG,GIAO DỊCH BITCOIN,SỬ DỤNG CÔNG NGHỆ,TIÊU THỤ ĐIỆN,"
                      note=""
                    />
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
