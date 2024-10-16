function convertToBinary() {
  const ip = document.getElementById("ipAddress").value;
  const resultDiv = document.getElementById("result");
  const ipParts = ip.split(".");

  if (
    ipParts.length !== 4 ||
    ipParts.some((part) => isNaN(part) || part < 0 || part > 255)
  ) {
    resultDiv.innerHTML = "Please enter a valid IP address!";
    return;
  }

  const binaryParts = ipParts.map((part) => {
    let binary = parseInt(part).toString(2);
    return binary.padStart(8, "0");
  });

  const binaryIp = binaryParts.join(".");
  resultDiv.innerHTML = `Binary IP: ${binaryIp}`;
}
