import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "components/content";

import { Helmet } from "react-helmet";



/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '05/08/2021 11:09 PM',
"title": 'Cháy rừng kỷ lục hoành hành ở California, phần lớn thị trấn Greenville chỉ còn là đống tro tàn',
"description": 'Đám cháy rừng Dixie đã "xé toạc" thị trấn miền núi Greenville, bang California, Mỹ vào tối 4/8 (theo giờ địa phương), khiến phần lớn thị trấn trở thành đống tro tàn.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-16282158059912060667640.jpg',
"alt": 'cháy rừng kỷ lục tại California,cháy rừng,Mỹ,đống tro tàn,thị trấn greenville,',
"category": 'news',
"date": '05/08/2021',
"time": '11:09 PM',
"link": '/chay-rung-ky-luc-hoanh-hanh-o-california-phan-lon-thi-tran-greenville-chi-con-la-dong-tro-tan',
"zcomponent": 'page_20210805230936',
"filepath": './20210805230936-chay-rung-ky-luc-hoanh-hanh-o-california-phan-lon-thi-tran-greenville-chi-con-la-dong-tro-tan.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'news';
const categoryLink = '/news';
const title = 'Cháy rừng kỷ lục hoành hành ở California, phần lớn thị trấn Greenville chỉ còn là đống tro tàn';
const author = 'QUỲNH CHI,';
const source = 'VTV';
const timestamp = '05/08/2021 11:09 PM';
const description = 'Đám cháy rừng Dixie đã "xé toạc" thị trấn miền núi Greenville, bang California, Mỹ vào tối 4/8 (theo giờ địa phương), khiến phần lớn thị trấn trở thành đống tro tàn.';
const link = 'chay-rung-ky-luc-hoanh-hanh-o-california-phan-lon-thi-tran-greenville-chi-con-la-dong-tro-tan';
const tagparam = ["cháy rừng kỷ lục tại California","cháy rừng","Mỹ","đống tro tàn","thị trấn greenville",];
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

export default function page_20210805230936() {
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
              <div className="author">{author}</div> - Theo {source} | {timestamp}
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
                  <p>Đám cháy Dixie đã diễn ra trong 3 tuần qua và được coi là trận <strong>cháy rừng</strong> lớn nhất tại bang California trong năm 2021, ảnh hưởng tới diện tích 1.127 km² và thiêu rụi hàng chục ngôi nhà.</p>
<p>Từ đầu tuần, khoảng 5.000 lính cứu hỏa đã cứu được một số ngôi nhà khỏi biển lửa, khống chế được khoảng 1/3 diện tích đám cháy.</p>
<p>Đám cháy đã lan rộng trên diện tích hàng nghìn mẫu Anh và thêm 4.000 người được lệnh sơ tán. Văn phòng cảnh sát trưởng hạt Plumas đã đăng trên tài khoản Facebook cảnh báo khoảng 800 cư dân của thị trấn: "Người dân đang đối mặt nguy hiểm và phải rời đi ngay lập tức".</p>
<p>Các nhân viên cứu hỏa đang chuẩn bị cho những ngày còn nhiều khó khăn phía trước. Điều kiện thời tiết khắc nghiệt như nhiệt độ cao, độ ẩm thấp và gió mạnh vào buổi chiều tối sẽ tiếp tục là mối đe dọa khiến đám cháy lan nhanh. Cây cối, cỏ và thảm thực vật khô đến nỗi "nếu một cục than hồng tiếp đất, đảm bảo một đám cháy mới sẽ bùng phát".</p>
<p>Vào năm 2018, đám cháy Camp tại khu vực này đã san bằng các thị trấn Paradise và Magalia, khiến 85 người thiệt mạng. Năm 2020, 16 người đã thiệt mạng trong đám cháy North Complex gần đó.</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-16282158059912060667640.jpg' alt='1, cháy rừng kỷ lục tại California,cháy rừng,Mỹ,đống tro tàn,thị trấn greenville,' note='Nhiều đám cháy rừng đang diễn ra trên khắp miền Tây nước Mỹ (Ảnh: AP)'/>
<RelationNewsInPage category={category} />
<p>Đến ngày 5/8, đám cháy Dixie đã trở thành đám cháy lớn thứ 6 trong lịch sử bang California. Bốn trong số 5 vụ <strong>cháy rừng</strong> lớn nhất khác tại bang này đều diễn ra vào năm 2020. Trong khi đó, Vườn quốc gia núi lửa Lassen gần đó đã phải đóng cửa với tất cả du khách vì cháy rừng.</p>
<p>Đám cháy Dixie chỉ là một trong số rất nhiều đám <strong>cháy rừng</strong> đang diễn ra trên khắp miền Tây nước <strong>Mỹ</strong>. Tại bang California, khoảng 40 ngôi nhà và các công trình kiến trúc khác đã bị thiêu rụi trong tuần này trong bối cảnh đám cháy River hoành hành. Đám cháy River bùng phát hôm 4/8 gần Colfax. Hàng nghìn người đang phải sơ tán ở các quận Placer và Nevada.</p>
<p>Cách đám cháy Dixie khoảng 240 km về phía Tây, đám cháy McFarland do sét đánh đã đe dọa những ngôi nhà hẻo lánh dọc theo sông Trinity trong rừng quốc gia Shasta-Trinity. Ngọn lửa chỉ được dập tắt 5% sau khi đốt cháy thảm thực vật khô hạn.</p>
<p>Hiện hơn 20.000 lính cứu hỏa và nhân viên hỗ trợ đang chiến đấu với 97 đám <strong>cháy rừng</strong> lớn đang diễn ra ở 13 bang của <strong>Mỹ</strong>, Trung tâm Cứu hỏa liên ngành quốc gia Mỹ cho biết.</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-16282158059912060667640.jpg' alt='2, cháy rừng kỷ lục tại California,cháy rừng,Mỹ,đống tro tàn,thị trấn greenville,' note=''/>
                    </div>
                  <AdsHorizontal />
                </div></div>

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
