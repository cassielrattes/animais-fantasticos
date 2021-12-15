export default function fetchBitcoin(url, target) {
    fetch(url)
        .then((r) => r.json())
        .then((bitcoin) => {
            const btcPreco = document.querySelector(target);
            btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
        })
        .catch((err) => {
            console.log(Error(err));
        });
}
