export type MonthClassic = {
	id: number;
	composer: string;
	title: string;
	image: string;
	description: string;
	videoUrl: string;
	point: {
		title: string;
		description: string;
	};
	performar: {
		name: string;
		description: string;
		instrumentalists: string;
		moreLink: string;
	};
};

export type QuizData = {
	[date: string]: {
		question: string;
		options: string[];
		answer: number;
	};
};

export const musicPlayerBackgroundImageURLs = {
	dawn: "https://images.unsplash.com/photo-1566724121302-0628130eed46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	morning:
		"https://jdmvzmienwxdttefufzf.supabase.co/storage/v1/object/sign/my%20bucket/public/morning-sky.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteSBidWNrZXQvcHVibGljL21vcm5pbmctc2t5LmpwZyIsImlhdCI6MTY5MzM3NjkzMCwiZXhwIjoxNzI0OTEyOTMwfQ.Y5Ci1FHkvO8EpHhWV35EeB51GD4Ja9mVxVDiNT8BKAQ&t=2023-08-30T06%3A28%3A50.762Z",
	afternoon:
		"https://jdmvzmienwxdttefufzf.supabase.co/storage/v1/object/sign/my%20bucket/public/afternoon-sky.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteSBidWNrZXQvcHVibGljL2FmdGVybm9vbi1za3kuanBnIiwiaWF0IjoxNjkzMzc2OTExLCJleHAiOjE3MjQ5MTI5MTF9.mEOdHbVlALLHMINQVahCZsOry36Dn1BwAPTTJeNzp_k&t=2023-08-30T06%3A28%3A31.729Z",
	evening:
		"https://images.unsplash.com/photo-1471032432678-03409d91e045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	night:
		"https://jdmvzmienwxdttefufzf.supabase.co/storage/v1/object/sign/my%20bucket/public/night-sky.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteSBidWNrZXQvcHVibGljL25pZ2h0LXNreS5qcGciLCJpYXQiOjE2OTMzNzY5MjIsImV4cCI6MTcyNDkxMjkyMn0.p0bTLlctg2CaOuHUUkFErQxH1kdaF-5yt255LK3f5Ww&t=2023-08-30T06%3A28%3A42.721Z",
};

export const monthMusics: {
	[key: string]: { title: string; coverImgUrl: string; musicSrcUrl: string };
} = {
	"2024-03": {
		title: "Tchaikovsky: Piano Concerto No.1 1st Movement / Georgii Cherkin",
		coverImgUrl:
			"https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		musicSrcUrl:
			"https://jdmvzmienwxdttefufzf.supabase.co/storage/v1/object/sign/my%20bucket/musics/Tchaikovsky%20Piano%20Concerto%20No%201%201st%20Movement.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteSBidWNrZXQvbXVzaWNzL1RjaGFpa292c2t5IFBpYW5vIENvbmNlcnRvIE5vIDEgMXN0IE1vdmVtZW50Lm1wMyIsImlhdCI6MTcxMDk0MjcyMCwiZXhwIjoxNzQyNDc4NzIwfQ.BXgykauScB7kgvqAvLZMsHj03Su_k-5g5hWI60RWitM&t=2024-03-20T13%3A52%3A00.982Z",
	},
	"2024-04": {
		title: "Tchaikovsky: Piano Concerto No.1 1st Movement / Georgii Cherkin",
		coverImgUrl:
			"https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		musicSrcUrl:
			"https://jdmvzmienwxdttefufzf.supabase.co/storage/v1/object/sign/my%20bucket/musics/Tchaikovsky%20Piano%20Concerto%20No%201%201st%20Movement.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteSBidWNrZXQvbXVzaWNzL1RjaGFpa292c2t5IFBpYW5vIENvbmNlcnRvIE5vIDEgMXN0IE1vdmVtZW50Lm1wMyIsImlhdCI6MTcxMDk0MjcyMCwiZXhwIjoxNzQyNDc4NzIwfQ.BXgykauScB7kgvqAvLZMsHj03Su_k-5g5hWI60RWitM&t=2024-03-20T13%3A52%3A00.982Z",
	},
	"2024-05": {
		title:
			"Schumann: Piano Concerto in A Minor, Op. 54 - III. Allegro vivace / 조성진",
		coverImgUrl:
			"https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		musicSrcUrl:
			"https://jdmvzmienwxdttefufzf.supabase.co/storage/v1/object/sign/my%20bucket/musics/Schumann%20Piano%20Concerto%20in%20A%20Minor,%20Op.%2054%20-%20III.%20Allegro%20vivace.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteSBidWNrZXQvbXVzaWNzL1NjaHVtYW5uIFBpYW5vIENvbmNlcnRvIGluIEEgTWlub3IsIE9wLiA1NCAtIElJSS4gQWxsZWdybyB2aXZhY2UubXAzIiwiaWF0IjoxNzA0Mjc5MzcxLCJleHAiOjE3MTIwNTUzNzF9.N0KhIQJM_NqfWW008C5vauVAzoN100E-JxNJ6sCJqPQ&t=2024-01-03T10%3A56%3A11.763Z",
	},
	"2024-06": {
		title:
			"Schumann: Piano Concerto in A Minor, Op. 54 - III. Allegro vivace / 조성진",
		coverImgUrl:
			"https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		musicSrcUrl:
			"https://jdmvzmienwxdttefufzf.supabase.co/storage/v1/object/sign/my%20bucket/musics/Schumann%20Piano%20Concerto%20in%20A%20Minor,%20Op.%2054%20-%20III.%20Allegro%20vivace.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteSBidWNrZXQvbXVzaWNzL1NjaHVtYW5uIFBpYW5vIENvbmNlcnRvIGluIEEgTWlub3IsIE9wLiA1NCAtIElJSS4gQWxsZWdybyB2aXZhY2UubXAzIiwiaWF0IjoxNzA0Mjc5MzcxLCJleHAiOjE3MTIwNTUzNzF9.N0KhIQJM_NqfWW008C5vauVAzoN100E-JxNJ6sCJqPQ&t=2024-01-03T10%3A56%3A11.763Z",
	},
};

