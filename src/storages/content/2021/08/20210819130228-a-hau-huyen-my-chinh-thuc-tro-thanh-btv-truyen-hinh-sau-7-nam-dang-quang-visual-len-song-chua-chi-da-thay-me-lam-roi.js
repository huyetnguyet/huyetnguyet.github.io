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
"timestamp": '19/08/2021 01:02 PM',
"title": 'Á hậu Huyền My chính thức trở thành BTV truyền hình sau 7 năm đăng quang, visual lên sóng chưa chi đã thấy mê lắm rồi',
"description": 'Loạt ảnh nét đẹp lao động của Huyền My khiến dân tình ngất ngây, nụ cười rạng rỡ giật spotlight giữa trường quay.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/4004856618369318930232477609311902404968448n-15353401813071644753163-1629291239546261138190.jpg',
"alt": 'Huyền My,á hậu huyền my,sao Việt,Vbiz,showbiz Việt,á hậu hoa hậu Việt Nam 2014,Nguyễn Trần Huyền My,Huyền My làm BTV,biên tập viên truyền hình,',
"category": 'stars',
"date": '19/08/2021',
"time": '01:02 PM',
"link": '/a-hau-huyen-my-chinh-thuc-tro-thanh-btv-truyen-hinh-sau-7-nam-dang-quang-visual-len-song-chua-chi-da-thay-me-lam-roi',
"zcomponent": 'page_20210819130228',
"filepath": './20210819130228-a-hau-huyen-my-chinh-thuc-tro-thanh-btv-truyen-hinh-sau-7-nam-dang-quang-visual-len-song-chua-chi-da-thay-me-lam-roi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "Á hậu Huyền My chính thức trở thành BTV truyền hình sau 7 năm đăng quang, visual lên sóng chưa chi đã thấy mê lắm rồi";
const author = "HẠ ANH,";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 01:02 PM";
const description =
  "Loạt ảnh nét đẹp lao động của Huyền My khiến dân tình ngất ngây, nụ cười rạng rỡ giật spotlight giữa trường quay.";
const link =
  "a-hau-huyen-my-chinh-thuc-tro-thanh-btv-truyen-hinh-sau-7-nam-dang-quang-visual-len-song-chua-chi-da-thay-me-lam-roi";
