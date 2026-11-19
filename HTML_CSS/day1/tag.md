# 🔎 기본 태그 구조<br>
    <!DOCTYPE html> --- '이 문서는 표준 html5규칙으로 해석해주세요' <br>

        <html lang="ko"> --- 문서 전체 감싸는 루트태그 + 언어 속성 <br>

            <head> --- 문서 자체의 정보 담는 공간 <br>
                <meta charset="UTF-8" /> --- 문자 인코딩 방식 <br>
                <title> 북마크 제목 </title>
            </head>

            <body> --- 화면에 보이는 컨텐츠 <br>
                <h1> --- ~<h6> heading(제목)의 중요도  </h1> <br>
                <p> 하나의 글 묶음, 문단 위아래 기본 여백 줌 </p> <br>
            </body>
        </html>

    👉 html > head/body > p / ul(unordered list)/ol(ordered list)/ > li(list)

🔽 예시 <br>

    <body>
        <h1>건강 데이터 분석 프로젝트 가이드</h1> 🚩

        <p>
            원본 데이터를 정제하고 분석 결과를 공유하기까지의 기본 흐름을 정리했습니다.
            단계별 작업 순서와 확인 항목을 함께 살펴보세요.
        </p>

        <h2>1. 작업 진행 순서</h2> 🚩🚩

        <ol>
            <li>
            원본 데이터 수집 및 결측치 확인

            <ul>
                <li>누락된 날짜나 센서 값 여부 점검</li>
                <li>이상치(단위 오류, 극단값) 기준 검토</li>
            </ul>

            </li>

            <li>분석용 변수 정리 및 집계</li>
            <li>핵심 인사이트 요약 및 시각화</li>
        </ol>

        <h2>2. 발표 전 체크 항목</h2> 🚩🚩

        <ul>
            <li>차트 축 단위와 범례가 명확한지 확인</li>
            <li>가설과 실제 결과의 차이점 정리</li>
        </ul>
    </body>

🔽 예시 preview <br>
<body>
  <h1>건강 데이터 분석 프로젝트 가이드</h1>
  <p>
    원본 데이터를 정제하고 분석 결과 기본 흐름을 정리했습니다.
  </p>

  <h2>1. 작업 진행 순서</h2>
  <ol>
    <li>
      원본 데이터 수집 및 결측치 확인
      <ul>
        <li>누락된 날짜나 센서 값 여부 점검</li>
        <li>이상치(단위 오류, 극단값) 기준 검토</li>
      </ul>
    </li>
    <li>분석용 변수 정리 및 집계</li>
    <li>핵심 인사이트 요약 및 시각화</li>
  </ol>

  <h2>2. 발표 전 체크 항목</h2>
  <ul>
    <li>차트 축 단위와 범례가 명확한지 확인</li>
    <li>가설과 실제 결과의 차이점 정리</li>
  </ul>
</body><br>

# 🔎 주요 기능 태그<tr>
    - table
        <thead>
            <th>이름</th>
        </thead>
        <tbody>
            <td>내용</td>

    - image
        <img src="./내 컴퓨터 파일이름" alt="부연설명">

    - anchor
        <a href="링크">구글</a>로 이동 --- '구글 클릭시 링크로 go'

    - form tag
        <form action="">
            <input type="text" placeholder="닉네임을 쓰세요">
            <button> 입력(버튼)</button>
        </fomr>

# 🔎 주요 속성 type <br>

    <input type="..."> text/password/email/number/date/chekbox/file/
    <input type="." placeholder ="예시문장입력">
    <ol type"."> A/a/i/I 👉 <ul> --- 순서 없는 목록일 경우
    <button type="..."> 입력 </button> --- submit/button/reset 

        