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
"timestamp": '29/07/2021 04:07 PM',
"title": 'Trai phố cổ chi 150 triệu cải tạo sân thượng 26m2 thành "mini penthouse", góc nào cũng sang xịn nhưng mê nhất là bồn tắm cực chill',
"description": 'Đây vốn là sân thượng tầng 6 của một căn nhà trong khu phố cổ Hà Nội.',
"src": 'https://kenh14cdn.com/zoom/90_60/203336854389633024/2021/7/19/photo1626628125797-16266281259421044606843.png',
"alt": 'hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,',
"category": 'life',
"date": '29/07/2021',
"time": '04:07 PM',
"link": '/trai-pho-co-chi-150-trieu-cai-tao-san-thuong-26m2-thanh-mini-penthouse-goc-nao-cung-sang-xin-nhung-me-nhat-la-bon-tam-cuc-chill',
"zcomponent": 'page_20210729160707',
"filepath": './20210729160707-trai-pho-co-chi-150-trieu-cai-tao-san-thuong-26m2-thanh-mini-penthouse-goc-nao-cung-sang-xin-nhung-me-nhat-la-bon-tam-cuc-chill.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  'Trai phố cổ chi 150 triệu cải tạo sân thượng 26m2 thành "mini penthouse", góc nào cũng sang xịn nhưng mê nhất là bồn tắm cực chill';
const author = "HÀ BÍCH NGỌC,";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:07 PM";
const description =
  "Đây vốn là sân thượng tầng 6 của một căn nhà trong khu phố cổ Hà Nội.";
const link =
  "trai-pho-co-chi-150-trieu-cai-tao-san-thuong-26m2-thanh-mini-penthouse-goc-nao-cung-sang-xin-nhung-me-nhat-la-bon-tam-cuc-chill";
