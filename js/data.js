let data = {
    "question" : [
        {
            "id": 0,
            "stories" : [],            
            "content" : "알람이 울린다 나는 어떻게 할까?",
            "bg": "../image/bg1.png"
        },
        {
            "id": 1,
            "stories" : [
                "학교에 도착했다.",
                "자리가 남아있어 앉을 자리를 탐색한다"
            ], 
            "content" : "학교에 도착했다.<br>자리가 남아있어 앉을 자리를 탐색한다.<br>나는 어떤 자리에 앉을까?",
            "bg": "../image/bg2.png"
        },
        {
            "id": 2,
            "stories" : [
                "쉬는시간 종이 쳤다.",
                "다들 무엇을 하는지 주위를 둘러본다."
            ],     
            "content" : "조례 후 쉬는시간, 분위기가 점점 산만해진다. <br>나는 무엇을 할 것인가?",
            "bg": "../image/bg2.png"
        },
        {
            "id": 3,
            "stories" : [
                "종이 치고 선생님께서 들어오셨다.",
                "선생님은 수업 첫 날이라고 오리엔테이션 겸 떠들자고 하셨다."
            ],    
            "content" : "선생님은 수업 첫 날이라고 오리엔테이션 겸 떠들자고 하셨다.<br>이때 나는 무엇을 할 것인가?",
            "bg": "../image/bg2.png"
        },
        {
            "id": 4,
            "stories" : [
                "점심시간 종이 울려서 점심을 먹으러 가야 한다."
            ],    
            "content" : "점심시간 종이 울려서 점심을 먹으러 가야 한다.<br>이 때 나는?",
            "bg": "../image/bg3.png"
        },
        {
            "id": 5,
            "stories" : [
                "종이 친 후,  선생님이 들어오셨다.",
                "엄격한 선생님이 들어오셔서 첫 날이지만 수업을 하신다고 하셨다."
            ],    
            "content" : "종이 친 후,  선생님이 들어오셨다.<br>첫 날부터 수업을 진행하자는 선생님께 나는 어떻게 할 것인가?",
            "bg": "../image/bg4.png"
        },
        {
            "id": 6,
            "stories" : [
                "종례를 마치고 집에 가야 한다."
            ],    
            "content" : "학교가 끝났다.<br>종례 후 나는 무엇을 할 것인가?",
            "bg": "../image/bg4.png"
        },
        {
            "id": 7,
            "stories" : [
                "잠을 자야하는 시간이다"
            ],    
            "content" : "어느새 잠을 자야하는 시간이다.<br>이때 나는?",
            "bg": "../image/bg5.png"
        }
    ],
    "choice": [
        {
            "id": 0,
            "contents" : [
                "A: 알람을 끄고 일어난다",
                "A: 무시하고 다시 잔다",
                "A: 알람을 끈 후 바로 샤워를 한다"
            ]
            
        },
        {
            "id": 1,
            "contents" : []
        },
        {
            "id": 2,
            "contents" : [
                "A: 나도 옆 친구에게 말을 걸어본다",
                "A: 조용히 제 할 일을 한다",
                "A: 방금 수업 했던 것을 복습한다"
            ]
        },
        {
            "id": 3,
            "contents" : [
                "A: 선생님과 같이 말을 나눈다",
                "A: 조용히 선생님의 말씀을 듣는다",
                "A: 숨겨둔 간식을 몰래 먹으며 스릴을 즐긴다"
            ]
        },
        {
            "id": 4,
            "contents" : [
                "A: 미리 외워둔 급식 정보를 친구들에게 알려준다",
                "A: 밥 먹기 전 손을 씻으러 간다",
                "A: 밥을 먹을 때 교복에 음식물을 흘린다"
            ]
        },
        {
            "id": 5,
            "contents" : [
                "A: 첫 수업이니 선생님께 놀자고 얘기를 드린다",
                "A: 무념무상 그냥 듣는다",
                "A: 선생님에 대해서 소개해달라고한다"
            ]
        },
        {
            "id": 6,
            "contents" : [
                "A: 독서실에가서 공부한다",
                "A: 친구와 함께 놀러간다",
                "A: 바로 집에가서 자기만의 시간을 보낸다"
            ]
        },
        {
            "id": 7,
            "contents" : [
                "A: 잠을 잔다",
                "A: 내 아이돌 영상을 보고 잔다",
                "A: SNS를 보고 잔다"
            ]
        }
    ],
    "characters" : [
        {
            "name": "깔끔왕",
            "img" : "./image/깔끔왕.jpg",
            "description" : {
                "title": "알잘딱깔센하면 나지",
                "content": "당신의 유형은 깔끔왕 입니다!",
                "tag": [
                    "깔끔",
                    "책임감",
                    "효율적",
                    "심플"
                ],
                "personal": [
                    "주변 환경이 깔끔하고 잘 정리 정돈 되어 있어요! 잘 안 치우는 친구를 보면 가끔 잔소리를 하곤 해요!",
                    "자신의 일과 생활에 대해 책임을 지고, 자기 자신을 관리하며 발전시키려고 노력해요!",
                    "효율적인 방법으로 일 처리를 하여 프로젝트 시 다들 같이 하고 싶어해요",
                    "복잡하거나 과도한 것 보다는 깔끔하고 단순한 스타일을 선호하며, 필요한 것에 집중하고 불필요한 것을 줄이곤 해요!"
                ]
            },
            "bad": "허당왕",
            "good": "모범왕"
        },
        {
            "name": "열광왕",
            "img" : "./image/열광왕.jpg",
            "description" : {
                "title": "내 새꾸들이 최고야..!!!",
                "content": "당신의 유형은 열광왕 입니다!",
                "tag": [
                    "과몰입",
                    "굿즈",
                    "열정",
                    "덕후..?"
                ],
                "personal": [
                    "한 가지에 빠지면 다른 유형보다 더 빠른 속도로 몰입하는 경향이 있어요! 하지만 그 열정이 오래가지 않기도 해요.",
                    "보통 자신이 빠진 것에 대한 물건이 집에 하나씩은 무조건 있어요. 하지만 물건을 점점 사다보면 텅장이 될수도..?!",
                    "푹 빠진 분야에 열정이 아주 많아서 시간이 날 때마다 최애를 계속 찾아보곤 해요",
                    "덕후일 가능성이 높아요…(?)"
                ]
            },
            "bad": "모범왕",
            "good": "정보왕"
        },
        {
            "name": "조용왕",
            "img" : "./image/조용왕.jpg",
            "description" : {
                "title": "나만의 공간은 필수야..!!",
                "content": "당신의 유형은 조용왕 입니다!",
                "tag": [
                    "관찰력",
                    "에너지 충전",
                    "내성적",
                    "신중"
                ],
                "personal": [
                    "학교 첫 날, 혼자서 반 친구들을 관찰하곤 해요.",
                    "친구들과 놀고 난 후 에너지가 소진돼서 혼자서 에너지를 충전할 시간이 필요해요!",
                    "힘든 일이 있어도 다른 사람에게 잘 털어놓지 않아서 가끔 보면 알 수 없는 캐릭터이기도 해요",
                    "행동하기 전에 신중하게 생각하고 결정을 내리는 타입이에요!"
                ]
            },
            "bad": "열광왕",
            "good": "공감왕"
        },
        {
            "name": "정보왕",
            "img" : "./image/정보왕.jpg",
            "description" : {
                "title": "모든 정보는 나에게로! 얘들아 좋은 소식!",
                "content": "당신의 유형은 정보왕 입니다!",
                "tag": [
                    "모든것",
                    "인싸",
                    "트렌디",
                    "의리"
                ],
                "personal": [
                    "오늘 급식은 뭔지, 반 친구들 생일은 언제인지 거의 모든 걸 알고 있어요! 가끔 선생님들이 오늘 급식은 뭔지 여쭤보시기도 해요.",
                    "보통 반에서 목소리가 큰 인싸! 포지션을 맡고 있어요.",
                    "기분이 안 좋을 때는 마음이 맞는 친구들과 요즘 트렌디한 이야기를 하며 놀아요!",
                    "사실 입이 가벼운 것 같지만..? 은근히 무거운.. 의리 넘치는 친구예요."
                ]
            },
            "bad": "조용왕",
            "good": "열광왕"
        },
        {
            "name": "모범왕",
            "img" : "./image/모범왕.jpg",
            "description" : {
                "title": "모르는 문제는 나에게",
                "content": "당신의 유형은 모범왕 입니다!",
                "tag": [
                    "열공",
                    "리더",
                    "적극",
                    "성실"
                ],
                "personal": [
                    "언제나 단정한 모습이며 똑똑한 이미지로 공부를 열심히 하고 성적이 좋은 편이에요.",
                    " 정확한 판단을 내리며 규칙을 중요하게 생각하기 때문에 가끔 잔소리처럼 쓴소리를 하곤 해요.",
                    "수업에 적극적으로 참여하고 질문이 많으며 선생님의 질문에도 답을 잘해요.",
                    "근면성실하며 남들을 잘 돕는 착한 친구예요."
                ]
            },
            "bad": "열광왕",
            "good": "깔끔왕"
        },
        {
            "name": "돌아이",
            "img" : "./image/돌아이.jpg",
            "description" : {
                "title": "저세상 텐션하면 나!",
                "content": "당신의 유형은 돌아이 입니다!",
                "tag": [
                    "분위기메이커",
                    "인기",
                    "호기심",
                    "사차원"
                ],
                "personal": [
                    "흥이 많아 주변 분위기를 살리며 남들을 즐겁게 하는 분위기 메이커예요.",
                    " 가끔 총대를 메고 사람들에게 말 거는 것을 좋아하며 주변에 사람이 많고 인기가 많아요.",
                    "지루한 것을 싫어하며 호기심이 많고 활동적인 편이에요.",
                    "자유로운 영혼으로 가끔 사차원이라는 말을 들곤 해요."
                ]
            },
            "bad": "허당왕",
            "good": "열광왕"
        },
        {
            "name": "공감왕",
            "img" : "./image/공감왕.jpg",
            "description" : {
                "title": "상대방이 울면 같이 울어주는 공감능력 100%",
                "content": "당신의 유형은 공감왕 입니다!",
                "tag": [
                    "친구관계",
                    "기억력",
                    "리더",
                    "인기"
                ],
                "personal": [
                    "친구들의 이야기를 공감하며 들어주고 반응해주는 나를 발견할 수 있을 거에요. 이때 친구가 고맙다고 하면 기분이 너무 좋아져요!",
                    "보통 이 유형은 기억력이 좋아서 친구들의 사소한 것도 잘 기억해요.",
                    "반에서 자신의 할 일을 다하는 회장(리더) 포지션을 가지고 있어요!",
                    "밝고 온화한 성격으로 친구는 물론! 선생님들께도 인기가 많아요."
                ]
            },
            "bad": "열광왕",
            "good": "허당왕"
        },
        {
            "name": "허당왕",
            "img" : "./image/허당왕.jpg",
            "description" : {
                "title": "ㅇㅓ..? 어디갔지…??",
                "content": "당신의 유형은 허당왕 입니다!",
                "tag": [
                    "어디갔지?",
                    "덤벙",
                    "낙관적",
                    "허당"
                ],
                "personal": [
                    "물건을 자꾸 잃어버리거나 까먹곤 해요.",
                    "덤벙거리거나 실수를 많이 해요. 그래서 남보다 경험해본 일들이 많아요.",
                    "실수를 많이 하지만 항상 긍정적이고 낙관적이에요. 그래서 친구들에게 힘이 되기도 해요!",
                    "허당끼있는 모습이 매력적이라 당신을 귀여워하는 친구가 많을 거예요!"
                ]
            },
            "bad": "돌아이",
            "good": "보부상"
        },
        {
            "name": "보부상",
            "img" : "./image/보부상.jpg",
            "description" : {
                "title": "필요한 거 있다고??  다 나한테 있어!",
                "content": "당신의 유형은 보부상 입니다!",
                "tag": [
                    "마음씨가 넓은",
                    "이것저것",
                    "주변관심",
                    "혹시몰라"
                ],
                "personal": [
                    "친구들에게 많은 것을 빌려주어 마음씨가 넓은 유형이기도 해요.",
                    "가끔 보면 ‘이걸 왜 가지고 있지..?’라는 생각이 들 만큼 여러가지 물건을 가지고 있어요.",
                    "주변에 관심이 많아서 곤경에 처한 친구가 필요한 물건이 있을 때마다 나타나서 필요한 것을 빌려줘요.",
                    "쓸데없는 물건도 혹시나 몰라서 가방에 챙겨요. 하지만 이 물건이 가끔 필요할 때가 생기기도 한대요!"
                ]
            },
            "bad": "깔끔왕",
            "good": "허당왕"
        }
    ]
};
