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
"timestamp": '14/08/2021 11:40 AM',
"title": '"Cửa ải" để thành người mẫu của Victoria's Secret: Số đo 3 vòng "siêu thực" gây tranh cãi, chế độ ăn kiêng như ác mộng!',
"description": 'Để trở thành "thiên thần" đeo trên vai đôi cánh màu nhiệm của Victoria's Secret, các người mẫu sẽ phải thoả mãn được hàng loạt tiêu chí khó như... hô phong hoán vũ.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/20171811gigihadidvictoriasecretshow2017deponline01-16289258160261967223162.jpeg',
"alt": 'victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,',
"category": 'stars',
"date": '14/08/2021',
"time": '11:40 AM',
"link": '/cua-ai-de-thanh-nguoi-mau-cua-victorias-secret-so-do-3-vong-sieu-thuc-gay-tranh-cai-che-do-an-kieng-nhu-ac-mong',
"zcomponent": 'page_20210814114010',
"filepath": './20210814114010-cua-ai-de-thanh-nguoi-mau-cua-victorias-secret-so-do-3-vong-sieu-thuc-gay-tranh-cai-che-do-an-kieng-nhu-ac-mong.js'
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
  '"Cửa ải" để thành người mẫu của Victoria\'s Secret: Số đo 3 vòng "siêu thực" gây tranh cãi, chế độ ăn kiêng như ác mộng!';
const author = "LÝ THẨM,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "14/08/2021 11:40 AM";
const description =
  'Để trở thành "thiên thần" đeo trên vai đôi cánh màu nhiệm của Victoria\'s Secret, các người mẫu sẽ phải thoả mãn được hàng loạt tiêu chí khó như... ';
const link =
  "cua-ai-de-thanh-nguoi-mau-cua-victorias-secret-so-do-3-vong-sieu-thuc-gay-tranh-cai-che-do-an-kieng-nhu-ac-mong";
