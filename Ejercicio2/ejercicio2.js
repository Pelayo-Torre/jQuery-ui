class Game {

    carta = "pictures/carta.jpg";
    cartasLevantadas = [];

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
                src: "https://youtu.be/CVDQbQiD1uk",
                solved: false
            },
            {
                id: 1,
                picture: tardelli,
                src: "https://youtu.be/CVDQbQiD1uk",
                solved: false
            },
            {
                id: 2,
                picture: grosso,
                src: "https://www.youtube.com/watch?v=1YJOrPA4dGM",
                solved: false
            },
            {
                id: 2,
                picture: grosso,
                src: "https://www.youtube.com/watch?v=1YJOrPA4dGM",
                solved: false
            },
            {
                id: 3,
                picture: toro,
                src: "https://www.youtube.com/watch?v=Rk2OZwm9Wkc",
                solved: false
            },
            {
                id: 3,
                picture: toro,
                src: "https://www.youtube.com/watch?v=Rk2OZwm9Wkc",
                solved: false
            },
            {
                id: 4,
                picture: cassano,
                src: "https://www.youtube.com/watch?v=lUsOm6rhmkA",
                solved: false
            },
            {
                id: 4,
                picture: cassano,
                src: "https://www.youtube.com/watch?v=lUsOm6rhmkA",
                solved: false
            },
            {
                id: 5,
                picture: baggio,
                src: "https://www.youtube.com/watch?v=hqd-c44ME08",
                solved: false
            },
            {
                id: 5,
                picture: baggio,
                src: "https://www.youtube.com/watch?v=hqd-c44ME08",
                solved: false
            },
            {
                id: 6,
                picture: rossi,
                src: "https://www.youtube.com/watch?v=7qv-ZbqoMbI&list=PLFvNxeTPgq6b1hpvlUfg2QcQJxwQXUo99&index=138&app=desktop",
                solved: false
            },
            {
                id: 6,
                picture: rossi,
                src: "https://www.youtube.com/watch?v=7qv-ZbqoMbI&list=PLFvNxeTPgq6b1hpvlUfg2QcQJxwQXUo99&index=138&app=desktop",
                solved: false
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

    async darVuelta(id) {
        if(this.cartasLevantadas.length < 2) {
            this.toques++;
            var numb = parseInt(id.split("-")[2]);
            if (numb === 0) {
                this.cambiarFoto(id, numb)
            } else {
                for (let i = 0; i < this.fotos.length; i++) {
                    if (i === numb) {
                        this.cambiarFoto(id, numb);
                    }
                }
            }
            if (this.cartasLevantadas.length > 1) {
                var changed = false;
                if (this.cartasLevantadas[0].split("-")[1] === id.split("-")[1]
                    && this.cartasLevantadas[0] !== this.cartasLevantadas[1]) {
                    for (let i = 0; i < this.fotos.length; i++) {
                        if (this.fotos[i].id === parseInt(id.split("-")[1])) {
                            this.fotos[i].solved = true;
                            changed = true;
                            this.cartasLevantadas = [];
                        }
                    }
                }
                if (!changed) {
                    await new Promise(r => setTimeout(r, 1000));
                    this.bajarCartas();
                    this.cartasLevantadas = [];
                }
            }


            if (this.isFinish()) {
                this.rellenarVideos();
                $("#result").append("<div>¡¡Juego finalizado con " + this.toques + " toques!!</div>");
            }
        }
    }

    bajarCartas() {
        for(let i=0; i< this.fotos.length; i++) {
            if (!this.fotos[i].solved) {
                $("#img-" + this.fotos[i].id + "-" + i).attr("src", this.carta);
            }
        }
    }

    cambiarFoto(id, numero) {
        var cont = true;
        for(let i=0; i< this.fotos.length; i++) {
            if(this.fotos[i].solved && this.fotos[i].id === parseInt(id.split("-")[1])) {
                cont = false;
            }
        }
        if(cont) {
            var imagen = document.getElementById(id).src;
            this.cartasLevantadas.push(id);
            if(imagen.includes(this.carta)) {
                $("#" + id).attr("src",this.fotos[numero].picture);
            } else {
                $("#" + id).attr("src",this.carta);
            }
        }
    }

    isFinish() {
        for(let i=0; i< this.fotos.length; i++) {
            if(!this.fotos[i].solved) {
                return false;
            }
        }
        return true;
    }

    rellenarVideos(){
        for(let i=0; i< this.fotos.length; i++) {
            if(i === this.fotos.length / 2) {
                document.write("<br>");
            }
            document.write(
                "<a id='a-" +this.fotos[i].id + "-" + i + "' href='" + this.fotos[i].src + "'>" +
                "<img id='img-" + this.fotos[i].id + "-" + i + "' src='"+this.fotos[i].picture +"'>" +
                "</a>"
            );
        }
        document.write("<div id='result'> </div>");
    }
}