export const monthClassics: { [key: string]: MonthClassic } = {
	"2024-03": {
		id: 15,
		composer: "차이코프스키",
		title: "피아노 협주곡 1번",
		image:
			"https://as1.ftcdn.net/v2/jpg/00/44/80/14/1000_F_44801423_qaUrUvPpfjSzsDID4dXeDXQfZJMtEefu.jpg",
		description: `Tchaikovsky의 "Piano Concerto No. 1"은 19세기 말에 작곡된 클래식 음악 중 하나로, 유명한 클래식 피아노 협주곡 중 하나입니다. 이 곡은 작곡가 Pyotr Ilyich Tchaikovsky가 1874년에 작곡했으며, 현재까지 많은 연주자들과 오케스트라에 의해 연주되고 사랑받고 있습니다.

    작품의 시대 배경은 로맨틱 시대로, 감성적이고 열정적인 음악이 특징입니다. 이 곡은 3악장으로 구성되어 있으며, 첫 번째 악장은 점점 강렬해지는 현악기와 피아노의 대립을 통해 시작됩니다. 두 번째 악장은 서정적이고 아름다운 선율로 피아노가 주도하는 부분입니다. 마지막 악장은 화려하고 역동적인 연주로 마무리되며, 기교적인 피아노 연주와 오케스트라의 화려한 연주가 조화를 이룹니다.

    "Piano Concerto No. 1"은 Tchaikovsky의 피아노 음악 중 가장 인기 있는 작품 중 하나로 꼽히며, 클래식 음악을 사랑하는 사람들에게는 익숙하고 사랑받는 곡입니다. 이 곡은 그의 재능과 예술적 표현력을 최대한 발휘한 작품 중 하나로 평가받고 있으며, 클래식 음악의 명곡 중 하나로 인정받고 있습니다.`,
		videoUrl: "https://youtu.be/YXL0dkG-Qro",
		point: {
			title: "곡 구성과 감상 포인트",
			description: `1악장 - 강렬하고 역동적인 악장, 대립적인 피아노와 현악기의 연주로 화려함을 느낄 수 있습니다.
      2악장 - 서정적이고 아름다운 선율, 우아하고 부드러운 연주로 아름다움을 느낄 수 있습니다.
      3악장 - 화려하고 역동적인 연주, 피아노와 오케스트라의 조화로 흥겨움을 느낄 수 있습니다.

      이렇게 'Piano Concerto No. 1'은 각 악장마다 강렬함, 아름다움, 화려함과 흥겨움을 전달합니다.`,
		},
		performar: {
			name: "조성진",
			description: `조성진 피아니스트는 음악을 통해 감정과 이야기를 표현하는 예술가입니다. 그의 연주는 강렬하면서도 섬세한 터치로 음악의 깊은 감성을 전달합니다. 그의 손끝에서 피아노의 음색이 만들어지며, 그 소리는 청중들을 감동시킵니다.
      조성진 피아니스트는 뛰어난 기교와 기술적 솜씨를 가지고 있으며, 그것을 통해 다양한 음악 작품을 완벽하게 해석합니다. 그의 연주는 듣는 이들에게 여러 감정을 일깨워주고, 그 속에서 아름다움과 감동을 찾을 수 있습니다.`,
			instrumentalists: "피아니스트",
			moreLink:
				"https://namu.wiki/w/%EC%A1%B0%EC%84%B1%EC%A7%84(%ED%94%BC%EC%95%84%EB%8B%88%EC%8A%A4%ED%8A%B8)",
		},
	},
	"2024-04": {
		id: 15,
		composer: "차이코프스키",
		title: "피아노 협주곡 1번",
		image:
			"https://as1.ftcdn.net/v2/jpg/00/44/80/14/1000_F_44801423_qaUrUvPpfjSzsDID4dXeDXQfZJMtEefu.jpg",
		description: `Tchaikovsky의 "Piano Concerto No. 1"은 19세기 말에 작곡된 클래식 음악 중 하나로, 유명한 클래식 피아노 협주곡 중 하나입니다. 이 곡은 작곡가 Pyotr Ilyich Tchaikovsky가 1874년에 작곡했으며, 현재까지 많은 연주자들과 오케스트라에 의해 연주되고 사랑받고 있습니다.

    작품의 시대 배경은 로맨틱 시대로, 감성적이고 열정적인 음악이 특징입니다. 이 곡은 3악장으로 구성되어 있으며, 첫 번째 악장은 점점 강렬해지는 현악기와 피아노의 대립을 통해 시작됩니다. 두 번째 악장은 서정적이고 아름다운 선율로 피아노가 주도하는 부분입니다. 마지막 악장은 화려하고 역동적인 연주로 마무리되며, 기교적인 피아노 연주와 오케스트라의 화려한 연주가 조화를 이룹니다.

    "Piano Concerto No. 1"은 Tchaikovsky의 피아노 음악 중 가장 인기 있는 작품 중 하나로 꼽히며, 클래식 음악을 사랑하는 사람들에게는 익숙하고 사랑받는 곡입니다. 이 곡은 그의 재능과 예술적 표현력을 최대한 발휘한 작품 중 하나로 평가받고 있으며, 클래식 음악의 명곡 중 하나로 인정받고 있습니다.`,
		videoUrl: "https://youtu.be/YXL0dkG-Qro",
		point: {
			title: "곡 구성과 감상 포인트",
			description: `1악장 - 강렬하고 역동적인 악장, 대립적인 피아노와 현악기의 연주로 화려함을 느낄 수 있습니다.
      2악장 - 서정적이고 아름다운 선율, 우아하고 부드러운 연주로 아름다움을 느낄 수 있습니다.
      3악장 - 화려하고 역동적인 연주, 피아노와 오케스트라의 조화로 흥겨움을 느낄 수 있습니다.

      이렇게 'Piano Concerto No. 1'은 각 악장마다 강렬함, 아름다움, 화려함과 흥겨움을 전달합니다.`,
		},
		performar: {
			name: "조성진",
			description: `조성진 피아니스트는 음악을 통해 감정과 이야기를 표현하는 예술가입니다. 그의 연주는 강렬하면서도 섬세한 터치로 음악의 깊은 감성을 전달합니다. 그의 손끝에서 피아노의 음색이 만들어지며, 그 소리는 청중들을 감동시킵니다.
      조성진 피아니스트는 뛰어난 기교와 기술적 솜씨를 가지고 있으며, 그것을 통해 다양한 음악 작품을 완벽하게 해석합니다. 그의 연주는 듣는 이들에게 여러 감정을 일깨워주고, 그 속에서 아름다움과 감동을 찾을 수 있습니다.`,
			instrumentalists: "피아니스트",
			moreLink:
				"https://namu.wiki/w/%EC%A1%B0%EC%84%B1%EC%A7%84(%ED%94%BC%EC%95%84%EB%8B%88%EC%8A%A4%ED%8A%B8)",
		},
	},
	"2024-05": {
		id: 100,
		composer: "슈만",
		title: "피아노 협주곡 Op.54",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Robert-schumann.jpg/220px-Robert-schumann.jpg",
		description: `"Piano Concerto Op. 54"은 로버트 슈만이 1845년에 완성한 피아노 협주곡입니다. 이 곡은 슈만이 그의 아내인 클라라에게 바친 곡으로, 그의 사랑을 표현한 음악으로 알려져 있습니다.

이 곡은 3악장으로 구성되어 있습니다. 첫 번째 악장은 강렬한 피아노와 오케스트라의 조화를 통해 화려한 시작을 보여줍니다. 두 번째 악장은 슈만 특유의 서정성을 드러낸 부분으로, 피아노와 오케스트라 간의 대화를 통해 아름다운 선율을 들려줍니다. 마지막 악장은 화려하고 역동적인 연주로 곡을 마무리하며, 슈만의 열정적인 사랑을 음악적으로 표현합니다.

"Piano Concerto Op. 54"은 슈만의 대표작 중 하나로, 그의 음악적 역량을 최대한 발휘한 작품입니다. 이 곡을 통해 슈만의 깊은 감성과 그의 아내에 대한 사랑을 느낄 수 있습니다.`,
		videoUrl: "https://youtu.be/fWDrJT0s1s8?si=dMX7PonEMd6DV1w3",
		point: {
			title: "곡 구성과 감상 포인트",
			description: `1악장 - 화려하고 강렬한 피아노와 오케스트라의 조화, 슈만의 사랑을 음악적으로 표현합니다.
  2악장 - 슈만 특유의 서정성을 드러내는 부분, 피아노와 오케스트라의 대화를 통해 아름다운 선율을 들려줍니다.
  3악장 - 화려하고 역동적인 연주로 곡을 마무리, 슈만의 열정적인 사랑을 음악적으로 표현합니다.

  이렇게 'Piano Concerto Op. 54'은 각 악장마다 화려함, 아름다움, 역동성을 전달합니다.`,
		},
		performar: {
			name: "유자 왕",
			description: `유자 왕은 중국 출신의 세계적인 피아니스트로, 화려하고 역동적인 연주 스타일로 널리 알려져 있습니다. 그녀의 연주는 강렬한 감성과 탁월한 기교를 보여주며, 청중들에게 깊은 감동을 선사합니다. 다양한 음악 작품을 그만의 독특한 해석으로 연주해 듣는 이들에게 감정의 폭을 넓혀주고, 그 속에서 아름다움과 감동을 찾을 수 있게 합니다.`,
			instrumentalists: "피아니스트",
			moreLink: "https://namu.wiki/w/%EC%9C%A0%EC%9E%90%20%EC%99%95",
		},
	},
	"2024-06": {
		id: 100,
		composer: "슈만",
		title: "피아노 협주곡 Op.54",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Robert-schumann.jpg/220px-Robert-schumann.jpg",
		description: `"Piano Concerto Op. 54"은 로버트 슈만이 1845년에 완성한 피아노 협주곡입니다. 이 곡은 슈만이 그의 아내인 클라라에게 바친 곡으로, 그의 사랑을 표현한 음악으로 알려져 있습니다.

이 곡은 3악장으로 구성되어 있습니다. 첫 번째 악장은 강렬한 피아노와 오케스트라의 조화를 통해 화려한 시작을 보여줍니다. 두 번째 악장은 슈만 특유의 서정성을 드러낸 부분으로, 피아노와 오케스트라 간의 대화를 통해 아름다운 선율을 들려줍니다. 마지막 악장은 화려하고 역동적인 연주로 곡을 마무리하며, 슈만의 열정적인 사랑을 음악적으로 표현합니다.

"Piano Concerto Op. 54"은 슈만의 대표작 중 하나로, 그의 음악적 역량을 최대한 발휘한 작품입니다. 이 곡을 통해 슈만의 깊은 감성과 그의 아내에 대한 사랑을 느낄 수 있습니다.`,
		videoUrl: "https://youtu.be/fWDrJT0s1s8?si=dMX7PonEMd6DV1w3",
		point: {
			title: "곡 구성과 감상 포인트",
			description: `1악장 - 화려하고 강렬한 피아노와 오케스트라의 조화, 슈만의 사랑을 음악적으로 표현합니다.
  2악장 - 슈만 특유의 서정성을 드러내는 부분, 피아노와 오케스트라의 대화를 통해 아름다운 선율을 들려줍니다.
  3악장 - 화려하고 역동적인 연주로 곡을 마무리, 슈만의 열정적인 사랑을 음악적으로 표현합니다.

  이렇게 'Piano Concerto Op. 54'은 각 악장마다 화려함, 아름다움, 역동성을 전달합니다.`,
		},
		performar: {
			name: "유자 왕",
			description: `유자 왕은 중국 출신의 세계적인 피아니스트로, 화려하고 역동적인 연주 스타일로 널리 알려져 있습니다. 그녀의 연주는 강렬한 감성과 탁월한 기교를 보여주며, 청중들에게 깊은 감동을 선사합니다. 다양한 음악 작품을 그만의 독특한 해석으로 연주해 듣는 이들에게 감정의 폭을 넓혀주고, 그 속에서 아름다움과 감동을 찾을 수 있게 합니다.`,
			instrumentalists: "피아니스트",
			moreLink: "https://namu.wiki/w/%EC%9C%A0%EC%9E%90%20%EC%99%95",
		},
	},
};

