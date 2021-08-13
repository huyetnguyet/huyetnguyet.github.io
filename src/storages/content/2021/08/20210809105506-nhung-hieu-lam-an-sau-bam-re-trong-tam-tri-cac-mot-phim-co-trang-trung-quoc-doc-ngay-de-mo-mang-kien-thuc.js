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
"timestamp": '09/08/2021 10:55 AM',
"title": '3 hiểu lầm "ăn sâu bám rễ" trong tâm trí hội mê phim cổ trang Trung Quốc, đọc ngay để mở mang kiến thức',
"description": 'Có rất nhiều kiến thức về văn hoá, lịch sử được cài cắm trong những bộ phim cổ trang Trung Quốc. Tuy nhiên, có những chi tiết về văn hoá xưa trong phim chưa sát với thực tế và khiến cho khán giả xem phim hiểu lầm về sự thật lịch sử.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/21-1627962547508685262938.jpeg',
"alt": 'Trung Quốc,thời nhà thanh,triều đại nhà Thanh,Vua Càn Long,công chúa,Hoàn Châu cách cách,Lịch sử Trung Quốc,phim cổ trang Hoa Ngữ,phim cổ trang trung quốc,sự thật,sự thật thú vị,thâm cung bí sử,thâm cung bí sử Trung Quốc,có thể bạn chưa biết,phim cổ trang,',
"category": 'news',
"date": '09/08/2021',
"time": '10:55 AM',
"link": '/nhung-hieu-lam-an-sau-bam-re-trong-tam-tri-cac-mot-phim-co-trang-trung-quoc-doc-ngay-de-mo-mang-kien-thuc',
"zcomponent": 'page_20210809105506',
"filepath": './20210809105506-nhung-hieu-lam-an-sau-bam-re-trong-tam-tri-cac-mot-phim-co-trang-trung-quoc-doc-ngay-de-mo-mang-kien-thuc.js'
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
  '3 hiểu lầm "ăn sâu bám rễ" trong tâm trí hội mê phim cổ trang Trung Quốc, đọc ngay để mở mang kiến thức';
const author = "NGUYÊN DŨNG TT,";
const source = "Trí Thức Trẻ";
const timestamp = "09/08/2021 10:55 AM";
const description =
  "Có rất nhiều kiến thức về văn hoá, lịch sử được cài cắm trong những bộ phim cổ trang Trung Quốc. Tuy nhiên, có những chi tiết về văn hoá xưa trong phim chưa sát với thực tế và khiến cho khán giả xem phim hiểu lầm về sự thật lịch sử.";
const link =
  "nhung-hieu-lam-an-sau-bam-re-trong-tam-tri-cac-mot-phim-co-trang-trung-quoc-doc-ngay-de-mo-mang-kien-thuc";
