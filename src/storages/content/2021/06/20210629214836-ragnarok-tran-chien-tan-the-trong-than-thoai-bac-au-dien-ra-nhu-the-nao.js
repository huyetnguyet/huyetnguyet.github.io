import React from "react";
import "components/page.css";
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
"timestamp": '29/06/2021 09:48 PM',
"title": 'Ragnarok – Trận chiến tận thế trong thần thoại Bắc Âu diễn ra như thế nào?',
"description": 'Theo truyền thuyết về Ragnarok, thế giới sẽ lại nổi lên một lần nữa, các vị thần còn sống sót sẽ gặp nhau và thế giới được tái sinh nhờ hai con người sót lại.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/22/ragnarok-digital-16243352134241137803023.jpg',
"alt": 'KHÁM PHÁ,THẦN THOẠI,RAGNAROK,THẦN THOẠI BẮC ÂU,LỊCH SỬ,VĂN HÓA,LOKI,',
"category": 'games',
"date": '29/06/2021',
"time": '09:48 PM',
"link": '/ragnarok-tran-chien-tan-the-trong-than-thoai-bac-au-dien-ra-nhu-the-nao',
"zcomponent": 'page_20210629214836',
"filepath": './20210629214836-ragnarok-tran-chien-tan-the-trong-than-thoai-bac-au-dien-ra-nhu-the-nao.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "Ragnarok – Trận chiến tận thế trong thần thoại Bắc Âu diễn ra như thế nào?";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:48 PM";
const description =
  "Theo truyền thuyết về Ragnarok, thế giới sẽ lại nổi lên một lần nữa, các vị thần còn sống sót sẽ gặp nhau và thế giới được tái sinh nhờ hai con người sót lại.";
const link =
  "ragnarok-tran-chien-tan-the-trong-than-thoai-bac-au-dien-ra-nhu-the-nao";