export const quizData: QuizData = {
	"2024-03-01": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-03-02": {
		question: "비발디의 대표작은?",
		options: ["운명교향곡", "사계", "로망스", "터키행진곡"],
		answer: 1,
	},
	"2024-03-03": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-03-04": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-03-05": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-03-06": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-03-07": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-03-08": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-03-09": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-03-10": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-03-11": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-03-12": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-03-13": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-03-14": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-03-15": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-03-16": {
		question: "비발디의 대표작은?",
		options: ["운명교향곡", "사계", "로망스", "터키행진곡"],
		answer: 1,
	},
	"2024-03-17": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-03-18": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-03-19": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-03-20": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-03-21": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-03-22": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-03-23": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-03-24": {
		question: "비발디의 대표작은?",
		options: ["운명교향곡", "사계", "로망스", "터키행진곡"],
		answer: 1,
	},
	"2024-03-25": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-03-26": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-03-27": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-03-28": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-03-29": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-03-30": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-03-31": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-04-01": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-04-02": {
		question: "비발디의 대표작은?",
		options: ["운명교향곡", "사계", "로망스", "터키행진곡"],
		answer: 1,
	},
	"2024-04-03": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-04-04": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-04-05": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-04-06": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-04-07": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-04-08": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-04-09": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-04-10": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-04-11": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-04-12": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-04-13": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-04-14": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-04-15": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-04-16": {
		question: "비발디의 대표작은?",
		options: ["운명교향곡", "사계", "로망스", "터키행진곡"],
		answer: 1,
	},
	"2024-04-17": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-04-18": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-04-19": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-04-20": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-04-21": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-04-22": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-04-23": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-04-24": {
		question: "비발디의 대표작은?",
		options: ["운명교향곡", "사계", "로망스", "터키행진곡"],
		answer: 1,
	},
	"2024-04-25": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-04-26": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-04-27": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-04-28": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-04-29": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-04-30": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-04-31": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-05-01": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-05-02": {
		question: "비발디의 대표작은?",
		options: ["운명교향곡", "사계", "로망스", "터키행진곡"],
		answer: 1,
	},
	"2024-05-03": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-05-04": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-05-05": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-05-06": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-05-07": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-05-08": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-05-09": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-05-10": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-05-11": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-05-12": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-05-13": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-05-14": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-05-15": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-05-16": {
		question: "비발디의 대표작은?",
		options: ["운명교향곡", "사계", "로망스", "터키행진곡"],
		answer: 1,
	},
	"2024-05-17": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-05-18": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-05-19": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-05-20": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-05-21": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
	"2024-05-22": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-05-23": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-05-24": {
		question: "비발디의 대표작은?",
		options: ["운명교향곡", "사계", "로망스", "터키행진곡"],
		answer: 1,
	},
	"2024-05-25": {
		question: "베토벤의 5번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "운명", "합창", "명곡"],
		answer: 1,
	},
	"2024-05-26": {
		question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
		options: ["O", "X"],
		answer: 0,
	},
	"2024-05-27": {
		question: "베토벤의 9번 교향곡은 몇 번이라고 불리나요?",
		options: ["비창", "영웅", "합창", "영광"],
		answer: 2,
	},
	"2024-05-28": {
		question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
		options: ["피아노", "바이올린", "첼로", "오보에"],
		answer: 0,
	},
	"2024-05-29": {
		question: "다음 중 가장 짧은 음표는?",
		options: ["♩", "♪", "♫", "♬"],
		answer: 0,
	},
};