const tagparam = [
  "Huyền My",
  "á hậu huyền my",
  "sao Việt",
  "Vbiz",
  "showbiz Việt",
  "á hậu hoa hậu Việt Nam 2014",
  "Nguyễn Trần Huyền My",
  "Huyền My làm BTV",
  "biên tập viên truyền hình",
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

export default function page_20210819130228() {
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
                      Loạt ảnh nét đẹp lao động của <strong>Huyền My</strong>{" "}
                      khiến dân tình ngất ngây, nụ cười rạng rỡ giật spotlight
                      giữa trường quay.
                    </p>
                    <p>
                      <strong>Huyền My</strong> - Á hậu 2 Hoa hậu Việt Nam 2014
                      vẫn giữ sức hút đặc biệt trong lòng người hâm mộ dù đã
                      đăng quang được 7 năm. Trong suốt thời gian qua, nàng hậu
                      đình đám chinh phục dân tình bằng sự nỗ lực, cố gắng và
                      không ngừng hoàn thiện bản thân để xứng đáng với danh
                      hiệu. Mặc dù theo học ngành thời trang nhưng Huyền My có
                      đam mê đặc biệt với nghề MC, cô từng dẫn dắt nhiều sự kiện
                      lớn, chương trình bình luận thể thao,... đều để lại ấn
                      tượng tốt đẹp.
                    </p>
                    <p>
                      Cho đến hôm nay (ngày 18/8), <strong>Huyền My</strong> vỡ
                      oà thông báo đã chính thức trở thành{" "}
                      <strong>biên tập viên truyền hình</strong> số vệ tinh, cô
                      sẽ lên sóng đều đặn vào thứ 4 mỗi tuần. Á hậu Hoa hậu Việt
                      Nam còn tung kèm loạt ảnh nét đẹp lao động khoe cận visual
                      đỉnh của chóp và nụ cười cực tươi tắn để đánh dấu cột mốc
                      đặc biệt trong đời. Nhan sắc nàng Hậu nổi bần bật giữa
                      trường quay khiến ai cũng phải trầm trồ vì ngày càng mặn
                      mà, trẻ trung. So với cô gái đăng quang lúc 19 tuổi năm
                      nào, Huyền My giờ trưởng thành hơn hẳn và được dự đoán sớm
                      trở thành BTV hot trong thời gian tới.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/23216284342230347877462675292602200204984146n-16292912385091421851803.jpg"
                      alt="1, Huyền My,á hậu huyền my,sao Việt,Vbiz,showbiz Việt,á hậu hoa hậu Việt Nam 2014,Nguyễn Trần Huyền My,Huyền My làm BTV,biên tập viên truyền hình,"
                      note="Á hậu Huyền My vui mừng thông báo đã rẽ hướng làm biên tập viên truyền hình và phụ trách 1 chương trình lên sóng hàng tuần"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/23270234642230347744129356619438171871737232n-16292912374321690658979.jpg"
                      alt="2, Huyền My,á hậu huyền my,sao Việt,Vbiz,showbiz Việt,á hậu hoa hậu Việt Nam 2014,Nguyễn Trần Huyền My,Huyền My làm BTV,biên tập viên truyền hình,"
                      note="Nụ cười rạng rỡ của nàng hậu toả sáng giữa trường quay"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/22958193242230348610795932486838765618859537n-16292912349111102155942.jpg"
                      alt="3, Huyền My,á hậu huyền my,sao Việt,Vbiz,showbiz Việt,á hậu hoa hậu Việt Nam 2014,Nguyễn Trần Huyền My,Huyền My làm BTV,biên tập viên truyền hình,"
                      note="Chỉ make up và ăn diện đơn giản khi lên sóng nhưng Huyền My vẫn đủ sức gây sốt vì quá đẹp"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/2351234054223034674412945936596175154958522n-16292912358742039593354.jpg"
                      alt="4, Huyền My,á hậu huyền my,sao Việt,Vbiz,showbiz Việt,á hậu hoa hậu Việt Nam 2014,Nguyễn Trần Huyền My,Huyền My làm BTV,biên tập viên truyền hình,"
                      note="Phong thái chuyên nghiệp và thần thái tự tin của Á hậu của cuộc thi Hoa hậu Việt Nam 2014 khiến dân tình ngưỡng mộ, đây sẽ là BTV hot trong thời gian tới cho mà xem"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/htd4216-16253261488961571239275-16292912367941849146470.jpg"
                      alt="5, Huyền My,á hậu huyền my,sao Việt,Vbiz,showbiz Việt,á hậu hoa hậu Việt Nam 2014,Nguyễn Trần Huyền My,Huyền My làm BTV,biên tập viên truyền hình,"
                      note="Huyền My từng làm bình luận viên tại chương trình thể thao cùng các biên tập viên kỳ cựu"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/4004856618369318930232477609311902404968448n-15353401813071644753163-1629291239546261138190.jpg"
                      alt="6, Huyền My,á hậu huyền my,sao Việt,Vbiz,showbiz Việt,á hậu hoa hậu Việt Nam 2014,Nguyễn Trần Huyền My,Huyền My làm BTV,biên tập viên truyền hình,"
                      note=""
                    />
                    <p>
                      Trước đây, <strong>Huyền My</strong> từng là bạn dẫn của
                      MC Thanh Bạch, cô thường xuyên xuất hiện với vai trò MC
                      tại các sự kiện lớn
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/1450064403-1450063626-img9217-16292912345181713207117.jpg"
                      alt="7, Huyền My,á hậu huyền my,sao Việt,Vbiz,showbiz Việt,á hậu hoa hậu Việt Nam 2014,Nguyễn Trần Huyền My,Huyền My làm BTV,biên tập viên truyền hình,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/ahauhuyenmy-1-1217425-1629291233935603959936.jpg"
                      alt="8, Huyền My,á hậu huyền my,sao Việt,Vbiz,showbiz Việt,á hậu hoa hậu Việt Nam 2014,Nguyễn Trần Huyền My,Huyền My làm BTV,biên tập viên truyền hình,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/19431741340441790322985112197357033294823648n-16292912390921937200639-1629292696831817920036.jpg"
                      alt="9, Huyền My,á hậu huyền my,sao Việt,Vbiz,showbiz Việt,á hậu hoa hậu Việt Nam 2014,Nguyễn Trần Huyền My,Huyền My làm BTV,biên tập viên truyền hình,"
                      note=""
                    />
                    <p>
                      Trước <strong>Huyền My</strong>, Á hậu Diễm Trang cũng là
                      những BTV truyền hình nổi tiếng
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/1-1551585963-121-width800height1068-16292922763101931967686.jpg"
                      alt="10, Huyền My,á hậu huyền my,sao Việt,Vbiz,showbiz Việt,á hậu hoa hậu Việt Nam 2014,Nguyễn Trần Huyền My,Huyền My làm BTV,biên tập viên truyền hình,"
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
