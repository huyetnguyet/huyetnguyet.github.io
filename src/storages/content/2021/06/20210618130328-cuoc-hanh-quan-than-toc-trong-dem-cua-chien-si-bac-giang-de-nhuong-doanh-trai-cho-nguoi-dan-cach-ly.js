import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '18/06/2021 01:03 PM',
"title": 'Cuộc hành quân "thần tốc" trong đêm của chiến sĩ Bắc Giang để nhường doanh trại cho người dân cách ly',
"description": 'Hàng trăm chiến sĩ của Sư đoàn 325 tại huyện Lục Ngạn (Bắc Giang) đã hành quân vào rừng, dựng hàng chục lán trại dã chiến để nhường doanh trại cho các công nhân ở Bắc Giang cách ly tập trung.',
"src": 'https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/18/dsc5152-16239532159142115958997.jpg',
"alt": '',
"category": 'tech',
"date": '18/06/2021',
"time": '01:03 PM',
"link": '/cuoc-hanh-quan-than-toc-trong-dem-cua-chien-si-bac-giang-de-nhuong-doanh-trai-cho-nguoi-dan-cach-ly',
"zcomponent": 'page_20210618130328',
"filepath": './20210618130328-cuoc-hanh-quan-than-toc-trong-dem-cua-chien-si-bac-giang-de-nhuong-doanh-trai-cho-nguoi-dan-cach-ly.js'
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
  'Cuộc hành quân "thần tốc" trong đêm của chiến sĩ Bắc Giang để nhường doanh trại cho người dân cách ly';
const author = "ĐINH HUY,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "18/06/2021 01:03 PM";
const description =
  "Hàng trăm chiến sĩ của Sư đoàn 325 tại huyện Lục Ngạn (Bắc Giang) đã hành quân vào rừng, dựng hàng chục lán trại dã chiến để nhường doanh trại cho các công nhân ở Bắc Giang cách ly tập trung.";
const link =
  "cuoc-hanh-quan-than-toc-trong-dem-cua-chien-si-bac-giang-de-nhuong-doanh-trai-cho-nguoi-dan-cach-ly";
const tagparam = [];
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