export const dailyQuoteData: {
	[date: string]: { sentence: string; author: string };
} = {
	"2024-03-01": {
		sentence:
			"깊게 숨을 쉬어야 합니다. 그리고 음악이 당신께 흐르도록 하세요. 그것을 충분히 즐기세요. 스스로 경외롭게 느끼도록 하세요. 음악을 연주할때, 음악이 그 자체의 아름다움으로 당신의 마음을 깨도록 내버려 두세요.",
		author: "켈리 화이트",
	},
	"2024-03-02": {
		sentence:
			"음악은 신의 명예에 공감될만한 화음이다. 그리고 영혼에게 허락된 즐거움이다.",
		author: "요한 세바스찬 바하",
	},
	"2024-03-03": {
		sentence:
			"음악은 자랑스럽고 신경질적인 여성이다. 그녀에게 시간과 주의를 기울여주면 그녀는 기꺼이 당신의 것이 될 것이다. 그녀를 무시한다면 당신이 그녀를 필요로해서 찾을때 대답하지 않을 것이다. 그래서 나는 잠을 줄이고 그녀가 필요로 하는 시간을 더 그녀를 위해 쓴다.",
		author: "패트릭 로스퍼스",
	},
	"2024-03-04": {
		sentence:
			"사람들은 나에게 어떻게 음악을 만드는 지 묻는다. 나는 그들에게 나는 그저 그 안으로 한걸음 들어간다고 말한다. 음악을 만드는 일은 그저 강으로 한 발 들어가서 물의 흐름에 함께하는 것과 같다. 강 속에서의 모든 순간은 그것 자체가 노래이다.",
		author: "마이클 잭슨",
	},
	"2024-03-05": {
		sentence:
			"더 많이 사랑한다는 것은 더 많이 사랑하는 쪽이 더 많은 것을 주어야만 한다. 그것은 우리가 느끼는 무한한 것이다.",
		author: "크리스티나 워스트오버",
	},
	"2024-03-06": {
		sentence: "음악은 사람을 변화시킬 수 있기에 세상을 변화시킬 수 있다.",
		author: "보노",
	},
	"2024-03-07": {
		sentence: "만약 음악이 사랑의 음식이라면, 연주하라.",
		author: "윌리엄 세익스피어",
	},
	"2024-03-08": {
		sentence: "나는 내 삶을 음악의 언어로 본다.",
		author: "알버트 아인슈타인",
	},
	"2024-03-09": {
		sentence:
			"나에게 가장 대단한 글쓰기의 기쁨은 어떤 무언가에 대한것이 아니다. 음악의 언어를 만드는 것이다.",
		author: "트루만 카포테",
	},
	"2024-03-10": {
		sentence:
			"음악적인 혁신은 정부나 국가에게 있어 위험천만한 것이다. 음악의 모드가 바뀌었을때, 그 국가의 기본적인 법률들이  항상 그것과 함께 바뀌었다.",
		author: "플라토",
	},
	"2024-03-11": {
		sentence:
			"음악은 아픔과 상처를 줄 수 있다. 아름다운 음악은 굶주린 사람에게 숨을수 있는 장소가 된다.",
		author: "패트 콘로이",
	},
	"2024-03-12": {
		sentence:
			"저녁식사와 함께 하는 음악은  요리사와 바이올리니스트 모두에게 모욕이다.",
		author: "G.K. 체스터톤",
	},
	"2024-03-13": {
		sentence: "나는 그저 음악하는 매춘부요, 내 사랑.",
		author: "프레디 머큐리",
	},
	"2024-03-14": {
		sentence: "내가 날 수 없다면, 나를 노래하게 하오.",
		author: "스테판 선데임",
	},
	"2024-03-15": {
		sentence:
			"모든 좋은 음악은 이미 날개같은 것들을 가진 사람들에 의해 이미 모두 쓰여졌다.",
		author: "프랭크 자파",
	},
	"2024-03-16": {
		sentence:
			"음악은 누가 연주하느냐에 따라 다르게 들려진다. 그것은 음악가들의 저주이다.",
		author: "패트릭 로스퍼스",
	},
	"2024-03-17": {
		sentence: "음악은 아름다운, 시적인것들을 가슴에 들려주는 신성한 방법이다.",
		author: "파블로 카잘스",
	},
	"2024-03-18": {
		sentence:
			"내 안의 모든것은 펄럭이며 자유롭게 느끼게 한다. 나는 매순간 땅 위에서 날아오르는 것을 느낀다. 음악은, 내 생각에 나를 음악 자신과 같이 자유롭게 느끼도록 만든다.",
		author: "로렌 올리버",
	},
	"2024-03-19": {
		sentence:
			"만약 음악이 어떤 장소라면, 그렇다면 재즈는 도시이고, 포크는 황무지이며, 락은 길이고, 클래식은 신전이다.",
		author: "베라 나자리안",
	},
	"2024-03-20": {
		sentence:
			"나는 음악이 자동차 안에서 당신이 보이지 않는 것을 느끼게 하는 방법을 사랑한다. 음악의 볼륨을 최대로 높이면, 다른 사람들이 차 안의 당신의 모습을 전혀 보지 못하는 것처럼 느낀다.  그것은 자동차 창을 선팅한 것처럼 느껴지게 만든다.",
		author: "척 클로스터만",
	},
	"2024-03-21": {
		sentence:
			"꿈같은 영화, 음악같은 영화. 어떤 예술도 영화가 하는 것처럼 우리의 양심을 지나치지 못한다. 그리고 그것은  우리의 감정에 직접적으로, 우리의 영혼의 어두운 방에 깊게 내려 앉는다.",
		author: "잉그마 베르만",
	},
	"2024-03-22": {
		sentence:
			"음악은 나의 눈에 따듯한 빛을 가져다 주고, 끝없는 겨울로부터 마음과 근육을 녹아들게 만든다.",
		author: "하루키 무라카미",
	},
	"2024-03-23": {
		sentence:
			"부드럽게, 교묘하게, 음악은 당신을 어루만질 것이다.  그것을 듣고 느껴보라. 비밀스럽게 당신을 소유할 것이다.",
		author: "찰스 하트",
	},
	"2024-03-24": {
		sentence: "대부분 사람들은 그들의 안에 음악이 가득 차 있는 채로 죽는다.",
		author: "벤자민 디자렐리",
	},
	"2024-03-25": {
		sentence: "음악은 인생의 암울한 밤에  비치는 달빛이다.",
		author: "잔 폴 프레데릭 리히터",
	},
	"2024-03-26": {
		sentence:
			"음악이 충분히 소란스럽게 들린다면, 나는 내 안의 생각들을 들을수 없을 것이다.",
		author: "닉 세프",
	},
	"2024-03-27": {
		sentence:
			"오늘 저녁에는 더이상 할 말이 없거나 할 일이 없다. 그러니 내 바이올린을 나에게 주어 반시간동안 비참한 날씨와 또 여전히 더욱 비참한 동포의 방법을 잊도록 노력하게 하라.",
		author: "아서 코난 도일",
	},
	"2024-03-28": {
		sentence:
			"그 안의 음악이 없는 사람은, 다정한 소리와 화합하여 움직이지도 않고, 대신 대역죄나 술수와 계략, 버릇없음이 잘 맞는다. 그의 영혼의 움직임은 밤과 같이 둔하고, 그의 감정은 에레보스( 그리스 신화의 암흑계) 와 같이 어둡다. 그런 사람은 믿음이 가기 어렵다. 음악을 표시해보라.",
		author: "윌리엄 세익스피어",
	},
	"2024-03-29": {
		sentence:
			"산다는 것은 뮤지컬이 되는것이다. 당신의 혈관 안의 피의 댄스로 시작한다. 모든 살아있는 걱은 리듬이 된다. 당신의 음악이 느껴지는가?",
		author: "마이클 잭슨",
	},
	"2024-03-30": {
		sentence: "사랑은 음악안에 셋업되는 우정이다.",
		author: "잭슨 폴락",
	},
	"2024-03-31": {
		sentence: "음악은, 부드러운 목소리가 죽었을 때 기억안에서 진동한다.",
		author: "펄시 비쉐 쉘리",
	},
	"2024-04-01": {
		sentence:
			"대단한 노래는 당신의 심장을 들어올리고, 영혼을 따듯하게 하며 당신이 더 좋게 느끼도록 만든다.",
		author: "콜비 카일라",
	},
	"2024-04-02": {
		sentence:
			"하지만 나는 밴드를 할수 없었다. 왜냐하면 일반적인 청각 장애인과 같이 느껴질만큼 정말 음치였기 때문이다.",
		author: "존 그린",
	},
	"2024-04-03": {
		sentence: "당신이 연주할 때, 누가 듣던말던 상관하지 말라.",
		author: "로버트 슈만",
	},
	"2024-04-04": {
		sentence: "음악은, 나의 성벽이며 나의 유일한 사랑이다.",
		author: "빈센트 밀레이",
	},
	"2024-04-05": {
		sentence:
			"이것은 폭력에 대한 우리의 답변이다. 음악을 예전 그 어느때와 비교할 수 없을 정도로 더 강렬하게, 더 아름답게,  더욱 헌신적으로 만들기 위해서… ",
		author: "오날드 번스타인",
	},
	"2024-04-06": {
		sentence:
			"음악은 사람의 인종이 우리가 알고 있는 것보다 더욱 대단하다는 것을 우리에게 말해준다.",
		author: "나폴레옹 보나파테",
	},
	"2024-04-07": {
		sentence:
			"당신이 음악이라면, 나는 나의 낮은 영혼이 밝게 빛날때까지  끊임없이 당신을 듣겠소.",
		author: "애나 아크마토바",
	},
	"2024-04-08": {
		sentence: "나는 하나의 알파벳을 적는 대신, 10000개의 노트를 쓰겠소.",
		author: "루드비히 반 베토벤",
	},
	"2024-04-09": {
		sentence: "음악은 정적에 따르는 한컵의 와인이다.",
		author: "로버트 플",
	},
	"2024-04-10": {
		sentence: "영혼의 음악은 우주를 통해 들을수 있다.",
		author: "라오 쑤",
	},
	"2024-04-11": {
		sentence: "음악은 굳건하게 닫힌 마음을 열어주는 마법의 키처럼 작동한다.",
		author: "마리아 어거스트 본 트랩",
	},
	"2024-04-12": {
		sentence:
			"음악은, 당신의 당혹감을 풀어주고 당신의 성격이나 감성을 정화시켜주는데 도움이 된다. 그리고 보살핌이 필요한 슬픔의 시간에 당신의 안에 있는 살아있는 기쁨을 용솟움치도록 도와준다.",
		author: "본헤퍼",
	},
	"2024-04-13": {
		sentence: "음악은 영혼의 폭발이다.",
		author: "페레데릭 델리우스",
	},
	"2024-04-14": {
		sentence: "나의 개인적인 취미는 독서와 음악감상과 침묵이다.",
		author: "에디뜨 시트웰",
	},
	"2024-04-15": {
		sentence:
			"나에게 나는 것을 가르쳐 줄 수 없다면, 대신 노래하는 것을 가르쳐 주렴.",
		author: "J.M.바리, 피터팬에서",
	},
	"2024-04-16": {
		sentence: "음악은 꿈과 같다. 내가 절대 들을수 없는",
		author: "베토벤",
	},
	"2024-04-17": {
		sentence: "음악 없는, 삶은 실수이다.",
		author: "니체",
	},
	"2024-04-18": {
		sentence: "음악은 꿈과 같다. 내가 절대 들을수 없는",
		author: "베토벤",
	},
	"2024-04-19": {
		sentence: "음악 없는, 삶은 실수이다.",
		author: "니체",
	},
	"2024-04-20": {
		sentence:
			"음악은 우주에 영혼을 주고, 바람에 날개를 주고, 상상을 날수 있도록 하고, 삶에 모든것을 준다",
		author: "플라토",
	},
	"2024-04-21": {
		sentence:
			"어떻게 음악은, 단어나 말이 없이도, 우리의 웃음과 우리의 감정과 우리의 가장 높은 영감까지 이끌어 낼 수 있단 말인가?",
		author: "제인 스완",
	},
	"2024-04-22": {
		sentence:
			"만일 내가 물리학자가 아니었다면, 나는 음악가가 되었을 것이다. 나는 가끔 음악으로 생각하고, 음악에 대한 백일몽으로 살아간다, 나는 내 삶을 음악적인 면으로 본다.",
		author: "아인슈타인",
	},
	"2024-04-23": {
		sentence:
			"음악은 어떤 특정한 단어로 이야기 할 수 없는 언어이다 감정으로 말하고 만약 그것이 뼈에 있다고 한다면 그것은 정말 뼈에  있는 것이다.",
		author: "케이스 리차드",
	},
	"2024-04-24": {
		sentence:
			"나는 음악 그 자체에 힐링이 있다고 생각한다. 그것은 인간성의 폭팔적인 표현이다. 그것은 우리가 닿을수 있는  (만질수 있는) 무언가다. 어떤 문화에서 왔건 모두가 음악을 사랑하는 것은 의심할 여지가 없다.",
		author: "빌리 조엘",
	},
	"2024-04-25": {
		sentence:
			"음악에 있어 한가지 좋은 것은, 그것이 너를 쳤을때 너는 아무런 고통도 느끼지 않는다는 것이다.",
		author: "밥 말리",
	},
	"2024-04-26": {
		sentence: "진정한 하나의 진리는 음악이다.",
		author: "잭 캘로악",
	},
	"2024-04-27": {
		sentence:
			"삶의 고통스러움에서 피난처를 찾는  두 가지 방법이 있다. 바로 음악과 고양이다.",
		author: "알버트 슈바이처",
	},
	"2024-04-28": {
		sentence: "음악이 없다면, 나에게 삶은 텅 빈 것이다.",
		author: "제인 오스틴",
	},
	"2024-04-29": {
		sentence:
			"만약 음악이 사랑의 음식이라면, 계속하라, 나에게 질릴 정도로 넘치도록 들려 주어라, 질리게 되면 식욕은 병들고 죽어질 것이다.",
		author: "세익스피어",
	},
	"2024-04-30": {
		sentence:
			"음악은 나의 피난처였다. 나는 노트들 사이에서 기어다닐수 있었고 외로움으로 부터 허리를 웅크릴 수 있었다.",
		author: "마야 안젤로",
	},
	"2024-04-31": {
		sentence:
			"정적 후에, 형언할 수 없을 만큼 가깝게 표현되는 것은 바로 음악이다.",
		author: "헉슬리",
	},
	"2024-05-01": {
		sentence:
			"가장 흥미진진한 리듬은 예상치 못한 것과 복잡한 리듬이고, 가장 아름다운 멜로디는 단순하고 누구나 예상할 수 있는 멜로디다.",
		author: "오덴",
	},
	"2024-05-02": {
		sentence: "단어나 언어가 실패한 곳에, 음악이 이야기를 한다.",
		author: "한스 크리스찬 앤더슨",
	},
	"2024-05-03": {
		sentence: "음악은 말할 수 없는 곳에, 그리고 침묵이 불가능한 곳에 표현한다.",
		author: "빅토르 휴고",
	},
	"2024-05-04": {
		sentence:
			"우리는 음악을 만드는 사람들이다. 그리고 우리는 꿈을 꾸는 꿈꾸는 자들이다.",
		author: "아서 오셔네시",
	},
	"2024-05-05": {
		sentence:
			"만약 내 삶을 한번 더 살수 있는 기회가 주어진다면, 나는 적어도 매주 한 번은 시를 조금 더 읽을것과 음악을 더 많이 들을 계획을 세울것이다.",
		author: "찰스 다윈",
	},
	"2024-05-06": {
		sentence: "음악은 사람 본성이 그것 없으면 살 수 없는 기쁨을 창출해 낸다.",
		author: "콘푸시오스",
	},
	"2024-05-07": {
		sentence: "음악이란, 지혜와 철학보다 훨씬 높은 계시이다",
		author: "베토벤",
	},
	"2024-05-08": {
		sentence:
			"인간은 매일 그의 삶에서 음악을 조금 듣고, 시를 조금 읽고, 좋은 그림을 보아야 한다. 세상적인 보살핌이 하나님께서 인간의 영혼에 심어놓은 아름다움의 감정을 없애는 것으로 부터 보호하기 위해서",
		author: "괴테",
	},
	"2024-05-09": {
		sentence: "음악은 언어가 마음으로부터 영혼으로 가는 방법이다.",
		author: "모데스트 무스",
	},
	"2024-05-10": {
		sentence: "한번 영혼에 들어간 음악은 정신이 되어 절대로 죽지 않는다.",
		author: "리튼",
	},
	"2024-05-11": {
		sentence:
			"음악은 언어 홀로는 절대 할수 없는 곳에서 감성적으로 우리를 어루만진다 ",
		author: "조니 뎁",
	},
	"2024-05-12": {
		sentence: "사실상 내가 아는 모든 작가는 음악가에 가깝다.",
		author: "트 보네굿",
	},
	"2024-05-13": {
		sentence:
			"화가는 캔버스위에 그림을 그린다. 하지만 음악가는 정적 위에 그들의 그림을 그린다 ",
		author: "레오포드 스토코브스키",
	},
	"2024-05-14": {
		sentence:
			"음악은, 이름을 붙일 수 없다고 이름할 수 있으며, 절대 알 수가 없는 의사소통이라고 할 수 있다.",
		author: "레오나드 번스타인",
	},
	"2024-05-15": {
		sentence: "음악은 감정의 속기 (빨리 기록하는 방법)이다.",
		author: "톨스토이",
	},
	"2024-05-16": {
		sentence: "나는 아름다운 멜로디가 말해주는 끔찍한 이야기가 좋다.",
		author: "탐 웨이트",
	},
	"2024-05-17": {
		sentence: "음악이 없다면, 나에게 삶은 텅 빈 것이다.",
		author: "제인 오스틴",
	},
	"2024-05-18": {
		sentence:
			"음악을 듣는 사람은 그의 고독을 느낀다. 사람이 살면서 한번은 하는 경험이다.",
		author: "로버트 브라우닝",
	},
	"2024-05-19": {
		sentence:
			"만약 극단적인 자기중심주의자가 되는 것이, 내가 믿기에는, 내가 나의 예술이나 음악을 하는 것이라면, 그렇다면 당신들은 나를 그렇게 (자기주심주의자) 불러도 된다. 나는 내가 하는 일과 내가 말하는 그것을 믿는다.",
		author: "존 레논",
	},
	"2024-05-20": {
		sentence:
			"너의 진심으로 살아라. 너의 사랑을 표현하라. 너의 열정을 나누어라. 너의 꿈을 향해 전진하라. 너의 말대로 걸어라. 춤추고 너의 음악을 노래하라. 너의 축복을 받아들여라. 오늘을 가치있게 기억하도록 만들어라.",
		author: "스티브 마라볼리",
	},
	"2024-05-21": {
		sentence:
			"정보는 지식이 아니다. 지식은 지혜가 아니다. 지혜는 진리가 아니라. 진리는 아름다움이 아니다. 아름다움은 사랑이 아니다. 사랑은 음악이 아니다. 음악이 모든것중에 최고이다.",
		author: "프랑크 자파",
	},
	"2024-05-22": {
		sentence: "음악은 마음의 학문이다 그것은 연설이 끝나는 곳에서 시작된다.",
		author: "알폰소 드 라마티네",
	},
	"2024-05-23": {
		sentence:
			"베토벤은 당신에게 베토벤이나 모짜르트와 같은 것은 사람답게 되는 것이라고 말해준다. 바하는 우주처럼 되는 것이 무엇인지 말해준다.",
		author: "글라스 아담스",
	},
	"2024-05-24": {
		sentence:
			"음악은 노트에서 나타나는 것이 아니다. 그것은 노트사이의 정적에 있다.",
		author: "볼프강 아마데우스 모짜르트",
	},
	"2024-05-25": {
		sentence:
			"음악은 사람을 로맨틱하게 만든다 적어도 누군가의 두려움은 가져간다. 현재에도 마찬가지이다.",
		author: "오스타 와일드",
	},
	"2024-05-26": {
		sentence: "나는 하나의 알파벳을 적는 대신, 10000개의 노트를 쓰겠소.",
		author: "루드비히 반 베토벤",
	},
	"2024-05-27": {
		sentence:
			"음악없이 꾸미려고 한다면, 시간은 그저 꼭 내야하는 고지서처럼 지루한 생산활동의 데드라인이나 날들 일 것이다.",
		author: "프랑크 자파",
	},
	"2024-05-28": {
		sentence:
			"나에게 나는 것을 가르쳐 줄 수 없다면, 대신 노래하는 것을 가르쳐 주렴.",
		author: "J.M.바리, 피터팬에서",
	},
	"2024-05-29": {
		sentence: "음악은 가장 강력한 마법의 형식이다.",
		author: "마릴린 맨슨",
	},
	"2024-06-01": {
		sentence: "음악은 정적에 따르는 한컵의 와인이다.",
		author: "버트 플립",
	},
	"2024-06-02": {
		sentence:
			"음악은 영혼의 언어이다. 그것은 갈등을 없애주는 ,평화를 가져다주는 삶의 비밀을 열어준다.",
		author: "",
	},
	"2024-06-03": {
		sentence: "영혼의 음악은 우주를 통해 들을수 있다.",
		author: "라오 쑤",
	},
	"2024-06-04": {
		sentence: "음악은 굳건하게 닫힌 마음을 열어주는 마법의 키처럼 작동한다.",
		author: "마리아 어거스트 본 트랩",
	},
	"2024-06-05": {
		sentence:
			"음악은, 당신의 당혹감을 풀어주고 당신의 성격이나 감성을 정화시켜주는데 도움이 된다. 그리고 보살핌이 필요한 슬픔의 시간에 당신의 안에 있는 살아있는 기쁨을 용솟움치도록 도와준다.",
		author: "본헤퍼",
	},
	"2024-06-06": {
		sentence: "음악은 영혼의 폭발이다.",
		author: "페레데릭 델리우스",
	},
	"2024-06-07": {
		sentence: "나의 개인적인 취미는 독서와 음악감상과 침묵이다.",
		author: "에디뜨 시트웰",
	},
	"2024-06-08": {
		sentence:
			"음악은 대단한 화합가이다. 믿기힘든 힘을 가지고 있다. 모든 점이 다른 사람들을 하나로 만들어주는 공통점이다.",
		author: "사라 데슨",
	},
	"2024-06-09": {
		sentence: "음악은 사람에게 없어서는 안되는 기쁨을 만들어낸다.",
		author: "컨퓨시오스",
	},
	"2024-06-10": {
		sentence: "음악은 나의 더 높은 힘이다.",
		author: "올리버 제임스",
	},
	"2024-06-11": {
		sentence:
			"처음엔 그는 뭔가 음악이라고 생각하는 것을 들었다. 그는 사람들의 노래소리를 들었다.  그의 뒤에서, 광대한 공간과 시간을 가로지르는, 그가 막 떠나온 왼쪽으로부터도 역시 그는 음악을 들었다. 하지만 아마도 그것은 메아리였을 것이다.",
		author: "로이스 로울리",
	},
	"2024-06-12": {
		sentence: "음악이나 시가 중단되거나 방해를 받는 것은 언제나 치명적이다.",
		author: "조지 엘리엇",
	},
	"2024-06-13": {
		sentence:
			"당신이 들은것이 무엇인지 나에게 말해보라. 그러면 내가 당신이 누구인지 말해줄테니.",
		author: "티파니 디바르토로",
	},
	"2024-06-14": {
		sentence:
			"넘쳐흐르는 나의 심장은, 아프고 상처받았을때면 음악으로 인해 치유받고 회복한다.",
		author: "마틴 루터",
	},
	"2024-06-15": {
		sentence:
			"우리 정부가 아무리 부패하고, 탐욕스럽고, 비정하다 해도 우리의 기업과 미디어와 우리의 종교와 자선기관이 그렇게 된다해도, 음악은 여전히 멋지다.",
		author: "커트 보네거트",
	},
	"2024-06-16": {
		sentence: "내 안에 음악이 가득하면, 인생은 노력없이도 흘러가는 것 같다.",
		author: "조지 엘리엇",
	},
	"2024-06-17": {
		sentence:
			"음악은 모든이들의 일이다. 단지 출판인들이 본인들이 그것을 소유했다고 생각할 뿐이다.",
		author: "존 레논",
	},
	"2024-06-18": {
		sentence: "인생은 아름다운 멜로디와 같다. 단지 가사들이 그것을 망칠뿐이다.",
		author: "한스 크리스찬 앤더슨",
	},
};
