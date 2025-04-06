export interface GetSchoolListRequest {
  /** OpenAPI 인증키 */
  KEY: string;
  /** 호출 문서 (xml, json) */
  Type: DocType;
  /** 페이지 번호 */
  pIndex: number;
  /** 페이지 사이즈 */
  pSize: number;
  /** 시도교육청코드 */
  ATPT_OFCDC_SC_CODE?: string;
  /** 행정표준코드 */
  SD_SCHUL_CODE?: string;
  /** 학교명 */
  SCHUL_NM?: string;
  /** 학교종류명 */
  SCHUL_KND_SC_NM?: string;
  /** 시도명 */
  LCTN_SC_NM?: string;
  /** 설립명 */
  FOND_SC_NM?: string;
}

export type DocType = "xml" | "json";

/** OpenAPI 학교 목록 조회 시 받게되는 데이터 타입
 *
 * 예시
 *  ```json
 * {
 *    ATPT_OFCDC_SC_CODE: "T10",
 *    ATPT_OFCDC_SC_NM: "제주특별자치도교육청",
 *    SD_SCHUL_CODE: "9299048",
 *    SCHUL_NM: "가마초등학교",
 *    ENG_SCHUL_NM: "GAMA ELEMENTARY SCHOOL",
 *    SCHUL_KND_SC_NM: "초등학교",
 *    LCTN_SC_NM: "제주특별자치도",
 *    JU_ORG_NM: "서귀포시교육지원청",
 *    FOND_SC_NM: "공립",
 *    ORG_RDNZC: "63625 ",
 *    ORG_RDNMA: "제주특별자치도 서귀포시 표선면 일주동로6285번길 8",
 *    ORG_RDNDA: "/ 가마초등학교 (표선면)",
 *    ORG_TELNO: "064-780-9500",
 *    HMPG_ADRES: "http://gama.jje.es.kr",
 *    COEDU_SC_NM: "남여공학",
 *    ORG_FAXNO: "064-780-9580",
 *    HS_SC_NM: null,
 *    INDST_SPECL_CCCCL_EXST_YN: "N",
 *    HS_GNRL_BUSNS_SC_NM: "해당없음",
 *    SPCLY_PURPS_HS_ORD_NM: null,
 *    ENE_BFE_SEHF_SC_NM: "전기",
 *    DGHT_SC_NM: "주간",
 *    FOND_YMD: "19680301",
 *    FOAS_MEMRD: "19730316",
 *    LOAD_DTM: "20230615"
 * },
 * ```
 */
export interface OpenAPISchoolDto {
  /** 시도교육청코드 */
  ATPT_OFCDC_SC_CODE: string;
  /** 시도교육청명 */
  ATPT_OFCDC_SC_NM: string;
  /** 행정표준코드 */
  SD_SCHUL_CODE: string;
  /** 학교명 */
  SCHUL_NM: string;
  /** 영문학교명 */
  ENG_SCHUL_NM: string;
  /** 학교종류명 */
  SCHUL_KND_SC_NM: string;
  /** 시도명 */
  LCTN_SC_NM: string;
  /** 관할조직명 */
  JU_ORG_NM: string;
  /** 설립명 */
  FOND_SC_NM: string;
  /** 도로명우편번호 */
  ORG_RDNZC: string;
  /** 도로명주소 */
  ORG_RDNMA: string;
  /** 도로명상세주소 */
  ORG_RDNDA: string;
  /** 전화번호 */
  ORG_TELNO: string;
  /** 홈페이지주소 */
  HMPG_ADRES: string;
  /** 남녀공학구분명 */
  COEDU_SC_NM: string;
  /** 팩스번호 */
  ORG_FAXNO: string;
  /** 산업체특별학급존재여부 */
  INDST_SPECL_CCCCL_EXST_YN: string;
  /** 고등학교일반전문구분명 */
  HS_GNRL_BUSNS_SC_NM: string;
  /** 입시전후기구분명 */
  ENE_BFE_SEHF_SC_NM: string;
  /** 주야구분명 */
  DGHT_SC_NM: string;
  /** 설립일자 */
  FOND_YMD: string;
  /** 개교기념일 */
  FOAS_MEMRD: string;
  /** 수정일자 */
  LOAD_DTM: string;
  /** 고등학교구분명 */
  HS_SC_NM?: string;
  /** 특수목적고등학교계열명 */
  SPCLY_PURPS_HS_ORD_NM?: string;
}

/** 공통 응답 타입 */
export interface CommonResponse {
  /** 응답 코드 */
  CODE: string;
  /** 응답 메시지 */
  MESSAGE: string;
}

/** 데이터가 없는 경우의 응답 타입 */
export interface NoDataResponse {
  RESULT: CommonResponse;
}

/** 학교 정보 응답 타입 */
export interface SchoolInfoResponse {
  schoolInfo: [
    {
      head: [
        {
          list_total_count: number;
        },
        {
          RESULT: CommonResponse & {
            CODE: "INFO-000";
            MESSAGE: "정상 처리되었습니다.";
          };
        },
      ];
    },
    {
      row: OpenAPISchoolDto[];
    },
  ];
}

/** 학교 목록 조회 응답 타입 */
export type GetSchoolListResponse = NoDataResponse | SchoolInfoResponse;
