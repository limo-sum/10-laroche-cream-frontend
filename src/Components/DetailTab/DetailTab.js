import React, { Component } from "react";
import "./DetailTab.scss";

class DetailTab extends Component {
  state = {
    info: null,
  };

  componentDidMount() {
    fetch("http://10.58.1.94:8000/core/tag/1").then((res) => res.json());
  }

  // scrollTo = (ref) => {};

  render() {
    return (
      <>
        <div className="DetailTab">
          <div className="itemTab" /*onClick=""*/>제품상세정보</div>
          <div className="buyInfo" /*onClick={this.scrollTo(ref)}*/>
            구매정보
          </div>
        </div>
        <div className="detailContents">
          <div className="banner">
            <img
              alt="detailImg"
              src="https://www.larocheposay.co.kr/upload/product/main/2019/02/20200713_1810013_111.jpg"
            />
          </div>

          <div className="detailView">
            <img
              alt="detailImg"
              src="https://www.larocheposay.co.kr/upload/editor//product/editor/201907/20190722101745072740.jpg"
            />
          </div>
        </div>
        <div className="detailMid">
          <img
            alt="detailImg"
            src="https://www.larocheposay.co.kr/upload/product/main/2019/06/20200713_1810013_107.jpg"
          />
          <div className="detailMidBox">
            <p className="midBoxOne">유럽 NO.1</p>
            <p className="midBoxTwo"> - 트러플 케어 에센스 (미백 기능성)</p>
            <p className="midBoxThr"> - 각질 용해 및 막힌 모공 케어</p>
            <p className="midBoxThr"> - 트러블 케어</p>
            <p className="midBoxThr"> - 다크스팟 케어</p>
            <p className="midBoxFour">
              *에빠끌라 라인 중 10개국 대상 2017년도 판매 기준
            </p>
            <p className="midBoxFiv">듀오[+] 에센스 트리플 세트] 구성</p>
            <p className="midBoxFiv">에빠끌라 듀오[+] 에센스 40ml 본품 * 3개</p>
          </div>
        </div>
        <div class="detailPoint">
          <h3 class="PointHead">피부 고민 포인트</h3>
          <ul className="PointList">
            <li className="firstList">
              <img
                alt=""
                src="https://www.larocheposay.co.kr/upload/subset/2018/08/20180806_1417015_001.png"
              />
              <p>민감하고 연약한 피부</p>
            </li>
            <li>
              <img
                alt=""
                src="https://www.larocheposay.co.kr/upload/subset/2018/08/20180806_1422039_017.png"
              />
              <p>진정(수딩)이 필요한 피부</p>
            </li>
            <li>
              <img
                alt=""
                src="https://www.larocheposay.co.kr/upload/subset/2018/08/20180806_1424005_021.png"
              />
              <p>트러블성 피부</p>
            </li>
          </ul>
        </div>
        <div className="research">
          <h3 class="researchHead">민감피부 연구소</h3>
          <div>
            <img
              alt=""
              src="https://www.larocheposay.co.kr/upload/editor//product/editor/201808/20180821033621061110.jpg"
            />
          </div>
        </div>
        <div className="detailMedia">
          <h3 class="mediaHead">미디어에 나온 라로슈포제</h3>
          <div className="mediaList">
            <div>
              <img
                alt="detailImg"
                src="https://www.larocheposay.co.kr/upload/product/main/2018/08/20200713_1810013_110.jpg"
              />
              <div className="mediaText">
                파우더룸 히트 아이템 선정 에센스 1위 <div>2018년 6월</div>
              </div>
            </div>
            <div>
              <img
                alt="detailImg"
                src="https://www.larocheposay.co.kr/upload/product/main/2018/08/20200713_1810013_113.jpg"
              />
              <div className="mediaText">
                국민일보 컨슈머리포트{" "}
                <div>여름철 꼭 필요한 모공 에센스 1위</div>{" "}
                <div>2018년 6월</div>
              </div>
            </div>
            <div>
              <img
                alt="detailImg"
                src="https://www.larocheposay.co.kr/upload/product/main/2018/08/20200713_1810013_117.jpg"
              />
              <div className="mediaText">
                <div>얼루어 EDITOR’S PICK</div> <div> 2018년 6월</div>
              </div>
            </div>
          </div>
        </div>

        <div class="detailTable" /*ref="refPoint"*/>
          <div className="tableTop">제품정보 제공공시</div>
          {/* <table> */}
          <tr>
            <th className="tableLeft">용량(또는 중량)</th>
            <td class="tableRight">40ml * 3ea</td>
          </tr>
          <tr>
            <th className="tableLeft">제품 주요 사양</th>
            <td class="tableRight">민감성 및 지성/트러블 피부에 사용 적합</td>
          </tr>
          <tr>
            <th className="tableLeft">사용기간(또는 개봉 후 사용기한)</th>
            <td class="tableRight">
              제품 뒷면에 표기 / 12개월 이상 남아있는 제품부터 순차적 배송{" "}
            </td>
          </tr>
          <tr>
            <th className="tableLeft">사용방법 </th>
            <td class="tableRight">
              세안 후 세럼/에센스 단계에서 적당량을 덜어 얼굴과 목에 부드럽게 펴
              발라줍니다.
            </td>
          </tr>
          <tr>
            <th className="tableLeft">제조자 / 책임판매업자</th>
            <td class="tableRight">프랑스 라로슈포제사 / 엘오케이 유한회사</td>
          </tr>
          <tr>
            <th className="tableLeft">제조국</th>
            <td class="tableRight">프랑스</td>
          </tr>
          <tr>
            <th className="tableLeft">전 성분</th>
            <td class="tableRight">
              정제수, 글리세린, 디메치콘, 이소세틸스테아레이트,
              나이아신아마이드, 이소프로필라우로일사코시네이트, 실리카,
              암모늄폴리아크릴로일디메칠타우레이트,
              메칠메타크릴레이트크로스폴리머, 포타슘세틸포스페이트,
              소르비탄올리에이트, 징크피씨에이, 글리세릴스테아레이트에스이,
              이소헥사데칸, 소듐하이드록사이드, 미리스틸미리스테이트,
              2-올레아미도-1,3-옥타데칸디올, 알루미늄스타치옥테닐석시네이트,
              만노오스, 폴록사머338, 디소듐이디티에이, 카프릴로일살리실릭애씨드,
              카프릴릴글라이콜, 비트레오실라발효물, 잔탄검, 폴리소르베이트80,
              아크릴아마이드/소듐아크릴로일디메칠타우레이트코폴리머,
              살리실릭애씨드, 피록톤올아민, 향료 우리 브랜드는 제품의 성분
              목록을 정기적으로 갱신합니다. 가장 최근에 갱신된 성분 목록은 각
              제품의 패키지에 기재되어 있습니다. 이를 참고하시어 본인의 사용에
              적합 여부를 확인하십시오. (매장에서 제품을 리필 하였을 경우, 리필
              진행 후 해당 판매처에 가장 최근에 갱신된 성분 목록을
              문의하십시오).
            </td>
          </tr>
          <tr>
            <th className="tableLeft">기능성 화장품 심사 필 유무</th>
            <td class="tableRight">미백 기능성</td>
          </tr>
          <tr>
            <th className="tableLeft">사용 시 주의사항</th>
            <td class="tableRight">
              *더 자세한 내용은 각 제품 포장에 기재된 주의사항 참고* 1. 화장품
              사용 시 또는 사용 후 직사광선에 의하여 사용부위가 붉은 반점,
              부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우
              전문의 등과 상담할 것 2. 상처가 있는 부위 등에는 사용을 자제할 것
              3. 보관 및 취급 시의 주의사항 1) 어린이의 손이 닿지 않는 곳에
              보관할 것 2) 직사광선을 피해서 보관할{" "}
            </td>
          </tr>
          <tr>
            <th className="tableLeft">품질보증기준</th>
            <td class="tableRight">
              본 제품에 이상이 있을 경우, 공정거래위원회 고시 품목별 '소비자
              분쟁 해결 기준' 에 의해 보상해드립니다.
            </td>
          </tr>
          <tr>
            <th className="tableLeft">소비자상담 전화번호</th>
            <td class="tableRight">
              제품 문의 080-344-0088 공식 온라인 몰 080-844-0088
            </td>
          </tr>
          {/* </table> */}
        </div>
      </>
    );
  }
}

export default DetailTab;
