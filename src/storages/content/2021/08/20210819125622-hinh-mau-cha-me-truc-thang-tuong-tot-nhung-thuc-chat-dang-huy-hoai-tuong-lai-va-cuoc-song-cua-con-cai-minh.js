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
"timestamp": '19/08/2021 12:56 PM',
"title": 'Hình mẫu “cha mẹ trực thăng”: Tưởng tốt nhưng thực chất đang huỷ hoại tương lai và cuộc sống của con cái mình',
"description": 'Cha mẹ nào cũng muốn con mình hạnh phúc và làm điều tốt cho bản thân nhưng việc trở thành "cha mẹ trực thăng" đôi khi có thể phản tác dụng và gây hại nhiều hơn lợi.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/photo-1-16291622629061133102157.jpg',
"alt": 'phản tác dụng,kỳ thi tuyển sinh,thi tuyển sinh đại học,nhà tâm lý học,bậc cha mẹ,Phương pháp giáo dục con cái,Bài học dạy con,',
"category": 'life',
"date": '19/08/2021',
"time": '12:56 PM',
"link": '/hinh-mau-cha-me-truc-thang-tuong-tot-nhung-thuc-chat-dang-huy-hoai-tuong-lai-va-cuoc-song-cua-con-cai-minh',
"zcomponent": 'page_20210819125622',
"filepath": './20210819125622-hinh-mau-cha-me-truc-thang-tuong-tot-nhung-thuc-chat-dang-huy-hoai-tuong-lai-va-cuoc-song-cua-con-cai-minh.js'
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
  "Hình mẫu “cha mẹ trực thăng”: Tưởng tốt nhưng thực chất đang huỷ hoại tương lai và cuộc sống của con cái mình";
const author = "LÊ ANH,";
const source = "Nhịp sống kinh tế";
const timestamp = "19/08/2021 12:56 PM";
const description =
  'Cha mẹ nào cũng muốn con mình hạnh phúc và làm điều tốt cho bản thân nhưng việc trở thành "cha mẹ trực thăng" đôi khi có thể phản tác dụng và gây hại nhiều hơn lợi.';
const link =
  "hinh-mau-cha-me-truc-thang-tuong-tot-nhung-thuc-chat-dang-huy-hoai-tuong-lai-va-cuoc-song-cua-con-cai-minh";
