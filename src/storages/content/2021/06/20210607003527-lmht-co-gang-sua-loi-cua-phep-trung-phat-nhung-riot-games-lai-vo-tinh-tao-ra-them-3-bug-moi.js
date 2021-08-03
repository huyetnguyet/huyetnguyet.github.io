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
"timestamp": 07/06/2021 12:35 AM",
"title": LMHT: Cố gắng sửa lỗi của phép Trừng Phạt nhưng Riot Games lại vô tình tạo ra thêm 3 bug mới",
"description": Cộng đồng LMHT cũng phải lắc đầu ngán ngẩm với pha 'chữa lợn lành thành lợn què' này của Riot Games.",
"src": ",
"alt": Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Trung Phat, Loi Lmht, Tin Lmht, Tin Lol, Viego, ",
"category": games",
"date": 07/06/2021",
"time": 12:35 AM",
"link": "/lmht-co-gang-sua-loi-cua-phep-trung-phat-nhung-riot-games-lai-vo-tinh-tao-ra-them-3-bug-moi",
"zcomponent": page_20210607003527",
"filepath": ./20210607003527-lmht-co-gang-sua-loi-cua-phep-trung-phat-nhung-riot-games-lai-vo-tinh-tao-ra-them-3-bug-moi.js"
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
  "LMHT: Cố gắng sửa lỗi của phép Trừng Phạt nhưng Riot Games lại vô tình tạo ra thêm 3 bug mới";
const author = "A Đồi";
const source = "Trí Thức Trẻ";
const timestamp = "07/06/2021 12:35 AM";
const description =
  "Cộng đồng LMHT cũng phải lắc đầu ngán ngẩm với pha 'chữa lợn lành thành lợn què' này của Riot Games.";
const link =
  "lmht-co-gang-sua-loi-cua-phep-trung-phat-nhung-riot-games-lai-vo-tinh-tao-ra-them-3-bug-moi";