const tagparam = [
  "hệ thống điện nước",
  "nhà vệ sinh",
  "trang trí bếp",
  "Cải tạo nhà",
  "thiết kế nhà",
  "Sân thượng",
  "bồn tắm",
  "house n home",
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

export default function page_20210729160707() {
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
                    Bản thân anh Tùng Anh chưa từng theo học các trường lớp bài
                    bản về lĩnh vực thiết kế hay xây dựng. Tuy nhiên, vì là 1 du
                    học sinh chuyên ngành Du lịch và Dịch vụ hiếu khách nên anh
                    có nhiều cơ hội học tập và tham gia vào quá trình thi công
                    những công trình nhà nghỉ, khách sạn, khu nghỉ dưỡng và cơ
                    sở lưu trú du lịch đặc biệt. Những trải nghiệm đó giúp anh
                    tích góp được phần nào hiểu biết, kinh nghiệm và cả ý tưởng
                    về thiết kế và thi công các căn hộ.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/02-16266272667421696388357.jpg"
                    alt="6, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <p>
                    Trước khi cải tạo, <strong>sân thượng</strong> nằm trên tầng
                    6 của căn nhà thuộc khu phố cổ (Hàng Buồm – Hoàn Kiếm). Sân
                    thượng được lát nền gạch đỏ, bao phủ bằng khung nhôm kính.
                    Khu vực này vừa được dùng làm chỗ giặt sấy và phơi đồ, vừa
                    là khu gia đình, bạn bè hẹn hò, ăn uống và trồng cả cây
                    xanh.
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/00-1626627065225673291670.png"
                      alt="7, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                      note=""
                    />
                  </p>
                  <p>
                    Tuy nhiên, cơ sở vật chất của <strong>sân thượng</strong>{" "}
                    dần xuống cấp theo thời gian, lại thường xuyên chịu nắng
                    nóng gay gắt và mưa dột đầm đìa, không giữ được sự sống cho
                    cây cối đang trồng và gây ra ảnh hưởng lớn trực tiếp tới hạ
                    tầng của nhà. Vì vậy, anh Tùng Anh quyết định liều một phen:
                    đầu tư cải tạo sân thượng tầng 6 thành 1 căn phòng 26m2 vừa
                    tiện nghi, vừa xinh xắn.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/18/03-1626627081330419499265.jpg"
                    alt="8, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <p>
                    Ưu tiên hàng đầu là việc cải tạo cơ sở vật chất kỹ thuật.
                    Đầu tiên, anh gia tăng tối đa khả năng chống nóng, cách
                    nhiệt và chống hắt, dột cho phần thân phòng bằng cách dán
                    film cách nhiệt kính ô tô cho toàn bộ vách kính và cửa sổ;
                    làm vách tường bằng vật liệu tấm xi măng sợi (Cemboard) và
                    dựng tấm xốp XPS trong vách; đồng thời chọn màu sơn trắng
                    sáng cho vách tường. Phần trần và mái cũng phải đảm bảo tiêu
                    chí tương tự nên anh lợp mái tôn mát và trần tôn xốp 3 lớp:
                    tôn - xốp EPS - giấy bạc, ở phía trên vật liệu mái có sẵn.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/18/04-16266271129591351696286.jpg"
                    alt="9, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <p>
                    Sau khi hoàn thành cải tạo cơ sở vật chất kỹ thuật đạt đủ
                    tiêu chuẩn như đề ra, anh tập trung phần xây dựng thô và các
                    công việc nhỏ khác như lắp đặt{" "}
                    <strong>hệ thống điện nước</strong>, cải tạo hệ thống cấp
                    thoát nước cho <strong>nhà vệ sinh</strong>, chuyển đổi vị
                    trí khu giặt sấy, ốp lát gạch thẻ vuông khu bếp và xây lấp,
                    chuyển đổi vị trí cửa ra vào khu bếp nhỏ có sẵn. Trong đó,
                    công đoạn xây phần thân và lắp đặt hoàn chỉnh{" "}
                    <strong>bồn tắm</strong> cùng hệ thống vòi sen xả được đầu
                    tư nhiều thời gian và công sức nhất.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/06-162662712871181250312.jpg"
                    alt="10, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <p>
                    Do <strong>bồn tắm</strong> đặt ở vị trí góc, không có phần
                    chân yếm nên anh sẽ phải tự xây phần thân bồn và ốp lát từng
                    viên gạch thẻ que sao cho đều, đẹp, thẳng hàng. Tuy nhiên,
                    đội kỹ thuật đầu tiên đã thi công hỏng hạng mục này. Sau đó,
                    anh phải phối hợp với một đội khác có kỹ thuật cao hơn để
                    đập hết phần trước đó đi và làm lại từ đầu, đồng thời đầu tư
                    những vật liệu chất lượng cao và đắt đỏ hơn như sử dụng keo
                    chít mạch gạch của Ý thay vì xi măng trắng truyền thống. May
                    mắn là sau lần thứ hai chiếc bồn tắm đã hoàn thành như ý.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Với việc nhiều người thắc mắc và quan ngại vấn đề đặt{" "}
                    <strong>bồn tắm</strong> trong phòng ngủ, anh Tùng Anh cho
                    rằng xu hướng này đã có từ lâu, không chỉ ở trong khách sạn
                    nghỉ dưỡng mà ngay cả nhà ở, chủ yếu là những nhà có điều
                    kiện. Mục đích của việc này, theo cá nhân anh là muốn tạo sự
                    thoải mái ngay trong không gian nghỉ ngơi và thư giãn của
                    bản thân, đồng thời tạo nên điểm nhấn đặc biệt cho căn
                    phòng.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/04-1-1626627098282157839081.jpg"
                    alt="11, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <p>
                    Khu bếp có tone màu trắng kem, hài hoà với màu tự nhiên của
                    gỗ sồi cho giường ngủ, kệ TV và đợt gỗ{" "}
                    <strong>trang trí bếp</strong>. Bên cạnh đó, để tối ưu hóa
                    diện tích và công năng, bên thiết kế cũng đưa ra ý tưởng về
                    chiếc bàn kết hợp với quầy bar có thể gập lại và gắn liền
                    với mặt bếp. Vì không thể thiết kế bản lề đùi gà gập duỗi
                    chịu tải trọng lớn (do dịch bệnh không thể nhập vật liệu về
                    từ nước ngoài) nên anh thay thế bằng cách làm ngăn tủ mini ở
                    dưới mặt gập của bàn. Khi mở bàn lên, cánh tủ mini được mở
                    ra để đỡ lấy mặt bàn, tiện lợi hơn là có thêm một góc nhỏ
                    cho mọi người để đồ ở dưới.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/18/07-16266271380371252569836.jpg"
                    alt="12, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <p>
                    Căn loft trên tầng thượng được hoàn thành sau 7 ngày thiết
                    kế và 10 ngày thi công với chi phí 150 triệu. Đa số mọi
                    người đều khá ngạc nhiên vì căn hộ không hề bị bí, nóng hay
                    mưa dột như tưởng tượng, ngược lại còn cực kỳ tiện nghi và
                    nhiều góc chill.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/18/08-1626627148291122826686.jpg"
                    alt="13, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/13-4-1626627181077799951868.jpg"
                    alt="14, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/11-3-16266271675081819610763.jpg"
                    alt="15, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/12-5-1626627175153601988495.jpg"
                    alt="16, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/10-2-16266271586511947993455.jpg"
                    alt="17, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/18/17-1-16266272014351854055842.jpg"
                    alt="18, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/16-162662719513747742949.jpg"
                    alt="19, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/15-2-16266271879801309807238.jpg"
                    alt="20, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/18/15-2-16266271879801309807238.jpg"
                    alt="21, hệ thống điện nước,nhà vệ sinh,trang trí bếp,Cải tạo nhà,thiết kế nhà,Sân thượng,bồn tắm,house n home,"
                    note=""
                  />
                  <p>Nguồn: Nhà Ngõ Gạch</p>
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