const tagparam = [
  "phản tác dụng",
  "kỳ thi tuyển sinh",
  "thi tuyển sinh đại học",
  "nhà tâm lý học",
  "bậc cha mẹ",
  "Phương pháp giáo dục con cái",
  "Bài học dạy con",
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

export default function page_20210819125622() {
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
                      Cha mẹ nào cũng muốn con mình hạnh phúc và làm điều tốt
                      cho bản thân nhưng việc trở thành "cha mẹ trực thăng" đôi
                      khi có thể <strong>phản tác dụng</strong> và gây hại nhiều
                      hơn lợi.
                    </p>
                    <p>
                      Khái niệm "cha mẹ trực thăng" thường để mô tả về các bậc
                      phu huynh luôn kiểm soát con cái trong mọi vấn đề của cuộc
                      sống.
                    </p>
                    <p>
                      Trên mạng xã hội, có người từng phát động một cuộc thăm dò
                      với câu hỏi: "Khát vọng kiểm soát của cha mẹ thể hiện ở
                      khía cạnh nào nhiều nhất?" và đưa ra bốn lựa chọn: nghề
                      nghiệp, cuộc sống, hôn nhân và công việc.
                    </p>
                    <p>
                      Cuối cùng, số phiếu bình chọn cao nhất dành cho cuộc sống
                      với 12.606 phiếu.
                    </p>
                    <p>
                      Khía cạnh cuộc sống bao gồm tất cả các hoạt động: ăn uống,
                      ăn mặc, học tập, sở thích, kết bạn,... Kiểu "chăm sóc" tỉ
                      mỉ, lo lắng tất cả mọi thứ này là cách để bố mẹ thể hiện
                      tình yêu thương con cái. Nhìn chung, các đặc điểm của
                      phong cách này có vẻ như là một trong những cách thức tốt
                      nhất để nuôi dạy những đứa trẻ hạnh phúc, thành công,
                      nhưng họ không ngờ điều này đang dần dần hủy hoại tương
                      lai của con mình.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/photo-1-1629162261644428921239.jpg"
                      alt="1, phản tác dụng,kỳ thi tuyển sinh,thi tuyển sinh đại học,nhà tâm lý học,bậc cha mẹ,Phương pháp giáo dục con cái,Bài học dạy con,"
                      note="Ảnh minh hoạ"
                    />
                    <p>
                      Việc quá bao bọc con cái sẽ khiến trẻ trở nên phụ thuộc và
                      kém quyết đoán hơn, thiếu sự sáng tạo, không biết cách xử
                      lý tình huống trong đời sống thực tế.
                    </p>
                    <p>Biểu hiện của hình mẫu cha mẹ "trực thăng"</p>
                    <p>
                      Trong chương trình "Informal Talks", có một chủ đề được
                      thảo luận sôi nổi: "Bạn nhìn nhận thế nào về hành vi kiểm
                      soát của cha mẹ?"
                    </p>
                    <p>
                      Một khán giả chia sẻ: "18 năm đầu đời của tôi bị cha mẹ
                      kiểm soát chặt chẽ. Từ khi còn thơ bé đến lúc lớn lên, cha
                      mẹ đều buộc tôi phải sắp xếp và tham gia nhiều lớp học
                      khác nhau. Đối mặt với điều này, tôi thậm chí không có cơ
                      hội để nói 'không', họ không bao giờ quan tâm đến suy nghĩ
                      của tôi, cũng không cần biết tôi có thích học hay không,
                      tôi có hạnh phúc hay không.
                    </p>
                    <p>
                      Mỗi tuần của tôi đều trôi qua rất mệt mỏi vì phải đi học
                      rất nhiều. Tôi chỉ muốn được ngủ và thư giãn một chút,
                      nhưng mẹ tôi lo lắng rằng điều này sẽ ảnh hưởng đến sức
                      khỏe của tôi, nên mẹ đã đưa tôi đi ăn sáng. Điều đó với
                      tôi chính là sự phiền phức.
                    </p>
                    <p>
                      Không những thế, vào năm kết thúc{" "}
                      <strong>kỳ thi tuyển sinh</strong> đại học, vì điểm thi
                      không được khả quan lắm nên tôi đã đăng kí thi vào ba
                      trường cao đẳng. Bố mẹ thấy tương lai tôi sẽ không được
                      đảm bảo, lo rằng sau này tôi sẽ khó kiếm việc làm nên
                      không đồng ý cho tôi theo học. Quan trọng nhất là họ không
                      bàn bạc điều này với tôi mà tự quyết định để tôi học và ôn
                      thi lại".
                    </p>
                    <p>
                      Đúng vậy, đây chính là dẫn chứng tiêu biểu cho hình mẫu
                      "bố mẹ trực thăng", họ luôn có ham muốn kiểm soát mọi thứ
                      trong cuộc sống của con cái. Bất kể là việc lớn hay việc
                      nhỏ, những đứa trẻ đều phải tuân theo sự sắp đặt sẵn của
                      họ mà không cân nhắc đến nhu cầu và cảm xúc của con cái.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/photo-1-16291622629061133102157.jpg"
                      alt="6, phản tác dụng,kỳ thi tuyển sinh,thi tuyển sinh đại học,nhà tâm lý học,bậc cha mẹ,Phương pháp giáo dục con cái,Bài học dạy con,"
                      note=""
                    />

                    <p>
                      Những <strong>bậc cha mẹ</strong> như vậy luôn lấy lý do
                      cho việc thích kiểm soát mọi thứ của mình là vì làm thế sẽ
                      tốt cho con cái, muốn con nghe lời. Thậm chí nhiều người
                      còn sử dụng nỗi sợ hãi, xấu hổ và mặc cảm của con mình là
                      "công cụ" để con cái làm theo ý mình.
                    </p>
                    <p>
                      Tuy nhiên, đừng "quá tham gia vào cuộc sống của một đứa
                      trẻ".
                    </p>
                    <p>
                      Trên thực tế, có nhiều lý do khiến phụ huynh muốn kiểm
                      soát con cái
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Lindsay Gibson, một <strong>nhà tâm lý học</strong> lâm
                      sàng cao cấp người Mỹ, sau hơn 20 năm nghiên cứu đã phát
                      hiện ra rằng nhiều <strong>bậc cha mẹ</strong> có mong
                      muốn kiểm soát con cái từng là những đứa trẻ bị thiếu thốn
                      tình cảm, bị lạm dụng hoặc bị tổn thương thời thơ ấu. Vì
                      bản thân họ chưa bao giờ được yêu thương nên sinh ra cảm
                      giác vô cùng bất an, dễ lo lắng, họ kiểm soát con cái để
                      có được cảm giác an toàn. Họ thiếu sự đồng cảm và không
                      biết cách quan tâm đến cảm xúc của người khác.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/photo-2-16291622634171219408047.jpg"
                      alt="7, phản tác dụng,kỳ thi tuyển sinh,thi tuyển sinh đại học,nhà tâm lý học,bậc cha mẹ,Phương pháp giáo dục con cái,Bài học dạy con,"
                      note=""
                    />

                    <p>
                      Trong chương trình "The Amazing Sister", ngọc nữ Đài Loan
                      Y Năng Tịnh chia sẻ về cách hòa hợp với các con trong gia
                      đình. Cô nói: "Bạn cần phải có ý thức về ranh giới khi
                      muốn hòa hợp với con cái, bạn không có quyền can thiệp quá
                      sâu vào cuộc sống của trẻ.
                    </p>
                    <p>
                      Là một người mẹ, bạn có thể chia sẻ, khuyên bảo hay định
                      hướng cho trẻ nhưng đừng dùng những kinh nghiệm của bản
                      thân để áp đặt con cái phải làm theo ý của mình, hãy để
                      trẻ được tự do tư duy và tự mình tích luỹ kinh nghiệm cho
                      bản thân.
                    </p>
                    <p>
                      Bởi vì đây là cuộc sống của con, điều duy nhất mà bố mẹ có
                      thể làm là hãy thử mang đôi giày trẻ đang mang, đi trên
                      con đường mà trẻ đang đi để thấu hiểu rằng đôi giày đó
                      rộng hay chật. Người lớn nên tham gia vào thế giới của
                      'những người bạn nhỏ', hơn là ép trẻ sống theo thế giới
                      của họ".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/photo-3-1629162262935163278009.jpg"
                      alt="8, phản tác dụng,kỳ thi tuyển sinh,thi tuyển sinh đại học,nhà tâm lý học,bậc cha mẹ,Phương pháp giáo dục con cái,Bài học dạy con,"
                      note=""
                    />

                    <p>
                      Trẻ em là một cá thể độc lập, là cha mẹ, bạn không nên yêu
                      cầu con mình làm mọi việc theo ý mình để thỏa mãn ham muốn
                      ích kỷ của bản thân. Hơn nữa, bạn không nên dựa vào kinh
                      nghiệm sống của bản thân để can thiệp và yêu cầu chúng làm
                      theo sự sắp đặt của mình.
                    </p>
                    <p>
                      Mỗi một đứa trẻ đều có cách sống và cách nhìn nhận vấn đề
                      của riêng mình. Trong nhiều trường hợp, cách nhìn nhận vấn
                      đề của người lớn khác với trẻ em, vì vậy nếu luôn đòi hỏi
                      các con làm theo cách của người lớn, chắc chắn sẽ tạo ra
                      nhiều mâu thuẫn trong suy nghĩ của trẻ.
                    </p>
                    <p>
                      Không ai thích lúc nào cũng bị kiểm soát, những đứa trẻ bị
                      kiểm soát lớn lên sẽ không có chính kiến và rất dễ dựa
                      dẫm, ỷ lại vào người khác. Một số trẻ em có hành động
                      chống đối khi cảm thấy cha mẹ đang cố gắng kiểm soát quá
                      nhiều cuộc sống của chúng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/photo-4-1629162263954172476313.jpg"
                      alt="9, phản tác dụng,kỳ thi tuyển sinh,thi tuyển sinh đại học,nhà tâm lý học,bậc cha mẹ,Phương pháp giáo dục con cái,Bài học dạy con,"
                      note=""
                    />

                    <p>
                      Hiểu và cảm nhận được ranh giới giữa yêu thương và kiểm
                      soát con cái là rất quan trọng. Điều này không chỉ cho
                      phép trẻ độc lập, cha mẹ còn có thể tránh các mẫu thuẫn
                      không đáng có trong gia đình.
                    </p>
                    <p>
                      Vì vậy, khi con bạn chọn ngành học, sở thích, phong cách
                      ăn mặc,… thì tốt hơn hết hãy lắng nghe những suy nghĩ bên
                      trong của trẻ và cho trẻ những gợi ý để trẻ tự lựa chọn
                      cái phù hợp với bản thân và tôn trọng quyết đinh của trẻ.
                    </p>
                    <p>
                      Bậc thầy tâm lý Helinger tin rằng mọi gia đình hạnh phúc
                      sẽ có một điểm chung, đó là trong gia đình không có ai
                      thích kiểm soát người khác. Thật vậy, một gia đình hạnh
                      phúc là gia đình có sự bình đẳng giữa các thành viên.
                    </p>
                    <p>
                      Yêu con là bản năng của tất cả những bậc làm cha làm mẹ,
                      nhưng cũng cần phải học cách buông tay ở thời điểm thích
                      hợp, hãy để không gian cho con cái suy nghĩ độc lập, có cơ
                      hội chủ động và làm chủ cuộc sống.
                    </p>
                    <p>
                      Mong rằng chúng ta đều là những bậc làm cha làm mẹ hãy yêu
                      thương con mình đúng cách, tránh sa vào hình mẫu "cha mẹ
                      trực thăng". Có như vậy, gia đình mới thực sự hạnh phúc,
                      thuận hòa.
                    </p>
                    <p>(Theo Aboluowang)</p>
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
