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
"timestamp": '07/08/2021 03:46 PM',
"title": 'Trên tay MSI SPATIUM M480, SSD cao cấp dành cho game thủ đích thực',
"description": 'MSI SPATIUM M480 là mẫu SSD cao cấp với hiệu năng vượt trội.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-162833286592113245303.jpg',
"alt": 'SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,',
"category": 'tech',
"date": '07/08/2021',
"time": '03:46 PM',
"link": '/tren-tay-msi-spatium-m480-ssd-cao-cap-danh-cho-game-thu-dich-thuc',
"zcomponent": 'page_20210807154609',
"filepath": './20210807154609-tren-tay-msi-spatium-m480-ssd-cao-cap-danh-cho-game-thu-dich-thuc.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title =
  "Trên tay MSI SPATIUM M480, SSD cao cấp dành cho game thủ đích thực";
const author = "TVG";
const source = "Pháp luật và bạn đọc";
const timestamp = "07/08/2021 03:46 PM";
const description =
  "MSI SPATIUM M480 là mẫu SSD cao cấp với hiệu năng vượt trội.";
const link =
  "tren-tay-msi-spatium-m480-ssd-cao-cap-danh-cho-game-thu-dich-thuc";
const tagparam = ["SSD", "MSI", "SPATIUM M480", "Ổ CỨNG SSD"];
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

