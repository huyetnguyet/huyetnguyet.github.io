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
"timestamp": '04/08/2021 06:59 PM',
"title": 'Tại sao khỉ đột, tinh tinh và chuột túi hầu như không cần phải tập luyện sức mạnh mà cơ bắp của chúng vẫn cực kỳ phát triển?',
"description": 'Chắc chắn chúng ta đã từng nhìn thấy những con chuột túi đực, tinh tinh hay khỉ đột sở hữu cơ bắp cuồn cuộn mà chẳng cần phải đến phòng tập gym, trong khi con người chúng ta phải trả qua tập luyện cực khổ mới có được cơ bắp như ý muốn, tại sao lại như vậy?',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280543932061707804782.jpg',
"alt": 'KHỈ ĐỘT,ĐỘNG VẬT,TINH TINH,CƠ BẮP,CỘNG ĐỒNG MẠNG,',
"category": 'news',
"date": '04/08/2021',
"time": '06:59 PM',
"link": '/tai-sao-khi-dot-tinh-tinh-va-chuot-tui-hau-nhu-khong-can-phai-tap-luyen-suc-manh-ma-co-bap-cua-chung-van-cuc-ky-phat-trien',
"zcomponent": 'page_20210804185909',
"filepath": './20210804185909-tai-sao-khi-dot-tinh-tinh-va-chuot-tui-hau-nhu-khong-can-phai-tap-luyen-suc-manh-ma-co-bap-cua-chung-van-cuc-ky-phat-trien.js'
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
  "Tại sao khỉ đột, tinh tinh và chuột túi hầu như không cần phải tập luyện sức mạnh mà cơ bắp của chúng vẫn cực kỳ phát triển?";
const author = "Đức Khương";
const source = "Trí Thức Trẻ";
const timestamp = "04/08/2021 06:59 PM";
const description =
  "Chắc chắn chúng ta đã từng nhìn thấy những con chuột túi đực, tinh tinh hay khỉ đột sở hữu cơ bắp cuồn cuộn mà chẳng cần phải đến phòng tập gym, trong khi con người chúng ta phải trả qua tập luyện cực khổ mới có được cơ bắp như ý muốn, tại sao lại như vậy?";
const link =
  "tai-sao-khi-dot-tinh-tinh-va-chuot-tui-hau-nhu-khong-can-phai-tap-luyen-suc-manh-ma-co-bap-cua-chung-van-cuc-ky-phat-trien";
