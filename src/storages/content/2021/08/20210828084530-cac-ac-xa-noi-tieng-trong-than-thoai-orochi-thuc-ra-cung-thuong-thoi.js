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
"timestamp": '28/08/2021 08:45 AM',
"title": 'Các ác xà nổi tiếng trong thần thoại: Orochi thực ra cũng thường thôi!',
"description": 'Trước các ác xà này, Bát Kỳ Đại Xà Orochi gần nhiên không còn đáng sợ nữa',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/b2e60fbejti61-16299688029501760873260.jpg',
"alt": 'QUÁI VẬT,ÁC XÀ,THẦN THOẠI,',
"category": 'games',
"date": '28/08/2021',
"time": '08:45 AM',
"link": '/cac-ac-xa-noi-tieng-trong-than-thoai-orochi-thuc-ra-cung-thuong-thoi',
"zcomponent": 'page_20210828084530',
"filepath": './20210828084530-cac-ac-xa-noi-tieng-trong-than-thoai-orochi-thuc-ra-cung-thuong-thoi.js'
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
  "Các ác xà nổi tiếng trong thần thoại: Orochi thực ra cũng thường thôi!";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:45 AM";
const description =
  "Trước các ác xà này, Bát Kỳ Đại Xà Orochi gần nhiên không còn đáng sợ nữa";
const link =
  "cac-ac-xa-noi-tieng-trong-than-thoai-orochi-thuc-ra-cung-thuong-thoi";
const tagparam = ["QUÁI VẬT", "ÁC XÀ", "THẦN THOẠI"];
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

