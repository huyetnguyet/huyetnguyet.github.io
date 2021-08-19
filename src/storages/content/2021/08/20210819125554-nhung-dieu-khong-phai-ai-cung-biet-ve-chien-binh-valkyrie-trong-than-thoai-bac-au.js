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
"timestamp": '19/08/2021 12:55 PM',
"title": 'Những điều không phải ai cũng biết về chiến binh Valkyrie trong thần thoại Bắc Âu',
"description": 'Trong thần thoại Bắc Âu, các nữ chiến binh Valkyrie có lẽ là những nhân vật được biết đến nhiều nhất',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/16/valkyries-shadows-1629101903187774463403.jpg',
"alt": 'VALKYRIE,KHÁM PHÁ,THẦN THOẠI BẮC ÂU,',
"category": 'news',
"date": '19/08/2021',
"time": '12:55 PM',
"link": '/nhung-dieu-khong-phai-ai-cung-biet-ve-chien-binh-valkyrie-trong-than-thoai-bac-au',
"zcomponent": 'page_20210819125554',
"filepath": './20210819125554-nhung-dieu-khong-phai-ai-cung-biet-ve-chien-binh-valkyrie-trong-than-thoai-bac-au.js'
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
  "Những điều không phải ai cũng biết về chiến binh Valkyrie trong thần thoại Bắc Âu";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:55 PM";
const description =
  "Trong thần thoại Bắc Âu, các nữ chiến binh Valkyrie có lẽ là những nhân vật được biết đến nhiều nhất";
const link =
  "nhung-dieu-khong-phai-ai-cung-biet-ve-chien-binh-valkyrie-trong-than-thoai-bac-au";
const tagparam = ["VALKYRIE", "KHÁM PHÁ", "THẦN THOẠI BẮC ÂU"];
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

