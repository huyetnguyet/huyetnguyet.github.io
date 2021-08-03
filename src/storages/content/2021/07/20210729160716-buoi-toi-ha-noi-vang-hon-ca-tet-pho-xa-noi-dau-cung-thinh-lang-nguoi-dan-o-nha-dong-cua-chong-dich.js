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
"title": 'Buổi tối Hà Nội vắng hơn cả Tết: Phố xá nơi đâu cũng "thinh lặng", người dân ở nhà đóng cửa chống dịch',
"description": 'Trong buổi tối đầu tiên thực hiện theo Công điện số 15/CĐ-UBND, Hà Nội đã trở nên vắng vẻ hơn bao giờ hết.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4445-16267155740041692750510.jpg',
"alt": 'Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,',
"category": 'life',
"date": '29/07/2021',
"time": '04:07 PM',
"link": '/buoi-toi-ha-noi-vang-hon-ca-tet-pho-xa-noi-dau-cung-thinh-lang-nguoi-dan-o-nha-dong-cua-chong-dich',
"zcomponent": 'page_20210729160716',
"filepath": './20210729160716-buoi-toi-ha-noi-vang-hon-ca-tet-pho-xa-noi-dau-cung-thinh-lang-nguoi-dan-o-nha-dong-cua-chong-dich.js'
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
  'Buổi tối Hà Nội vắng hơn cả Tết: Phố xá nơi đâu cũng "thinh lặng", người dân ở nhà đóng cửa chống dịch';
const author = "HẠ LINH, ẢNH: QUÝ NGUYỄN, THIẾT KẾ: THÀNH ĐẠT,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "29/07/2021 04:07 PM";
const description =
  "Trong buổi tối đầu tiên thực hiện theo Công điện số 15/CĐ-UBND, Hà Nội đã trở nên vắng vẻ hơn bao giờ hết.";
const link =
  "buoi-toi-ha-noi-vang-hon-ca-tet-pho-xa-noi-dau-cung-thinh-lang-nguoi-dan-o-nha-dong-cua-chong-dich";
