  var cards = document.getElementsByClassName("memory-text");
  var check = false;

  /*
   *
   *Shows and hies the solution for the memory game.
   */
  function solution() {
      var i;
      if (check == false) {
          for (i = 0; i < cards.length; i++) {
              cards[i].style.visibility = "visible";
          }
          check = true;
      } else if (check == true) {
          for (i = 0; i < cards.length; i++) {
              cards[i].style.visibility = "hidden";
          }
          check = false;
      }
  }


  function game() {
      document.addEventListener
  }

  var usedCards = new Array()
  var cardNames = new Array('Schmetterling', 'Wecker', 'Schiff', 'Auto', 'Schach-Pferd', 'Brille', 'Haus', 'Kleeblatt', 'Video-Kamera', 'Sammy', 'Hufeisen', 'Fisch', 'Stift', 'Planet', 'Eis', 'Socke', 'Muschel', 'Herz', 'Pfeife', 'Kanne', 'Fotoaparat', 'Gl�hbirne', 'Herr Kreisler', 'Apfel', 'Suppe', 'Sonne', 'Herbst-Blatt', 'Elefant', 'Verbrecher', 'Totensch�del');
  var cardImages = new Array();
  var cardValues = new Array();
  var usedCardsName = new Array();
  var openCards = 0;
  var isOpenCard = -1;
  var is2ndOpenCard = -1;
  var checkedCards = new Array();
  var right = 0;
  var wrong = 0;

  var cntImages = 32;
  var cntCards = memwidth * memheight;
  var cntPairs = cntCards / 2;

  function xalert(str) {
      document.getElementById('debug').value += str;
  }

  function xshuffleArray(arr) {
      var high, here, swap;
      for (high = arr.length - 1; high > 0; high--) {
          here = Math.floor(Math.random() * (high + 1)); //random number will fall between 0-high
          //alert("hi:"+high + ", here:" + here);
          swap = arr[here];
          arr[here] = arr[high];
          arr[high] = swap;
      }
  }

  function shuffleArray(arr, arr2) {
      var j, swap;
      for (i = 0; i <= arr.length - 1; i++) {
          j = Math.floor(Math.random() * cntPairs);
          swap = arr[i];
          arr[i] = arr[j];
          arr[j] = swap;
          //shuffle 2nd array in same order
          if (arr2) {
              swap = arr2[i];
              arr2[i] = arr2[j];
              arr2[j] = swap;
          }
      }
  }

  function init() {
      // Spielstand auf Null setzen und Variablen initialisieren
      document.getElementById('right').value = 0;
      document.getElementById('wrong').value = 0;
      var openCards = 0;
      var isOpenCard = -1;
      var is2ndOpenCard = -1;

      //festlegen, welche Karten verwendet werden
      for (i = 0; i < cntImages; i++) {
          usedCards[i] = i;
      }
      shuffleArray(usedCards, cardNames);
      for (i = 0; i < cntPairs; i++) {
          usedCardsName[i] = cardNames[usedCards[i]];
      }

      //Karten vorladen
      for (i = 0; i < cntPairs; i++) {
          cardImages[i] = new Image();
          cardImages[i].src = "images/" + (usedCards[i] + 1) + imgext;
      }

      //Karten nacheinander verteilen
      document.memoryform.status.value = "Karten zuordnen...";
      var j = 0;
      var img;
      for (i = 0; i < cntCards; i++) {
          cardValues[i] = j;
          if (j >= cntPairs - 1) {
              j = -1;
          }
          j++;
          // init
          checkedCards[i] = 0;
          img = document.getElementById("img_" + i);
          img.className = "card_0";
          img.title = "";
      }
      shuffleArray(cardValues);

      //closeAllUncheckedCards();

      document.memoryform.status.value = "Los gehts.";
      document.getElementById('restart').disabled = false;
  }

  function setCardStyle(imgId, stat) {
      if (imgId == -1) {
          for (i = 0; i <= (memwidth * memheight - 1); i++) {
              if (checkedCards[i] != 1) document.getElementById("img_" + i).className = "card_" + stat;
          }
      } else {
          document.getElementById("img_" + imgId).className = "card_" + stat;
      }
  }

  function clickCard(imgId) {
      //alert(imgId);
      if ((isOpenCard == imgId && openCards != 2) || checkedCards[imgId] == 1) {
          // nichts
          return;
      } else if (openCards == 2) {
          // Klick zum Weiterspielen
          playSound('click');
          setCardStyle(-1, 0);
          openCards = 0;
          isOpenCard = -1;
          //is2ndOpenCard = -1;
          closeAllUncheckedCards();
          document.memoryform.status.value = "Karte w�hlen...";
          return;
      } else if (openCards == 1) {
          // zweite Karte aufdecken
          document.memoryform.status.value = "...";
          document.getElementById("img_" + imgId).className = 'card_1';
          setCardStyle(-1, 1);
          try {
              document.getElementById("img_" + imgId).src = cardImages[cardValues[imgId]].src;
          } catch (e) {
              alert("imgId: " + imgId + ", cardValues[imgId]: " + cardValues[imgId]);
          }
          //openCards = 2;
          //is2ndOpenCard = imgId;
          if (cardValues[isOpenCard] == cardValues[imgId]) {
              // Richtig
              playSound('right');
              document.memoryform.status.value = "Richtig. N�chste Karte w�hlen ...";
              val = document.getElementById('right').value;
              val++;
              document.getElementById('right').value = val;

              if (val == memwidth * memheight / 2) {
                  // gewonnen
                  playSound('completed');
                  var num = parseInt(document.getElementById('right').value) + parseInt(document.getElementById('wrong').value);
                  var pairs = memwidth * memheight / 2;
                  var perc = Math.round((3 * pairs - num) * 100 / (3 * pairs - pairs));

                  //var perc = num * 100 / (memwidth*memheight/2);
                  document.memoryform.status.value = "Fertig. " + num + " Versuche, " + perc + "%.";
              }
              checkedCards[imgId] = 1;
              checkedCards[isOpenCard] = 1;

              setCardStyle(-1, 0);
              openCards = 0;
              isOpenCard = -1;
              //is2ndOpenCard = -1;
              closeAllUncheckedCards();
              return;

          } else {
              playSound('wrong');
              document.memoryform.status.value = "Falsch. Karte klicken zum Weiterspielen...";
              val = document.getElementById('wrong').value;
              val++;
              document.getElementById('wrong').value = val;
          }
      } else if (openCards == 0) {
          // erste Karte aufdecken
          playSound('click');
          document.memoryform.status.value = "zweite Karte w�hlen...";
          //document.getElementById("img_" + imgId).className = 'card_1';
          setCardStyle(imgId, 1);
          //alert(cardValues[imgId]);
          //alert(cardImages[cardValues[imgId]]);
          document.getElementById("img_" + imgId).src = cardImages[cardValues[imgId]].src;
          isOpenCard = imgId;
          //openCards = 1;
      }
      openCards++;
  }

  function closeAllUncheckedCards() {
      for (i = 0; i <= (memwidth * memheight - 1); i++) {
          if (checkedCards[i] != 1) {
              document.getElementById("img_" + i).src = cardImageBack.src;
          }
      }
  }

  function generateCardTable() {
      var imgId = 0;
      document.write("<table cellspacing=\"0\" cellpadding=\"5\" border=\"0\"");
      for (i = 1; i <= memheight; i++) {
          document.write("<tr>");
          for (j = 1; j <= memwidth; j++) {
              //document.write("<td>" + i + ", " + j + "</td>");
              document.write("<td><img src=\"" + cardImageBack.src + "\" id=\"img_" + imgId + "\" width=\"" + cardwidth + "\" height=\"" + cardheight + "\" border=\"0\" onclick=\"clickCard(" + imgId + ");\" class=\"card_0\"></td>");
              imgId++;
          }
          document.write("</tr>");
      }
      document.write("</table>");
  }

  function playSound(soundname) {
      // Tja, funktioniert anscheinend nur im MSIE
      if (navigator.appName != 'Microsoft Internet Explorer') return;
      if (document.getElementById('sound_' + soundname)) document.getElementById('sound_' + soundname).play();
  }

  function cheat() {
      for (i = 0; i <= (memwidth * memheight - 1); i++) {
          if (cardNames[cardValues[i] - 1]) {
              document.getElementById("img_" + i).title = cardNames[cardValues[i] - 1];
          } else {
              document.getElementById("img_" + i).title = cardValues[i];
          }
      }
  }
