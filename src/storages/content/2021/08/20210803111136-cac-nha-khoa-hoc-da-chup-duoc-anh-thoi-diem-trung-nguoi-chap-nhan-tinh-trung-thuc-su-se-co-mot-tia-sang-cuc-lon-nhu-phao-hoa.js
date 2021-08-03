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
"timestamp": '03/08/2021 11:11 AM',
"title": 'Các nhà khoa học đã chụp được ảnh thời điểm trứng người chấp nhận tinh trùng, thực sự sẽ có một tia sáng cực lớn như pháo hoa',
"description": 'Cách đây vài ngày, khi một nhóm nghiên cứu từ Đại học Northwestern đang quan sát quá trình thụ tinh của một tế bào trứng, họ đã rất ngạc nhiên khi phát hiện ra rằng khi một tế bào trứng của con người chấp nhận tinh trùng, một ánh sáng chói lóa phát ra xung quanh tế bào trứng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-1-1627924827274339787322.gif',
"alt": 'KHÁM PHÁ,KHOA HỌC,CON NGƯỜI,TINH TRÙNG,CỘNG ĐỒNG MẠNG,',
"category": 'news',
"date": '03/08/2021',
"time": '11:11 AM',
"link": '/cac-nha-khoa-hoc-da-chup-duoc-anh-thoi-diem-trung-nguoi-chap-nhan-tinh-trung-thuc-su-se-co-mot-tia-sang-cuc-lon-nhu-phao-hoa',
"zcomponent": 'page_20210803111136',
"filepath": './20210803111136-cac-nha-khoa-hoc-da-chup-duoc-anh-thoi-diem-trung-nguoi-chap-nhan-tinh-trung-thuc-su-se-co-mot-tia-sang-cuc-lon-nhu-phao-hoa.js'
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
  "Các nhà khoa học đã chụp được ảnh thời điểm trứng người chấp nhận tinh trùng, thực sự sẽ có một tia sáng cực lớn như pháo hoa";
const author = "Đức Khương";
const source = "Trí Thức Trẻ";
const timestamp = "03/08/2021 11:11 AM";
const description =
  "Cách đây vài ngày, khi một nhóm nghiên cứu từ Đại học Northwestern đang quan sát quá trình thụ tinh của một tế bào trứng, họ đã rất ngạc nhiên khi phát hiện ra rằng khi một tế bào trứng của con người chấp nhận tinh trùng, một ánh sáng chói lóa phát ra xung quanh tế bào trứng.";
const link =
  "cac-nha-khoa-hoc-da-chup-duoc-anh-thoi-diem-trung-nguoi-chap-nhan-tinh-trung-thuc-su-se-co-mot-tia-sang-cuc-lon-nhu-phao-hoa";