export default function page_20210828084530() {
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
                      Bát Kỳ Đại Xà Orochi vốn là <strong>ác xà</strong> nổi
                      tiếng bậc nhất trong thế giới <strong>thần thoại</strong>.
                      Với tám cái đầu mang đầy oán khí, Orochi đã trở thành
                      nguồn cảm hứng cho rất nhiều game, tác phẩm manga-anime.
                      Tuy nhiên, nếu so sánh mức độ nguy hiểm thì có lẽ Orochi
                      không thể theo kịp các ác xà dưới đây.
                    </p>
                    <h5>
                      1. Azhi Dahaka - <strong>Ác xà</strong> thống trị thế giới
                      trong <strong>thần thoại</strong> Ba Tư
                    </h5>
                    <p>
                      Azhi Dahaka là ác thần trong <strong>thần thoại</strong>{" "}
                      Ba Tư cổ. Có rất nhiều câu chuyện khác nhau kể về Azhi
                      Dahaka, một trong số các câu chuyện phổ biến nhất kể câu
                      chuyện như sau:
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/he877xhdjti61-16299687654881330876688.jpg"
                      alt="1, QUÁI VẬT,ÁC XÀ,THẦN THOẠI,"
                      note="Vritra trở thành nguồn cảm hứng cho nhân vật cùng tên trong game FGO"
                    />

                    <p>
                      Jamshid là vị vua đầu tiên cai trị Iran cổ đại, một trong
                      bốn hoàng đế vĩ đại nhất đem lại thời kỳ hoàng kim cho
                      loài người. Ở thời đại của Jamshid, con người không già
                      không chết, không nóng không lạnh… sự phồn thịnh kéo dài
                      cho đến khi Jamshid nói dối. Khvarnah (Vinh quang hoàng
                      triều) của Jamshid sẽ mất đi, chìm vào biển vũ trụ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/b2e60fbejti61-16299688029501760873260.jpg"
                      alt="2, QUÁI VẬT,ÁC XÀ,THẦN THOẠI,"
                      note=""
                    />

                    <p>
                      Một trăm năm sau đó, Azhi Dahaka hay Dahag sẽ nắm quyền
                      cai trị. Triều đại của Azhi Dahaka kéo dài trong một nghìn
                      năm, mở ra thời kỷ hạn hán, đổ nát và hỗn loạn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/26/tumblroyptshl8361vowthfo1400-16299688532661335073154.jpg"
                      alt="3, QUÁI VẬT,ÁC XÀ,THẦN THOẠI,"
                      note=""
                    />

                    <p>
                      Sau đó, người anh hùng Θraētaona hay Thraitauna/Freddon
                      (Con người thứ ba) chấm dứt triều đại của Azhi Dahaka.
                      Chàng không chỉ đánh bại <strong>ác xà</strong>, cứu được
                      hai người phụ nữ đẹp nhất thế gian là Arənavāci và
                      Savaŋhavāci, mà còn được ban tặng Khvarnah (Vinh quang
                      hoàng triều) trọn đời. Θraētaona dùng chùy hạ gục Azhi
                      Dahaka. Tuy nhiên, từ vết thương của xà thần, có vô số sâu
                      bọ, côn trùng nổi lên. Vì thế Θraētaona không thể kết liễu
                      Azhi Dahaka, thần Ormazd ngăn cản chàng làm vậy. Thay vào
                      đó, Azhi Dahaka bị xích và giam cầm trên núi thần
                      Damayand.
                    </p>
                    <p>
                      Vào ngày tận thế, Azhi Dahaka sẽ phá xích và tàn phá thế
                      giới, ăn hết một phần ba số người và gia súc. Cuối cùng,
                      Azhi Dahaka sẽ bị Kirsasp – người anh hùng thời cổ từng
                      giết con rồng hung dữ Azi Sruvana.
                    </p>
                    <h5>
                      2. Typhon - <strong>Ác xà</strong> đánh bại thần Zeus
                      trong <strong>thần thoại</strong> Hy Lạp
                    </h5>

                    <p>
                      Typhon là con trai của Gaia với thần vực thẳm vô tận
                      Tartarus. Typhon được miêu tả là một tên khổng lồ to lớn
                      với hàng trăm cái đầu rắn khác nhau. Hai tay của Typhon to
                      lớn đến mức ôm được cả thế giới, đầu ngóc lên chạm trời,
                      mỗi bước đi làm mặt đất rung chuyển. Sau lưng Typhon có
                      một đôi cánh đen che lấp cả bầu trời, cái đầu rồng thở ra
                      lửa và đầu rắn kêu đủ mọi tiếng của muôn loài.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/typhon-16342-16299688934581396089391.jpg"
                      alt="4, QUÁI VẬT,ÁC XÀ,THẦN THOẠI,"
                      note=""
                    />

                    <p>
                      Có rất nhiều phiên bản kể lại cuộc chiến giữa Typhon với
                      các vị thần Olympus, dù kết cục chung đều là Typhon bị
                      thần Zeus đánh bại. Phiên bản gay cấn nhất trong số này,
                      do Aphollodorus kể như sau:
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/typhon-16299689160702017606985.jpg"
                      alt="5, QUÁI VẬT,ÁC XÀ,THẦN THOẠI,"
                      note=""
                    />

                    <p>
                      Typhon tự tin trèo lên đỉnh Olympus để gây chiến. Trăm
                      cánh tay của hắn ném đá các vị thần tới tấp, miệng thì rít
                      lên, phun lửa nóng thiêu đốt khắp nơi. Các vị thần buộc
                      phải bỏ chạy đến Ai Cập trong lốt các con vật, chỉ có Zeus
                      ở lại đấu tay đôi với Typhon. Thần tấn công{" "}
                      <strong>quái vật</strong> bằng những tia sét, xong khi
                      giáp lá cà ở núi Kasios, Syria, Typhon lại giành được ưu
                      thế. Hắn dùng liềm cắt đứt gân tay và gân chân của Zeus.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau khi biến Zeus thành người tàn tật, Typhon đưa Zeus đến
                      hang động Corycian ở Cilicia, giao cho xà nữ Delphyne canh
                      giữ. Typhon giấu những sợi gân bị cắt trong một tấm da
                      gấu. Tuy nhiên, thần Hermes và Aegipan (có thể là một tên
                      gọi khác của Pan) lại lấy trộm gân để trả lại cho Zeus.
                      Được nối gân cũng như bình phục trở lại, Zeus tức tốc đuổi
                      theo Typhone đến núi Nysa, nơi các nữ thần Moirai đã lừa
                      Typhon ăn "quả phù du" khiến cho hắn suy yếu. Typhon bỏ
                      chạy về Thrace, hắn bê quả núi nên tấn công Zeus nhưng lại
                      trúng những tia sét vào lưng. Ngọn núi nơi Typhon đứng trở
                      nên đẫm máu, nó được gọi là núi Haemus. Cuối cùng, Typhon
                      bị Zeus dùng núi Etna chôn vùi ở Sicily.
                    </p>
                    <h5>
                      3. Vritra - <strong>Ác xà</strong> đánh bại các vị thần
                      trong <strong>thần thoại</strong> Ấn Độ
                    </h5>
                    <p>
                      Vritra là một asura. Tuy nhiên, Vritra lại thường được
                      miêu tả có hình dáng rồng/rắn. Rig Veda kể rằng Vritra đã
                      chặn hết nước ở sông ngòi lại, cho đến khi Indra được sinh
                      ra. Thần Indra vừa chào đời đã đến nhà thần Tvashtri để
                      uống Soma, lấy thêm sức mạnh cho cuộc chiến. Thần Tvashtri
                      đã tạo ra vũ khí tầm sét Vajrayudha cho Indra.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/26/-16299689518541929011501.jpg"
                      alt="6, QUÁI VẬT,ÁC XÀ,THẦN THOẠI,"
                      note=""
                    />

                    <p>
                      Ban đầu, Indra phá nát chín mươi chín pháo đài của asura.
                      Sau đó, khi giao chiến với nhau, Vritra đánh vỡ hai hàm
                      của Indra trong cuộc chiến. Tuy nhiên, thần Indra đã ném
                      được Vritra xuống dưới, đè lên các mảnh vỡ của pháo đài.
                      Nhờ chiến công này mà Indra được gọi Vrtrahan (người diệt
                      Vritra).
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