const tagparam = [
  "lien-minh-huyen-thoai",
  "lmht",
  "riot-games",
  "riot",
  "game",
  "tin-game",
  "trung-phat",
  "loi-lmht",
  "tin-lmht",
  "tin-lol",
  "viego",
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

export default function page_20210607003527() {
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
                      Nếu như các bạn còn nhớ thì tại bản 11.10, ngọc Sách Phép
                      và phép bổ trợ Trừng Phạt từng tồn tại mỗi lỗi khá nặng.
                      Về cơ bản thì khi bạn đổi sang phép Trừng Phạt với điểm
                      ngọc Sách Phép ở lần đầu tiên thì nó sẽ luôn luôn gây ra
                      900 sát thương chuẩn. Trong khi trên lý thuyết thì bạn chỉ
                      có thể sở hữu lượng sát thương chuẩn đó khi đổi phép bổ
                      trợ ở lần thứ hai. Tại bản 11.11 thì Riot đã cố gắng sửa
                      lỗi này nhưng cộng đồng lại phát hiện ra rằng họ lại tạo
                      ra 3 lỗi mới từ nỗ lực đó.
                    </p>
                    <p>
                      Về cơ bản thì Riot Games chỉ sửa được lỗi "hack sát thương
                      Trừng Phat" khi người chơi khởi đầu với phép bổ trợ này mà
                      thôi. Tuy nhiên, không biết vì lý do gì mà Riot Games đã
                      khóa vĩnh viễn mốc sát thương này, dù bạn có đổi phép bổ
                      trợ bao nhiêu lần thì Trừng Phạt vẫn chỉ gây ra 450 sát
                      thương chuẩn. Đây là điều trái ngược hoàn toàn với mô tả
                      của ngọc Sách Phép. Để có thể mở ra mốc 900 sát thương
                      chuẩn thì bạn bắt buộc phải hoàn thành nhiệm vụ Trừng Phạt
                      đủ 5 lần.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/bug3-1623037044374611520126.png"
                      alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Trung Phat, Loi Lmht, Tin Lmht, Tin Lol, Viego, "
                      note="Nếu bạn khởi đầu với Trừng Phạt nhưng không hoàn thành nhiệm vụ thì dù có đổi phép bổ trợ bao nhiêu lần thì nó vẫn chỉ gây 450 sát thương chuẩn mà thôi"
                    />
                    <p>
                      Như đã nói ở trên, Riot mới chỉ sửa được lỗi đối với người
                      chơi khởi đầu với Trừng Phạt. Nếu bạn không phải là người
                      Đi rừng nhưng lại đổi lấy phép Trừng Phạt ở đầu đầu tiên
                      thì nó vẫn gây ra 900 sát thương chuẩn. Điều này khác hoàn
                      toàn so với dòng mô tả "Trừng Phạt giờ sẽ được tăng sát
                      thương sau khi đổi phép 2 lần" mà Riot đưa ra.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/bug4-1623037044427330223655.png"
                      alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Trung Phat, Loi Lmht, Tin Lmht, Tin Lol, Viego, "
                      note="Nếu bạn không khởi đầu với Trừng Phạt và đổi sang phép bổ trợ này ở lần đầu tiên thì nó sẽ gây ra 900 sát thương chuẩn"
                    />
                    <p>
                      Vậy sẽ ra sao nếu chúng ta đổi sang phép Trừng Phạt ở lần
                      thứ 2 trở đi giống như Riot Games nói? Thật đáng buồn là
                      điều này lại dẫn tới lỗi thứ 3 khi phép Trừng Phạt ở lần
                      đổi này chỉ gây ra 450 sát thương chuẩn. Trong khi đó theo
                      mô tả của Riot thì nó phải ở dạng đã được cường hóa và gây
                      900 sát thương lên quái.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/bug5-16230370444312067401337.png"
                      alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Trung Phat, Loi Lmht, Tin Lmht, Tin Lol, Viego, "
                      note="Nếu bạn làm đúng theo mô tả của Riot thì lại không sở hữu lượng sát thương cường hóa từ phép Trừng Phạt"
                    />
                    <p>
                      Chính vì gặp quá nhiều lỗi như vậy mà cộng đồng LMHT đã tỏ
                      ra vô cùng ngán ngẩm với pha "chữa lợn lành thành lợn què"
                      này của Riot. Có người chán nản tới nỗi chẳng hề bất ngờ
                      với những lỗi game nghiêm trọng mà LMHT gặp phải. Tới
                      "Thánh bug" Vandiril cũng gặp rắc rối trong việc giải
                      thích bug kể trên cho game thủ, dù bản thân anh đã quá
                      quen với những lỗi của LMHT rồi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/bug-16230365410061861289189.png"
                      alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Trung Phat, Loi Lmht, Tin Lmht, Tin Lol, Viego, "
                      note=""
                    />
                    <p>
                      Vandiril: "Cảm ơn anh bạn Polypuff đã giúp tôi hoàn thành
                      video này. Mọi thứ thực sự trở nên tệ hơn ở phiên bản hiện
                      tại đối với phép Trừng Phạt. Nếu bạn không hiểu những gì
                      tôi nói trong video thì cứ nghĩ đơn giản là mọi thứ đều
                      sai hết cả rồi. Bản 11.10 đã tệ rồi những 11.11 còn vô lý
                      hơn nữa"
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/bug1-162303654103479938279.png"
                      alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Trung Phat, Loi Lmht, Tin Lmht, Tin Lol, Viego, "
                      note=""
                    />
                    <p>
                      Tôi đoán là Riot cũng cảm thấy vô cùng hoang mang khi sửa
                      một trong những lỗi kể trên.
                    </p>
                    <p>
                      Tới giai đoạn này thì tôi không còn quá bất ngờ với những
                      bug của LMHT nữa. Chẳng phải riêng sự xuất hiện của Viego
                      đã là một đống lỗi rồi sao.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/bug2-16230365410981517474823.png"
                      alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Trung Phat, Loi Lmht, Tin Lmht, Tin Lol, Viego, "
                      note=""
                    />
                    <p>
                      Bản sau thì đổi sang phép Trừng Phạt sẽ giúp bạn triệu hồi
                      Mordekaiser bản cũ, ngay lập tức hạ gục tướng gần đó và
                      biến thành một con ma. Viego có thể dùng chiêu cuối vào
                      con ma đó để giành chiến thắng ngay lập tức.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/1/21/photo-1-16101246037061748195876-1611197465456703819752.jpg"
                      alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Trung Phat, Loi Lmht, Tin Lmht, Tin Lol, Viego, "
                      note=""
                    />
                    <p>
                      Tôi nghĩ thế này, Viego thực chất chưa bao giờ được ra
                      mắt. Tất cả những đống code tệ hại của Riot đã tự mình tạo
                      ra rồi giới thiệu Viego. Giờ đây hắn ta đã tác động lên
                      các phép bổ trợ rồi đó.
                    </p>
                    <p>
                      Riot Games sau pha chỉnh sửa "đi vào lòng đất" kể trên cần
                      phải rút ra được một bài học sâu sắc và có thể giải quyết
                      hết những lỗi mà LMHT đang gặp phải. Nếu không thì chẳng
                      mấy chốc tựa game này sẽ trở thành "Liên Minh Toàn Lỗi"
                      thêm một lần nữa giống phiên bản 9.14 trong quá khứ.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