export default function page_20210807154609() {
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
                      <strong>MSI</strong> là nhà sản xuất phần cứng hàng đầu
                      thế giới, hầu hết các thành phần linh kiện trong bộ PC
                      Gaming hiện nay của game thủ như card đồ họa, mainboard,
                      nguồn, vỏ case và cả màn hình đều được MSI sản xuất và
                      phân phối trên thị trường.{" "}
                    </p>
                    <p>
                      Trong thời gian gần đây, <strong>MSI</strong> tiếp tục đi
                      sâu thêm vào mảng phần cứng PC, khi công bố một loạt mẫu ổ
                      cứng <strong>SSD</strong> mới với dòng sản phẩm SPATIUM
                      như M480, M470, và M370. Tất cả đều là các ổ cứng NVMe SSD
                      nhỏ gọn chuẩn M.2 2280 Gen4 & Gen PCIe, dễ dàng lắp đặt và
                      tương thích với các bo mạch chủ máy tính để bàn và laptop.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/danh-gia-ssd-msi-spatium-m480-pcie-4-0-nvme-m-2-1-1628333184391897839547.jpg"
                      alt="1, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note="SPATIUM M480 bản 2TB"
                    />
                    <p>
                      <strong>MSI</strong> tiếp tục khẳng định tên tuổi của mình
                      trong lĩnh vực sản xuất các linh kiện PC chất lượng cao,
                      và SPATIUM là bước đi tiếp theo mở rộng hệ sinh thái của
                      hãng bằng việc đem đến các giải pháp lưu trữ có hiệu năng
                      mạnh mẽ. Chúng tôi đã có cơ hội trên tay và trải nghiệm
                      mẫu <strong>SSD</strong> <strong>SPATIUM M480</strong>,
                      mẫu cao cấp nhất của dòng sản phẩm SPATIUM khi có dung
                      lượng lên tới 2TB và đạt tốc độ 7.000 MB/s.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/4deda7c61200x628-nomsi-16283332622011081971994.jpg"
                      alt="2, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note="SPATIUM M480 bản 1 TB"
                    />
                    <p>
                      <strong>SSD</strong> <strong>SPATIUM M480</strong> là mẫu
                      cao cấp nhất dòng SSD SPATIUM của <strong>MSI</strong>,
                      được trang bị linh kiện tốt nhất và cho hiệu năng cao
                      nhất, hướng đến game thủ chuyên nghiệp và người làm nội
                      dung sáng tạo. Được thiết kế để sử dụng chuẩn giao tiếp
                      PCIe Gen 4 và tiêu chuẩn NVMe 1.4, phiên bản ổ cứng này
                      đem đến tốc độ truyền tải dữ liệu siêu nhanh với tốc độ
                      đọc tuần tự lên đến 7000MB/s và tốc độ ghi tuần tự lên đến
                      6850MB/s.
                    </p>
                    <p>
                      M480 sẽ ra mắt thị trường với ba mức dung lượng – 500GB,
                      1TB, và 2TB cho người dùng thoải mái lựa chọn.{" "}
                      <strong>SSD</strong> <strong>SPATIUM M480</strong> sẽ hỗ
                      trợ tính năng sửa dữ liệu lỗi toàn diện bao gồm LPDC ECC
                      và công nghệ bảo vệ dữ liệu E2E, đem đến tuổi thọ ghi TBW
                      (Terabytes Written) dài và độ bền cao. Sản phẩm có thời
                      gian bảo hành lên đến 5 năm và <strong>MSI</strong> luôn
                      sẵn sàng hỗ trợ khách hàng trên khắp toàn cầu.
                    </p>
                    <p>
                      Do có tốc độ cực nhanh lên tới 7.100 MB/s, cho nên{" "}
                      <strong>SPATIUM M480</strong> tạo ra nhiệt lượng đáng kể
                      khi sử dụng một thời gian dài. Giải quyết vấn đề này thì{" "}
                      <strong>MSI</strong> đã trang bị miếng tản nhiệt trông cực
                      kỳ bóng bẩy, giúp SPATIUM M480 duy trì được hiệu suất mà
                      vẫn có nhiệt độ mát mẻ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-162833286592113245303.jpg"
                      alt="3, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note=""
                    />
                    <p>
                      Để đánh giá được hiệu năng thật sự của{" "}
                      <strong>SPATIUM M480</strong>, chúng tôi đã chạy thử
                      nghiệm các phần mềm benchmark <strong>SSD</strong> phổ
                      biến nhất hiện nay như CrystalDiskMark, PCMark 10 và thử
                      nghiệm load game nặng để xem SPATIUM M480 có thể đáp ứng
                      được các nhu cầu khắt khe của game thủ và người làm nội
                      dung hiện nay hay không.
                    </p>
                    <h5>CrystalDiskMark</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-162833286672063778144.jpg"
                      alt="4, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note=""
                    />
                    <p>
                      Không nằm ngoài dự đoán thì kết quả benchmark của{" "}
                      <strong>SPATIUM M480</strong> cực kỳ cao, xứng đáng là mẫu
                      cao cấp nhất của dòng sản phẩm SPATIUM và là một trong
                      những mẫu <strong>SSD</strong> có tốc độ nhanh nhất hiện
                      nay. Khi kết quả CrystalDiskMark cho thấy tốc độ READ của
                      SPATIUM M480 lên tới hơn 7.100 MB/s trong khi WRITE lên
                      tới 6.800 MB/s, nằm trong TOP các mẫu SSD có tốc độ READ,
                      WRITE cao nhất hiện nay.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>PCMark 10</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-2-1628332868763155368926.jpg"
                      alt="5, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-3-1628332868225214254953.jpg"
                      alt="6, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note=""
                    />
                    <p>
                      Trong thử nghiệm phần mềm PCMark 10 nổi tiếng, phần mềm
                      này sẽ ghi hơn 204GB dữ liệu và bao gồm một loạt các tác
                      vụ thông thường của người dùng như khởi động Windows 10,
                      truyền file, chạy ứng dụng Adobe và Office cũng như thời
                      gian khởi động cho các tựa game nặng hiện nay như
                      Battlefield V, COD Black Ops 4 và Overwatch. Một lần nữa,{" "}
                      <strong>SPATIUM M480</strong> lại thể hiện hiệu suất cao
                      đáng kinh ngạc khi đạt 2,917 điểm.
                    </p>
                    <h5>Chạy game Final Fantasy XIV</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-4-1628332867743357862069.jpg"
                      alt="7, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-5-16283328672961196132510.jpg"
                      alt="8, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note=""
                    />
                    <p>
                      Cuối cùng là thử nghiệm load game nặng để xem hiệu suất
                      Gaming của <strong>SPATIUM M480</strong> có thể cao đến
                      đâu. Tại thử nghiệm này, chúng tôi đã chọn tựa game Final
                      Fantasy XIV - một trong những tựa game có dung lượng lớn
                      nhất hiện nay lên tới 80GB. Kết quả của SPATIUM M480 thật
                      ấn tượng khi mẫ <strong>SSD</strong> này chỉ mất 7.3 giây
                      để load được tựa game này, nhanh hơn cả mẫu SSD 980 PRO
                      của Samsung.
                    </p>
                    <p>
                      Với mức giá lên tới hơn 12 triệu đồng (cho bản 2TB) và hơn
                      6 triệu đồng (cho bản 1TB), <strong>SPATIUM M480</strong>{" "}
                      hiện nằm ở phân khúc cực kỳ cao cấp. Với số tiền đó, game
                      thủ gần như có thể có được một ổ <strong>SSD</strong> 4
                      TB, nhưng tất nhiên nó sẽ không nhanh bằng. Tuy nhiên,
                      hiệu suất cực nhanh mà SPATIUM M480 đem lại sẽ rất phù hợp
                      với những game thủ chuyên nghiệp, người sáng tạo nội dung
                      cần lưu trữ dung lượng lớn và tốc độc cực nhanh.{" "}
                    </p>
                    <p>
                      Một số hình ảnh về <strong>MSI</strong>{" "}
                      <strong>SSD</strong> SPATIUM M480
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/9a847e10msim48022tb-16283335111441353348826.png"
                      alt="9, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/ccfa1bc3msim48062tb-1628333511180877136538.png"
                      alt="10, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/d62f3f20msim48021tb-16283335111861889542372.png"
                      alt="11, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/danh-gia-ssd-msi-spatium-m480-pcie-4-0-nvme-m-2-13-1628333511193389856566.jpg"
                      alt="12, SSD,MSI,SPATIUM M480,Ổ CỨNG SSD,"
                      note=""
                    />
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