export default function page_20210819125554() {
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
                      <strong>Valkyrie</strong> trong thần thoại được miêu tả là
                      những linh hồn bay lượn phía trên chiến trường để tìm kiếm
                      người chết, định đoạt số phận của những người qua đời. Từ
                      "Valkyrie" có nghĩa là "người lựa chọn đồ tể", và một khi
                      được lựa chọn, các chiến binh sẽ được họ đưa qua cầu vồng
                      Bifrost, đến Valhalla. Valhalla là cung điện trên trời,
                      nơi dành cho các chiến binh đã chết.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/valkyries-shadows-1629101903187774463403.jpg"
                      alt="1, VALKYRIE,KHÁM PHÁ,THẦN THOẠI BẮC ÂU,"
                      note=""
                    />

                    <p>
                      Tuy nhiên, trong <strong>thần thoại Bắc Âu</strong> sau
                      này, các <strong>Valkyrie</strong> được lãng mạn hóa hơn
                      và trở thành những nữ chiến binh cầm khiên của thần Odin,
                      những trinh nữ với mái tóc vàng, người đảm nhận việc phục
                      vụ bữa ăn cho các anh hùng ở Valhalla. Hành động phục vụ
                      thức ăn ở Valhalla không được xem là một hành động thấp
                      kém, mà ngược lại, trong văn hóa Bắc Âu việc những bà
                      hoàng đích thân phục vụ bữa ăn cho khác sẽ thể hiện sự tôn
                      trọng dành cho khách. Khi các Valkyrie xuất hiện trên
                      chiến trường, họ sẽ hóa thân thành các thiếu nữ thiên nga.
                      Tuy nhiên, nếu họ bị người khác bắt gặp trong bộ dạng
                      không khoác bộ lông vũ thì có thể sẽ bị mắc kẹt ở trần
                      gian.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/valkyries-in-valholl-16291019201251351633623.jpg"
                      alt="2, VALKYRIE,KHÁM PHÁ,THẦN THOẠI BẮC ÂU,"
                      note=""
                    />

                    <h5>Thầy dạy của các chiến binh</h5>
                    <p>
                      Một trong số các nhiệm vụ mà <strong>Valkyrie</strong> đảm
                      nhận là huấn luyện chiến đấu, chữa lành hoặc hồi sinh cho
                      các chiến binh. Với nhiệm vụ này, đôi khi các Valkyrie sẽ
                      truyền đạt sự hiểu biết cho học trò, giống như trường hợp
                      của Valkyrie Sigrdrifa trong Sigrdrifumal. Vì câu chuyện
                      này, Sigrdrifa không phải lòng người đàn ông mà nàng huấn
                      luyện, nên nàng tỏ ra rất quan tâm đến các thức chiến đấu
                      lẫn cách hành xử đúng mực của học trò trên chiến trường.
                    </p>
                    <p>
                      Ngoài việc dạy dỗ cho các chiến binh,{" "}
                      <strong>Valkyrie</strong> còn có thể bảo vệ cho những
                      người mà họ ưu ái. Cách thức bảo vệ rất đa dạng như che
                      chắn cho họ trong chiến trận, cảnh báo trước hiểm nguy
                      hoặc báo mộng. Truyện dân gian Bắc Âu còn kể lại câu
                      chuyện một người phàm trần mơ thấy Valkyrie nhồi rơm vào
                      bụng anh ta, thay thế cho nội tạng và từ đó giúp anh ta
                      bất tử trong trận chiến sắp đến. Thông qua những giấc mơ,
                      Valkyrie có thể để lại điềm báo cho chiến trận và cái
                      chết.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/valkyrie-illustration-16291019556771342653051.jpg"
                      alt="3, VALKYRIE,KHÁM PHÁ,THẦN THOẠI BẮC ÂU,"
                      note=""
                    />
                    <p>
                      Người Bắc Âu cổ tin rằng các dải sáng cực quang xuất hiện
                      trên bầu trời là ánh phản chiếu từ các{" "}
                      <strong>Valkyrie</strong> khi họ đập kiếm vào khiên.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tuy nhiên, cần phải nhắc đến một khía cạnh hơi rùng rợn
                      của <strong>Valkyrie</strong>, đó là can thiệp vào cái
                      chết của người phàm. Valkyrie sẽ dạy dỗ những người mà họ
                      ưng ý, truyền cho anh ta sự thông thái và cảm hứng, sau đó
                      chờ đợi cho đến khi chín muồi, Valkyrie sẽ giết anh ta rồi
                      đưa đến Valhalla.
                    </p>
                    <h5>
                      <strong>Valkyrie</strong> – Những nàng tiên thiên nga và
                      các câu chuyện tình lãng mạn
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/the-valkyries-vigil-16291019711041899613382.jpg"
                      alt="4, VALKYRIE,KHÁM PHÁ,THẦN THOẠI BẮC ÂU,"
                      note=""
                    />
                    <p>
                      Ở giai đoạn sau của <strong>thần thoại Bắc Âu</strong>,{" "}
                      <strong>Valkyrie</strong> được lãng mạn hóa đi rất nhiều
                      bằng những câu chuyện tình với người bình thường hoặc anh
                      hùng phàm trần. Kiểu truyện thường gặp về Valkyrie đều đề
                      cập đến việc họ hóa thành các nàng tiên thiên nga, vô tình
                      bị người phàm nhìn thấy bộ dạng hình người và lấy đi đôi
                      cánh. Sau đó, họ kết hôn với người phàm và có con. Tùy
                      từng câu chuyện cuộc hôn nhân có thể kết thúc hạnh phúc,
                      sau khi người phàm đã bị thử thách. Ngược lại, câu chuyện
                      cũng có thể diễn biến gay cấn hơn, Valkyrie bị tình địch
                      sát hại, rồi họ hồi sinh và trả thù tình địch của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/valkyries-as-swan-maidens-16291019399491739050543.jpg"
                      alt="5, VALKYRIE,KHÁM PHÁ,THẦN THOẠI BẮC ÂU,"
                      note=""
                    />
                    <p>
                      Câu chuyện nổi tiếng nhất về <strong>Valkyrie</strong> là
                      chuyện về nàng Brynhildr trong Volsung Saga. Mối tình
                      Brynhildr với Sigurd được xem như phiên bản sơ khai nhất
                      của Sleeping Beauty.
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