export default function page_20210618130328() {
  return (
    <>
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
                    Dịch Covid-19 như cơn cuồng phong tác động đến tất cả các
                    mặt của đời sống xã hội, gây ra hệ lụy nặng nề, khó đoán
                    định, đẩy nhân loại vào cuộc khủng hoảng trầm trọng, mang
                    tính toàn cầu.
                  </p>
                  <p>
                    Tại Việt Nam, hàng chục nghìn công nhân, người lao động phải
                    nghỉ việc đột xuất vì công ty, các khu công nghiệp đóng cửa.
                    Cảnh người lớn, trẻ em nháo nhác ôm ba lô, vội vã lên đường
                    cách ly làm nghẹn lòng người.
                  </p>
                  <p></p>
                  <p>
                    Cuộc hành quân "thần tốc" trong đêm của chiến sĩ Bắc Giang
                    để nhường doanh trại cho người dân cách ly
                  </p>
                  <p>
                    Tỉnh Bắc Giang thời gian qua được biết đến là tâm dịch của
                    cả nước khi xuất hiện hàng nghìn ca mắc Covid-19, hàng vạn
                    người dân, công nhân ở các khu công nghiệp phải đi cách ly.
                    Mỗi ngày trôi qua, đội ngũ tuyến đầu chống dịch tại đây phải
                    dốc toàn bộ sức lực, cố gắng để đối phó với tình hình dịch
                    bệnh diễn biến phức tạp.
                  </p>
                  <p>
                    Những ngày cuối tháng 5, lãnh đạo Sư đoàn 325 nhận một nhiệm
                    vụ đặc biệt khi chuẩn bị tiếp nhận hơn 1.000 công nhân trong
                    diện F1. Đứng trước nhiệm vụ trên, chỉ huy Sư đoàn giao
                    nhiệm vụ cho Trung đoàn 18 và Trung đoàn 95 cơ động đóng
                    quân dã ngoại, nhường doanh trại cho nhân dân.
                  </p>
                  <p>
                    Chỉ trong vòng 24 giờ, 2 đơn vị đã làm xong công tác chuẩn
                    bị, những người lính bước vào "thời chiến mới", thực hiện
                    nhiệm vụ kép vừa tham gia huấn luyện, vừa phòng chống dịch
                    Covid-19.
                  </p>
                  <p>
                    Thượng tá Lại Huy Liệu, Chính uỷ Trung đoàn 95, Sư đoàn 325,
                    Quân đoàn 2 cho biết, phải dùng 2 từ "thần tốc" là truyền
                    thống của Quân đoàn 2 để nói về nhiệm vụ lần này.
                  </p>
                  <p>
                    "Chúng tôi nhận nhiệm vụ của cấp trên trong thời gian ngắn
                    nhất phải hoàn thành nên ngay trong đêm, chúng tôi đã cơ
                    động toàn bộ lực lượng của đơn vị ra khu dã ngoại để toàn bộ
                    đơn vị đó ra làm công tác chuẩn bị, sẵn sàng nhận nhiệm vụ",
                    Thượng tá Liệu nói.
                  </p>
                  <p>
                    Huyện Lục Ngạn, tỉnh Bắc Giang là nơi đóng quân của Trung
                    đoàn 18, những ngày hè tháng 6, trời nắng gắt, nắng như đổ
                    lửa nhưng hàng trăm cán bộ, chiến sĩ vẫn đang gấp rút hoàn
                    thành nhiệm vụ huấn luyện, sẵn sàng chiến đấu.
                  </p>
                  <p>
                    16 lán trại được các chiến sĩ dựng lên để sinh hoạt, nấu
                    ăn...
                  </p>
                  <p>
                    Các bữa ăn của cán bộ, chiến sĩ vẫn được chuẩn bị chu đáo,
                    bảo đảm đủ dinh dưỡng và hợp vệ sinh
                  </p>
                  <p>
                    Dù sống ở trong rừng đã hơn nửa tháng nay nhưng ai cũng phấn
                    khởi, vui vẻ vì đã hy sinh bản thân, góp phần cho cho cuộc
                    chiến chống "giặc" Covid-19.
                  </p>
                  <p>
                    Các anh vẫn hỏi thăm nhau và hay nói tếu táo vào mỗi giờ
                    nghỉ: "Nhà ở cách doanh trại có vài km nhưng gần 2 tháng nay
                    vẫn chưa được về".
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Chia sẻ với chúng tôi, Đại uý Nguyễn Văn Đại (Trung đoàn 18,
                    Sư đoàn 325) cho biết, sau khi nhận lệnh của chỉ huy Trung
                    đoàn và chỉ huy cấp trên về việc nhường doanh trại cho người
                    dân cách ly, hàng trăm cán bộ, chiến sĩ đã chuẩn bị vật
                    chất, đặc biệt là vật chất huấn luyện dã ngoại và thực hiện
                    nhiệm vụ dã ngoại.
                  </p>
                  <p>
                    "Về quân tư trang cá nhân của bộ đội thì chúng tôi mang theo
                    hết. Ngoài ra, chúng tôi cũng mang theo vũ khí để thực hiện
                    nhiệm vụ huấn luyện tại khu vực dã ngoại", Đại uý Đại chia
                    sẻ.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/18/dsc5229-1623953216013944572383.jpg"
                    alt="6, "
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/18/dsc5242-1623953322058393440003.jpg"
                    alt="7, "
                  />
                  <p>
                    Dù biết trước những khó khăn, vất vả khi ở trong rừng khác
                    xa với ở nhà nhưng anh Đại và những người đồng đội rất tự
                    hào khi góp một phần nhỏ cho công cuộc chống dịch Covid-19.
                  </p>
                  <p>
                    "Bên cạnh những nhiệm vụ, hằng ngày chúng tôi vẫn thực hiện
                    theo đúng điều lệnh trong quân đội. Ngoài ra, vào kỳ nghỉ
                    chúng tôi tổ chức các hoạt động như xem phim, đọc báo, văn
                    nghệ… để có thêm thông tin cần thiết hằng ngày", anh Đại
                    nói.
                  </p>
                  <p>
                    Binh nhất Phan Chiến Thắng (Trung đoàn 18, Sư đoàn 325) cho
                    biết, việc phải nhường lại doanh trại cho người dân trong
                    khu cách ly để vào rừng ở là một vinh dự, tự hào khi góp một
                    sức nhỏ giúp đỡ cả nước chống dịch.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/18/dsc5319-16239532165341926965531.jpg"
                    alt="8, "
                  />
                  <p>
                    Việc học tập sẽ được cấp trên kiểm tra 1 năm 2 đợt (6 tháng
                    đầu năm và 6 tháng cuối năm)
                  </p>
                  <p>
                    "Khi vào rừng sinh hoạt dã ngoại, bước đầu chúng tôi cũng
                    gặp rất nhiều khó khăn do thời tiết nóng bức. Tuy nhiên, với
                    sự quyết tâm cố gắng của tất cả chiến sĩ và cán bộ khi bắt
                    đầu vào rừng, chúng tôi đã huấn luyện được ngay và hiện đã
                    đi vào ổn định", binh nhất Thắng nói.
                  </p>
                  <p>
                    Nhớ lại những lúc mưa gió thất thường, đặc biệt vào ban đêm,
                    Đại uý Tạ Văn Điệp (Trung đoàn 18, Sư đoàn 325) cho hay:
                    "Chúng tôi phải cố gắng lấy thêm lớp tăng chống nắng, phủ
                    bên trong bên ngoài lán. Bên cạnh đó, lấy những chiếc dây
                    ghim vào những bao đất và cọc để níu lán trại lại, bảo đảm
                    dù có mưa to dài ngày nhưng anh em vẫn có chỗ ăn, ngủ".
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5148-1623953215895703285895.jpg"
                    alt="9, "
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5218-1623953215980497773970.jpg"
                    alt="10, "
                  />
                  <p>
                    Đại uý Điệp cũng như những cán bộ, chiến sĩ của Quân đoàn
                    đều xác định đây là nhiệm vụ chiến đấu của quân đội trong
                    thời bình; chấp nhận gian khổ, hy sinh, cùng toàn dân quyết
                    tâm chiến thắng dịch bệnh, hoàn thành xuất sắc mọi nhiệm vụ
                    được giao.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/18/dsc5152-16239532159142115958997.jpg"
                    alt="11, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5173-16239532159232580799.jpg"
                    alt="12, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5191-1623953215954780928905.jpg"
                    alt="13, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/18/dsc5203-16239532159641896557929.jpg"
                    alt="14, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5104-16239532158431749458977.jpg"
                    alt="15, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5030-16239532157891689290383.jpg"
                    alt="16, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/18/dsc5121-2-16239532158612105808380.jpg"
                    alt="17, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/18/dsc5134-1623953215890847130269.jpg"
                    alt="18, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/18/dsc4980-16239532156791530661656.jpg"
                    alt="19, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5035-16239532158191603815391.jpg"
                    alt="20, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5039-16239532158281899862834.jpg"
                    alt="21, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/18/dsc5314-1623953216527219205521.jpg"
                    alt="22, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/500/203336854389633024/2021/6/18/dsc5269-2-16239532165151302078108.jpg"
                    alt="23, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5263-2-1623953216505948908719.jpg"
                    alt="24, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5282-2-16239532165232100292593.jpg"
                    alt="25, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5357-2-1623954479154874534754.jpg"
                    alt="26, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5380-2-16239544791901556560051.jpg"
                    alt="27, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5496-16239532165641512087134.jpg"
                    alt="28, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/18/dsc5440-1623953216556629256367.jpg"
                    alt="29, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/18/dsc5400-16239532165511533962082.jpg"
                    alt="30, "
                    note=""
                  />
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
