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
"timestamp": '08/08/2021 03:21 PM',
"title": 'Loạt "phốt" nối dài của Jack: Thái độ sao hạng A, nghi vấn nói xấu Sơn Tùng - ViruSs nhưng scandal có con riêng mới gây sốc toàn tập',
"description": 'Đã hot càng thêm hot, Jack bây giờ chính là cái tên thu hút đông đảo sự chú ý từ phía công chúng.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/thumb-bes-16283928436601467777066.jpg',
"alt": 'Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,',
"category": 'stars',
"date": '08/08/2021',
"time": '03:21 PM',
"link": '/loat-phot-noi-dai-cua-jack-thai-do-sao-hang-a-nghi-van-noi-xau-son-tung-viruss-nhung-scandal-co-con-rieng-moi-gay-soc-toan-tap',
"zcomponent": 'page_20210808152154',
"filepath": './20210808152154-loat-phot-noi-dai-cua-jack-thai-do-sao-hang-a-nghi-van-noi-xau-son-tung-viruss-nhung-scandal-co-con-rieng-moi-gay-soc-toan-tap.js'
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
  'Loạt "phốt" nối dài của Jack: Thái độ sao hạng A, nghi vấn nói xấu Sơn Tùng - ViruSs nhưng scandal có con riêng mới gây sốc toàn tập';
const author = "CHÍ CƯỜNG,";
const source = "Trí Thức Trẻ";
const timestamp = "08/08/2021 03:21 PM";
const description =
  "Đã hot càng thêm hot, Jack bây giờ chính là cái tên thu hút đông đảo sự chú ý từ phía công chúng.";
const link =
  "loat-phot-noi-dai-cua-jack-thai-do-sao-hang-a-nghi-van-noi-xau-son-tung-viruss-nhung-scandal-co-con-rieng-moi-gay-soc-toan-tap";