const tagparam = [
  "KHÁM PHÁ",
  "THẦN THOẠI",
  "RAGNAROK",
  "THẦN THOẠI BẮC ÂU",
  "LỊCH SỬ",
  "VĂN HÓA",
  "LOKI",
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

export default function page_20210629214836() {
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
                <div className="contentBody">
                  <p>
                    Trong <strong>thần thoại</strong> Bắc Âu,{" "}
                    <strong>Ragnarok</strong> là một loạt cách sự kiện sẽ đưa
                    đến tận thế, khi những tên khổng lồ lửa và băng bắt tay với
                    nhau để chống lại các vị thần trong trận chiến cuối cùng gây
                    ra sự hủy diệt cho cả hành tinh, nhấn chìm tất cả xuống
                    nước.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/22/ragnarok-digital-16243352134241137803023.jpg"
                    alt="1, KHÁM PHÁ,THẦN THOẠI,RAGNAROK,THẦN THOẠI BẮC ÂU,LỊCH SỬ,VĂN HÓA,LOKI,"
                    note=""
                  />
                  <p>
                    "Những người anh em sẽ đối đầu và sát hại lẫn nhau, con cái
                    của những người chị em sẽ làm nhơ nhuốc tình thân tộc. Thế
                    giới khắc nghiệt này, đầy rẫy điều xấu xa – thời của kiếm,
                    của rìu – khiên chắn bị xé toạc – thời đại của gió, thời đại
                    của sói – trước khi thế giới rơi vào hỗn loạn. Chẳng ai còn
                    lòng thương xót cho ai". – Dronke (1997:19)
                  </p>
                  <h5>
                    Vai trò của <strong>Loki</strong> trong Ragnarok
                  </h5>
                  <p>
                    <strong>Thần thoại</strong> Norse phân chia các vị thần
                    thành hai nhóm chính: Aesir và Vanir. Những người khổng lồ
                    có mặt trước họ và sống ở Jotunheimr, một trong chín thế
                    giới theo quan niệm vũ trụ của thần thoại Norse. Họ bị các
                    vị thần Aesir, những người không cho họ đặt chân vào Asgard,
                    trục xuất đến đó. Trong các câu chuyện Norse cổ, những người
                    khổng lồ thường xuyên tương tác với các vị thần Aesir và
                    Vanir, nhưng thường trong tình thế đối đầu hoặc cạnh tranh.
                  </p>
                  <p>
                    <strong>Loki</strong> là con trai của một người khổng lồ. Vị
                    thần lừa lọc này nổi tiếng với khả năng thay đổi hình dạng.
                    Vai trò của Loki trong <strong>thần thoại</strong> Norse khá
                    độc đáo và gây nhiều tranh cãi khi vừa giúp đỡ lại vừa phá
                    bĩnh các vị thần. Loki được phép sống cùng với các thần
                    Aesir ở Asgard. Vị thần lừa lọc đã sinh ra rất nhiều con,
                    trong đó có con ngựa tám chân Sleipnir – thú cưỡi của thần
                    Odin, một con rồng và một con sói tên là Fenrir – nhân vật
                    đóng vai trò rất quan trọng trong tận thế{" "}
                    <strong>Ragnarok</strong>.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/22/loki-punished-16243352344451095439817.jpg"
                    alt="2, KHÁM PHÁ,THẦN THOẠI,RAGNAROK,THẦN THOẠI BẮC ÂU,LỊCH SỬ,VĂN HÓA,LOKI,"
                    note=""
                  />
                  <p>
                    Chuyện kể rằng <strong>Loki</strong> đã lừa vị thần mùa đông
                    mù lòa, Hod (Hoor), dẫn đến hậu quả là cái chết thương tâm
                    của thần Baldr – con trai nữ thần Frigg và thần Odin. Vì
                    thế, Loki bị phải và trói vào một tảng đá cho đến khi{" "}
                    <strong>Ragnarok</strong> diễn ra. Hình phạt này nghe có vẻ
                    khá giống với hình phạt dành cho Prometheus trong{" "}
                    <strong>thần thoại</strong> Hy Lạp, titan cũng bị trói vào
                    đá để trả giá cho việc ăn trộm lửa.
                  </p>
                  <h5>Những dấu hiệu của tận thế Ragnarok</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/22/b9d3f1b5178095cbe173c73237bdd748-1624335446290460314847.jpg"
                    alt="3, KHÁM PHÁ,THẦN THOẠI,RAGNAROK,THẦN THOẠI BẮC ÂU,LỊCH SỬ,VĂN HÓA,LOKI,"
                    note=""
                  />
                  <p>
                    Tương tự như tận thế trong quan niệm của Công giáo,{" "}
                    <strong>Ragnarok</strong> cũng đi cùng với hàng loạt dấu
                    hiệu báo trước. Đầu tiên là Fimbulvetr, một mùa đông lạnh
                    kéo dài với tuyết rơi không ngừng nghỉ suốt mười hai tháng.
                    Một con gà trống đỏ tên là Fjalar sẽ báo cho người khổng lồ
                    biết được rằng Ragnarok đã bắt đầu. Con gà trống thứ hai sẽ
                    cảnh báo cho người chết Ragnarok đã đến. Cuối cùng, con gà
                    trống đỏ thứ ba tên Gullinkambi, con gà trống sống ở
                    Valhalla, sảnh đường cao quý ở Asgard, sẽ cảnh báo cho tất
                    cả các vị thần rằng thế giới đã đến hồi kết.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Thần Heimdallr sẽ thổi một hồi kèn trumpet đặc biệt để báo
                    hiệu cho Valhalla, và âm thanh này sẽ hồi sinh người chết.
                    Họ đi về lãnh địa có tên Vigrid (nơi dành riêng cho các cuộc
                    chiến), địa điểm diễn ra trận chiến cuối cùng. Biển cả bị rẽ
                    đôi và mãng xà Jörmungandr, con mãng xà to lớn bao quanh
                    trái đất, tự nuốt chiếc đuôi của mình, sẽ trồi lên từ đại
                    dương sâu thẳm để tham gia cuộc chiến. Thần Baldr và thần
                    Hod cũng trở về từ cõi chết để chiến đầu trong cuộc chiến
                    này.
                  </p>
                  <h5>Cuộc chiến kết thúc tất cả?</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/22/odin-fenrir-ragnarok-1624335262039259402979.jpg"
                    alt="4, KHÁM PHÁ,THẦN THOẠI,RAGNAROK,THẦN THOẠI BẮC ÂU,LỊCH SỬ,VĂN HÓA,LOKI,"
                    note=""
                  />
                  <p>
                    Người ta kể rằng <strong>Loki</strong> và những người khổng
                    lồ băng sẽ đi đến Vigrid để đối đầu với các vị thần Aesir
                    trên một con thuyền được làm từ móng của người chết, giống
                    như một con thuyền ma. Tất cả quái vật và người khổng lồ như
                    Surtr, con chó Carm của Hel, con sói Fenrir và người đứng
                    đầu của các khổng lồ, Hrym, sẽ tạo thành một đội quân hùng
                    mạnh chống lại các vị thần.
                  </p>
                  <p>
                    Kết cục của cuộc chiến sẽ là Thor, Odin và hầu hết các vị
                    thần đều qua đời, những con rồng phun lửa, tận diện mọi sự
                    sống trên Trái Đất. Nhưng đó không phải là hồi kết. Mọi thứ
                    sẽ lại được bắt đầu một lần nữa với một chủng loài mới, thế
                    giới mới sẽ trồi lên từ đại dương sâu thăm. Hai người phàm
                    được gọi là Lif và Lifthrasir sẽ cùng nhau sinh ra loài
                    người.
                  </p>
                  <p>
                    Các vị thần Vali và Vidar, cũng như các con trai của Thor và
                    Hoenir, những vị thần sống sót sau cuộc chiến, sẽ đi đến
                    Idavoll – nơi không bị phá hủy trong{" "}
                    <strong>Ragnarok</strong>. Thần Baldr và thần Hod cũng hồi
                    sinh và một thời đại mới lại bắt đầu.
                  </p>
                  <h5>
                    <strong>Ragnarok</strong> và những cuộc chiến tận thế khác
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/22/baldur0-1624335291404823481183.jpg"
                    alt="5, KHÁM PHÁ,THẦN THOẠI,RAGNAROK,THẦN THOẠI BẮC ÂU,LỊCH SỬ,VĂN HÓA,LOKI,"
                    note=""
                  />
                  <p>
                    Câu chuyện về <strong>Ragnarok</strong> là câu chuyện kể về
                    cuộc chiến giữa các vị thần với nhiều thương vong cho cả
                    người phàm lẫn thần thánh. Con người chịu tổn thất nặng nề,
                    giống như trận chiến Kurukshetra trong{" "}
                    <strong>thần thoại</strong> Hindu. Đây là điểm khác biệt
                    giữa Ragnarok với truyền thuyết tận thế của Công giáo, sự
                    kiện mà trong đó con người bị trừng phạt khi không trung
                    thành và tin tưởng vào Chúa.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/22/ragnarok1024x1024-16243354117351120928166.jpg"
                    alt="6, KHÁM PHÁ,THẦN THOẠI,RAGNAROK,THẦN THOẠI BẮC ÂU,LỊCH SỬ,VĂN HÓA,LOKI,"
                    note=""
                  />
                  <p>
                    Ý tưởng về "tận thế" được ghi nhận ở nhiều nền{" "}
                    <strong>văn hóa</strong> khác nhau trên khắp thế giới. Trong
                    Công giáo, đó là "Ngày phán xét" được miêu tả trong sách
                    Khải Huyền; trong Do Thái giáo, đó là Acharit hayamim; trong{" "}
                    <strong>thần thoại</strong> Aztec, đó là truyền thuyết về
                    năm mặt trời; và thần thoại Hindu, đó là câu chuyện về các
                    avatar và vị thần trên lưng ngựa.
                  </p>
                  <p>
                    Phần lớn các <strong>thần thoại</strong> này đều đề cập đến
                    kết thúc của thế giới cũ và khởi đầu của một thế giới mới.
                    Liệu chăng các thần thoại và truyền thuyết này chỉ đơn giản
                    là ẩn dụ cho sự thay đổi luân chuyển theo chu kỳ của tự
                    nhiên, như ngày và đêm, các mùa và sinh tử? Liệu chúng có
                    dựa trên các sự kiện có thật nào đó ở cổ đại? Hay là lời
                    cảnh báo cho sự kết thúc của thế giới con người trong một
                    tương lai xa vời? Đó vẫn sẽ là một ẩn số.
                  </p>
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
