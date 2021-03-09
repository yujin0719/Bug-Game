# 순수 Javascript로만 구현한 벌레잡기 게임
* * *
<img src="/demo/init.png" width="60%" height="40%" alt="main screen"></img>

## 프로젝트 소개
* * *
<img src="/demo/game.png" width="40%" height="30%" alt="game"></img>
<img src="/demo/popup.png" width="30%" height="10%" alt="popup"></img>

> 벌레잡기 게임은 random으로 벌레와 벌레의 개수가 정해지면 잔디에서 해당 벌레를 제한시간 안에 제거하는 게임입니다.

⭐️ __1. field에 벌레 추가__

    각각 랜덤한 개수의 벌레들이 잔디에 추가
  

⭐️ __2. 지정된 벌레 제거__

    지정된 벌레만 제거해야하고, 잘못된 벌레를 제거하거나 제한시간에 제거하지 못하면 실패
   
  
⭐️ __3. popup 창 기능__

    게임 성공, 실패 또는, 게임을 정지할 경우 popup 창 생성
  

⭐️ __4. 배경, click, popup 사운드 추가__



## Tech
* * *
<img src="/demo/tech1.png" width="40%" height="30%" alt="front-end"></img>
<img src="/demo/tech2.jpg" width="30%" height="10%" alt="github"></img>


## 느낀점
* * *
기능 구현하는 것은 수월하게 했지만, 모듈화 시키는 작업에서 많은 시간이 걸렸다.

main을 조금 더 간단하게 만들기 위해 game에 관한 모듈을 하나 만들기 위한 시도를했지만, 잘 되지 않았다. 

이번 프로젝트는 모든 기능을 먼저 main에서 만든 후 모듈화 시켰는데 

다음 프로젝트는 모듈로 먼저 나눠서 구조를 분석한 뒤 개발을 해야겠다.  
