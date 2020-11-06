class Game {

    carta = "pictures/carta.jpg";
    constructor() {
        const tardelli = "pictures/tardelli.jpg";
        const grosso = "pictures/grosso.jpg";
        const toro = "pictures/torino.jpg";
        const cassano = "pictures/cassano.jpg";
        const baggio = "pictures/baggio.jpg"
        const rossi = "pictures/rossi.jpg";

        this.fotos = [
            {
                id: 1,
                picture: tardelli,
                src: "https://youtu.be/CVDQbQiD1uk"
            },
            {
                id: 1,
                picture: tardelli,
                src: "https://youtu.be/CVDQbQiD1uk"
            },
            {
                id: 2,
                picture: grosso,
                src: "https://www.youtube.com/watch?v=1YJOrPA4dGM"
            },
            {
                id: 2,
                picture: grosso,
                src: "https://www.youtube.com/watch?v=1YJOrPA4dGM"
            },
            {
                id: 3,
                picture: toro,
                src: "https://www.youtube.com/watch?v=Rk2OZwm9Wkc"
            },
            {
                id: 3,
                picture: toro,
                src: "https://www.youtube.com/watch?v=Rk2OZwm9Wkc"
            },
            {
                id: 4,
                picture: cassano,
                src: "https://www.youtube.com/watch?v=lUsOm6rhmkA"
            },
            {
                id: 4,
                picture: cassano,
                src: "https://www.youtube.com/watch?v=lUsOm6rhmkA"
            },
            {
                id: 5,
                picture: baggio,
                src: "https://www.youtube.com/watch?v=hqd-c44ME08"
            },
            {
                id: 5,
                picture: baggio,
                src: "https://www.youtube.com/watch?v=hqd-c44ME08"
            },
            {
                id: 6,
                picture: rossi,
                src: "https://www.youtube.com/watch?v=7qv-ZbqoMbI&list=PLFvNxeTPgq6b1hpvlUfg2QcQJxwQXUo99&index=138&app=desktop"
            },
            {
                id: 6,
                picture: rossi,
                src: "https://www.youtube.com/watch?v=7qv-ZbqoMbI&list=PLFvNxeTPgq6b1hpvlUfg2QcQJxwQXUo99&index=138&app=desktop"
            },
        ];
        this.fotos.sort(function () {
            return Math.random() - 0.5
        });
        this.toques = 0;
        this.dibujarCartas();
    }

    dibujarCartas() {
        for(let i=0; i< this.fotos.length; i++){
            if(i === this.fotos.length / 2) {
                document.write("<br>");
            }
            document.write(
                "<a id='a-" +this.fotos[i].id + "-" + i + "' onclick=game.darVuelta('" + "img-" + this.fotos[i].id + "-" + i + "')>" +
                "<img id='img-" + this.fotos[i].id + "-" + i + "' src='"+this.carta +"'>" +
                "</a>"
            );
        }
    }

    darVuelta(id) {
        var numb = parseInt(id.split("-")[2]);
        
        if (numb === 0) {
            this.cambiarFoto(id, numb)
        }
        else {
            for(let i=0; i< this.fotos.length; i++) {
                if (i === numb) {
                    this.cambiarFoto(id, numb)
                }
            }
        }
    }

    cambiarFoto(id, numero) {
        $("#" + id).attr("src",this.fotos[numero].picture);
    }
}