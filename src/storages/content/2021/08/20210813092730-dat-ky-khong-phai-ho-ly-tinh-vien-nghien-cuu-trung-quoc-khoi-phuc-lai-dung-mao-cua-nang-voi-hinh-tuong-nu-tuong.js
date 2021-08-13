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
"timestamp": '13/08/2021 09:27 AM',
"title": 'Đát Kỷ không phải "hồ ly tinh"! Viện nghiên cứu Trung Quốc khôi phục lại dung mạo của nàng với hình tượng nữ tướng',
"description": 'Đát Kỷ vẫn thường được người đời nhắc đến với hình ảnh của một hồ yêu mê hoặc Trụ Vương khiến nhà Thương diệt vong. Nàng trong lịch sử thực chất là người thế nào?',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/dat-ky-16287337036721111533094.jpg',
"alt": 'Hồ ly tinh,Di tích lịch sử,Đát Kỷ,Lịch sử Trung Quốc,',
"category": 'news',
"date": '13/08/2021',
"time": '09:27 AM',
"link": '/dat-ky-khong-phai-ho-ly-tinh-vien-nghien-cuu-trung-quoc-khoi-phuc-lai-dung-mao-cua-nang-voi-hinh-tuong-nu-tuong',
"zcomponent": 'page_20210813092730',
"filepath": './20210813092730-dat-ky-khong-phai-ho-ly-tinh-vien-nghien-cuu-trung-quoc-khoi-phuc-lai-dung-mao-cua-nang-voi-hinh-tuong-nu-tuong.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  'Đát Kỷ không phải "hồ ly tinh"! Viện nghiên cứu Trung Quốc khôi phục lại dung mạo của nàng với hình tượng nữ tướng';
const author = "PHẠM TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "13/08/2021 09:27 AM";
const description =
  "Đát Kỷ vẫn thường được người đời nhắc đến với hình ảnh của một hồ yêu mê hoặc Trụ Vương khiến nhà Thương diệt vong. Nàng trong lịch sử thực chất là người thế nào?";
const link =
  "dat-ky-khong-phai-ho-ly-tinh-vien-nghien-cuu-trung-quoc-khoi-phuc-lai-dung-mao-cua-nang-voi-hinh-tuong-nu-tuong";
