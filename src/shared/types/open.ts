export interface OpenAPIRequestParams {
  /** OpenAPI Key */
  apiKey: string;
  /** 서비스 종류 */
  svcType: "api";
  /** 서비스 코드 */
  svcCode: "SCHOOL";
  /** 리소스 타입 */
  contentType: ContentType;
  /** 학교 구분
   *
   * - elem_list: 초등학교
   * - midd_list: 중학교
   * - high_list: 고등학교
   * - univ_list: 대학교
   * - seet_list: 특수학교
   * - alte_list: 기타
   */
  gubun?: SchoolType;
  /** 지역 */
  region?: string;
  /** 설립 유형
   *
   * - 100382: 인가
   * - 100383: 비인가
   * - 100384: 위학형
   */
  est?: EstType;
  /** 현재페이지 */
  thisPage?: string;
  /** 페이지 사이즈 (페이지당 건수) */
  perPage?: string;
  /** 검색어 */
  searchSchulNm?: string;
}

export type ContentType = "xml" | "json";

export type SchoolType =
  | "elem_list"
  | "midd_list"
  | "high_list"
  | "univ_list"
  | "seet_list"
  | "alte_list";

export type EstType = "100382" | "100383" | "100384";

export type GetSchoolListRequest = Omit<
  OpenAPIRequestParams,
  "apiKey" | "svcType" | "svcCode" | "contentType"
>;

/** OpenAPI 학교 목록 조회 시 받게되는 데이터 타입
 *
 * 예시
 *  ```json
 * {
 *    campusName: "제1캠퍼스",
 *    collegeinfourl: "",
 *    schoolType: "기능대학",
 *    link: "http://www.ict.ac.kr",
 *    schoolGubun: "전문대학",
 *    adres: "경기도 광주시 순암로 16-26 (역동, ICT폴리텍대학)",
 *    schoolName: "ICT폴리텍대학",
 *    region: "경기도",
 *    totalCount: "476",
 *    estType: "사립",
 *    seq: "684"
 * },
 * ```
 */
export interface OpenAPISchoolDto {
  /** 학교명 */
  schoolName: string;
  /** 링크, 상세페이지 */
  link: string;
  /** 주소 */
  adres: string;
  /** 지역 */
  region: string;
  /** 설립 유형 */
  estType: string;
  /** ? */
  seq: string;
  /** 전체 검색 결과수 */
  totalCount: string;
  /** mycollege 접속 정보 (대학교) */
  collegeinfourl?: string;
  /** 학교종류 */
  schoolGubun?: string;
  /** 캠퍼스명 */
  campusName?: string;
}

/** 학교 목록 조회 응답 타입 */
export interface GetSchoolListResponse {
  dataSearch: {
    content: OpenAPISchoolDto[];
  };
}