const tagparam = [
  "KHỈ ĐỘT",
  "ĐỘNG VẬT",
  "TINH TINH",
  "CƠ BẮP",
  "CỘNG ĐỒNG MẠNG",
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

export default function page_20210804185909() {
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
                      Trước khi giải đáp thắc mắc này, chúng ta hãy cùng xem qua
                      một số hình ảnh về những con <strong>tinh tinh</strong>{" "}
                      trong vườn thú để xem <strong>cơ bắp</strong> của chúng có
                      thực sự phát triển không?
                    </p>

                    <p>
                      Chúng ta đều biết rằng những loài{" "}
                      <strong>động vật</strong> được nuôi nhốt trong vườn thú sẽ
                      có phạm vi sinh sống và vận động hẹp hơn nhiều so với đồng
                      loại của chúng trong tự nhiên, nhưng qua hai tấm ảnh trên
                      có thể thây được rằng dù vận động ít hơn{" "}
                      <strong>tinh tinh</strong> hoang dã, nhưng chúng vẫn sở
                      hữu <strong>cơ bắp</strong> cuồn cuộn chẳng khác gì những
                      người chăm chỉ tập gym hàng ngày.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280543932061707804782.jpg"
                      alt="1, KHỈ ĐỘT,ĐỘNG VẬT,TINH TINH,CƠ BẮP,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Có một thực tế là những loài <strong>động vật</strong>{" "}
                      mạnh mẽ trên cạn hầu như không hoạt động nhiều trong ngày
                      và dường như chúng cũng chẳng thèm vận động mạnh như việc
                      chúng ta tập gym. Sư tử ngủ gần 20 tiếng mỗi ngày, hà mã
                      thì dành cả ngày để ngâm mình dưới nước, chỉ lên bờ kiếm
                      ăn vào buổi tối bằng cách đi bộ chậm chạp, voi, trâu rừng,
                      đười ươi và các loài động vật ăn thực vật khác cũng đều
                      dành cả ngày để ăn uống mà không bao giờ luyện tập như con
                      người.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280543947551875467765.jpg"
                      alt="2, KHỈ ĐỘT,ĐỘNG VẬT,TINH TINH,CƠ BẮP,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Nếu không ăn uống thì thời gian của chúng đều để nghỉ
                      ngơi, tiết kiệm năng lượng một cách tối đa, để dành sức
                      cho những cuộc săn mồi, chạy trốn hoặc chiến đấu với kẻ
                      thù. Nhưng dù vậy thì <strong>cơ bắp</strong> của chúng
                      vẫn rất phát triển, và chúng hiển nhiên cũng sở hữu sức
                      mạnh thể chất lớn. Chúng ta đều biết rằng con người dù có
                      tập luyện vất vả, cực nhọc để có thể sở hữu cơ bắp đẹp thì
                      chỉ cần ngừng tập luyện một thời gian thì cơ bắp cũng sẽ
                      dần biến mất và thay vào đó là mỡ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-2-1628054395246411386945.jpg"
                      alt="3, KHỈ ĐỘT,ĐỘNG VẬT,TINH TINH,CƠ BẮP,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Còn nếu bạn muốn duy trì sự sung mãn của{" "}
                      <strong>cơ bắp</strong>, thể lực và sức mạnh đỉnh cao thì
                      bạn cần phải tập thể dục thường xuyên và không bị gián
                      đoạn, điều này đặc biệt đúng với các vận động viên thể
                      hình chuyên nghiệp và các vận động động viên sức mạnh và
                      sức bền.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-3-1628054396259556444872.jpg"
                      alt="4, KHỈ ĐỘT,ĐỘNG VẬT,TINH TINH,CƠ BẮP,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, đôi khi vẫn có một vài trường hợp ngoại lệ ở
                      người. Vào khoảng năm 2000, tại một bệnh viện ở Đức, một
                      cậu bé vừa chào đời đã ngay lập tức thu hút được sự chú ý
                      của các bác sĩ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-4-1628054396817383666926.jpg"
                      alt="5, KHỈ ĐỘT,ĐỘNG VẬT,TINH TINH,CƠ BẮP,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Hình ảnh bên trái là lúc cậu bé này mới sinh, còn bên phải
                      là khi cậu bé đã được 7 tháng tuổi, siêu âm B đã xác nhận
                      những phần mũi tên đúng là các mô cơ. Đến khi 4 tuổi rưỡi,
                      cậu bé này đã có thể nâng được một quả tạ 3kg bằng cả hai
                      tay, <strong>cơ bắp</strong> phát triển gấp đôi những đứa
                      trẻ cùng tuổi trong khi lượng mỡ trong cơ thể chỉ bằng một
                      nửa. Được biết mẹ của cậu bé này từng là một vận động viên
                      chạy nước rút chuyên nghiệp, có cơ bắp tương đối khỏe, các
                      anh trai, bố và ông nội của cậu bé này đều là những người
                      khỏe mạnh. Người ta nói rằng ông của cậu bé này là một
                      công nhân xây dựng, có thể bốc dỡ 150kg đá bằng tay không.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-5-1628054395756643102680.jpg"
                      alt="6, KHỈ ĐỘT,ĐỘNG VẬT,TINH TINH,CƠ BẮP,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Bác sĩ của cậu bé - Schuelke nghi ngờ rằng tình trạng của
                      cậu bé có liên quan đến một hội chứng Myostatin - còn được
                      gọi là nhân tố tăng trưởng và biệt hóa số 8 (growth and
                      differentiation factor 8 - GDF-8). Hội chứng này được phát
                      hiện lần đầu tiên bởi tiến sĩ Se-Jin Lee, một nhà di
                      truyền học tại Đại học Johns Hopkins trong một nghiên cứu
                      trên chuột vào năm 1997.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-6-16280543956731557611909.jpg"
                      alt="7, KHỈ ĐỘT,ĐỘNG VẬT,TINH TINH,CƠ BẮP,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Khi gen tổng hợp protein GDF-8 bị loại bỏ,{" "}
                      <strong>cơ bắp</strong> của những con chuột trở nên rất
                      phát triển - khối lượng cơ bắp nặng gấp đôi so với những
                      đồng loại thông thường của chúng. Vào năm 2007, Se-Jin Lee
                      phát hiện ra rằng follostatin protein thứ hai liên quan
                      đến sự phát triển của cơ bắp - được biến đổi gen ở những
                      con chuột không có myostatin, đồng thời tạo ra sự ức chế
                      nang trứng quá mức giúp hiệu quả tăng trưởng cơ bắp gấp 4
                      lần so với chuột bình thường.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Schuelke đã kiểm tra gen myostatin của cậu bé và mẹ của
                      cậu để xem có đột biến hay không. Trong số các alen tương
                      ứng, chỉ có một trong hai gen của mẹ là bất thường, trong
                      khi đó cậu bé này lại có hai giao tử gen bất thường, điều
                      này đồng nghĩa với việc cậu bé này không thể tổng hợp được
                      myostatin. Đột biến di truyền này làm giảm các yếu tố ức
                      chế sự phát triển <strong>cơ bắp</strong> của cậu bé do đó
                      cậu bé này có mức phát triển cơ bắp mạnh hơn người bình
                      thường.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-7-1628054396178400518251.jpg"
                      alt="8, KHỈ ĐỘT,ĐỘNG VẬT,TINH TINH,CƠ BẮP,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      <strong>Động vật</strong> trong tự nhiên cũng có đột biến
                      GDF-8, sau khi con người nhận thấy những con vật nuôi
                      trong nhà có mức phát triển <strong>cơ bắp</strong> bất
                      thường thì đã lai tạo chúng để có được những tính trạng
                      đồng hợp tử có thể di truyền ổn định, chẳng hạn như giống
                      bò lang trắng xanh Bỉ. Đột biến gen gây ra sự thiếu hụt
                      myostatin và làm tăng tốc độ phát triển cơ bắp của giống
                      bò này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-8-1628054397186631348038.jpg"
                      alt="9, KHỈ ĐỘT,ĐỘNG VẬT,TINH TINH,CƠ BẮP,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Giờ thì chúng ta lại quay trở lại câu hỏi ban đầu. Tại sao{" "}
                      <strong>khỉ đột</strong>, <strong>tinh tinh</strong> và
                      chuột túi hầu như không cần phải tập luyện sức mạnh mà{" "}
                      <strong>cơ bắp</strong> của chúng vẫn cực kỳ phát triển?
                    </p>
                    <p>
                      Thông qua nhiều nghiên cứu, chúng ta biết được rằng sự
                      phát triển <strong>cơ bắp</strong> được kiểm soát và điều
                      chỉnh bởi hơn một chục gen và nhiều loại protein trong cơ
                      thể. Các cá nhân khác nhau sẽ có sự phát triển khác nhau.
                      Ví dụ: với cùng một cường độ tập luyện và chế độ dinh
                      dưỡng thì vẫn sẽ có những người phát triển cơ bắp nhanh và
                      mang lại hiệu quả rõ ràng, trong khi một số người khác thì
                      không. Do đó sự khác biệt giữa cơ thể con người và{" "}
                      <strong>động vật</strong> là rất lớn, mã di truyền bẩm
                      sinh sẽ quyết định sự tồn tại của chúng.
                    </p>
                    <p>
                      Sự cạnh tranh sinh tồn trong tự nhiên là vô cùng tàn khốc,
                      vì vậy hầu hết mọi loài <strong>động vật</strong> đều tiến
                      hóa theo thiên hướng phát triển cơ chế sinh tồn và chiến
                      lược cạnh tranh của riêng mình, và phát triển{" "}
                      <strong>cơ bắp</strong> cũng là một trong số đó. Nhiều cơ
                      bắp hơn đồng nghĩa với việc tăng mức tiêu thụ năng lượng.
                    </p>
                    <p>
                      Tuy nhiên con người dù có cơ thể mỏng manh và ít{" "}
                      <strong>cơ bắp</strong> hơn nhưng chúng ta vẫn tiêu thụ
                      rất nhiều năng lượng để duy trì hoạt động của cơ thể, con
                      người tiêu thụ nhiều hơn 400 calo so với hắc{" "}
                      <strong>tinh tinh</strong>, 635 calo so với{" "}
                      <strong>khỉ đột</strong> và 820 calo so với tinh tinh...
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-9-1628054396747573138283.jpg"
                      alt="10, KHỈ ĐỘT,ĐỘNG VẬT,TINH TINH,CƠ BẮP,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Bộ não của con người là bộ phận tiêu thụ năng lượng lớn,
                      tuy chỉ chiếm 2,5% trọng lượng cơ thể nhưng lại tiêu hao
                      20% năng lượng ở trạng thái nghỉ ngơi. Nếu con người có{" "}
                      <strong>cơ bắp</strong> phát triển như{" "}
                      <strong>động vật</strong> thì chúng tải ăn uống không
                      ngừng nghỉ hoặc dành rất nhiều thời gian để nghỉ ngơi
                      trong một ngày thì với phương pháp săn bắt hái lượm của tổ
                      tiên chúng ta hoàn toàn không đáp ứng được.
                    </p>
                    <p>
                      Kết quả cuối cùng của quá trình tiến hóa là con người đã
                      từ bỏ việc phát triển <strong>cơ bắp</strong>, thay vào đó
                      là phát triển cấu trúc cơ thể chắc khỏe, hệ tim phổi phát
                      triển, tăng cường trao đổi chất, phát triển trí não thông
                      minh hơn và có sức bền tốt hơn, hoạt bát hơn. Mặc dù chúng
                      ta vẫn chưa biết được quá trình này được hình thành như
                      thế nào và cơ chế cụ thể trong quá trình này ra sao, nhưng
                      chiến lược sinh tồn cân bằng và hiệu quả này đã giúp cho
                      loài nhân loại trở thành quần thể sinh vật mạnh mẽ nhất
                      Trái Đất.
                    </p>
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
