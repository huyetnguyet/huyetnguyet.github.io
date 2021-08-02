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
"timestamp": '29/07/2021 04:21 PM',
"title": 'Hàng loạt homestay, villa Đà Lạt "kêu cứu" giữa mùa dịch: Oằn mình gồng gánh các chi phí trong khi doanh thu gần như bằng 0',
"description": 'Sau hàng loạt đợt dịch bệnh, các cơ sở lưu trú ở Đà Lạt đang phải đối mặt với vô vàn khó khăn.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/2-16267981477971739455427.jpeg',
"alt": 'đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,',
"category": 'travel',
"date": '29/07/2021',
"time": '04:21 PM',
"link": '/hang-loat-homestay-villa-da-lat-keu-cuu-giua-mua-dich-chat-vat-gong-ganh-cac-chi-phi-trong-khi-doanh-thu-gan-nhu-bang-0',
"zcomponent": 'page_20210729162137',
"filepath": './20210729162137-hang-loat-homestay-villa-da-lat-keu-cuu-giua-mua-dich-chat-vat-gong-ganh-cac-chi-phi-trong-khi-doanh-thu-gan-nhu-bang-0.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "travel";
const categoryLink = "/travel";
const title =
  'Hàng loạt homestay, villa Đà Lạt "kêu cứu" giữa mùa dịch: Oằn mình gồng gánh các chi phí trong khi doanh thu gần như bằng 0';
const author = "HẠ LINH, THIẾT KẾ: BI,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "29/07/2021 04:21 PM";
const description =
  "Sau hàng loạt đợt dịch bệnh, các cơ sở lưu trú ở Đà Lạt đang phải đối mặt với vô vàn khó khăn.";
const link =
  "hang-loat-homestay-villa-da-lat-keu-cuu-giua-mua-dich-chat-vat-gong-ganh-cac-chi-phi-trong-khi-doanh-thu-gan-nhu-bang-0";