const tagparam = [
  "Hồ ly tinh",
  "Di tích lịch sử",
  "Đát Kỷ",
  "Lịch sử Trung Quốc",
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

export default function page_20210813092730() {
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
                      <strong>Đát Kỷ</strong> vẫn thường được người đời nhắc đến
                      với hình ảnh của một hồ yêu mê hoặc Trụ Vương khiến nhà
                      Thương diệt vong. Nàng trong lịch sử thực chất là người
                      thế nào?
                    </p>
                    <p>
                      <strong>Đát Kỷ</strong> thường bị gán với hình tượng một
                      yêu nữ gây đại họa cho quốc gia, thậm chí, trong tiểu
                      thuyết thời nhà Minh "Phong thần diễn nghĩa" còn nói rằng
                      Đát Kỷ thực ra là một con <strong>hồ ly tinh</strong> chín
                      đuôi, mê hoặc Trụ Vương xây lên hồ rượu và rừng thịt.
                      Chính nàng là nguyên nhân dẫn đến sự diệt vong của nhà
                      Thương.
                    </p>
                    <p>
                      Tuy nhiên gần đây, nhà nghiên cứu Hoàng Minh Sùng thuộc
                      Viện nghiên cứu Lịch sử và Ngôn ngữ cho hay, vua và hoàng
                      hậu triều Thương thực tế đều phải mặc giáp chinh chiến nơi
                      sa trường, <strong>Đát Kỷ</strong> thực sự trong lịch sử
                      chẳng phải phi tần chốn thâm cung mà đã phải khoác lên
                      người quân trang cùng chồng xung trận.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/-16287329507951273127914.jpg"
                      alt="1, Hồ ly tinh,Di tích lịch sử,Đát Kỷ,Lịch sử Trung Quốc,"
                      note="Hình ảnh được phục dựng gần nhất với nguyên gốc Đát Kỷ"
                    />
                    <p>
                      Phòng triển lãm <strong>di tích lịch sử</strong> và văn
                      hóa của Viện Lịch sử và ngôn ngữ Trung Quốc đã tìm đến họa
                      sĩ Xi Vưu, cố gắng sử dụng nhiều phương thức để có thể vẽ
                      một bức họa gần giống với dung mạo nguyên bản của{" "}
                      <strong>Đát Kỷ</strong> nhất.
                    </p>
                    <p>
                      Dưới nét bút của Xi Vưu, <strong>Đát Kỷ</strong> hiện lên
                      trong tư thế oai hùng hiên ngang, tay cầm một chiến khiên
                      bằng đồng của đại quý tộc triều Thương được khắc hoa văn
                      của ác thú cùng thanh đồng việt (một loại vũ khí làm bằng
                      đồng thời xưa). Tham khảo từ những chi tiết đặc điểm trên
                      một mặt nạ đồng đen có từ xưa, vẽ lại nàng có đôi mắt
                      phượng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/352568221-16287333443331580663150.jpg"
                      alt="2, Hồ ly tinh,Di tích lịch sử,Đát Kỷ,Lịch sử Trung Quốc,"
                      note="Lấy chi tiết trên mặt nạ đồng cổ đại khôi phục gương mặt Đát Kỷ"
                    />
                    <p>
                      Hoàng Minh Sùng, đồng thời cũng là Giám đốc bảo tàng cho
                      hay, từ hồ sơ tư liệu cũng như những di chỉ văn hóa khảo
                      cổ và các nghiên cứu liên quan khác đều cho thấy địa vị
                      của phụ nữ thời Thương khá cao, những nữ nhân nhà quyền
                      quý lại càng năng nổ.
                    </p>
                    <p>
                      Lấy hoàng hậu của Thương vương Vũ Đinh - Phụ Hảo làm ví
                      dụ. Phụ Hảo không chỉ chủ trì tế lễ, tham gia chính sự mà
                      còn phải cùng chồng và các tướng sĩ khác lãnh đạo binh
                      lính chinh phạt quân thù. Căn cứ vào các tư liệu có được
                      hiện nay, khi Vũ Đinh cùng tướng sĩ của ông đuổi theo quân
                      địch, nhiệm vụ của Phụ Hảo là thực hiện chiến thuật bao
                      vây bốn phía. Sau đó, bà còn bắt giữ và đưa những quân
                      địch đó đến Ân Khư (kinh đô của nhà Thương) để làm vật tế
                      thần. Không chỉ có Phụ Hảo mà các hoàng hậu của triều
                      Thương cũng gánh vác trên mình trách nhiệm mang quân ra sa
                      trường.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Nếu như khôi phục lại hoàn cảnh lịch sử cũng như vai trò
                      người phụ nữ trong triều Thương thì{" "}
                      <strong>Đát Kỷ</strong> cũng phải làm việc tương tự.
                    </p>
                    <p>
                      Hoàng Minh Sùng tiếp tục chỉ ra, trận chiến mấu chốt khiến
                      "Thương vong Chu khởi" (nhà Thương sụp đổ, nhà Chu lập
                      lên) là trận chiến Mục Dã. Trụ Vương và{" "}
                      <strong>Đát Kỷ</strong> sau khi bại trận đã bị quân lính
                      áp giải đi. Đến Lộc Đài, phu thê hai người tự thiêu trong
                      ngọc phục. Khi người Chu lôi ra thì chỉ còn lại hai cái
                      xác cháy đen nhưng vẫn làm theo nghi thức chặt đầu, treo
                      lên cờ rồi tiếp tục đi đến kinh đô của nhà Chu.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/dat-ky-16287337036721111533094.jpg"
                      alt="3, Hồ ly tinh,Di tích lịch sử,Đát Kỷ,Lịch sử Trung Quốc,"
                      note=""
                    />
                    <p>
                      <strong>Đát Kỷ</strong> thường được nhắc đến với hình
                      tượng là một <strong>hồ ly tinh</strong> với lòng dạ hiểm
                      độc khiến nhà Thương diệt vong
                    </p>
                    <p>
                      Hoàng Minh Sùng nói thêm, hậu duệ của Nho giáo rõ ràng chỉ
                      muốn tô đẹp hình tượng của Chu Vũ Vương và Chu công Cơ
                      Sáng. Đầu tiên tại trận Mục Dã rõ ràng đã giết đến mười
                      mấy vạn người nhưng lại nói rằng thương vong không đáng
                      kể, cũng cố ý nói <strong>Đát Kỷ</strong> tham gia vào
                      chinh chiến là lũng loạn triều cương, đạp lên hình tượng
                      của nàng đồng thời hợp lý hóa việc nhà Chu đánh chiếm nhà
                      Thương.
                    </p>
                    <p>
                      Sau này còn có "Phong thần diễn nghĩa" nói rằng{" "}
                      <strong>Đát Kỷ</strong> là <strong>hồ ly tinh</strong> hóa
                      thành. Những lời lẽ trong tiểu thuyết rõ ràng đã khiến một
                      hoàng hậu dẫn binh cùng chồng đánh giặc trở thành một yêu
                      tinh hại nước.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/base64-1628733641074154721616.png"
                      alt="4, Hồ ly tinh,Di tích lịch sử,Đát Kỷ,Lịch sử Trung Quốc,"
                      note=""
                    />
                    <p>
                      Hoàng Minh Sùng cũng nói thêm, trong{" "}
                      <strong>lịch sử Trung Quốc</strong> có rất nhiều phụ nữ bị
                      bôi nhọ danh tiếng. Bởi vì những người viết sử đa phần đều
                      cho rằng, phụ nữ không nên tham dự việc triều chính, nếu
                      đất nước bị diệt vong chắc chắn trách nhiệm đều quy về
                      người phụ nữ.
                    </p>
                    <p>Theo Newqq</p>
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
