using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Numerics;
using System.Threading.Tasks;

public class ConectWallet : MonoBehaviour
{
    // URL Terra Blockchain Node
    private string terraNode = "https://lcd.terra.dev";

    public async Task ConnectWallet()
    {
        // Koneksi Ke Wallet
        Application.OpenURL("https://station.terra.money/connect");
        Debug.Log("Wallet Connection Request Sent!");
    }
}
