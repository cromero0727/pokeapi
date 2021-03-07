$(document).ready(function() {

    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151",
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            const dataArreglo = data.results; //Arreglo de objetos
            const nombresPoke = dataArreglo.map(function(np) {

                let nombresAlta = np.name.charAt(0).toUpperCase() + np.name.slice(1);
                return nombresAlta;

            });

            for (const i of nombresPoke) {
                $("#selectPoke").append(`<option value="${i}">${i}</option>`);

            }


        }

    });

    $("#btnBuscarInput").click(function() {
        const nombrePokemon = $("#inputPoke").val();
        const nombrePokemonNormal = nombrePokemon.trim().toLowerCase()
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemonNormal}`,
            type: "GET",
            dataType: "JSON",
            success: function(data) {
                const nombrePokemon = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                $("#nombrePokemon").text(nombrePokemon);

                const spriteUno = data.sprites.front_default;
                $("#imgPoke1").attr("src", spriteUno);

                const spriteDos = data.sprites.back_default;
                $("#imgPoke2").attr("src", spriteDos);

                const pokeDex = data.id;
                $("#pokeDex").text(pokeDex);

                const tipo = data.types[0].type.name;
                $("#tipo").text(tipo);

                const pesoPoke = data.weigth;
                $("#peso").text(pesoPoke);

                const habilidad = data.abilities[0].ability.name;
                $("#habilidad").text(habilidad);

                const peso = data.weight;
                $("#peso").text(`${peso} lbs`);

                const salud = data.stats[0].base_stat;
                $("#salud").text(salud);

                const ataque = data.stats[1].base_stat;
                $("#ataque").text(ataque);

                const defensa = data.stats[2].base_stat;
                $("#defensa").text(defensa);

                const velocidad = data.stats[5].base_stat;
                $("#velocidad").text(velocidad);





                let nombresG = [
                    'salud',
                    'ataque',
                    'defensa',
                    'peso',
                    'velocidad'
                ];
                let dataG = [
                    salud,
                    ataque,
                    defensa,
                    peso,
                    velocidad
                ];

                // var poke_name = data.name.toUpperCase();
                /* Chart JS */
                var ctx = document.querySelector('#myChart');
                var myChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: nombresG,
                        // labels: ["Ataque", "Defensa", "Velocidad", "Salud"],
                        datasets: [{
                            data: dataG,
                            label: nombrePokemon,
                            backgroundColor: 'rgba(139, 192, 255, 0.25)',
                            borderColor: 'rgba(0, 177, 255, 0.5)',
                        }]
                    },
                    options: {
                        scale: {
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 200
                            }
                        }
                    }
                });

                /* Grafico*/



            }
        })
    });

    $("#selectPoke").on("change", function(sp) {
        const seleccionPokemon = sp.target.value;
        const seleccionPokemonNormal = seleccionPokemon.toLowerCase();


        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${seleccionPokemonNormal}`,
            type: "GET",
            dataType: "JSON",
            success: function(data) {
                console.log(data);
                const nombrePokemon = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                $("#nombrePokemon").text(nombrePokemon);

                const spriteUno = data.sprites.front_default;
                $("#imgPoke1").attr("src", spriteUno);

                const spriteDos = data.sprites.back_default;
                $("#imgPoke2").attr("src", spriteDos);

                const pokeDex = data.id;
                $("#pokeDex").text(pokeDex);

                const tipo = data.types[0].type.name;
                $("#tipo").text(tipo);

                const habilidad = data.abilities[0].ability.name;
                $("#habilidad").text(habilidad);

                const peso = data.weight;
                $("#peso").text(`${peso} lbs`);

                const salud = data.stats[0].base_stat;
                $("#salud").text(salud);

                const ataque = data.stats[1].base_stat;
                $("#ataque").text(ataque);

                const defensa = data.stats[2].base_stat;
                $("#defensa").text(defensa);

                const velocidad = data.stats[5].base_stat;
                $("#velocidad").text(velocidad);




                let nombresG = [
                    'salud',
                    'ataque',
                    'defensa',
                    'peso',
                    'velocidad'
                ];
                let dataG = [
                    salud,
                    ataque,
                    defensa,
                    peso,
                    velocidad
                ];

                // var poke_name = data.name.toUpperCase();
                /* Chart JS */
                var ctx = document.querySelector('#myChart');
                var myChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: nombresG,
                        // labels: ["Ataque", "Defensa", "Velocidad", "Salud"],
                        datasets: [{
                            data: dataG,
                            label: nombrePokemon,
                            backgroundColor: 'rgba(139, 192, 255, 0.25)',
                            borderColor: 'rgba(0, 177, 255, 0.5)',
                        }]
                    },
                    options: {
                        scale: {
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 200
                            }
                        }
                    }
                });

                /* Grafico*/


            }

        });

    });






});