const tagparam = [
  "victorias secret",
  "người mẫu",
  "siêu mẫu",
  "gigi hadid",
  "bella hadid",
  "thời trang",
  "Showbiz",
  "Biến Cũ Làng Mốt",
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

export default function page_20210814114010() {
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
                      Để trở thành "thiên thần" đeo trên vai đôi cánh màu nhiệm
                      của <strong>Victoria's Secret</strong>, các{" "}
                      <strong>người mẫu</strong> sẽ phải thoả mãn được hàng loạt
                      tiêu chí khó như...
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/14/tumblrmuxc1pzsmw1sretbqo1500-16289248248861104521835.gif"
                      alt="23, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <h5>Vậy tiêu chuẩn ở đây là gì?</h5>
                    <p>
                      Ngày mà thế giới nhận ra{" "}
                      <strong>Victoria's Secret</strong> là thiên đường của
                      những "thiên thần" với số đo hình thể như tranh vẽ, người
                      ta cũng dần hiểu được cái khắc nghiệt mà{" "}
                      <strong>người mẫu</strong> phải kinh qua để bước 1 chân
                      vào đế chế tỷ đô lắm mộng phù hoa này.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/1460698032-1460625294-naomi-campell-2003-1628925816035512623836.jpeg"
                      alt="1, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note="Điều gì ẩn chứa sau những nét đẹp toả tinh quang lộng lẫy ?"
                    />
                    <p>
                      Ngay từ đầu, <strong>Victoria's Secret</strong> đã gây
                      dựng hình tượng <strong>người mẫu</strong> mà họ sẽ đeo
                      đuổi suốt những năm tháng về sau: nóng bỏng, thần thái
                      ngút ngàn và hình thể khiến bất cứ ai cũng phải khao khát.
                      Chẳng vậy mà cựu giám đốc Marketing của Victoria\'s
                      Secret, ông Edward Razik từng gây tranh cãi với câu nói:
                      "Trên thế giới chưa đến 100 cô gái đạt tiêu chuẩn để trở
                      thành người mẫu nội y của hãng".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/20171811gigihadidvictoriasecretshow2017deponline01-16289258160261967223162.jpeg"
                      alt="3, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <p>
                      Thông thường ở thị trường <strong>người mẫu</strong> quốc
                      tế, chiều cao tối thiểu của người mẫu nữ phải chạm tới
                      1m77. Tương tự ở <strong>Victoria's Secret</strong>, chiều
                      cao người mẫu phải từ 1m77 đến 1m83. Số đo tối thiểu phải
                      chuẩn tỷ lệ vàng với vòng 1 và vòng 3 đạt con số 86 cm
                      cùng phần thắt eo chưa đến 60 cm.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/victorias-secret-fashion-show-cara-delevingne-2013-16289258160461153005204.jpeg"
                      alt="4, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <p>
                      Chính tỷ lệ siêu thực này đã khiến{" "}
                      <strong>Victoria's Secret</strong> chịu nhiều chỉ trích vì
                      đi theo một lối mòn gây tranh cãi, họ đều tuyển dụng những
                      cô gái có vóc dáng hoàn hảo, từ chối{" "}
                      <strong>người mẫu</strong> béo và người chuyển giới. Dẫu
                      vậy, vẫn có một số trường hợp người mẫu chưa đạt tiêu
                      chuẩn trên nhưng là <strong>siêu mẫu</strong> kỳ cựu hoặc
                      là người mẫu có sức ảnh hưởng trên MXH sẽ được đặc cách.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/3b121ef267a70ab2044f779cd58ae728xvdd-16289262695881471019490.jpeg"
                      alt="5, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <p>
                      Naomi Campbell, <strong>Bella Hadid</strong>,{" "}
                      <strong>Gigi Hadid</strong>, Cara Delavigne đều là những
                      chân dài có chiều cao chưa tới 1m77 nhưng vẫn toả sáng tại
                      Victoria's Secret
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/dfc3e10628c991eef6e399b6c81e1c52-16289265002021603887061.jpeg"
                      alt="6, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <p>
                      Về độ tuổi, các "thiên thần" ở thời kỳ căng tràn nhựa sống
                      từ 18 - 22 tuổi luôn dễ dàng chen chân vào hàng ngũ{" "}
                      <strong>người mẫu</strong> của thương hiệu. Tất nhiên lứa
                      người mẫu già dặn hơn nhưng sở hữu ngoại hình lôi cuốn,
                      khí chất "iconic" thậm chí được níu giữ và gia hạn hợp
                      đồng hấp dẫn hơn. Ngoài ra mái tóc bồng bềnh, đôi môi mọng
                      ẩm, gò má hài hoà cùng sống mũi "cầu trượt" luôn là điểm
                      cộng cho các cô gái.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/3c9579ca220bdf4f62d705e138e460e5-16289258158991237529351.jpeg"
                      alt="2, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note="Việc ăn low cab một cách tuyệt đối đẩy cơ thể vào một trạng thái được gọi là ketosis - khi đó cơ thể chỉ đốt cháy mỡ cho năng lượng"
                    />
                    <p>
                      Adriana Lima và Gisele Bündchen được{" "}
                      <strong>Victoria's Secret</strong> níu giữ nhờ diện mạo
                      xuất sắc cùng kinh nghiệm, năng lực nghề nghiệp được đảm
                      bảo
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/bruna-15363824150511272768398-162892719052672242960.jpeg"
                      alt="7, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/sanne-15363824150691962702136-16289271905481755501255.jpeg"
                      alt="8, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/winnie-1536381928886194735800-16289271905141729638799.jpeg"
                      alt="9, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/lee-1536382415061224665021-1628927189507181632772.jpeg"
                      alt="10, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <p>
                      Muốn hiện thực hoá giấc mộng, những nàng mẫu tương lai còn
                      phải vượt qua 2 phút giới thiệu bản thân và cho nhãn hàng
                      thấy khả năng ứng biến trong mọi tình huống có thể xảy ra
                      trên sân khấu, khả năng tự tin trước đám đông cũng như
                      chia sẻ về chế độ ăn uống, sinh hoạt, tập luyện mỗi
                      ngày...
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trước mỗi show diễn, <strong>Victoria's Secret</strong>{" "}
                      đều tổ chức casting cho các <strong>người mẫu</strong> nên
                      cứ mỗi dịp có show là 1 cuộc sát phạt khốc liệt lại diễn
                      ra
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/tumblrnfflmtzgym1r4668co1500-16289280651281155488791.gif"
                      alt="11, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <p>
                      Chưa hết, các nàng còn phải đảm đương được khả năng làm
                      việc nhóm ở mức tốt nhất, ở đây không cho phép cô này
                      tranh spotlight cô kia hay đấu đá bằng những chiêu trò nhỏ
                      mọn. Sau đó, 100 người đẹp đáp ứng đủ tiêu chí sẽ bước
                      tiếp vào vòng thử thách trình diễn với nội y màu đen trơn
                      để hội đồng tuyển chọn dễ dàng nhận ra ưu/nhược điểm hình
                      thể từng người.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/sleepyillinformedaplomadofalcon-max-1mb-16289280651541563098569.gif"
                      alt="12, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <p>
                      Vòng thi nghẹt thở nhất là khi các nàng phải catwalk với
                      phong thái tự tin nhất
                    </p>
                    <p>
                      Những người được lựa chọn sau cùng sẽ phải tuân thủ chế độ
                      ăn kiêng, tập luyện được sánh với cơn ác mộng để giúp vòng
                      bụng nhỏ lại hết cỡ. Trong một bài phỏng vấn{" "}
                      <strong>siêu mẫu</strong> Adriana Lima năm 2012, cô cho
                      biết chế độ dinh dưỡng của mình chủ yếu là chất lỏng trong
                      khoảng 9 ngày trước khi show diễn ra để giữ cân nặng không
                      vượt quá. Trên thực tế, đây là một điều không nên làm dù
                      các chuyên gia cho biết chế độ này có thể tạm chấp nhận
                      được!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/14/adrianalima-1550097897-16289353741602083385207.jpeg"
                      alt="13, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/victoriasecretangelfood-1628935605053196105635.jpeg"
                      alt="14, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/img7399-162893560517651308475.jpeg"
                      alt="15, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <p>
                      Trải nghiệm những bữa ăn thế này trên thực tế không dễ
                      chịu chút nào
                    </p>
                    <p>
                      Bên cạnh đó, các nàng mẫu sẽ không được uống nước trước
                      biểu diễn để đảm bảo cơ thể không bị dư thừa nước. Bên
                      cạnh đó phải đảm bảo việc ngủ và nghỉ ngơi đầy đủ, ngủ từ
                      10h tối và thức dậy vào khoảng 6h sáng. Họ phải tập luyện
                      thường xuyên các bài tập tạ, squat, nâng tạ, chống đẩy,
                      gập bụng với cường độ nặng,... nhằm duy trì lượng mỡ và cơ
                      trên cơ thể đạt mức tối ưu. Đây chính là "cửa ải" cuối
                      cùng trước khi lên sàn diễn nên dù mệt mỏi lắm nhưng đã lỡ
                      rồi vẫn phải làm thôi!
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/5c017a005930f80c96653c93-16289356844521040730254.jpeg"
                      alt="16, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/roosworkout-thumb-1549468754-1628935684422928971291.jpeg"
                      alt="17, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/screen-shot-2018-11-02-at-3-16-28-pm-1541186240-16289356843081353740106.png"
                      alt="18, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/14/victoria-secret-angel-workout-using-resistance-bands-16289356843842047758542.jpeg"
                      alt="19, victorias secret,người mẫu,siêu mẫu,gigi hadid,bella hadid,thời trang,Showbiz,Biến Cũ Làng Mốt,"
                      note=""
                    />
                    <p>
                      Dù có ăn kiêng khắt khe tới mức nào thì việc luyện tập
                      cũng là điều không được phép thiếu trong chế độ sinh hoạt
                      của người mẫu
                    </p>
                    <p>
                      Ở thời điểm hiện tại, dẫu nhãn hàng đình đám đã tuyên bố
                      khép lại thời kỳ của những <strong>người mẫu</strong> nóng
                      bỏng nhưng phải còn lâu lắm người ta mới quên được đế chế
                      của những "thiên thần" đã từng phồn thịnh này.
                    </p>
                    <p>Ảnh: Sưu tầm</p>
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
