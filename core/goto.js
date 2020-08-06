function gotofestival(fest) {
    let w = false;
    for (let i = 0; i < VISITED_FESTIVALS; i ++)
        if (festivals_history[i] == fest)
            w = true;

    if (player.Money < festivals[fest][1])
        alert('Ești sărak, n-ai bani nici după ce să bei apă.');
    else if (w) {
        alert("La anu' de acum boss!");
    }
    else {
        player.Happiness += festivals[fest][2];
        festivals_history[VISITED_FESTIVALS ++] = fest;

        let festival = document.getElementById('festival' + fest);
        festival.classList.add('disabled');

        e = new Event("🎫 Festival", "Ai fost la festivalul " + festivals[fest][0] + ".", "NOTHING", "Ok");
        e.view();

        view_page('game');
    }
}