const tagparam = [
  "Hà Nội",
  "quang cảnh Hà Nội",
  "hà nội vắng vẻ",
  "Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội",
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

export default function page_20210729160716() {
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
                      Kể từ 0h ngày 19/7/2021, <strong>Hà Nội</strong> bắt đầu
                      thực hiện theo Công điện số 15/CĐ-UBND (yêu cầu mọi người
                      dân ở tại nhà, chỉ ra ngoài trong trường hợp thật sự cần
                      thiết như đi công tác công vụ, làm việc tại cơ quan, công
                      sở, nhà máy, cơ sở sản xuất, cơ sở kinh doanh dịch vụ,
                      hàng hóa thiết yếu được phép hoạt động, mua lương thực,
                      thực phẩm, thuốc men và các trường hợp khẩn cấp khác như
                      cấp cứu, khám chữa bệnh, thiên tai, hỏa hoạn...). Vì thế,
                      không quá lạ khi khung cảnh Thủ đô hôm nay vắng vẻ một
                      cách lạ thường.
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4445-16267155740041692750510.jpg"
                      alt="1, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <p>
                      Mặc dù vào ban ngày, một số tuyến đường vẫn có nhiều xe cộ
                      di chuyển do nhiều người dân vẫn phải đi làm bình thường
                      nhưng các tuyến phố trung tâm đã vắng vẻ hơn rất nhiều so
                      với thông thường. Và càng về tối, đường phố càng trở nên
                      vắng vẻ hơn khi mọi người đã trở về nhà, tuân thủ quy định
                      chống dịch.{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4456-1626715574012959597277.jpg"
                      alt="2, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <p>
                      Theo ghi nhận tại nhiều tuyến phố <strong>Hà Nội</strong>{" "}
                      vào tối ngày 19/7 vừa qua, đường sá đã trở nên vắng vẻ hơn
                      rất nhiều. Trên đường chỉ lác đác xe cộ qua lại, không còn
                      thấy cảnh đông đúc như trước.{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4460-162671557404844522830.jpg"
                      alt="3, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <p>
                      Nếu như vào khoảng thời điểm 9h - 10h tối của khoảng thời
                      gian trước đây, người dân Thủ đô vẫn còn nhộn nhịp ra
                      đường đi dạo mát, uống cà phê, thì thời gian gần đây, khi
                      hàng quán đóng cửa chỉ bán mang về, khung cảnh này đã
                      không còn nữa. Và khắp các tuyến đường của{" "}
                      <strong>Hà Nội</strong> càng vắng vẻ hơn khi ngày 19/7,
                      người dân thực hiện theo Công điện số 15 của thành phố.{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4463-1626715574055628611991.jpg"
                      alt="4, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <p>
                      Ngoài các cửa hàng ăn uống vẫn còn bán mang về, các
                      shipper đang làm việc, còn rất ít người dân di chuyển về
                      nhà. Không ít người so sánh khung cảnh này với{" "}
                      <strong>Hà Nội</strong> trong những ngày Tết, những buổi
                      tối mùng 1, mùng 2 vắng vẻ ngày nào...
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Nhiều tuyến phố cũng tắt đèn tối hơn hẳn thông thường do
                      hầu hết hàng quán đều đóng cửa, thậm chí có nhiều hàng ăn,
                      quán cà phê cũng quyết định đóng cửa tạm thời trong thời
                      gian này, thậm chí còn không bán mang về như nhiều cửa
                      hàng ăn uống khác.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4473-16267156159081005534136.jpg"
                      alt="5, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <p>
                      Sự khác biệt rõ rệt nhất nằm ở chính những con phố trung
                      tâm. Bởi nếu trước đây, vào buổi tối, các khu vực như phố
                      cổ, quanh hồ Gươm, Hàm Cá Mập... trở nên đông đúc do người
                      dân đi bộ dạo mát, đi chơi... thì giờ đây vắng tanh không
                      một bóng người.{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4488-1626715615947224531505.jpg"
                      alt="6, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <p>
                      Hiện tại, hầu hết người dân ở <strong>Hà Nội</strong> đều
                      đang cố gắng nâng cao tinh thần phòng chống dịch, tự bảo
                      vệ bản thân bằng cách hạn chế di chuyển, thực hiện khuyến
                      cáo 5K của Bộ Y tế... Vì thế, bản thân chúng ta, mỗi người
                      hãy tự nâng cao ý thức của mình để việc đẩy lùi dịch bệnh
                      được thực hiện tốt nhất có thể.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4502-1626715615959411414118.jpg"
                      alt="7, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <p>
                      Một số hình ảnh khác về đường phố <strong>Hà Nội</strong>{" "}
                      trong tối ngày 19/7/2021.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4507-16267156159741186716923.jpg"
                      alt="8, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4511-16267156481881568611852.jpg"
                      alt="9, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4514-16267156482291134870263.jpg"
                      alt="10, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/20/dsc4529-16267156482552012373371.jpg"
                      alt="11, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4532-1626715648269926756158.jpg"
                      alt="12, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4567-1626715705341917678109.jpg"
                      alt="13, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4536-1626715705330844344186.jpg"
                      alt="14, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4550-16267157499471525819029.jpg"
                      alt="15, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4551-16267157500371190777800.jpg"
                      alt="16, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4554-1626715750045773126265.jpg"
                      alt="17, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4559-1626715750053184701977.jpg"
                      alt="18, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4561-1626715750060845010874.jpg"
                      alt="19, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4562-1626715750068306121688.jpg"
                      alt="20, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4568-16267157501001010695372.jpg"
                      alt="21, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4570-16267157501232146822790.jpg"
                      alt="22, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4571-1626715750132881198804.jpg"
                      alt="23, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4572-1626715750139359832576.jpg"
                      alt="24, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4574-1626715750145690290622.jpg"
                      alt="25, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4576-1626715750152279488975.jpg"
                      alt="26, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/20/dsc4576-1626715750152279488975.jpg"
                      alt="27, Hà Nội,quang cảnh Hà Nội,hà nội vắng vẻ,Nhiều chuỗi lây nhiễm Covid-19 tại Hà Nội,"
                      note=""
                    />
                  </div>
                  <AdsHorizontal />
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