const tagparam = [
  "Jack",
  "profile Jack",
  "scandal jack",
  "jack có con với thiên an",
  "jack bắt cá 2 tay",
  "nam ca sĩ Jack",
  "K-ICM",
  "Scandal Jack bị tố ngoại tình, có con",
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

export default function page_20210808152154() {
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
                      <strong>Jack</strong> là nam ca sĩ được khán giả trẻ biết
                      đến với loạt ca khúc này có thành tích âm nhạc vô cùng
                      khủng như Hồng Nhan, Sóng Gió, Bạc Phận, Đom Đóm,... Sở
                      hữu lực lượng người hâm mộ đông đảo, tất cả các sản phẩm
                      của Jack đều được đón nhận rất nồng nhiệt. Tuy nhiên,
                      lượng fan đông đảo thì lượng người antifan của anh chàng
                      cũng đông không kém.
                    </p>
                    <p>
                      Sự xuất hiện của antifan vô cùng hùng hậu phần lớn đều đến
                      từ loạt scandal lớn nhỏ mà anh đã gặp phải chỉ sau 2 năm
                      debut. Có thể nói, những scandal dù lớn hay nhỏ nhưng cũng
                      gây sự ảnh hưởng rõ rệt đến sự nghiệp âm nhạc vốn chưa đủ
                      vững chãi của <strong>Jack</strong>.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/ngang-16283990842111177526433.png"
                      alt="1, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <h5>
                      Bị tố chảnh chọe, không chịu xuất hiện chung với Quân A.P
                      vì sợ làm hư hình ảnh?
                    </h5>
                    <p>
                      Vào năm 2019, 2 cái tên <strong>Jack</strong> và{" "}
                      <strong>K-ICM</strong> được xem là "tân binh khủng long"
                      khi cho ra đời những ca khúc với loạt thành tích "vô tiền
                      khoáng hậu". Đi đôi với những thành công đầu đời đó chính
                      là sự chảnh chọe do nhiều bên tố cáo.
                    </p>
                    <p>
                      Sự việc xảy ra trong chương trình Giọng Ải Giọng Ai, quản
                      lý của Quân A.P đứng lên tố cáo <strong>Jack</strong> có
                      thái độ không muốn hợp tác với nam ca sĩ trong cùng 1
                      chương trình vì sợ làm hư hình ảnh. Sau khi drama này được
                      nổ ra, Jack đã bị cộng đồng mạng ném đá không thương tiếc
                      và còn "cà khịa" bằng những lời nói khá nặng nề. Vụ việc
                      này cũng được phía NSX chương trình xác nhận.
                    </p>
                    <p>
                      Sau đó, <strong>Jack</strong> cũng có trấn an người hâm mộ
                      bằng những lời quan tâm: "Cố gắng đi, đây chỉ là những
                      bước đầu, không có gì phải lo, phải sợ hết. Nhưng mọi
                      chuyện cứ để người ta như vậy. Người ta sống thế nào với
                      mình, mình cứ từ từ, không có gì phải lo cả".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/nam-ca-si-jack-len-tieng-tran-an-nguoi-ham-mo-giua-tam-bao-f2a8964a-1628397577194654108236.jpg"
                      alt="2, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="Hình ảnh Jack và K-ICM gặp fan giữa tâm bão ồn ào"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/nam-ca-si-jack-len-tieng-tran-an-nguoi-ham-mo-giua-tam-bao-1905fe3a-16283975772691605548410.jpg"
                      alt="3, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <p>
                      Sau khi drama này xuất hiện, Quân A.P và bộ đôi{" "}
                      <strong>Jack</strong>, <strong>K-ICM</strong> không hề lên
                      tiếng đính chính hay phân trần mà chính là 2 người quản lý
                      của 3 ngôi sao này đứng lên tố cáo nhau. Hàng loạt tình
                      tiết được đôi bên tranh cãi qua lại, hé lộ nhiều góc khuất
                      nhưng không đi đến đâu.
                    </p>
                    <p>
                      Sau một năm scandal này nổ ra, Quân A.P cũng đã lên tiếng
                      về câu chuyện này: "Câu chuyện với <strong>Jack</strong>{" "}
                      đã qua rất lâu rồi. Đến thời điểm này mọi người cũng hiểu
                      đó chỉ là một hiểu lầm. Tôi không muốn nhắc lại hay lôi
                      tên Jack vào bài phỏng vấn của mình nữa".
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/thumb-bes-16283928436601467777066.jpg"
                      alt="3, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="Scandal đầu đời của Jack chính là cùng với Quân AP"
                    />
                    <p>
                      Chưa dừng lại ở đó, BTC của một chương trình khác lại đứng
                      lên chia sẻ tố giác bộ đôi <strong>Jack</strong> và{" "}
                      <strong>K-ICM</strong> tỏ thái độ sao hạng A. Khi đó, BTC
                      của chương trình đã đăng tải clip cắt phần trình diễn của
                      bộ đôi lên nền tảng YouTube nhận được rất nhiều sự ủng hộ.
                    </p>
                    <p>
                      Không lâu sau, đoạn clip này bỗng "bốc hơi" và làm dấy lên
                      nghi vấn phía ekip của bộ đôi yêu cầu gỡ xuống. Tuy nhiên,
                      sau đó BTC của chương trình này lên tiếng đính chính đoạn
                      clip biến mất chỉ là do lỗi kỹ thuật.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/8/cpt2108081128-660x371-1628396973156336435232.gif"
                      alt="3, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/8/cpt2108081130-660x371-16283970594871734414468.gif"
                      alt="3, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <p>
                      Đoạn clip cắt <strong>Jack</strong> và{" "}
                      <strong>K-ICM</strong> tham gia chương trình đã "bốc hơi"
                    </p>
                    <h5>
                      Gây tranh cãi vì thái độ không tôn trọng quà của fan
                    </h5>
                    <p>
                      Vào cuối tháng 8/2019, đoạn clip ghi lại hình ảnh của{" "}
                      <strong>Jack</strong> và <strong>K-ICM</strong> trong hậu
                      trường một đêm diễn sau khi nhận được nhiều món quà từ fan
                      nhưng thái độ của cả 2 khác hẳn nhau. Trong đoạn clip, nếu
                      như K-ICM đang vô cùng thích thú trước những món quà người
                      hâm mộ gửi đến, còn Jack thì vô tâm chẳng thèm đoái hoài
                      đến K-ICM lẫn những món quà này.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/nhung-on-ao-cua-jack-tu-truoc-den-nay-bi-to-thai-do-bat-ca-hai-tay-2-002520-16283931620082063749443.png"
                      alt="4, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="Hình ảnh được cắt trong clip được cho là không tôn trọng fan của Jack"
                    />
                    <p>
                      Ngay lập tức, thái độ này của <strong>Jack</strong> đã bị
                      netizen Việt chỉ trích. Hay người hâm mộ của anh chàng
                      cũng bị đem ra trêu chọc, mỉa mai. Tuy nhiên, Jack vẫn giữ
                      im lặng trước mọi lời bình phẩm.
                    </p>
                    <h5>
                      Dính ồn ào bị tố "ăn cháo đá bát" trong giới rapper, thủ
                      lĩnh nhóm cũ G5R bênh vực nhưng vẫn trách không còn thân
                      thiện với nhóm
                    </h5>
                    <p>
                      Không chỉ dính "phốt" chảnh chọe sao hạng A hay thái độ
                      lạnh nhạt khi nhận quà của fan, <strong>Jack</strong> cũng
                      từng dính phải lùm xùm "ăn cháo đá bát". Cụ thể, một trang
                      fanpage của cộng đồng Rap Việt bất ngờ đăng tải bài viết
                      "tố" nam nghệ sĩ trẻ có thái độ không tốt sau khi nổi
                      tiếng
                    </p>
                    <p>
                      Người này bị tố dù đi lên nhờ sự hỗ trợ của cộng đồng page
                      lớn nhỏ nhưng lại không có thái độ "uống nước nhớ nguồn".
                      Dù không chỉ đích danh, nhưng khi đó đa số cư dân mạng đều
                      đoán rằng đây là <strong>Jack</strong>.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/nhung-on-ao-cua-jack-tu-truoc-den-nay-bi-to-thai-do-bat-ca-hai-tay-4-002520-16283932194541363682907.png"
                      alt="4, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <p>
                      Dòng trạng thái "bóc phốt" <strong>Jack</strong> của một
                      trang page về rap Việt
                    </p>
                    <p>
                      Tuy nhiên, phía đại diện của <strong>Jack</strong> đã lên
                      tiếng khẳng định đây là hiểu lầm trong quá trình làm việc,
                      hoàn toàn không phải là do nam ca sĩ "mắc bệnh ngôi sao".
                    </p>
                    <p>
                      Sau đó không lâu, Jombie - thủ lĩnh của nhóm G5R - nhóm
                      nhạc <strong>Jack</strong> từng hoạt động trước đó đã
                      chính thức lên tiếng bênh vực đàn em: "Tôi biết Jack là
                      người em rất dễ thương, chỉ có tật xấu là ít chào hỏi ai.
                      Tôi chưa chắc ồn ào hiện tại là thật hay không. Nhưng nếu
                      là thật thì Jack không đáng làm em của tôi. Tôi chỉ biết
                      người dễ thương, hòa đồng chứ không phải ngông cuồng như
                      mọi người đang bàn tán".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-1628400416469713973072.png"
                      alt="4, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <p>
                      Ngoài ra, Jombie cũng chia sẻ thêm anh cảm thấy rất buồn
                      khi <strong>Jack</strong> nổi tiếng nhưng lại không nhắc
                      đến anh em của G5R: "Jack nói với tôi sẽ đi học thêm chứ
                      không bao giờ bỏ G5R. Không lẽ bây giờ tôi làm bài nhạc,
                      hoặc một bộ phim để nói về chuyện của Jack. Nói về Jack
                      bao nhiêu chuyện cho đủ, nhưng cậu ấy vẫn là anh em và như
                      em út của tôi. Jack cũng từng làm cho nhiều thành viên
                      trong G5R buồn. Thậm chí khi nổi tiếng, nhiều bạn trong
                      G5R nhắn tin Jack còn không thèm trả lời. Chỉ trả lời tôi
                      và Mr.Sâu thôi".
                    </p>
                    <h5>
                      Cuộc chia tay ồn ào với <strong>K-ICM</strong>, dứt áo ra
                      đi khỏi công ty cũ
                    </h5>
                    <p>
                      Vào cuối tháng 12/2019, cả cõi mạng xôn xao trước hàng
                      loạt nghi vấn <strong>Jack</strong> và{" "}
                      <strong>K-ICM</strong> sắp "toang". Nói có sách, mách có
                      chứng, ngay tại thời điểm đó Jack bất ngờ bỏ hết thông tin
                      liên hệ show, đăng dòng trạng thái báo cáo tình trạng sức
                      khỏe của mình không ổn định. Tuy nhiên, tin đồn này lập
                      tức bị bác bỏ sau khi khi bộ đôi này tung ra teaser của ca
                      khúc Hoa Vô Sắc.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/175005batch204738797424867467890557318142755494121958277120n1576786209width999height832-1628398256937271947637.jpg"
                      alt="6, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="Dòng trạng thái tại thời điểm dấy lên nghi vấn của Jack"
                    />
                    <p>
                      Tưởng chừng như "gia đình" sẽ ấm êm, FC của{" "}
                      <strong>Jack</strong> bất ngờ tiết lộ nam ca sĩ đã bỏ về
                      quê và "tài sản" duy nhất là đôi dép lê 14 ngàn sau gần 9
                      tháng lên TP.HCM lập nghiệp. Không dừng lại ở đó, FC của
                      anh chàng cũng tố cáo công ty của <strong>K-ICM</strong>{" "}
                      bốc lột chất xám cũng như sức lao động của nam thần tượng
                      vì phải ra sản phẩm liên tục.
                    </p>
                    <p>
                      Đặc biệt, tin đồn <strong>Jack</strong> "dứt áo ra đi"
                      ngày càng rõ hơn khi <strong>K-ICM</strong> đã xuất hiện
                      tại một sự kiện để biểu diễn mà không có sự có mặt của anh
                      bạn thân và còn bật khóc nức nở khiến khán giả vô cùng
                      hoang mang.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/qtasfhq2gj88jbifkkmf6cgqcnvs5zvtumtxelbpasdc-15774640331451079668020-1628393725977104826618.jpeg"
                      alt="7, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="K-ICM bật khóc nức nở trên sân khấu"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/2132551-162839845039099421471.jpg"
                      alt="7, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="K-ICM bật khóc nức nở trên sân khấu"
                    />
                    <p>
                      Đỉnh điểm của sự việc là khi MV Hoa Vô Sắc được phát hành,
                      ngay khi ca khúc này vừa ra mắt vài phút,{" "}
                      <strong>Jack</strong> đã có chia sẻ làm bùng nổ MXH. Jack
                      cho biết Hoa Vô Sắc hiện vẫn chưa được viết xong, bài hát
                      trong MV vừa được phát hành chỉ là bản demo, chưa hoàn
                      thiện phần lời nhưng đã cho ra mắt.
                    </p>
                    <p>
                      Đồng thời, <strong>Jack</strong> cũng động viên người hâm
                      mộ: "Lo cho Jack lắm đúng không? Yên tâm, không khóc nhé,
                      mọi việc sẽ sáng tỏ khi Jack hồi phục sức khỏe. Đóm ơi!
                      Mình xin lỗi vì im lặng, họ lấy của các bạn bao nhiêu nước
                      mắt, Jack hứa sẽ lấy lại tất cả cho các bạn! Mình không
                      cần gì cho bản thân mình lúc này, trả công bằng cho gia
                      đình và fan tôi!"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo2019-12-23-202608-1577107897787205650398-15774641272931570141359-1628393755364513286556.jpeg"
                      alt="8, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="Thái Vũ trần tình về việc Jack bị bốc lột tại công ty của K-ICM"
                    />
                    <p>
                      Ngay sau dòng trạng thái của <strong>Jack</strong> được
                      đăng tải, bạn bè của anh chàng đã hé lộ góc khuất sau 9
                      tháng cộng tác với <strong>K-ICM</strong> và mẹ nuôi cho
                      khán giả hiểu rõ. Bạn bè của Jack cho biết anh chàng bị
                      quản lý rất nghiêm, ngay cả số điện thoại cũng do mẹ nuôi
                      cung cấp. Ngoài ra mẹ nuôi còn chủ động cắt đứt liên lạc
                      giữa Jack và những nghệ sĩ tiền bối khác. Đặc biệt, Thái
                      Vũ còn tiết lộ Jack từng bị hủy hợp đồng quảng cáo vì
                      người mẹ nuôi yêu cầu phải mời cả K-ICM nên phía nhãn hàng
                      không đồng ý.
                    </p>
                    <p>
                      Ngoài ra, Thái Vũ (FAPtv) còn hé lộ là từ khi vào công ty
                      chung với <strong>K-ICM</strong>, <strong>Jack</strong>{" "}
                      chỉ được bao ăn ở, quần áo, được đi diễn cho fan, một
                      chiếc xe trả góp và hiện vẫn đang gánh nợ từ chiếc xe trả
                      góp này vì đã rời công ty.
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/screen-shot-2019-12-25-at-110116-am-15772464860071381757544-1577467069235255637704-16283938254331125143791.png"
                      alt="9, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="Hình tượng của Jack sau khi đầu quân cho công ty mới"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Ngay sau loạt tố cáo của nhiều bên, trên trang quản lí
                      nghệ sĩ, ICM Entertainment đã xóa tên{" "}
                      <strong>Jack</strong> ra khỏi danh sách đồng thời thông
                      báo MV Hoa Vô Sắc là sản phẩm kết hợp cuối cùng của Jack
                      và <strong>K-ICM</strong> trong 2019.
                    </p>
                    <p>
                      Sau đó, <strong>Jack</strong> cũng chính thức rời khỏi
                      công ty và ở ẩn một thời gian dài. Đầu tháng 3/2020, anh
                      chàng đầu quân về phía công ty quản lý mới và chính thức
                      trở lại với sản phẩm Là Một Thằng Con Trai cùng loạt MV
                      khác như LAYLALAY, Hoa Hải Đường, Đom Đóm...
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/saostar-znwknseuqc5ygqhh-1628395279936871919840.jpg"
                      alt="10, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="Chiếc vòng trong đoạn clip được cư dân mạng cho là đúng với chiếc vòng mà Jack đeo khi chụp hình gần đây."
                    />
                    <h5>
                      Gia nhập công ty mới chưa lâu, Jack tiếp tục vướng vào
                      nghi vấn là nhân vật trong clip nói xấu Sơn Tùng và ViruSs
                    </h5>
                    <p>
                      Vào tháng 5/2020, cộng đồng mạng bất ngờ lan truyền một
                      đoạn clip được cho là <strong>Jack</strong> đang có những
                      chia sẻ trò chuyện nói về Sơn Tùng và hot streamer ViruSs
                      với lời lẽ không được tốt đẹp. Trong đoạn clip, khán giả
                      có thể thấy hình bóng của một nam thanh niên có dáng người
                      khá giống Jack cùng chất giọng miền Tây đặc trưng.
                    </p>
                    <p>
                      Đoạn clip có nội dung người được cho là{" "}
                      <strong>Jack</strong> đã khẳng định Sơn Tùng M-TP không
                      phải là tác giả của ca khúc Nơi Này Có Anh, đồng thời công
                      khai gọi ViruSs - một người khá thân thiết với Jack bằng
                      từ "thằng"!
                    </p>
                    <p>
                      "... 4 bài đến 5 bài. Nó nhờ thằng ViruSs viết 1 bài, đang
                      viết. Bây giờ nó đang đi chiến thuật là hát nhạc người
                      khác. Cái bài Nơi Này Có Anh là của... (clip bị mất tiếng)
                      mà nó để tên là nó viết". - Phần nói chuyện được cho là{" "}
                      <strong>Jack</strong> trong đoạn clip.
                    </p>
                    <p>
                      Đoạn clip nghi vấn được cho là <strong>Jack</strong> cho
                      rằng Sơn Tùng không phải là tác giả của Nơi Này Có Anh,
                      nói xấu ViruSs.
                    </p>
                    <p>
                      Ngay sau khi đoạn clip được viral trên MXH, nhiều người đã
                      soi được một chi tiết trong đoạn clip tay phải đeo một
                      chiếc vòng có vẻ như là làm từ kim loại rất giống với
                      chiếc vòng trong tấm ảnh tự chụp của <strong>Jack</strong>{" "}
                      được đăng tải. Tuy nhiên, đoạn clip được quay trong khung
                      cảnh khá tối nên cũng không thể nào xác minh thực hư.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/j1-1590832588035113562517-1628394110036424521432.jpg"
                      alt="11, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="Chiếc áo pikachu của Jack diện trong quá khứ được cho là giống với người trong clip"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/j3-15908325880381889648514-1628394109974704130721.jpg"
                      alt="12, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/20200601092348-c733-16283985655823264035.jpg"
                      alt="13, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/2020-05-30-183430-15908953187891444799929-16283986838091466711261.jpg"
                      alt="14, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <p>
                      Phải đến đầu tháng 6, sau khi nhận thấy được quá nhiều
                      thông tin sai lệch về <strong>Jack</strong> đang được lan
                      truyền trên mạng xã hội, công ty chủ quan của anh chàng
                      mới chính thức gửi thư cảnh cáo cùng lời khẳng định: "Công
                      ty quản lý ca sỹ Jack và đại diện pháp lý của công ty đã
                      chính thức gửi thư cảnh báo đến các bên có liên quan đến
                      việc đăng tải thông tin bôi nhọ và vu khống ca sĩ Jack
                      trong thời gian vừa qua".
                    </p>
                    <p>
                      Nội dung của bức thư cũng nêu rõ phía công ty{" "}
                      <strong>Jack</strong> đã phát hiện các cá nhân, tổ chức
                      đăng tải những thông tin chưa được xác minh làm ảnh hưởng
                      đến danh dự của nam ca sĩ. Phía công ty chủ quản của Jack
                      nhấn mạnh, nếu không chấm dứt hành động này phía công ty
                      sẽ nhờ pháp luật can thiệp để bảo vệ "gà nhà".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-1628361747090526243698-16283942563421329816537.png"
                      alt="15, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="Tấm ảnh gây xôn xao dư luận của Jack và Thiên An"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/collage-16283596595741744126356-16283944026611198655620.jpg"
                      alt="16, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note="Dòng trạng thái mới nhất của Thiên An"
                    />
                    <h5>
                      Scandal lớn nhất không ai tin nổi: Tố Jack "bắt cá nhiều
                      tay" và có con với nữ diễn viên chính MV Sóng Gió - Thiên
                      An
                    </h5>
                    <p>
                      Tối ngày 7/8/2021, một cô gái trẻ đã đứng lên "tố"{" "}
                      <strong>Jack</strong> có hành động bắt ca 2 tay và đỉnh
                      điểm hơn nữa chính là có con với Thiên An - nữ chính MV
                      Sóng Gió. Sau khi tin đồn này được nổ ra, cả cõi mạng đã
                      có một đêm "hít drama" mệt mỏi và ngóng trông xem thực hư
                      ra sao, khi nào thì Jack sẽ lên tiếng xác minh vụ việc
                      này.
                    </p>
                    <p>
                      Cụ thể, theo cô gái này, cô và <strong>Jack</strong> hẹn
                      hò từ tháng 3/2020. Trong một lần tình cờ, cô có được số
                      điện thoại của Thiên An, bạn gái tin đồn của Jack và tra
                      hỏi về mối quan hệ giữa hai người. Cũng từ đây, cô nàng
                      phát hiện nhiều nghi án về nam ca sĩ, trong đó có chuyện
                      Jack "bắt cá hai tay", có con riêng và người đó chính là
                      Thiên An.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/jack-bi-to-bat-ca-2-tay-co-con-rieng-002848-1628394637176892020582.jpg"
                      alt="20, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <p>
                      Bên cạnh những lời chia sẻ, cô nàng T.V này còn đăng tải
                      thêm loạt bằng chứng để xác thực câu chuyện của mình chia
                      sẻ 100% là sự thật. Ngay sau khi tin đồn nổ ra, cộng đồng
                      mạng ngỡ ngàng, ngơ ngác và chắc chắn là phải bật ngửa!
                      Với một phen "hít drama bổ phổi" như này, netizen cũng
                      khẳng định đây là scandal lớn nhất sự nghiệp của{" "}
                      <strong>Jack</strong>.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/nghi-van-jack-dich-than-bao-tin-co-con-dau-long-tren-mxh-1145180448273756034-1628394861835887689382.jpg"
                      alt="21, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <p>
                      Thời điểm MV Sóng Gió có sự tham gia của Thiên An được ra
                      mắt, <strong>Jack</strong> và cô nàng đã dính ngay nghi án
                      hẹn hò. Tuy nhiên, tin đồn hẹn hò của cả 2 không được fan
                      của bộ đôi Jack và <strong>K-ICM</strong> (lúc chưa tan
                      rã) ủng hộ mà còn đồng loạt tẩy chay.
                    </p>
                    <p>
                      Nguyên nhân của việc tẩy chay này bắt nguồn tấm ảnh bị rò
                      rỉ trên mạng xã hội khi <strong>Jack</strong> và Thiên An
                      có cử chỉ được xem là khá thân mật và tình cảm hơn mức
                      bình thường. Chính điều này khiến cộng đồng fan Jack đặt
                      nghi vấn về việc cả hai đang trong mối quan hệ trên mức
                      tình bạn và liên tục đưa ra lời phản đối khi không muốn có
                      bất kỳ ai xen vào giữa Jack và <strong>K-ICM</strong>.
                    </p>
                    <p>
                      Sau những tranh cãi này, <strong>K-ICM</strong> còn tiết
                      lộ <strong>Jack</strong> có khoảng thời gian tỏ ra mệt mỏi
                      với những lời đồn đại từ trên trời rơi xuống. Để không cho
                      sự việc đi quá xa, ekip công ty của Jack và K-ICM đã phải
                      lên tiếng xác nhận tấm hình này xuất phát từ hậu trường
                      của một buổi chụp hình quảng cáo. Cũng từ sau việc này, dù
                      đã nguôi đi cơn giận, người hâm mộ cũng kiên quyết không
                      muốn Thiên An xuất hiện trong bất cứ sản phẩm âm nhạc nào
                      của Jack và K-ICM.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-162835230978622232082-16283559372821270994652.jpg"
                      alt="22, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <p>
                      Sóng Gió - <strong>Jack</strong> x K-ICM
                    </p>
                    <p>
                      Mới đây, ngay trong tâm điểm của scandal, Thiên An đã có
                      những chia sẻ cũng như xác nhận thông tin có con với{" "}
                      <strong>Jack</strong> hoàn toàn là sự thật. Đồng thời,
                      Thiên An cũng tiết lộ thêm mình và Jack quen nhau được 2
                      năm nhưng đã "đường ai nấy đi" sau một tháng cô sinh con.
                      Người đẹp cũng khẳng định việc chọn nhầm người và đau đớn
                      vì khiến đứa bé không có được tình thương đủ đầy từ cả ca
                      lẫn mẹ.
                    </p>
                    <p>
                      Bên cạnh đó, Thiên An cũng xác nhận việc{" "}
                      <strong>Jack</strong> ngoại tình với 3-4 cô gái trong lúc
                      đang yêu cô. Dù đã cố gắng giữ một hình ảnh hoàn hảo cho
                      Jack trước công chúng và nghĩ đến con nhỏ nhưng cuối cùng
                      thì Thiên An không thể im lặng được nữa trước những thông
                      tin sai lệch. Qua công chuyện trên, người đẹp mong mọi
                      người hãy thức tỉnh và đừng trở thành nạn nhân tiếp theo
                      trong một câu chuyện dài không có hồi kết.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/anh-chup-man-hinh-2021-08-08-luc-133735-16284046782031131023750-1628405401405134180837-16284074545031135966986.png"
                      alt="23, Jack,profile Jack,scandal jack,jack có con với thiên an,jack bắt cá 2 tay,nam ca sĩ Jack,K-ICM,Scandal Jack bị tố ngoại tình, có con,"
                      note=""
                    />
                    <p>
                      Cho đến thời điểm hiện tại, phía <strong>Jack</strong> vẫn
                      chưa có bất kì động thái nào lên tiếng về scandal lớn này.
                      Mọi thông tin vẫn từ 1 phía Thiên An và những cô nàng được
                      cho là người yêu cũ, sự thật thế nào hãy còn chờ từ phía
                      Jack.
                    </p>
                    <h5>Kết</h5>
                    <p>
                      Chỉ sau 2 năm debut, <strong>Jack</strong> đã phải dính
                      rất nhiều tai tiếng từ lớn đến nhỏ khiến cho cộng đồng
                      mạng đi từ bất ngờ này đến cú sốc khác. Nổi tiếng đi đôi
                      với tai tiếng chắc hẳn là câu nói chính xác dành cho Jack
                      ngay chính lúc này. Dù đã có cho mình một lượng người hâm
                      mộ đông đảo, bất chấp giữ hình tượng cho idol nhưng so với
                      những tin đồn và sự việc đã xảy ra thì fan cứng đến hiện
                      tại cũng khó lòng bảo vệ thần tượng.
                    </p>
                    <p>
                      Từ trước đến nay, <strong>Jack</strong> rất ít khi lên
                      tiếng về vấn đề gì hay scandal của mình. Nhưng với scandal
                      lần này nếu Jack tiếp tục giữ im lặng thì không rõ câu
                      chuyện còn bị đẩy đi xa đến đâu và ảnh hưởng lớn cỡ nào
                      đến sự nghiệp của anh chàng. Hãy cùng chờ xem trong những
                      ngày tới, Jack sẽ có động thái gì về sự việc lần này.
                    </p>
                    <p>Nguồn: Tổng hợp</p>
                  </div>
                  <AdsHorizontal />
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source} - Kenh14</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