const tagparam = [
  "đà lạt",
  "homestay",
  "homestay đà lạt",
  "cơ sở lưu trú Đà Lạt",
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

export default function page_20210729162137() {
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
                    Không ngoa khi nói rằng, <strong>Đà Lạt</strong> chính là
                    một trong những điểm du lịch hot nhất ở Việt Nam, nhất là
                    với khách nội địa. Chẳng cần nhìn đâu xa, cứ xem lại loạt
                    ảnh vào những dịp nghỉ lễ, khắp các nẻo đường Đà Lạt chật
                    cứng du khách là đủ hiểu.
                  </p>
                  <p>
                    Tuy nhiên, đó chỉ là những hình ảnh trong quá khứ thôi, bởi
                    trải qua những đợt dịch Covid-19 trước đó cho đến hiện tại,
                    tình hình <strong>Đà Lạt</strong> bây giờ vắng vẻ đến bất
                    ngờ. Trong đó, các cơ sở lưu trú ở đây, gồm các{" "}
                    <strong>homestay</strong>, villa, căn hộ đã bị ảnh hưởng
                    nghiêm trọng. Không hề quá lời khi nói rằng các cơ sở lưu
                    trú này đang phải oằn mình gồng gánh đủ khó khăn trong mùa
                    dịch khi doanh thu gần như không có.
                  </p>
                  <p>
                    Vốn là một <strong>homestay</strong> kiêm quán cà phê rất
                    hot với khách du lịch ở <strong>Đà Lạt</strong>, Đợi Một
                    Người từng thu hút rất nhiều lượt khách mỗi ngày. Tuy nhiên,
                    thời điểm hiện tại, doanh thu của nơi này gần như không có.
                  </p>
                  <p>
                    Theo chia sẻ của anh Tấn Thuận, chủ{" "}
                    <strong>homestay</strong> kiêm quán cà phê Đợi Một Người:
                    "Số lượng khách so với thời gian trước giảm gần như là 100%,
                    vì tình hình đang diễn biến rất căng thẳng. Hầu hết nguồn
                    khách du lịch trước nay chủ yếu đến từ các thành phố lớn
                    nhưng hiện tại thì đang thực hiện giãn cách xã hội, đặc biệt
                    là Sài Gòn và Hà Nội. Đồng thời, Lâm Đồng cũng đang thực
                    hiện phòng dịch chặt chẽ và lập trạm kiểm soát trên các con
                    đường vào tỉnh, hạn chế cho khách ở các tỉnh khác vào. Vì
                    thế khách đến Đợi Một Người rất ít, chủ yếu là những khách
                    du lịch kẹt lại hay thỉnh thoảng có người dân địa phương đến
                    đổi không khí mà thôi".
                  </p>
                  <h5>
                    <strong>Homestay</strong> Đợi Một Người
                  </h5>
                  <p>
                    Là một trong những <strong>homestay</strong> mới toanh ở{" "}
                    <strong>Đà Lạt</strong> (chỉ mới hoạt động từ tháng
                    10/2020), có thể nói, Petite Dalat gặp rất nhiều khó khăn
                    khi vừa mới làm quen với các du khách đã phải chịu ảnh hưởng
                    của dịch bệnh. Trong 6 tháng kể từ khi khai trương, doanh
                    thu tạm ổn nhưng trong thời gian này thì đã giảm nhiều. Tuy
                    nhiên, chị Mina Chung, chủ của Petite cho rằng đó là tình
                    hình chung của Đà Lạt và nhiều điểm du lịch khác. Hiện tại,
                    homestay này cũng đã quyết định ngưng nhận khách để chung
                    tay phòng chống dịch, vì vậy doanh thu thời điểm này là
                    không có.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/2-16267981477971739455427.jpeg"
                    alt="1, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/3-1626798147812975840473.jpeg"
                    alt="2, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/4-16267981478201883028976.jpeg"
                    alt="3, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/5-16267981478522140216426.jpeg"
                    alt="4, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/6-16267981478831920847422.jpeg"
                    alt="5, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/13-1626798223710431007393.jpeg"
                    alt="6, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <h5>Petite Dalat</h5>
                  <p>
                    Cùng cảnh ngộ, Chil Apartment Dalat đã bị giảm tới 80% doanh
                    thu. Lượng khách duy trì không quá nhiều, chủ yếu là các
                    khách hàng quen. The May - Stay and More cũng là một{" "}
                    <strong>homestay</strong> rơi vào cảnh doanh thu sụt giảm
                    tận 80% - 90%, đến thời điểm hiện tại thì cũng đã không có
                    doanh thu.
                  </p>{" "}
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/14-16267982237171769287853.jpeg"
                    alt="7, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/15-16267982237341109071042.jpeg"
                    alt="8, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/16-1626798223743517521849.jpeg"
                    alt="9, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/17-1626798223751496985276.jpeg"
                    alt="10, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/22-1626799491248319130760.jpeg"
                    alt="11, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <p>
                    Trong khi doanh thu sụt giảm nghiêm trọng, thậm chí là không
                    có, chủ các cơ sở lưu trú ở <strong>Đà Lạt</strong> vẫn phải
                    đối mặt với hàng loạt các khoản chi phí như mặt bằng, điện
                    nước, nhân viên... Bởi dù không có khách, các{" "}
                    <strong>homestay</strong>, villa hay căn hộ vẫn phải duy trì
                    để vượt qua thời điểm dịch, giữ được bộ mặt và hiện trạng
                    tốt để đón khách khi có thể.
                  </p>
                  <p>
                    Dù là một bài toán rất khó, nhưng đúng là chủ của các cơ sở
                    lưu trú ở <strong>Đà Lạt</strong> lúc này đều phải cố gắng
                    tìm ra lời giải, đó là làm sao để tiếp tục duy trì hoạt động
                    và chống chọi với dịch bệnh. Đa số đều phải sử dụng đến
                    khoản doanh thu từ những thời gian trước đó để duy trì, cùng
                    với đó là những phương án tạm thời để hạn chế chi phí hết
                    mức có thể.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Chủ của các cơ sở lưu trú cũng cố gắng đưa ra rất nhiều
                    phương án tốt nhất để có thể duy trì hoạt động, giảm thiểu
                    chi phí. Trong khi The May - Stay and More cố gắng thương
                    lượng để giảm chi phí mặt bằng thì Chil Apartment Dalat
                    chuyển hướng sang cho thuê dài hạn để vẫn có nguồn thu duy
                    trì trang trải các chi phí.
                  </p>
                  <h5>The May - Stay and More</h5>
                  <p>
                    Đáng chú ý, các nhân sự của Đợi Một Người còn hạn chế chi
                    phí bằng cách cắt giảm nhân sự, tắt bớt các thiết bị điện
                    nước không cần thiết, cũng như tăng cường trồng thật nhiều
                    các loại rau, nuôi thêm cá và gà để có thể chủ động giảm bớt
                    chi phí cho bữa ăn hằng ngày, suy nghĩ phương hướng kinh
                    doanh trong mùa dịch...
                  </p>{" "}
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/23-16267994912871113028714.jpeg"
                    alt="12, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/24-1626799491296214167924.jpeg"
                    alt="13, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/25-16267994913102083421981.jpeg"
                    alt="14, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/27-1626799491326780952664.jpeg"
                    alt="15, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <p>
                    Khá nhiều cơ sở lưu trú khác cũng lựa chọn phương án như
                    Petite Dalat hay Ana Mandara Villas Dalat Resort & Spa là
                    cắt giảm một phần lương cũng như thời gian làm việc của nhân
                    viên. Các nhân viên cũng vui vẻ đồng ý và cùng chia sẻ khó
                    khăn với chủ của các cơ sở này. Đáng chú ý, như chia sẻ của
                    Tuấn Anh, đại diện Chil Apartment Dalat: "Các bạn nhân viên
                    chỗ mình cũng tự nguyện giảm 70% lương để có thể đồng hành
                    cùng Chil Apartment Dalat vượt qua giai đoạn khó khăn này".
                  </p>
                  <h5>Ana Mandara Villas Dalat Resort & Spa</h5>{" "}
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/11-16267988703881479242549.jpeg"
                    alt="16, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/9-1626798870371481264583.jpeg"
                    alt="17, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/7-1626798870313480405114.jpeg"
                    alt="18, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/8-16267988703581629172734.jpeg"
                    alt="19, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <p>
                    Một điểm sáng ngay lúc này, đó là đại diện của các cơ sở lưu
                    trú ở <strong>Đà Lạt</strong> vẫn giữ vững sự lạc quan,
                    khuyên những người "đồng cảnh ngộ" hãy giữ sự bình tĩnh để
                    đưa ra các phương án duy trì hoạt động. Hãy giữ cho bộ mặt{" "}
                    <strong>homestay</strong>, villa hay căn hộ thật đẹp, thật
                    tốt, cùng nâng cao tinh thần chống dịch. Sẽ sớm thôi, Đà Lạt
                    lại có những vị khách du lịch quay trở lại vào một ngày
                    không xa.
                  </p>
                  <h5>Chil Apartment Dalat</h5>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/18-162679970335155056971.jpeg"
                    alt="20, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/19-16267997033871655777535.jpeg"
                    alt="21, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/20-16267997033981351933181.jpeg"
                    alt="22, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/21-162679970340640786888.jpeg"
                    alt="23, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/21-162679970340640786888.jpeg"
                    alt="24, đà lạt,homestay,homestay đà lạt,cơ sở lưu trú Đà Lạt,"
                    note=""
                  />
                  <p>Nguồn: Tổng hợp</p>
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