const tagparam = [
  "Trung Quốc",
  "thời nhà thanh",
  "triều đại nhà Thanh",
  "Vua Càn Long",
  "công chúa",
  "Hoàn Châu cách cách",
  "Lịch sử Trung Quốc",
  "phim cổ trang Hoa Ngữ",
  "phim cổ trang trung quốc",
  "sự thật",
  "sự thật thú vị",
  "thâm cung bí sử",
  "thâm cung bí sử Trung Quốc",
  "có thể bạn chưa biết",
  "phim cổ trang",
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

export default function page_20210809105506() {
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
                      Dòng <strong>phim cổ trang</strong>{" "}
                      <strong>Trung Quốc</strong> luôn nằm trong top đầu thể
                      loại hấp dẫn khán giả, không chỉ bởi trang phục đầu tư,
                      cảnh quay mãn nhãn mà còn bởi các chi tiết lịch sử, văn
                      hóa cũng được lồng ghép khéo léo trong đó. Tuy nhiên, có
                      khá nhiều những nội dung chưa chính xác đã ăn sâu vào tiềm
                      thức các mọt phim.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/15-16279594866481045408461.jpg"
                      alt="1, Trung Quốc,thời nhà thanh,triều đại nhà Thanh,Vua Càn Long,công chúa,Hoàn Châu cách cách,Lịch sử Trung Quốc,phim cổ trang Hoa Ngữ,phim cổ trang trung quốc,sự thật,sự thật thú vị,thâm cung bí sử,thâm cung bí sử Trung Quốc,có thể bạn chưa biết,phim cổ trang,"
                      note="Thái giám đang truyền Thánh chỉ (Phân cảnh cắt ra từ 1 bộ phim cổ trang Trung Quốc)"
                    />
                    <p>
                      Truyền Thánh chỉ (lệnh Vua ban) là phân cảnh quan trọng
                      chắc chắn sẽ xuất hiện trong hầu hết các bộ{" "}
                      <strong>phim cổ trang</strong> cung đấu. Dù lấy bối cảnh ở
                      triều đại nào, thì ít nhiều cũng có phân đoạn thái giám
                      bên cạnh Hoàng đế 2 tay cầm cuộn Thánh chỉ màu vàng rực
                      rỡ, dõng dạc tuyên bố: "Phụng thiên thừa vận Hoàng đế
                      chiếu viết".
                    </p>
                    <p>
                      Nhiều người luôn cho rằng câu nói này là "Phụng thiên thừa
                      vận, Hoàng đế chiếu viết", nhưng trên thực tế cách ngắt
                      nghỉ chính xác phải là "Phụng thiên thừa vận Hoàng đế,
                      chiếu viết". Có nghĩa là: Hoàng đế được phái xuống từ trên
                      trời cao, hiện thân cho thân phận cao quý và ý Ngài cũng
                      chính là ý trời.
                    </p>
                    <p>
                      Ở đây, "Phụng thiên" là để chỉ sự nhận chỉ thị từ trời
                      cao, còn "thừa vận" nhằm chỉ sự vận hành phù hợp với Ngũ
                      hành (Kim, Mộc, Thủy, Hỏa, Thổ). Vì vậy, việc nói thành
                      câu "Phụng thiên thừa vận Hoàng đế" có nghĩa là quyền lực
                      của Hoàng đế theo mệnh trời và do trời ban tặng, đồng thời
                      thể hiện tư tưởng truyền thống "quyền Quân vương do trời
                      ban" trong thời kỳ quân chủ phong kiến xưa ở{" "}
                      <strong>Trung Quốc</strong>.
                    </p>
                    <p>
                      Chiếu chỉ của triều đình không phải toàn bộ đều là màu
                      vàng tươi chúng ta hay thấy trong phim mà còn được làm
                      bằng các màu đỏ, xanh, vàng, trắng và lục lam. Người ta
                      thường gọi nó là "ngũ sắc", nhưng không nhất thiết phải đủ
                      tất cả các màu. Tuy nhiên trong Thánh chỉ bắt buộc phải có
                      1 đoạn bằng lụa satin màu vàng, nhằm chứng tỏ bậc Quân
                      vương có quyền nắm giữ thiên hạ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/13-1627957548891741149950.jpg"
                      alt="2, Trung Quốc,thời nhà thanh,triều đại nhà Thanh,Vua Càn Long,công chúa,Hoàn Châu cách cách,Lịch sử Trung Quốc,phim cổ trang Hoa Ngữ,phim cổ trang trung quốc,sự thật,sự thật thú vị,thâm cung bí sử,thâm cung bí sử Trung Quốc,có thể bạn chưa biết,phim cổ trang,"
                      note="Thánh chỉ không chỉ có 1 màu vàng"
                    />
                    <p>
                      Ngoài ra, trong các bộ <strong>phim cổ trang</strong> có
                      nhiều cảnh thái giám đọc chiếu chỉ của Hoàng đế. Nhưng
                      trên thực tế, hoạn quan chỉ nắm quyền và có vinh dự đọc
                      chỉ dụ của Vua ở 1 vài triều đại.
                    </p>
                    <p>
                      Trong phim, sứ thần triều đình là những người chịu trách
                      nhiệm giao chiếu chỉ hoặc giải quyết các công việc quan
                      trọng cho Hoàng đế. Tuy nhiên, họ chỉ là 1 vị trí tạm thời
                      trong triều đại nhà Minh và nhà Thanh, không có chức sắc
                      cụ thể và quyền truyền chỉ dụ chính thức từ triều đình.
                    </p>
                    <p>
                      Vào thời nhà Minh, người truyền thánh chỉ được gọi là
                      "Hành nhân ty" được ban bố thành chức quan cố định chịu
                      trách nhiệm truyền chỉ. Người ra sắc lệnh trên là Minh
                      Thái Tổ (còn gọi là Hồng Vũ Đế, hoàng đế khai quốc của
                      Hoàng triều nhà Minh trong lịch sử{" "}
                      <strong>Trung Quốc</strong>, cai trị từ năm 1368 - 1398).
                    </p>
                    <p>
                      "Hành nhân ty" đã tồn tại hơn 370 năm trong lịch sử{" "}
                      <strong>Trung Quốc</strong>. Từ thời Minh (vua Minh Thái
                      Tổ cho đến thời Thanh (<strong>vua Càn Long</strong>). Họ
                      đóng vai trò là người "chạy việc vặt" cho hoàng đế để ban
                      hành các chiếu chỉ của Ngài ở nhiều nơi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/18-1627961876857502333054.jpg"
                      alt="3, Trung Quốc,thời nhà thanh,triều đại nhà Thanh,Vua Càn Long,công chúa,Hoàn Châu cách cách,Lịch sử Trung Quốc,phim cổ trang Hoa Ngữ,phim cổ trang trung quốc,sự thật,sự thật thú vị,thâm cung bí sử,thâm cung bí sử Trung Quốc,có thể bạn chưa biết,phim cổ trang,"
                      note="Cách cách là 1 cách gọi đặc biệt trong thời nhà Thanh, có nghĩa là tiểu thư hoặc cô nương trong tiếng Mãn Châu"
                    />
                    <p>
                      Danh hiệu Quận chúa ra đời vào thời Đông Hán, và con gái
                      của Hoàng thân (thân thích của Vua) được gọi là Quận chúa
                      vào thời nhà Đường.
                    </p>
                    <p>
                      Vào thời nhà Tống, ngoài con gái của các Hoàng thân được
                      phong là Quận chúa, cũng có trường hợp con gái của quân
                      thần có công cũng được phong là Quận chúa. Sau triều đại
                      nhà Minh và nhà Thanh, Quận chúa chủ yếu dùng để gọi con
                      gái của Hoàng thân quốc thích.
                    </p>

                    <p>
                      Trong <strong>triều đại nhà Thanh</strong>, nhiều tước vị
                      Hoàng gia đã thay đổi. Vào đầu triều đại nhà Thanh, con
                      gái Vua đều được gọi là Cách cách cho đến khi Hoàng đế
                      Hoàng Thái Cực (vị Đại hãn thứ hai của nhà Hậu Kim, và là
                      Hoàng đế sáng lập ra triều đại nhà Thanh trong lịch sử{" "}
                      <strong>Trung Quốc</strong>. Ông cai trị từ năm 1626 -
                      1643) lên nắm quyền. Sau đó cách xưng hô Cách cách được
                      chuyển sang <strong>Công chúa</strong>, và chuyển con gái
                      của những quần thần, quý tộc sang gọi Cách cách. Còn con
                      gái của Hoàng thân được gọi là Quận chúa.
                    </p>
                    <p>
                      Cách xưng hô <strong>Công chúa</strong> trong{" "}
                      <strong>thời nhà Thanh</strong> cũng khác. Con gái do
                      Hoàng hậu sinh được gọi là Cố Luân Công chúa, con gái do
                      Phi tần sinh được gọi là Hòa Thạc Công chúa.
                    </p>
                    <p>
                      Nhưng chuyện gì cũng có ngoại lệ, Cố Luân Hòa Hiếu{" "}
                      <strong>Công chúa</strong> còn được{" "}
                      <strong>Vua Càn Long</strong> gọi là "Thập Công chúa" (là
                      thứ nữ thứ 10 và nhỏ nhất, 1 trong những người con gái
                      được Càn Long Đế yêu thương hết mực).
                    </p>
                    <p>
                      Trong lịch sử <strong>Trung Quốc</strong>, duy nhất vào
                      thời nhà Liêu, con gái của Hoàng đế được gọi là Quận chúa.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/21-1627962547508685262938.jpeg"
                      alt="5, Trung Quốc,thời nhà thanh,triều đại nhà Thanh,Vua Càn Long,công chúa,Hoàn Châu cách cách,Lịch sử Trung Quốc,phim cổ trang Hoa Ngữ,phim cổ trang trung quốc,sự thật,sự thật thú vị,thâm cung bí sử,thâm cung bí sử Trung Quốc,có thể bạn chưa biết,phim cổ trang,"
                      note=""
                    />
                    <p>
                      Tạo hình "đầu âm dương" hay còn gọi là tóc đuôi sam thời
                      nhà Thanh
                    </p>
                    <p>
                      Trong các bộ phim cung đình nhà Thanh, đàn ông về cơ bản
                      đều để tóc thắt 1 bím tóc dài (tương truyền là chưa bao
                      giờ cắt). Nhưng trên thực tế, kiểu tóc của{" "}
                      <strong>thời nhà Thanh</strong> có 1 quá trình tiến hóa
                      khá đặc sắc.
                    </p>
                    <p>
                      Vào thời <strong>Vua Càn Long</strong>, về cơ bản phần tóc
                      quanh đầu của đàn ông đều được cạo sạch, chỉ để lại 1 nhúm
                      tóc cỡ 1 đồng xu trên đỉnh đầu. Tức là độ dày của bím tóc
                      có thể lọt qua lỗ nhỏ hình vuông trên đồng tiền (đồng tiền
                      xu thời xưa được khoét 1 lỗ vuông ở giữa để xâu thành
                      chuỗi), mỏng hơn ngón út, người ta gọi là "kiểu tóc đuôi
                      sam".
                    </p>
                    <p>
                      Vào thời Gia Khánh (Thanh Nhân Tông), mọi người bắt đầu để
                      tóc mọc dài, diện tích nuôi tóc cũng tăng dần, tóc dần
                      thay đổi từ một nắm nhỏ đến nửa đầu, mãi đến cuối{" "}
                      <strong>thời nhà Thanh</strong> mới phát triển trở thành
                      kiểu tóc đuôi sam chắc chắn, đẹp đẽ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/20-1627962373946389290769.jpg"
                      alt="4, Trung Quốc,thời nhà thanh,triều đại nhà Thanh,Vua Càn Long,công chúa,Hoàn Châu cách cách,Lịch sử Trung Quốc,phim cổ trang Hoa Ngữ,phim cổ trang trung quốc,sự thật,sự thật thú vị,thâm cung bí sử,thâm cung bí sử Trung Quốc,có thể bạn chưa biết,phim cổ trang,"
                      note="Kiểu tóc đuôi sam dành cho nam giới thời cuối triều đại nhà Thanh"
                    />
                    <p>
                      Tuy nhiên, đàn ông triều Thanh không quá khắt khe trong
                      vấn đề cạo râu, ăn mặc và có thể thay đổi theo từng thời
                      kỳ. Nhưng nếu để không đúng kiểu tóc quy định thì họ có
                      thể mất đầu như chơi.
                    </p>
                    <p>
                      Phim truyền hình cổ trang <strong>Trung Quốc</strong>{" "}
                      thường hoành tráng, được đầu tư nhiều công sức, nhưng có
                      đôi chỗ chưa thật sự sát với lịch sử khiến cho khán giả
                      hiểu nhầm và phần nào gây ảnh hưởng đến nhận thức về{" "}
                      <strong>sự thật</strong> lịch sử. Tuy nhiên, nhiều bộ{" "}
                      <strong>
                        <strong>phim cổ trang</strong> Trung Quốc
                      </strong>{" "}
                      hiện nay đã không chỉ tập trung vào việc gây chú ý hay thứ
                      tự trên bảng xếp hạng, mà còn chú ý nhiều hơn đến việc
                      phục hồi các chi tiết lịch sử 1 cách tinh tế.
                    </p>
                    <p>Nguồn: iFeng</p>
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
