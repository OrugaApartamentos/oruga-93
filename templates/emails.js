
const templateEmail = `<!DOCTYPE html>
<html lang=&quot;en-US&quot;>

<head>
    <meta charset=&quot;utf-8&quot;>
</head>

<body>

    <div class="container">
        <div class="content">

            <table bgcolor="#2d3583" width="100%" border="0" cellspacing="0" cellpadding="0"
                style="min-width:332px;max-width:700px;border:1px solid #e0e0e0;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px">
                <tbody>
                    <tr>
                        <td height="30px" colspan="3"></td>
                    </tr>
                    <tr>
                        <td width="32px"></td>
                        <td
                            style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:22px;color:#FBFCFC;line-height:1.25;font-weight: bold;">
                            ORUGA 94
                        </td>
                        <td width="32px"></td>
                    </tr>
                    <tr>
                        <td height="10px" colspan="3"></td>
                    </tr>
                </tbody>
            </table>

            <table bgcolor="#FAFAFA" width="100%" border="0" cellspacing="0" cellpadding="0"
                style="min-width:332px;max-width:700px;border:1px solid #f0f0f0;border-bottom:1px solid #c0c0c0;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px">
                <tbody>
                    <tr height="16px">
                        <td width="32px" rowspan="3"></td>
                        <td></td>
                        <td width="32px" rowspan="3"></td>
                    </tr>
                    <tr>
                        <td>
                            <table style="min-width:300px" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                    <tr>
                                        <td
                                            style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5">
                                            <br>
                                            {name}, con teléfono {tel} y correo {email} solicita información sobre el
                                            proyecto ORUGA 94.
                                        </td>

                                    </tr>
                                    <tr>
                                        <td
                                            style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5;text-align: justify;">


                                        </td>
                                    </tr>
                                    <tr height="32px"></tr>
                                    <tr>
                                        <td
                                            style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5">
                                            <br>
                                        </td>
                                    </tr>
                                    <tr height="16px"></tr>
                                    <tr>
                                        <td>
                                            <table
                                                style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;color:#b9b9b9;line-height:1.5">
                                                <tbody>
                                                    <tr>
                                                        <td>No es posible enviar respuestas a esta dirección de correo
                                                            electrónico.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr height="32px"></tr>
                </tbody>
            </table>

        </div>
    </div>
</body>

</html>`;