const tagparam = [
  "KHÁM PHÁ",
  "KHOA HỌC",
  "CON NGƯỜI",
  "TINH TRÙNG",
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

export default function page_20210803111136() {
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
                      Nếu coi tế bào trứng là một hành tinh, thì trận pháo hoa
                      lớn này thậm chí còn mạnh hơn vụ nổ của tiểu hành tinh
                      trong kỷ Phấn Trắng đâm vào Trái Đất và tiêu diệt tất cả
                      loài khủng long - tia chớp này có thể lan rộng ra toàn bộ
                      "hành tinh".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-1-1627924827274339787322.gif"
                      alt="1, KHÁM PHÁ,KHOA HỌC,CON NGƯỜI,TINH TRÙNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Các nghiên cứu đã chỉ ra rằng trong quá trình phát triển
                      của tế bào trứng, hàng trăm tỷ nguyên tử kẽm được lưu trữ
                      trong các túi trên bề mặt tế bào trứng, chiếm 90% hàm
                      lượng kẽm của toàn bộ tế bào trứng. Một khi{" "}
                      <strong>tinh trùng</strong> được chấp nhận, những túi trên
                      bề mặt này này sẽ bùng ra như một vụ nổ, ngay lập tức
                      phóng ra hàng tỷ nguyên tử kẽm, kèm theo một tia sáng chói
                      lóa. Tất nhiên, loại ánh sáng này không thể nhìn thấy bằng
                      mắt thường, nhưng với sự hỗ trợ của các kỹ thuật hình ảnh
                      mạnh mẽ như kính hiển vi huỳnh quang tia X và kính hiển vi
                      điện tử, các nhà nghiên cứu có thể quan sát được màn bắn
                      pháo hoa ngoạn mục này trong thế giới của tinh trùng và
                      trứng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-16279248307741234852763.jpg"
                      alt="2, KHÁM PHÁ,KHOA HỌC,CON NGƯỜI,TINH TRÙNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Vẫn chưa rõ cơ chế gây ra hiện tượng này là gì, nhưng theo
                      quan điểm triết học, nó phù hợp với sự thật rằng sẽ không
                      có gì thành công một cách tình cờ. Không ngoa khi biết
                      rằng hành trình của <strong>tinh trùng</strong> từ khi
                      xuất tinh đến khi thụ tinh thành công là vô cùng gian nan.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-2-162792483023825584783.jpg"
                      alt="3, KHÁM PHÁ,KHOA HỌC,CON NGƯỜI,TINH TRÙNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Lấy chính bản thân bạn làm ví dụ thì trước hết có khoảng
                      100 đến 300 triệu "anh chị em" của bạn trong khoảng nửa
                      thìa tinh dịch đi vào cơ thể mẹ bạn. Ngay từ khi bước vào,
                      bạn đã can đảm tiến về phía trước để có thể đến được đích
                      duy nhất của mình - tế bào trứng. Đừng nghĩ rằng khoảng
                      cách này là rất ngắn, nếu bạn phóng to trên thang đo thể
                      tích thì khoảng cách giữa <strong>tinh trùng</strong> và
                      tế bào trứng sẽ xa như khoảng cách giữa Trái Đất và Mặt
                      Trăng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-3-1627924832284975050091.gif"
                      alt="4, KHÁM PHÁ,KHOA HỌC,CON NGƯỜI,TINH TRÙNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Dù số lượng <strong>tinh trùng</strong> lên đến hàng trăm
                      triệu con nhưng đối mặt với quãng đường xa như vậy, và để
                      chiến tháng bạn đã phải bỏ ra rất nhiều nghị lực. Hơn một
                      nửa số "anh chị em" của bạn đã ngã xuống trước khi hoàn
                      thành 1/3 quãng đường.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-4-16279248318191004448639.gif"
                      alt="5, KHÁM PHÁ,KHOA HỌC,CON NGƯỜI,TINH TRÙNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Tiếp theo, bạn sẽ gặp phải một thử thách lớn hơn đó chính
                      là bạch cầu trong cơ thể của mẹ. Tế bào bạch cầu là "người
                      bảo vệ" của cơ thể <strong>con người</strong>, giúp chống
                      lại bệnh tật. Khi vi trùng xâm nhập vào cơ thể người, các
                      tế bào bạch cầu có thể bao quanh và nuốt vi trùng. Thế
                      nhưng bạn đã dũng cảm để đến trước bạch cầu, và dưới hàng
                      loạt những phản ứng căng thẳng, tinh thần chiến đấu anh
                      dũng cùng với tốc độ rất nhanh đã giúp bạn vượt qua được
                      thử thách đó.
                    </p>
                    <p>
                      Tốc độ bơi của <strong>tinh trùng</strong> khoảng 2 đến 3
                      mm/phút, khi so sánh với khối lượng của bạn lúc đó thì tốc
                      độ này khá đáng kinh ngạc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-5-16279248312771453523517.gif"
                      alt="6, KHÁM PHÁ,KHOA HỌC,CON NGƯỜI,TINH TRÙNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Sau một hành trình dài và trải qua nhiều cấp độ thử thách,
                      cuối cùng hàng trăm <strong>tinh trùng</strong> sẽ đến với
                      chị em tế bào trứng, so với đội quân khổng lồ khi lên
                      đường thì con số còn lại này là không đáng kể.
                    </p>
                    <p>
                      Nhưng dù vậy, vẫn không dễ dàng gì để có thể trở thành
                      người chiến thắng cuối cùng. Có một lớp zona pellucida dày
                      bên ngoài tế bào trứng, nếu <strong>tinh trùng</strong>{" "}
                      muốn vượt qua hàng rào bảo vệ, chúng phải sử dụng một loại
                      enzyme duy nhất trên đầu để làm mềm và tiêu biến zona
                      pellucida.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Dù sau này có thể có hàng trăm <strong>tinh trùng</strong>{" "}
                      dũng cảm tiến về phía trước, nếu vào được bên trong thì tế
                      bào trứng sẽ xảy ra phản ứng tức thời, toàn bộ zona
                      pellucida sẽ ngay lập tức cứng lại và tất cả các tinh
                      trùng khác bị chặn ở bên ngoài.
                    </p>
                    <p>
                      Vào thời điểm này, hàng tỷ nguyên tử kẽm được lưu trữ trên
                      bề mặt của tế bào trứng sẽ được giải phóng ngay lập tức,
                      và một màn pháo hoa hoành tráng sẽ nổ ra. Sau tất cả những
                      khó khăn, thì đây được coi là một màn ăn mừng đáng nhớ cho
                      kẻ đã thành công.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-6-162792483026136790037.gif"
                      alt="7, KHÁM PHÁ,KHOA HỌC,CON NGƯỜI,TINH TRÙNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Nghiên cứu này lần đầu tiên được phát hiện vào năm 2014
                      trong nghiên cứu hợp tử chuột và vào năm 2016 khi quan sát
                      trong quá trình thụ tinh trứng ở khỉ và sau đó được tìm
                      thấy ở gia súc và người, nghiên cứu gần đây cho thấy ở
                      Xenopus laevis (có nghĩa là trong số động vật lưỡng cư và
                      động vật có vú, ngay cả với những loài có chung tổ tiên
                      trong quá trình tiến hóa của chúng cách đây 300 triệu
                      năm), đều có hiện tượng vụ nổ kinh hoàng về sự ra đời của
                      sự sống khi trứng gặp <strong>tinh trùng</strong>.
                    </p>
                    <p>
                      Vì vậy, khi bạn đến thế giới này, nó thực sự bắt đầu với
                      một vụ nổ lớn có thể so sánh với vụ nổ của một tiểu hành
                      tinh khổng lồ va vào Trái Đất. Tất cả mọi người, dù nghèo
                      hay giàu, thông minh hay ngu ngốc, thì cũng đều đã trải
                      qua nhưng hiện tượng như nhau trong những giây phút đầu
                      tiên của cuộc đời.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-7-1627924832361504671916.jpg"
                      alt="8, KHÁM PHÁ,KHOA HỌC,CON NGƯỜI,TINH TRÙNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Ngoài ra, nhóm nghiên cứu phát hiện ra rằng kích thước của
                      vụ nổ “kẽm” này sẽ ảnh hưởng rất nhiều đến chất lượng thụ
                      tinh của phôi, vì vậy điểm khác biệt duy nhất trong vụ nổ
                      kinh hoàng này là độ mạnh của vụ nổ, nhưng đây không phải
                      là điều bạn có thể làm hay kiểm soát được. Bởi vậy nhóm
                      nghiên cứu đã đưa ra lời khuyên rằng những ai có kế hoạch
                      sinh con sau này có thể nên cân nhắc việc ăn nhiều thực
                      phẩm chứa kẽm trong khẩu phần ăn của mình.
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
