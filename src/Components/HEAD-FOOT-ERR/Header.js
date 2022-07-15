import React, { useState } from "react";

function Header() {
  const [flagImg, setflagImg] = useState(
    "https://raw.githubusercontent.com/MeRahulAhire/intl-tel-code-select/master/phone_icon.png"
  );
  const [countryCodeValue, setcountryCodeValue] = useState("");
  const [countryCValue, setcountryCValue] = useState("");
  const [phone, setphone] = useState("");
  const selectCountryHandler = (e) => {
    setcountryCodeValue(e.target.value);
    setcountryCValue("+" + e.target.value);
  };
  const phoneHandler = (e) => {
    setphone(e.target.value);
  };
  const countryFlagHandler = () => {
    const select = document.querySelector("#country");
    setflagImg(
      `https://flagpedia.net/data/flags/h80/${select.selectedOptions[0].dataset.countrycode.toLowerCase()}.webp`
    );
  };

  return (
    <div class="home">
      <div class="page-wrapper">
        <div id="myModal" class="modal fade">
          <div class="modal-dialog modal-login">
            <div class="modal-content">
              <div class="login-popup">
                <div class="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                  <ul class="nav nav-tabs text-uppercase" role="tablist">
                    <li class="nav-item">
                      <a href="#sign-in" class="nav-link active">
                        Sign In
                      </a>
                    </li>
                    <li class="nav-item">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        &times;
                      </button>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div class="tab-pane active" id="sign-in">
                      <div class="form-group">
                        <label>
                          Adresse e-mail <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="username"
                          id="username"
                          required
                        />
                      </div>
                      <div class="form-group mb-0">
                        <label>
                          Mot de passe <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="password"
                          id="password"
                          required
                        />
                      </div>
                      <div class="form-checkbox d-flex align-items-center justify-content-between">
                        <label for="remember"></label>
                        <a href="#">mot de passe oublié?</a>
                      </div>
                      <a href="#" class="btn btn-primary">
                        S'identifier
                      </a>
                    </div>
                  </div>
                  <p class="text-center">
                    Connectez-vous avec un compte social
                  </p>
                  <div class="social-icons social-icon-border-color d-flex justify-content-center">
                    <a
                      href="#"
                      class="social-icon social-facebook w-icon-facebook"
                    ></a>
                    <a
                      href="#"
                      class="social-icon social-twitter w-icon-twitter"
                    ></a>
                    <a
                      href="#"
                      class="social-icon social-google fab fa-google"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="myModal2" class="modal fade">
          <div class="modal-dialog modal-login">
            <div class="modal-content">
              <div class="login-popup">
                <div class="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                  <ul class="nav nav-tabs text-uppercase" role="tablist">
                    <li class="nav-item">
                      <a href="#sign-in" class="nav-link active">
                        Sign Up
                      </a>
                    </li>
                    <li class="nav-item">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        &times;
                      </button>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div class="tab-pane active" id="sign-up">
                      <div class="form-group">
                        <div
                          className="tel-box"
                          style={{
                            display: "flex",
                            margin: "1rem",
                            marginTop: 0,
                          }}
                        >
                          <div
                            onChange={countryFlagHandler}
                            style={{
                              margin: "1rem",
                              width: "60px",
                              height: "40px",
                            }}
                          >
                            <img
                              style={{
                                width: "60PX",
                              }}
                              class="form-control"
                              src={flagImg}
                              alt="country-flag"
                              id="img"
                              className="flag-img"
                            />
                            <select
                              style={{
                                fontFamily: "'Lato', sansSerif",
                                width: "60px",
                                height: "40px",
                                background: "none",
                                position: "absolute",
                                border: "none",
                                fontSize: "1rem",
                                paddingLeft: "4rem",
                                outline: "none",
                              }}
                              id="country"
                              onChange={selectCountryHandler}
                              defaultValue={countryCodeValue}
                            >
                              <option value="" hidden>
                                Select Country
                              </option>
                              <option data-countryCode="AF" value="93">
                                Afghanistan (+93)
                              </option>
                              <option data-countryCode="AL" value="355">
                                Albania (+355)
                              </option>
                              <option data-countryCode="DZ" value="213">
                                Algeria (+213)
                              </option>
                              <option data-countryCode="AS" value="1684">
                                American Samoa (+1684)
                              </option>
                              <option data-countryCode="AD" value="376">
                                Andorra (+376)
                              </option>
                              <option data-countryCode="AO" value="244">
                                Angola (+244)
                              </option>
                              <option data-countryCode="AI" value="1264">
                                Anguilla (+1264)
                              </option>
                              <option data-countryCode="AQ" value="672">
                                Antartica (+672)
                              </option>
                              <option data-countryCode="AG" value="1268">
                                Antigua &amp; Barbuda (+1268)
                              </option>
                              <option data-countryCode="AR" value="54">
                                Argentina (+54)
                              </option>
                              <option data-countryCode="AM" value="374">
                                Armenia (+374)
                              </option>
                              <option data-countryCode="AW" value="297">
                                Aruba (+297)
                              </option>
                              <option data-countryCode="AU" value="61">
                                Australia (+61)
                              </option>
                              <option data-countryCode="AT" value="43">
                                Austria (+43)
                              </option>
                              <option data-countryCode="AZ" value="994">
                                Azerbaijan (+994)
                              </option>
                              <option data-countryCode="BS" value="1242">
                                Bahamas (+1242)
                              </option>
                              <option data-countryCode="BH" value="973">
                                Bahrain (+973)
                              </option>
                              <option data-countryCode="BD" value="880">
                                Bangladesh (+880)
                              </option>
                              <option data-countryCode="BB" value="1246">
                                Barbados (+1246)
                              </option>
                              <option data-countryCode="BY" value="375">
                                Belarus (+375)
                              </option>
                              <option data-countryCode="BE" value="32">
                                Belgium (+32)
                              </option>
                              <option data-countryCode="BZ" value="501">
                                Belize (+501)
                              </option>
                              <option data-countryCode="BJ" value="229">
                                Benin (+229)
                              </option>
                              <option data-countryCode="BM" value="1441">
                                Bermuda (+1441)
                              </option>
                              <option data-countryCode="BT" value="975">
                                Bhutan (+975)
                              </option>
                              <option data-countryCode="BO" value="591">
                                Bolivia (+591)
                              </option>
                              <option data-countryCode="BA" value="387">
                                Bosnia &amp; Herzegovina (+387)
                              </option>
                              <option data-countryCode="BW" value="267">
                                Botswana (+267)
                              </option>
                              <option data-countryCode="BR" value="55">
                                Brazil (+55)
                              </option>
                              <option data-countryCode="IO" value="246">
                                British India Ocean Terrirory (+246)
                              </option>
                              <option data-countryCode="VG" value="1284">
                                British Virgin Islands (+1284)
                              </option>
                              <option data-countryCode="BN" value="673">
                                Brunei (+673)
                              </option>
                              <option data-countryCode="BG" value="359">
                                Bulgaria (+359)
                              </option>
                              <option data-countryCode="BF" value="226">
                                Burkina Faso (+226)
                              </option>
                              <option data-countryCode="BI" value="257">
                                Burundi (+257)
                              </option>
                              <option data-countryCode="KH" value="855">
                                Cambodia (+855)
                              </option>
                              <option data-countryCode="CM" value="237">
                                Cameroon (+237)
                              </option>
                              <option data-countryCode="CA" value="1">
                                Canada (+1)
                              </option>
                              <option data-countryCode="CV" value="238">
                                Cape Verde Islands (+238)
                              </option>
                              <option data-countryCode="KY" value="1345">
                                Cayman Islands (+1345)
                              </option>
                              <option data-countryCode="CF" value="236">
                                Central African Republic (+236)
                              </option>
                              <option data-countryCode="TD" value="235">
                                Chad (+235)
                              </option>
                              <option data-countryCode="CL" value="56">
                                Chile (+56)
                              </option>
                              <option data-countryCode="CN" value="86">
                                China (+86)
                              </option>
                              <option data-countryCode="CX" value="61">
                                Christmas Island (+61)
                              </option>
                              <option data-countryCode="CC" value="61">
                                Cocos Islands (+61)
                              </option>
                              <option data-countryCode="CO" value="57">
                                Colombia (+57)
                              </option>
                              <option data-countryCode="KM" value="269">
                                Comoros (+269)
                              </option>
                              <option data-countryCode="CK" value="682">
                                Cook Islands (+682)
                              </option>
                              <option data-countryCode="CR" value="506">
                                Costa Rica (+506)
                              </option>
                              <option data-countryCode="HR" value="385">
                                Croatia (+385)
                              </option>
                              <option data-countryCode="CU" value="53">
                                Cuba (+53)
                              </option>
                              <option data-countryCode="CW" value="599">
                                Curacao (+599)
                              </option>
                              <option data-countryCode="CY" value="90">
                                Cyprus - North (+90)
                              </option>
                              <option data-countryCode="CY" value="357">
                                Cyprus - South (+357)
                              </option>
                              <option data-countryCode="CZ" value="420">
                                Czech Republic (+420)
                              </option>
                              <option data-countryCode="CD" value="243">
                                Democratic Republic of Congo (+243)
                              </option>
                              <option data-countryCode="DK" value="45">
                                Denmark (+45)
                              </option>
                              <option data-countryCode="DJ" value="253">
                                Djibouti (+253)
                              </option>
                              <option data-countryCode="DM" value="1809">
                                Dominica (+1809)
                              </option>
                              <option data-countryCode="DO" value="1809">
                                Dominican Republic (+1809)
                              </option>
                              <option data-countryCode="TL" value="670">
                                East Timor (+670)
                              </option>
                              <option data-countryCode="EC" value="593">
                                Ecuador (+593)
                              </option>
                              <option data-countryCode="EG" value="20">
                                Egypt (+20)
                              </option>
                              <option data-countryCode="SV" value="503">
                                El Salvador (+503)
                              </option>
                              <option data-countryCode="GQ" value="240">
                                Equatorial Guinea (+240)
                              </option>
                              <option data-countryCode="ER" value="291">
                                Eritrea (+291)
                              </option>
                              <option data-countryCode="EE" value="372">
                                Estonia (+372)
                              </option>
                              <option data-countryCode="ET" value="251">
                                Ethiopia (+251)
                              </option>
                              <option data-countryCode="FK" value="500">
                                Falkland Islands (+500)
                              </option>
                              <option data-countryCode="FO" value="298">
                                Faroe Islands (+298)
                              </option>
                              <option data-countryCode="FJ" value="679">
                                Fiji (+679)
                              </option>
                              <option data-countryCode="FI" value="358">
                                Finland (+358)
                              </option>
                              <option data-countryCode="FR" value="33">
                                France (+33)
                              </option>
                              <option data-countryCode="GF" value="594">
                                French Guiana (+594)
                              </option>
                              <option data-countryCode="PF" value="689">
                                French Polynesia (+689)
                              </option>
                              <option data-countryCode="GA" value="241">
                                Gabon (+241)
                              </option>
                              <option data-countryCode="GM" value="220">
                                Gambia (+220)
                              </option>
                              <option data-countryCode="GE" value="7880">
                                Georgia (+7880)
                              </option>
                              <option data-countryCode="DE" value="49">
                                Germany (+49)
                              </option>
                              <option data-countryCode="GH" value="233">
                                Ghana (+233)
                              </option>
                              <option data-countryCode="GI" value="350">
                                Gibraltar (+350)
                              </option>
                              <option data-countryCode="GR" value="30">
                                Greece (+30)
                              </option>
                              <option data-countryCode="GL" value="299">
                                Greenland (+299)
                              </option>
                              <option data-countryCode="GD" value="1473">
                                Grenada (+1473)
                              </option>
                              <option data-countryCode="GP" value="590">
                                Guadeloupe (+590)
                              </option>
                              <option data-countryCode="GU" value="671">
                                Guam (+671)
                              </option>
                              <option data-countryCode="GT" value="502">
                                Guatemala (+502)
                              </option>
                              <option data-countryCode="GG" value="44">
                                Guernsey (+44)
                              </option>
                              <option data-countryCode="GN" value="224">
                                Guinea (+224)
                              </option>
                              <option data-countryCode="GW" value="245">
                                Guinea-Bissau (+245)
                              </option>
                              <option data-countryCode="GY" value="592">
                                Guyana (+592)
                              </option>
                              <option data-countryCode="HT" value="509">
                                Haiti (+509)
                              </option>
                              <option data-countryCode="HN" value="504">
                                Honduras (+504)
                              </option>
                              <option data-countryCode="HK" value="852">
                                Hong Kong (+852)
                              </option>
                              <option data-countryCode="HU" value="36">
                                Hungary (+36)
                              </option>
                              <option data-countryCode="IS" value="354">
                                Iceland (+354)
                              </option>
                              <option data-countryCode="IN" value="91">
                                India (+91)
                              </option>
                              <option data-countryCode="ID" value="62">
                                Indonesia (+62)
                              </option>
                              <option data-countryCode="IR" value="98">
                                Iran (+98)
                              </option>
                              <option data-countryCode="IQ" value="964">
                                Iraq (+964)
                              </option>
                              <option data-countryCode="IE" value="353">
                                Ireland (+353)
                              </option>
                              <option data-countryCode="IM" value="44">
                                Isle of Man (+44)
                              </option>
                              <option data-countryCode="IL" value="972">
                                Israel (+972)
                              </option>
                              <option data-countryCode="IT" value="39">
                                Italy (+39)
                              </option>
                              <option data-countryCode="CI" value="225">
                                Ivory Coast (+225)
                              </option>
                              <option data-countryCode="JM" value="1876">
                                Jamaica (+1876)
                              </option>
                              <option data-countryCode="JP" value="81">
                                Japan (+81)
                              </option>
                              <option data-countryCode="JE" value="44">
                                Jersey (+44)
                              </option>
                              <option data-countryCode="JO" value="962">
                                Jordan (+962)
                              </option>
                              <option data-countryCode="KZ" value="7">
                                Kazakhstan (+7)
                              </option>
                              <option data-countryCode="KE" value="254">
                                Kenya (+254)
                              </option>
                              <option data-countryCode="KI" value="686">
                                Kiribati (+686)
                              </option>
                              <option data-countryCode="XK" value="383">
                                Kosovo (+383)
                              </option>
                              <option data-countryCode="KW" value="965">
                                Kuwait (+965)
                              </option>
                              <option data-countryCode="KG" value="996">
                                Kyrgyzstan (+996)
                              </option>
                              <option data-countryCode="LA" value="856">
                                Laos (+856)
                              </option>
                              <option data-countryCode="LV" value="371">
                                Latvia (+371)
                              </option>
                              <option data-countryCode="LB" value="961">
                                Lebanon (+961)
                              </option>
                              <option data-countryCode="LS" value="266">
                                Lesotho (+266)
                              </option>
                              <option data-countryCode="LR" value="231">
                                Liberia (+231)
                              </option>
                              <option data-countryCode="LY" value="218">
                                Libya (+218)
                              </option>
                              <option data-countryCode="LI" value="417">
                                Liechtenstein (+417)
                              </option>
                              <option data-countryCode="LT" value="370">
                                Lithuania (+370)
                              </option>
                              <option data-countryCode="LU" value="352">
                                Luxembourg (+352)
                              </option>
                              <option data-countryCode="MO" value="853">
                                Macao (+853)
                              </option>
                              <option data-countryCode="MK" value="389">
                                Macedonia (+389)
                              </option>
                              <option data-countryCode="MG" value="261">
                                Madagascar (+261)
                              </option>
                              <option data-countryCode="MW" value="265">
                                Malawi (+265)
                              </option>
                              <option data-countryCode="MY" value="60">
                                Malaysia (+60)
                              </option>
                              <option data-countryCode="MV" value="960">
                                Maldives (+960)
                              </option>
                              <option data-countryCode="ML" value="223">
                                Mali (+223)
                              </option>
                              <option data-countryCode="MT" value="356">
                                Malta (+356)
                              </option>
                              <option data-countryCode="MH" value="692">
                                Marshall Islands (+692)
                              </option>
                              <option data-countryCode="MQ" value="596">
                                Martinique (+596)
                              </option>
                              <option data-countryCode="MR" value="222">
                                Mauritania (+222)
                              </option>
                              <option data-countryCode="YT" value="269">
                                Mayotte (+269)
                              </option>
                              <option data-countryCode="MX" value="52">
                                Mexico (+52)
                              </option>
                              <option data-countryCode="FM" value="691">
                                Micronesia (+691)
                              </option>
                              <option data-countryCode="MD" value="373">
                                Moldova (+373)
                              </option>
                              <option data-countryCode="MC" value="377">
                                Monaco (+377)
                              </option>
                              <option data-countryCode="MN" value="976">
                                Mongolia (+976)
                              </option>
                              <option data-countryCode="ME" value="382">
                                Montengro (+382)
                              </option>
                              <option data-countryCode="MS" value="1664">
                                Montserrat (+1664)
                              </option>
                              <option data-countryCode="MA" value="212">
                                Morocco (+212)
                              </option>
                              <option data-countryCode="MZ" value="258">
                                Mozambique (+258)
                              </option>
                              <option data-countryCode="MN" value="95">
                                Myanmar (+95)
                              </option>
                              <option data-countryCode="NA" value="264">
                                Namibia (+264)
                              </option>
                              <option data-countryCode="NR" value="674">
                                Nauru (+674)
                              </option>
                              <option data-countryCode="NP" value="977">
                                Nepal (+977)
                              </option>
                              <option data-countryCode="NL" value="31">
                                Netherlands (+31)
                              </option>
                              <option data-countryCode="AN" value="599">
                                Netherlands Antilles (+599)
                              </option>
                              <option data-countryCode="NC" value="687">
                                New Caledonia (+687)
                              </option>
                              <option data-countryCode="NZ" value="64">
                                New Zealand (+64)
                              </option>
                              <option data-countryCode="NI" value="505">
                                Nicaragua (+505)
                              </option>
                              <option data-countryCode="NE" value="227">
                                Niger (+227)
                              </option>
                              <option data-countryCode="NG" value="234">
                                Nigeria (+234)
                              </option>
                              <option data-countryCode="NU" value="683">
                                Niue (+683)
                              </option>
                              <option data-countryCode="KP" value="850">
                                North Korea (+850)
                              </option>
                              <option data-countryCode="NF" value="672">
                                Norfolk Islands (+672)
                              </option>
                              <option data-countryCode="NP" value="670">
                                Northern Marianas (+670)
                              </option>
                              <option data-countryCode="NO" value="47">
                                Norway (+47)
                              </option>
                              <option data-countryCode="OM" value="968">
                                Oman (+968)
                              </option>
                              <option data-countryCode="PK" value="92">
                                Pakistan (+92)
                              </option>
                              <option data-countryCode="PW" value="680">
                                Palau (+680)
                              </option>
                              <option data-countryCode="PS" value="970">
                                Palestine (+970)
                              </option>
                              <option data-countryCode="PA" value="507">
                                Panama (+507)
                              </option>
                              <option data-countryCode="PG" value="675">
                                Papua New Guinea (+675)
                              </option>
                              <option data-countryCode="PY" value="595">
                                Paraguay (+595)
                              </option>
                              <option data-countryCode="PE" value="51">
                                Peru (+51)
                              </option>
                              <option data-countryCode="PH" value="63">
                                Philippines (+63)
                              </option>
                              <option data-countryCode="PN" value="64">
                                Pitcairn (+64)
                              </option>
                              <option data-countryCode="PL" value="48">
                                Poland (+48)
                              </option>
                              <option data-countryCode="PT" value="351">
                                Portugal (+351)
                              </option>
                              <option data-countryCode="PR" value="1787">
                                Puerto Rico (+1787)
                              </option>
                              <option data-countryCode="QA" value="974">
                                Qatar (+974)
                              </option>
                              <option data-countryCode="CG" value="242">
                                Republic of the Congo (+242)
                              </option>
                              <option data-countryCode="RE" value="262">
                                Reunion (+262)
                              </option>
                              <option data-countryCode="RO" value="40">
                                Romania (+40)
                              </option>
                              <option data-countryCode="RU" value="7">
                                Russia (+7)
                              </option>
                              <option data-countryCode="RW" value="250">
                                Rwanda (+250)
                              </option>
                              <option data-countryCode="BL" value="590">
                                Saint Barthelemy (+590)
                              </option>
                              <option data-countryCode="SH" value="290">
                                Saint Helena (+290)
                              </option>
                              <option data-countryCode="KN" value="1869">
                                Saint Kitts &amp; Nevis (+1869)
                              </option>
                              <option data-countryCode="SC" value="1758">
                                Saint Lucia (+1758)
                              </option>
                              <option data-countryCode="SR" value="597">
                                Suriname (+597)
                              </option>
                              <option data-countryCode="MF" value="590">
                                Saint Martin (+590)
                              </option>
                              <option data-countryCode="PM" value="508">
                                Saint Saint Pierre and Miquelon (+508)
                              </option>
                              <option data-countryCode="VC" value="1784">
                                Saint Vincent and the Grenadines (+1784)
                              </option>
                              <option data-countryCode="WS" value="685">
                                Samoa (+685)
                              </option>
                              <option data-countryCode="SM" value="378">
                                San Marino (+378)
                              </option>
                              <option data-countryCode="ST" value="239">
                                Sao Tome &amp; Principe (+239)
                              </option>
                              <option data-countryCode="SA" value="966">
                                Saudi Arabia (+966)
                              </option>
                              <option data-countryCode="SN" value="221">
                                Senegal (+221)
                              </option>
                              <option data-countryCode="CS" value="381">
                                Serbia (+381)
                              </option>
                              <option data-countryCode="SC" value="248">
                                Seychelles (+248)
                              </option>
                              <option data-countryCode="SL" value="232">
                                Sierra Leone (+232)
                              </option>
                              <option data-countryCode="SG" value="65">
                                Singapore (+65)
                              </option>
                              <option data-countryCode="SX" value="1721">
                                Sint Maarten (+1721)
                              </option>
                              <option data-countryCode="SK" value="421">
                                Slovakia (+421)
                              </option>
                              <option data-countryCode="SI" value="386">
                                Slovenia (+386)
                              </option>
                              <option data-countryCode="SB" value="677">
                                Solomon Islands (+677)
                              </option>
                              <option data-countryCode="SO" value="252">
                                Somalia (+252)
                              </option>
                              <option data-countryCode="ZA" value="27">
                                South Africa (+27)
                              </option>
                              <option data-countryCode="KR" value="82">
                                South Korea (+82)
                              </option>
                              <option data-countryCode="SS" value="211">
                                South Sudan (+211)
                              </option>
                              <option data-countryCode="ES" value="34">
                                Spain (+34)
                              </option>
                              <option data-countryCode="LK" value="94">
                                Sri Lanka (+94)
                              </option>
                              <option data-countryCode="SD" value="249">
                                Sudan (+249)
                              </option>
                              <option data-countryCode="SR" value="597">
                                Suriname (+597)
                              </option>
                              <option data-countryCode="SJ" value="47">
                                Svalbard &amp; Jan Mayen (+47)
                              </option>
                              <option data-countryCode="SZ" value="268">
                                Swaziland (+268)
                              </option>
                              <option data-countryCode="SE" value="46">
                                Sweden (+46)
                              </option>
                              <option data-countryCode="CH" value="41">
                                Switzerland (+41)
                              </option>
                              <option data-countryCode="SY" value="963">
                                Syria (+963)
                              </option>
                              <option data-countryCode="TW" value="886">
                                Taiwan (+886)
                              </option>
                              <option data-countryCode="TJ" value="992">
                                Tajikistan (+992)
                              </option>
                              <option data-countryCode="TZ" value="255">
                                Tanzania (+255)
                              </option>
                              <option data-countryCode="TH" value="66">
                                Thailand (+66)
                              </option>
                              <option data-countryCode="TG" value="228">
                                Togo (+228)
                              </option>
                              <option data-countryCode="TO" value="676">
                                Tonga (+676)
                              </option>
                              <option data-countryCode="TT" value="1868">
                                Trinidad &amp; Tobago (+1868)
                              </option>
                              <option data-countryCode="TN" value="216">
                                Tunisia (+216)
                              </option>
                              <option data-countryCode="TR" value="90">
                                Turkey (+90)
                              </option>
                              <option data-countryCode="TM" value="993">
                                Turkmenistan (+993)
                              </option>
                              <option data-countryCode="TC" value="1649">
                                Turks &amp; Caicos Islands (+1649)
                              </option>
                              <option data-countryCode="TV" value="688">
                                Tuvalu (+688)
                              </option>
                              <option data-countryCode="UG" value="256">
                                Uganda (+256)
                              </option>
                              <option data-countryCode="UA" value="380">
                                Ukraine (+380)
                              </option>
                              <option data-countryCode="AE" value="971">
                                United Arab Emirates (+971)
                              </option>
                              <option data-countryCode="GB" value="44">
                                United Kingdom (+44)
                              </option>
                              <option data-countryCode="US" value="1">
                                United States (+1)
                              </option>
                              <option data-countryCode="UY" value="598">
                                Uruguay (+598)
                              </option>
                              <option data-countryCode="UZ" value="998">
                                Uzbekistan (+998)
                              </option>
                              <option data-countryCode="VU" value="678">
                                Vanuatu (+678)
                              </option>
                              <option data-countryCode="VA" value="379">
                                Vatican City (+379)
                              </option>
                              <option data-countryCode="VE" value="58">
                                Venezuela (+58)
                              </option>
                              <option data-countryCode="VN" value="84">
                                Vietnam (+84)
                              </option>
                              <option data-countryCode="WF" value="681">
                                Wallis &amp; Futuna (+681)
                              </option>
                              <option data-countryCode="YE" value="969">
                                Yemen (North)(+969)
                              </option>
                              <option data-countryCode="YE" value="967">
                                Yemen (South)(+967)
                              </option>
                              <option data-countryCode="ZM" value="260">
                                Zambia (+260)
                              </option>
                              <option data-countryCode="ZW" value="263">
                                Zimbabwe (+263)
                              </option>
                            </select>
                          </div>
                          <input
                            type="tel"
                            placeholder="945 678 0391"
                            className="tel"
                            style={{
                              fontFamily: "'Lato', sans-serif",
                              width: "100%",
                              height: "40px",
                              background: "none",
                              border: "2px solid black",
                              outline: "none",
                              margin: "1rem",
                              fontSize: "1rem",
                              paddingLeft: "1.5rem",
                              color: "black",
                              fontWeight: "thick",
                              borderRadius: "5px",
                            }}
                            onChange={phoneHandler}
                            defaultValue={phone}
                          />
                        </div>
                        <div class="form-group">
                          <div
                            onChange={countryFlagHandler}
                            className="select-box"
                            style={{
                              margin: "1rem",
                              marginTop: 0,
                              fontSize: "1rem",
                              display: "flex",
                              alignSelf: "center",
                            }}
                          >
                            <img
                              class="form-control"
                              src={flagImg}
                              style={{ width: "60px" }}
                              alt="country-flag"
                              id="img"
                            ></img>

                            <select
                              style={{
                                fontFamily: "'Lato', sansSerif",
                                width: "60px",
                                height: "40px",
                                background: "none",
                                position: "absolute",
                                border: "none",
                                fontSize: "1rem",
                                paddingLeft: "4rem",
                                outline: "none",
                              }}
                              id="country"
                              defaultValue={countryCodeValue}
                              onChange={selectCountryHandler}
                            >
                              <option value="" hidden>
                                Select Country
                              </option>
                              <option data-countryCode="AF" value="93">
                                Afghanistan (+93)
                              </option>
                              <option data-countryCode="AL" value="355">
                                Albania (+355)
                              </option>
                              <option data-countryCode="DZ" value="213">
                                Algeria (+213)
                              </option>
                              <option data-countryCode="AS" value="1684">
                                American Samoa (+1684)
                              </option>
                              <option data-countryCode="AD" value="376">
                                Andorra (+376)
                              </option>
                              <option data-countryCode="AO" value="244">
                                Angola (+244)
                              </option>
                              <option data-countryCode="AI" value="1264">
                                Anguilla (+1264)
                              </option>
                              <option data-countryCode="AQ" value="672">
                                Antartica (+672)
                              </option>
                              <option data-countryCode="AG" value="1268">
                                Antigua &amp; Barbuda (+1268)
                              </option>
                              <option data-countryCode="AR" value="54">
                                Argentina (+54)
                              </option>
                              <option data-countryCode="AM" value="374">
                                Armenia (+374)
                              </option>
                              <option data-countryCode="AW" value="297">
                                Aruba (+297)
                              </option>
                              <option data-countryCode="AU" value="61">
                                Australia (+61)
                              </option>
                              <option data-countryCode="AT" value="43">
                                Austria (+43)
                              </option>
                              <option data-countryCode="AZ" value="994">
                                Azerbaijan (+994)
                              </option>
                              <option data-countryCode="BS" value="1242">
                                Bahamas (+1242)
                              </option>
                              <option data-countryCode="BH" value="973">
                                Bahrain (+973)
                              </option>
                              <option data-countryCode="BD" value="880">
                                Bangladesh (+880)
                              </option>
                              <option data-countryCode="BB" value="1246">
                                Barbados (+1246)
                              </option>
                              <option data-countryCode="BY" value="375">
                                Belarus (+375)
                              </option>
                              <option data-countryCode="BE" value="32">
                                Belgium (+32)
                              </option>
                              <option data-countryCode="BZ" value="501">
                                Belize (+501)
                              </option>
                              <option data-countryCode="BJ" value="229">
                                Benin (+229)
                              </option>
                              <option data-countryCode="BM" value="1441">
                                Bermuda (+1441)
                              </option>
                              <option data-countryCode="BT" value="975">
                                Bhutan (+975)
                              </option>
                              <option data-countryCode="BO" value="591">
                                Bolivia (+591)
                              </option>
                              <option data-countryCode="BA" value="387">
                                Bosnia &amp; Herzegovina (+387)
                              </option>
                              <option data-countryCode="BW" value="267">
                                Botswana (+267)
                              </option>
                              <option data-countryCode="BR" value="55">
                                Brazil (+55)
                              </option>
                              <option data-countryCode="IO" value="246">
                                British India Ocean Terrirory (+246)
                              </option>
                              <option data-countryCode="VG" value="1284">
                                British Virgin Islands (+1284)
                              </option>
                              <option data-countryCode="BN" value="673">
                                Brunei (+673)
                              </option>
                              <option data-countryCode="BG" value="359">
                                Bulgaria (+359)
                              </option>
                              <option data-countryCode="BF" value="226">
                                Burkina Faso (+226)
                              </option>
                              <option data-countryCode="BI" value="257">
                                Burundi (+257)
                              </option>
                              <option data-countryCode="KH" value="855">
                                Cambodia (+855)
                              </option>
                              <option data-countryCode="CM" value="237">
                                Cameroon (+237)
                              </option>
                              <option data-countryCode="CA" value="1">
                                Canada (+1)
                              </option>
                              <option data-countryCode="CV" value="238">
                                Cape Verde Islands (+238)
                              </option>
                              <option data-countryCode="KY" value="1345">
                                Cayman Islands (+1345)
                              </option>
                              <option data-countryCode="CF" value="236">
                                Central African Republic (+236)
                              </option>
                              <option data-countryCode="TD" value="235">
                                Chad (+235)
                              </option>
                              <option data-countryCode="CL" value="56">
                                Chile (+56)
                              </option>
                              <option data-countryCode="CN" value="86">
                                China (+86)
                              </option>
                              <option data-countryCode="CX" value="61">
                                Christmas Island (+61)
                              </option>
                              <option data-countryCode="CC" value="61">
                                Cocos Islands (+61)
                              </option>
                              <option data-countryCode="CO" value="57">
                                Colombia (+57)
                              </option>
                              <option data-countryCode="KM" value="269">
                                Comoros (+269)
                              </option>
                              <option data-countryCode="CK" value="682">
                                Cook Islands (+682)
                              </option>
                              <option data-countryCode="CR" value="506">
                                Costa Rica (+506)
                              </option>
                              <option data-countryCode="HR" value="385">
                                Croatia (+385)
                              </option>
                              <option data-countryCode="CU" value="53">
                                Cuba (+53)
                              </option>
                              <option data-countryCode="CW" value="599">
                                Curacao (+599)
                              </option>
                              <option data-countryCode="CY" value="90">
                                Cyprus - North (+90)
                              </option>
                              <option data-countryCode="CY" value="357">
                                Cyprus - South (+357)
                              </option>
                              <option data-countryCode="CZ" value="420">
                                Czech Republic (+420)
                              </option>
                              <option data-countryCode="CD" value="243">
                                Democratic Republic of Congo (+243)
                              </option>
                              <option data-countryCode="DK" value="45">
                                Denmark (+45)
                              </option>
                              <option data-countryCode="DJ" value="253">
                                Djibouti (+253)
                              </option>
                              <option data-countryCode="DM" value="1809">
                                Dominica (+1809)
                              </option>
                              <option data-countryCode="DO" value="1809">
                                Dominican Republic (+1809)
                              </option>
                              <option data-countryCode="TL" value="670">
                                East Timor (+670)
                              </option>
                              <option data-countryCode="EC" value="593">
                                Ecuador (+593)
                              </option>
                              <option data-countryCode="EG" value="20">
                                Egypt (+20)
                              </option>
                              <option data-countryCode="SV" value="503">
                                El Salvador (+503)
                              </option>
                              <option data-countryCode="GQ" value="240">
                                Equatorial Guinea (+240)
                              </option>
                              <option data-countryCode="ER" value="291">
                                Eritrea (+291)
                              </option>
                              <option data-countryCode="EE" value="372">
                                Estonia (+372)
                              </option>
                              <option data-countryCode="ET" value="251">
                                Ethiopia (+251)
                              </option>
                              <option data-countryCode="FK" value="500">
                                Falkland Islands (+500)
                              </option>
                              <option data-countryCode="FO" value="298">
                                Faroe Islands (+298)
                              </option>
                              <option data-countryCode="FJ" value="679">
                                Fiji (+679)
                              </option>
                              <option data-countryCode="FI" value="358">
                                Finland (+358)
                              </option>
                              <option data-countryCode="FR" value="33">
                                France (+33)
                              </option>
                              <option data-countryCode="GF" value="594">
                                French Guiana (+594)
                              </option>
                              <option data-countryCode="PF" value="689">
                                French Polynesia (+689)
                              </option>
                              <option data-countryCode="GA" value="241">
                                Gabon (+241)
                              </option>
                              <option data-countryCode="GM" value="220">
                                Gambia (+220)
                              </option>
                              <option data-countryCode="GE" value="7880">
                                Georgia (+7880)
                              </option>
                              <option data-countryCode="DE" value="49">
                                Germany (+49)
                              </option>
                              <option data-countryCode="GH" value="233">
                                Ghana (+233)
                              </option>
                              <option data-countryCode="GI" value="350">
                                Gibraltar (+350)
                              </option>
                              <option data-countryCode="GR" value="30">
                                Greece (+30)
                              </option>
                              <option data-countryCode="GL" value="299">
                                Greenland (+299)
                              </option>
                              <option data-countryCode="GD" value="1473">
                                Grenada (+1473)
                              </option>
                              <option data-countryCode="GP" value="590">
                                Guadeloupe (+590)
                              </option>
                              <option data-countryCode="GU" value="671">
                                Guam (+671)
                              </option>
                              <option data-countryCode="GT" value="502">
                                Guatemala (+502)
                              </option>
                              <option data-countryCode="GG" value="44">
                                Guernsey (+44)
                              </option>
                              <option data-countryCode="GN" value="224">
                                Guinea (+224)
                              </option>
                              <option data-countryCode="GW" value="245">
                                Guinea-Bissau (+245)
                              </option>
                              <option data-countryCode="GY" value="592">
                                Guyana (+592)
                              </option>
                              <option data-countryCode="HT" value="509">
                                Haiti (+509)
                              </option>
                              <option data-countryCode="HN" value="504">
                                Honduras (+504)
                              </option>
                              <option data-countryCode="HK" value="852">
                                Hong Kong (+852)
                              </option>
                              <option data-countryCode="HU" value="36">
                                Hungary (+36)
                              </option>
                              <option data-countryCode="IS" value="354">
                                Iceland (+354)
                              </option>
                              <option data-countryCode="IN" value="91">
                                India (+91)
                              </option>
                              <option data-countryCode="ID" value="62">
                                Indonesia (+62)
                              </option>
                              <option data-countryCode="IR" value="98">
                                Iran (+98)
                              </option>
                              <option data-countryCode="IQ" value="964">
                                Iraq (+964)
                              </option>
                              <option data-countryCode="IE" value="353">
                                Ireland (+353)
                              </option>
                              <option data-countryCode="IM" value="44">
                                Isle of Man (+44)
                              </option>
                              <option data-countryCode="IL" value="972">
                                Israel (+972)
                              </option>
                              <option data-countryCode="IT" value="39">
                                Italy (+39)
                              </option>
                              <option data-countryCode="CI" value="225">
                                Ivory Coast (+225)
                              </option>
                              <option data-countryCode="JM" value="1876">
                                Jamaica (+1876)
                              </option>
                              <option data-countryCode="JP" value="81">
                                Japan (+81)
                              </option>
                              <option data-countryCode="JE" value="44">
                                Jersey (+44)
                              </option>
                              <option data-countryCode="JO" value="962">
                                Jordan (+962)
                              </option>
                              <option data-countryCode="KZ" value="7">
                                Kazakhstan (+7)
                              </option>
                              <option data-countryCode="KE" value="254">
                                Kenya (+254)
                              </option>
                              <option data-countryCode="KI" value="686">
                                Kiribati (+686)
                              </option>
                              <option data-countryCode="XK" value="383">
                                Kosovo (+383)
                              </option>
                              <option data-countryCode="KW" value="965">
                                Kuwait (+965)
                              </option>
                              <option data-countryCode="KG" value="996">
                                Kyrgyzstan (+996)
                              </option>
                              <option data-countryCode="LA" value="856">
                                Laos (+856)
                              </option>
                              <option data-countryCode="LV" value="371">
                                Latvia (+371)
                              </option>
                              <option data-countryCode="LB" value="961">
                                Lebanon (+961)
                              </option>
                              <option data-countryCode="LS" value="266">
                                Lesotho (+266)
                              </option>
                              <option data-countryCode="LR" value="231">
                                Liberia (+231)
                              </option>
                              <option data-countryCode="LY" value="218">
                                Libya (+218)
                              </option>
                              <option data-countryCode="LI" value="417">
                                Liechtenstein (+417)
                              </option>
                              <option data-countryCode="LT" value="370">
                                Lithuania (+370)
                              </option>
                              <option data-countryCode="LU" value="352">
                                Luxembourg (+352)
                              </option>
                              <option data-countryCode="MO" value="853">
                                Macao (+853)
                              </option>
                              <option data-countryCode="MK" value="389">
                                Macedonia (+389)
                              </option>
                              <option data-countryCode="MG" value="261">
                                Madagascar (+261)
                              </option>
                              <option data-countryCode="MW" value="265">
                                Malawi (+265)
                              </option>
                              <option data-countryCode="MY" value="60">
                                Malaysia (+60)
                              </option>
                              <option data-countryCode="MV" value="960">
                                Maldives (+960)
                              </option>
                              <option data-countryCode="ML" value="223">
                                Mali (+223)
                              </option>
                              <option data-countryCode="MT" value="356">
                                Malta (+356)
                              </option>
                              <option data-countryCode="MH" value="692">
                                Marshall Islands (+692)
                              </option>
                              <option data-countryCode="MQ" value="596">
                                Martinique (+596)
                              </option>
                              <option data-countryCode="MR" value="222">
                                Mauritania (+222)
                              </option>
                              <option data-countryCode="YT" value="269">
                                Mayotte (+269)
                              </option>
                              <option data-countryCode="MX" value="52">
                                Mexico (+52)
                              </option>
                              <option data-countryCode="FM" value="691">
                                Micronesia (+691)
                              </option>
                              <option data-countryCode="MD" value="373">
                                Moldova (+373)
                              </option>
                              <option data-countryCode="MC" value="377">
                                Monaco (+377)
                              </option>
                              <option data-countryCode="MN" value="976">
                                Mongolia (+976)
                              </option>
                              <option data-countryCode="ME" value="382">
                                Montengro (+382)
                              </option>
                              <option data-countryCode="MS" value="1664">
                                Montserrat (+1664)
                              </option>
                              <option data-countryCode="MA" value="212">
                                Morocco (+212)
                              </option>
                              <option data-countryCode="MZ" value="258">
                                Mozambique (+258)
                              </option>
                              <option data-countryCode="MN" value="95">
                                Myanmar (+95)
                              </option>
                              <option data-countryCode="NA" value="264">
                                Namibia (+264)
                              </option>
                              <option data-countryCode="NR" value="674">
                                Nauru (+674)
                              </option>
                              <option data-countryCode="NP" value="977">
                                Nepal (+977)
                              </option>
                              <option data-countryCode="NL" value="31">
                                Netherlands (+31)
                              </option>
                              <option data-countryCode="AN" value="599">
                                Netherlands Antilles (+599)
                              </option>
                              <option data-countryCode="NC" value="687">
                                New Caledonia (+687)
                              </option>
                              <option data-countryCode="NZ" value="64">
                                New Zealand (+64)
                              </option>
                              <option data-countryCode="NI" value="505">
                                Nicaragua (+505)
                              </option>
                              <option data-countryCode="NE" value="227">
                                Niger (+227)
                              </option>
                              <option data-countryCode="NG" value="234">
                                Nigeria (+234)
                              </option>
                              <option data-countryCode="NU" value="683">
                                Niue (+683)
                              </option>
                              <option data-countryCode="KP" value="850">
                                North Korea (+850)
                              </option>
                              <option data-countryCode="NF" value="672">
                                Norfolk Islands (+672)
                              </option>
                              <option data-countryCode="NP" value="670">
                                Northern Marianas (+670)
                              </option>
                              <option data-countryCode="NO" value="47">
                                Norway (+47)
                              </option>
                              <option data-countryCode="OM" value="968">
                                Oman (+968)
                              </option>
                              <option data-countryCode="PK" value="92">
                                Pakistan (+92)
                              </option>
                              <option data-countryCode="PW" value="680">
                                Palau (+680)
                              </option>
                              <option data-countryCode="PS" value="970">
                                Palestine (+970)
                              </option>
                              <option data-countryCode="PA" value="507">
                                Panama (+507)
                              </option>
                              <option data-countryCode="PG" value="675">
                                Papua New Guinea (+675)
                              </option>
                              <option data-countryCode="PY" value="595">
                                Paraguay (+595)
                              </option>
                              <option data-countryCode="PE" value="51">
                                Peru (+51)
                              </option>
                              <option data-countryCode="PH" value="63">
                                Philippines (+63)
                              </option>
                              <option data-countryCode="PN" value="64">
                                Pitcairn (+64)
                              </option>
                              <option data-countryCode="PL" value="48">
                                Poland (+48)
                              </option>
                              <option data-countryCode="PT" value="351">
                                Portugal (+351)
                              </option>
                              <option data-countryCode="PR" value="1787">
                                Puerto Rico (+1787)
                              </option>
                              <option data-countryCode="QA" value="974">
                                Qatar (+974)
                              </option>
                              <option data-countryCode="CG" value="242">
                                Republic of the Congo (+242)
                              </option>
                              <option data-countryCode="RE" value="262">
                                Reunion (+262)
                              </option>
                              <option data-countryCode="RO" value="40">
                                Romania (+40)
                              </option>
                              <option data-countryCode="RU" value="7">
                                Russia (+7)
                              </option>
                              <option data-countryCode="RW" value="250">
                                Rwanda (+250)
                              </option>
                              <option data-countryCode="BL" value="590">
                                Saint Barthelemy (+590)
                              </option>
                              <option data-countryCode="SH" value="290">
                                Saint Helena (+290)
                              </option>
                              <option data-countryCode="KN" value="1869">
                                Saint Kitts &amp; Nevis (+1869)
                              </option>
                              <option data-countryCode="SC" value="1758">
                                Saint Lucia (+1758)
                              </option>
                              <option data-countryCode="SR" value="597">
                                Suriname (+597)
                              </option>
                              <option data-countryCode="MF" value="590">
                                Saint Martin (+590)
                              </option>
                              <option data-countryCode="PM" value="508">
                                Saint Saint Pierre and Miquelon (+508)
                              </option>
                              <option data-countryCode="VC" value="1784">
                                Saint Vincent and the Grenadines (+1784)
                              </option>
                              <option data-countryCode="WS" value="685">
                                Samoa (+685)
                              </option>
                              <option data-countryCode="SM" value="378">
                                San Marino (+378)
                              </option>
                              <option data-countryCode="ST" value="239">
                                Sao Tome &amp; Principe (+239)
                              </option>
                              <option data-countryCode="SA" value="966">
                                Saudi Arabia (+966)
                              </option>
                              <option data-countryCode="SN" value="221">
                                Senegal (+221)
                              </option>
                              <option data-countryCode="CS" value="381">
                                Serbia (+381)
                              </option>
                              <option data-countryCode="SC" value="248">
                                Seychelles (+248)
                              </option>
                              <option data-countryCode="SL" value="232">
                                Sierra Leone (+232)
                              </option>
                              <option data-countryCode="SG" value="65">
                                Singapore (+65)
                              </option>
                              <option data-countryCode="SX" value="1721">
                                Sint Maarten (+1721)
                              </option>
                              <option data-countryCode="SK" value="421">
                                Slovakia (+421)
                              </option>
                              <option data-countryCode="SI" value="386">
                                Slovenia (+386)
                              </option>
                              <option data-countryCode="SB" value="677">
                                Solomon Islands (+677)
                              </option>
                              <option data-countryCode="SO" value="252">
                                Somalia (+252)
                              </option>
                              <option data-countryCode="ZA" value="27">
                                South Africa (+27)
                              </option>
                              <option data-countryCode="KR" value="82">
                                South Korea (+82)
                              </option>
                              <option data-countryCode="SS" value="211">
                                South Sudan (+211)
                              </option>
                              <option data-countryCode="ES" value="34">
                                Spain (+34)
                              </option>
                              <option data-countryCode="LK" value="94">
                                Sri Lanka (+94)
                              </option>
                              <option data-countryCode="SD" value="249">
                                Sudan (+249)
                              </option>
                              <option data-countryCode="SR" value="597">
                                Suriname (+597)
                              </option>
                              <option data-countryCode="SJ" value="47">
                                Svalbard &amp; Jan Mayen (+47)
                              </option>
                              <option data-countryCode="SZ" value="268">
                                Swaziland (+268)
                              </option>
                              <option data-countryCode="SE" value="46">
                                Sweden (+46)
                              </option>
                              <option data-countryCode="CH" value="41">
                                Switzerland (+41)
                              </option>
                              <option data-countryCode="SY" value="963">
                                Syria (+963)
                              </option>
                              <option data-countryCode="TW" value="886">
                                Taiwan (+886)
                              </option>
                              <option data-countryCode="TJ" value="992">
                                Tajikistan (+992)
                              </option>
                              <option data-countryCode="TZ" value="255">
                                Tanzania (+255)
                              </option>
                              <option data-countryCode="TH" value="66">
                                Thailand (+66)
                              </option>
                              <option data-countryCode="TG" value="228">
                                Togo (+228)
                              </option>
                              <option data-countryCode="TO" value="676">
                                Tonga (+676)
                              </option>
                              <option data-countryCode="TT" value="1868">
                                Trinidad &amp; Tobago (+1868)
                              </option>
                              <option data-countryCode="TN" value="216">
                                Tunisia (+216)
                              </option>
                              <option data-countryCode="TR" value="90">
                                Turkey (+90)
                              </option>
                              <option data-countryCode="TM" value="993">
                                Turkmenistan (+993)
                              </option>
                              <option data-countryCode="TC" value="1649">
                                Turks &amp; Caicos Islands (+1649)
                              </option>
                              <option data-countryCode="TV" value="688">
                                Tuvalu (+688)
                              </option>
                              <option data-countryCode="UG" value="256">
                                Uganda (+256)
                              </option>
                              <option data-countryCode="UA" value="380">
                                Ukraine (+380)
                              </option>
                              <option data-countryCode="AE" value="971">
                                United Arab Emirates (+971)
                              </option>
                              <option data-countryCode="GB" value="44">
                                United Kingdom (+44)
                              </option>
                              <option data-countryCode="US" value="1">
                                United States (+1)
                              </option>
                              <option data-countryCode="UY" value="598">
                                Uruguay (+598)
                              </option>
                              <option data-countryCode="UZ" value="998">
                                Uzbekistan (+998)
                              </option>
                              <option data-countryCode="VU" value="678">
                                Vanuatu (+678)
                              </option>
                              <option data-countryCode="VA" value="379">
                                Vatican City (+379)
                              </option>
                              <option data-countryCode="VE" value="58">
                                Venezuela (+58)
                              </option>
                              <option data-countryCode="VN" value="84">
                                Vietnam (+84)
                              </option>
                              <option data-countryCode="WF" value="681">
                                Wallis &amp; Futuna (+681)
                              </option>
                              <option data-countryCode="YE" value="969">
                                Yemen (North)(+969)
                              </option>
                              <option data-countryCode="YE" value="967">
                                Yemen (South)(+967)
                              </option>
                              <option data-countryCode="ZM" value="260">
                                Zambia (+260)
                              </option>
                              <option data-countryCode="ZW" value="263">
                                Zimbabwe (+263)
                              </option>
                            </select>

                            <input
                              type="text"
                              class="form-control"
                              value={countryCValue}
                              style={{ width: "60px" }}
                            ></input>
                            <input
                              type="text"
                              class="form-control"
                              name="email_1"
                              id="email_1"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>
                          {" "}
                          numéro de téléphone{" "}
                          <span style={{ color: "red" }}> *</span>
                        </label>

                        <input
                          type="number"
                          class="form-control"
                          name="email_1"
                          id="email_1"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label>
                          {" "}
                          Adresse email <span style={{ color: "red" }}> *</span>
                        </label>

                        <input
                          type="text"
                          class="form-control"
                          name="email_1"
                          id="email_1"
                          required
                        />
                      </div>
                      <div class="form-group mb-5">
                        <label>
                          {" "}
                          Mot de passe <span style={{ color: "red" }}> *</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="password_1"
                          id="password_1"
                          required
                        />
                      </div>
                      <p>
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our{" "}
                        <a href="#" class="text-primary">
                          privacy policy
                        </a>
                        .
                      </p>
                      <a href="#" class="d-block mb-5 text-primary">
                        Signup as a vendor?
                      </a>
                      <div class="form-checkbox d-flex align-items-center justify-content-between mb-5">
                        <input
                          type="checkbox"
                          class="custom-checkbox"
                          id="agree"
                          name="agree"
                          required=""
                        />
                        <label for="agree" class="font-size-md">
                          I agree to the{" "}
                          <a href="#" class="text-primary font-size-md">
                            privacy policy
                          </a>
                        </label>
                      </div>
                      <a href="#" class="btn btn-primary">
                        Sign Up
                      </a>
                    </div>
                  </div>
                  <p class="text-center">
                    Connectez-vous avec un compte social
                  </p>
                  <div class="social-icons social-icon-border-color d-flex justify-content-center">
                    <a
                      href="#"
                      class="social-icon social-facebook w-icon-facebook"
                    ></a>
                    <a
                      href="#"
                      class="social-icon social-twitter w-icon-twitter"
                    ></a>
                    <a
                      href="#"
                      class="social-icon social-google fab fa-google"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header class="header">
          <div class="header-top">
            <div class="container-fluid">
              <div class="header-left  mr-4">
                <p class="welcome-msg">
                  Welcome to Wolmart Store message or remove it!
                </p>
              </div>

              <div class="header-right pr-0">
                <div class="dropdown">
                  <a href="#currency">USD</a>
                  <div class="dropdown-box">
                    <a href="#USD">USD</a>
                    <a href="#EUR">EUR</a>
                  </div>
                </div>

                <div class="dropdown">
                  <a href="#language">
                    <img
                      src="assets/images/flags/eng.png"
                      alt="ENG Flag"
                      width="14"
                      height="8"
                      class="dropdown-image"
                    />{" "}
                    ENG
                  </a>
                  <div class="dropdown-box">
                    <a href="#ENG">
                      <img
                        src="assets/images/flags/eng.png"
                        alt="ENG Flag"
                        width="14"
                        height="8"
                        class="dropdown-image"
                      />
                      ENG
                    </a>
                    <a href="#FRA">
                      <img
                        src="assets/images/flags/fra.png"
                        alt="FRA Flag"
                        width="14"
                        height="8"
                        class="dropdown-image"
                      />
                      FRA
                    </a>
                  </div>
                </div>
                <span class="divider d-lg-show"></span>
                <a href="blog.html" class="d-lg-show">
                  Blog
                </a>
                <a href="contact-us.html" class="d-lg-show">
                  Contact Us
                </a>
                <a href="my-account.html" class="d-lg-show">
                  My Account
                </a>

                <a class="d-lg-show login sign-in">
                  <div href="#myModal" class="trigger-btn" data-toggle="modal">
                    <i class="w-icon-account"></i>Sign In
                  </div>
                </a>
                <span class="delimiter d-lg-show">/</span>
                <a
                  href="#myModal2"
                  data-toggle="modal"
                  class="ml-0 d-lg-show login register"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
          <div class="header-middle">
            <div class="container-fluid">
              <div class="header-left mr-md-4">
                <a
                  href="#"
                  class="mobile-menu-toggle  w-icon-hamburger"
                  aria-label="menu-toggle"
                ></a>
                <a href="demo1.html" class="logo ml-lg-0">
                  <img
                    src="assets/images/logo.png"
                    alt="logo"
                    width="144"
                    height="45"
                  />
                </a>
                <form
                  method="get"
                  action="#"
                  class="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
                >
                  <div class="select-box">
                    <select id="category" name="category">
                      <option value="">All Categories</option>
                      <option value="4">Fashion</option>
                      <option value="5">Furniture</option>
                      <option value="6">Shoes</option>
                      <option value="7">Sports</option>
                      <option value="8">Games</option>
                      <option value="9">Computers</option>
                      <option value="10">Electronics</option>
                      <option value="11">Kitchen</option>
                      <option value="12">Clothing</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    name="search"
                    id="search"
                    placeholder="Search in..."
                    required
                  />
                  <button class="btn btn-search" type="submit">
                    <i class="w-icon-search"></i>
                  </button>
                </form>
              </div>
              <div class="header-right ml-4">
                <div class="header-call d-xs-show d-lg-flex align-items-center">
                  <a href="tel:#" class="w-icon-call"></a>
                  <div class="call-info d-lg-show">
                    <h4 class="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                      <a href="mailto:#" class="text-capitalize">
                        Live Chat
                      </a>{" "}
                      or :
                    </h4>
                    <a
                      href="tel:#"
                      class="phone-number font-weight-bolder ls-50"
                    >
                      0(800)123-456
                    </a>
                  </div>
                </div>
                <a
                  class="wishlist label-down link d-xs-show"
                  href="wishlist.html"
                >
                  <i class="w-icon-heart"></i>
                  <span class="wishlist-label d-lg-show">Wishlist</span>
                </a>
                <a
                  class="compare label-down link d-xs-show"
                  href="compare.html"
                >
                  <i class="w-icon-compare"></i>
                  <span class="compare-label d-lg-show">Compare</span>
                </a>
                <div class="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                  <div class="cart-overlay"></div>
                  <a href="#" class="cart-toggle label-down link">
                    <i class="w-icon-cart">
                      <span class="cart-count">2</span>
                    </i>
                    <span class="cart-label">Cart</span>
                  </a>
                  <div class="dropdown-box">
                    <div class="cart-header">
                      <span>Shopping Cart</span>
                      <a href="#" class="btn-close">
                        Close<i class="w-icon-long-arrow-right"></i>
                      </a>
                    </div>

                    <div class="products">
                      <div class="product product-cart">
                        <div class="product-detail">
                          <a href="product-default.html" class="product-name">
                            Beige knitted elas
                            <br />
                            tic runner shoes
                          </a>
                          <div class="price-box">
                            <span class="product-quantity">1</span>
                            <span class="product-price">$25.68</span>
                          </div>
                        </div>
                        <figure class="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/cart/product-1.jpg"
                              alt="product"
                              height="84"
                              width="94"
                            />
                          </a>
                        </figure>
                        <button
                          class="btn btn-link btn-close"
                          aria-label="button"
                        >
                          <i class="fas fa-times"></i>
                        </button>
                      </div>

                      <div class="product product-cart">
                        <div class="product-detail">
                          <a href="product-default.html" class="product-name">
                            Blue utility pina
                            <br />
                            fore denim dress
                          </a>
                          <div class="price-box">
                            <span class="product-quantity">1</span>
                            <span class="product-price">$32.99</span>
                          </div>
                        </div>
                        <figure class="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/cart/product-2.jpg"
                              alt="product"
                              width="84"
                              height="94"
                            />
                          </a>
                        </figure>
                        <button
                          class="btn btn-link btn-close"
                          aria-label="button"
                        >
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>

                    <div class="cart-total">
                      <label>Subtotal:</label>
                      <span class="price">$58.67</span>
                    </div>

                    <div class="cart-action">
                      <a
                        href="cart.html"
                        class="btn btn-dark btn-outline btn-rounded"
                      >
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        class="btn btn-primary  btn-rounded"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="header-bottom sticky-content fix-top sticky-header has-dropdown">
            <div class="container-fluid">
              <div class="inner-wrap">
                <div class="header-left">
                  <div class="dropdown category-dropdown">
                    <a
                      href="#"
                      class="category-toggle text-capitalize pl-0 bg-white"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                      data-display="static"
                      title="Browse Categories"
                    >
                      <i class="w-icon-category"></i>
                      <span>All Departments</span>
                    </a>

                    <div class="dropdown-box text-default">
                      <ul class="menu vertical-menu category-menu">
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i class="w-icon-tshirt2"></i>Fashion
                          </a>
                          <ul class="megamenu">
                            <li>
                              <h4 class="menu-title">Women</h4>
                              <hr class="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    New Arrivals
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Best Sellers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Trending
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Clothing
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Shoes</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Bags</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Jewlery & Watches
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 class="menu-title">Men</h4>
                              <hr class="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    New Arrivals
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Best Sellers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Trending
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Clothing
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Shoes</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Bags</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Jewlery & Watches
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div class="banner-fixed menu-banner menu-banner2">
                                <figure>
                                  <img
                                    src="assets/images/menu/banner-2.jpg"
                                    alt="Menu Banner"
                                    width="235"
                                    height="347"
                                  />
                                </figure>
                                <div class="banner-content">
                                  <div class="banner-price-info mb-1 ls-normal">
                                    Get up to
                                    <strong class="text-primary text-uppercase">
                                      20%Off
                                    </strong>
                                  </div>
                                  <h3 class="banner-title">Hot Sales</h3>
                                  <a
                                    href="demo15-shop.html"
                                    class="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right"
                                  >
                                    Shop Now
                                    <i class="w-icon-long-arrow-right"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i class="w-icon-home"></i>Home & Garden
                          </a>
                          <ul class="megamenu">
                            <li>
                              <h4 class="menu-title">Bedroom</h4>
                              <hr class="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Beds, Frames & Bases
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dressers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Nightstands
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Kid's Beds & Headboards
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Armoires
                                  </a>
                                </li>
                              </ul>

                              <h4 class="menu-title mt-1">Living Room</h4>
                              <hr class="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Coffee Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Chairs
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Futons & Sofa Beds
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Cabinets & Chests
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 class="menu-title">Office</h4>
                              <hr class="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Office Chairs
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Desks</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Bookcases
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    File Cabinets
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Breakroom Tables
                                  </a>
                                </li>
                              </ul>

                              <h4 class="menu-title mt-1">Kitchen & Dining</h4>
                              <hr class="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dining Sets
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Kitchen Storage Cabinets
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Bashers Racks
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dining Chairs
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dining Room Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Bar Stools
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div class="menu-banner banner-fixed menu-banner3">
                                <figure>
                                  <img
                                    src="assets/images/menu/banner-3.jpg"
                                    alt="Menu Banner"
                                    width="235"
                                    height="461"
                                  />
                                </figure>
                                <div class="banner-content">
                                  <h4 class="banner-subtitle font-weight-normal text-white mb-1">
                                    Restroom
                                  </h4>
                                  <h3 class="banner-title text-white">
                                    Furniture Sale
                                  </h3>
                                  <div class="banner-price-info text-white font-weight-normal ls-25">
                                    Up to{" "}
                                    <span class="text-primary text-uppercase font-weight-bold">
                                      25% Off
                                    </span>
                                  </div>
                                  <a
                                    href="demo15-shop.html"
                                    class="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right"
                                  >
                                    Shop Now
                                    <i class="w-icon-long-arrow-right"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i class="w-icon-electronics"></i>Electronics
                          </a>
                          <ul class="megamenu">
                            <li>
                              <h4 class="menu-title">
                                Laptops &amp; Computers
                              </h4>
                              <hr class="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Desktop Computers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Monitors
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Laptops
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Hard Drives &amp; Storage
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Computer Accessories
                                  </a>
                                </li>
                              </ul>

                              <h4 class="menu-title mt-1">TV &amp; Video</h4>
                              <hr class="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">TVs</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Home Audio Speakers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Projectors
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Media Streaming Devices
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 class="menu-title">Digital Cameras</h4>
                              <hr class="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Digital SLR Cameras
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Sports & Action Cameras
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Camera Lenses
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Photo Printer
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Digital Memory Cards
                                  </a>
                                </li>
                              </ul>

                              <h4 class="menu-title mt-1">Cell Phones</h4>
                              <hr class="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Carrier Phones
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Unlocked Phones
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Phone & Cellphone Cases
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Cellphone Chargers
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div class="menu-banner banner-fixed menu-banner4">
                                <figure>
                                  <img
                                    src="assets/images/menu/banner-4.jpg"
                                    alt="Menu Banner"
                                    width="235"
                                    height="433"
                                  />
                                </figure>
                                <div class="banner-content">
                                  <h4 class="banner-subtitle font-weight-normal">
                                    Deals Of The Week
                                  </h4>
                                  <h3 class="banner-title text-white">
                                    Save On Smart EarPhone
                                  </h3>
                                  <div class="banner-price-info text-primary font-weight-bolder text-uppercase text-primary">
                                    20% Off
                                  </div>
                                  <a
                                    href="demo15-shop.html"
                                    class="btn btn-white btn-outline btn-sm btn-rounded"
                                  >
                                    Shop Now
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i class="w-icon-furniture"></i>Furniture
                          </a>
                          <ul class="megamenu type2">
                            <li class="row">
                              <div class="col-md-3 col-lg-3 col-6">
                                <h4 class="menu-title">Furniture</h4>
                                <hr class="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Sofas & Couches
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Armchairs
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Bed Frames
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Beside Tables
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Dressing Tables
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-md-3 col-lg-3 col-6">
                                <h4 class="menu-title">Lighting</h4>
                                <hr class="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Light Bulbs
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Lamps
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Celling Lights
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Wall Lights
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Bathroom Lighting
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-md-3 col-lg-3 col-6">
                                <h4 class="menu-title">Home Accessories</h4>
                                <hr class="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Decorative Accessories
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Candals & Holders
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Home Fragrance
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Mirrors
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Clocks
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-md-3 col-lg-3 col-6">
                                <h4 class="menu-title">Garden & Outdoors</h4>
                                <hr class="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Garden Furniture
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Lawn Mowers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Pressure Washers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      All Garden Tools
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Outdoor Dining
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li class="row">
                              <div class="col-6">
                                <div class="banner banner-fixed menu-banner5 br-xs">
                                  <figure>
                                    <img
                                      src="assets/images/menu/banner-5.jpg"
                                      alt="Banner"
                                      width="410"
                                      height="123"
                                      style={{ backgroundColor: "#D2D2D2" }}
                                    />
                                  </figure>
                                  <div class="banner-content text-right y-50">
                                    <h4 class="banner-subtitle font-weight-normal text-default text-capitalize">
                                      New Arrivals
                                    </h4>
                                    <h3 class="banner-title text-capitalize">
                                      Amazing Sofa
                                    </h3>
                                    <div class="banner-price-info font-weight-normal ls-normal">
                                      Starting at <strong>$125.00</strong>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="banner banner-fixed menu-banner5 br-xs">
                                  <figure>
                                    <img
                                      src="assets/images/menu/banner-6.jpg"
                                      alt="Banner"
                                      width="410"
                                      height="123"
                                      style={{ backgroundColor: "#9F9888" }}
                                    />
                                  </figure>
                                  <div class="banner-content y-50">
                                    <h4 class="banner-subtitle font-weight-normal text-white text-capitalize">
                                      Best Seller
                                    </h4>
                                    <h3 class="banner-title text-capitalize text-white">
                                      Chair &amp; Lamp
                                    </h3>
                                    <div class="banner-price-info font-weight-normal ls-normal text-white">
                                      From <strong>$165.00</strong>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i class="w-icon-heartbeat"></i>Healthy & Beauty
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i class="w-icon-gift"></i>Gift Ideas
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i class="w-icon-gamepad"></i>Toy & Games
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i class="w-icon-ice-cream"></i>Cooking
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i class="w-icon-ios"></i>Smart Phones
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i class="w-icon-camera"></i>Cameras & Photo
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i class="w-icon-ruby"></i>Accessories
                          </a>
                        </li>
                        <li>
                          <a
                            href="demo15-shop.html"
                            class="font-weight-bold text-uppercase text-primary ls-25"
                          >
                            View All Categories
                            <i class="w-icon-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <nav class="main-nav">
                    <ul class="menu active-underline">
                      <li class="active">
                        <a href="demo1.html">Home</a>
                      </li>
                      <li>
                        <a href="shop-banner-sidebar.html">Shop</a>
                        <ul class="megamenu">
                          <li>
                            <h4 class="menu-title">Shop Pages</h4>
                            <ul>
                              <li>
                                <a href="shop-banner-sidebar.html">
                                  Banner With Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-boxed-banner.html">
                                  Boxed Banner
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  Full Width Banner
                                </a>
                              </li>
                              <li>
                                <a href="shop-horizontal-filter.html">
                                  Horizontal Filter
                                  <span class="tip tip-hot">Hot</span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-off-canvas.html">
                                  Off Canvas Sidebar
                                  <span class="tip tip-new">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-infinite-scroll.html">
                                  Infinite Ajax Scroll
                                </a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">
                                  Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-both-sidebar.html">
                                  Both Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 class="menu-title">Shop Layouts</h4>
                            <ul>
                              <li>
                                <a href="shop-grid-3cols.html">
                                  3 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-4cols.html">
                                  4 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-5cols.html">
                                  5 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-6cols.html">
                                  6 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-7cols.html">
                                  7 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-8cols.html">
                                  8 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-list.html">List Mode</a>
                              </li>
                              <li>
                                <a href="shop-list-sidebar.html">
                                  List Mode With Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 class="menu-title">Product Pages</h4>
                            <ul>
                              <li>
                                <a href="product-variable.html">
                                  Variable Product
                                </a>
                              </li>
                              <li>
                                <a href="product-featured.html">
                                  Featured &amp; Sale
                                </a>
                              </li>
                              <li>
                                <a href="product-accordion.html">
                                  Data In Accordion
                                </a>
                              </li>
                              <li>
                                <a href="product-section.html">
                                  Data In Sections
                                </a>
                              </li>
                              <li>
                                <a href="product-swatch.html">Image Swatch</a>
                              </li>
                              <li>
                                <a href="product-extended.html">
                                  Extended Info
                                </a>
                              </li>
                              <li>
                                <a href="product-without-sidebar.html">
                                  Without Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="product-video.html">
                                  360<sup>o</sup> &amp; Video
                                  <span class="tip tip-new">New</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 class="menu-title">Product Layouts</h4>
                            <ul>
                              <li>
                                <a href="product-default.html">
                                  Default<span class="tip tip-hot">Hot</span>
                                </a>
                              </li>
                              <li>
                                <a href="product-vertical.html">
                                  Vertical Thumbs
                                </a>
                              </li>
                              <li>
                                <a href="product-grid.html">Grid Images</a>
                              </li>
                              <li>
                                <a href="product-masonry.html">Masonry</a>
                              </li>
                              <li>
                                <a href="product-gallery.html">Gallery</a>
                              </li>
                              <li>
                                <a href="product-sticky-info.html">
                                  Sticky Info
                                </a>
                              </li>
                              <li>
                                <a href="product-sticky-thumb.html">
                                  Sticky Thumbs
                                </a>
                              </li>
                              <li>
                                <a href="product-sticky-both.html">
                                  Sticky Both
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="vendor-dokan-store.html">Vendor</a>
                        <ul>
                          <li>
                            <a href="vendor-dokan-store-list.html">
                              Store Listing
                            </a>
                            <ul>
                              <li>
                                <a href="vendor-dokan-store-list.html">
                                  Store listing 1
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wcfm-store-list.html">
                                  Store listing 2
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wcmp-store-list.html">
                                  Store listing 3
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wc-store-list.html">
                                  Store listing 4
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="vendor-dokan-store.html">Vendor Store</a>
                            <ul>
                              <li>
                                <a href="vendor-dokan-store.html">
                                  Vendor Store 1
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wcfm-store-product-grid.html">
                                  Vendor Store 2
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wcmp-store-product-grid.html">
                                  Vendor Store 3
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wc-store-product-grid.html">
                                  Vendor Store 4
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                        <ul>
                          <li>
                            <a href="blog.html">Classic</a>
                          </li>
                          <li>
                            <a href="blog-listing.html">Listing</a>
                          </li>
                          <li>
                            <a href="blog-grid-3cols.html">Grid</a>
                            <ul>
                              <li>
                                <a href="blog-grid-2cols.html">
                                  Grid 2 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-3cols.html">
                                  Grid 3 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-4cols.html">
                                  Grid 4 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-sidebar.html">
                                  Grid sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blog-masonry-3cols.html">Masonry</a>
                            <ul>
                              <li>
                                <a href="blog-masonry-2cols.html">
                                  Masonry 2 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-masonry-3cols.html">
                                  Masonry 3 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-masonry-4cols.html">
                                  Masonry 4 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-masonry-sidebar.html">
                                  Masonry sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blog-mask-grid.html">Mask</a>
                            <ul>
                              <li>
                                <a href="blog-mask-grid.html">Blog mask grid</a>
                              </li>
                              <li>
                                <a href="blog-mask-masonry.html">
                                  Blog mask masonry
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="post-single.html">Single Post</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about-us.html">Pages</a>
                        <ul>
                          <li>
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li>
                            <a href="become-a-vendor.html">Become A Vendor</a>
                          </li>
                          <li>
                            <a href="contact-us.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQs</a>
                          </li>
                          <li>
                            <a href="error-404.html">Error 404</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="my-account.html">My Account</a>
                          </li>
                          <li>
                            <a href="compare.html">Compare</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="elements.html">Elements</a>
                        <ul>
                          <li>
                            <a href="element-accordions.html">Accordions</a>
                          </li>
                          <li>
                            <a href="element-alerts.html">
                              Alert &amp; Notification
                            </a>
                          </li>
                          <li>
                            <a href="element-blog-posts.html">Blog Posts</a>
                          </li>
                          <li>
                            <a href="element-buttons.html">Buttons</a>
                          </li>
                          <li>
                            <a href="element-cta.html">Call to Action</a>
                          </li>
                          <li>
                            <a href="element-icons.html">Icons</a>
                          </li>
                          <li>
                            <a href="element-icon-boxes.html">Icon Boxes</a>
                          </li>
                          <li>
                            <a href="element-instagrams.html">Instagrams</a>
                          </li>
                          <li>
                            <a href="element-categories.html">
                              Product Category
                            </a>
                          </li>
                          <li>
                            <a href="element-products.html">Products</a>
                          </li>
                          <li>
                            <a href="element-tabs.html">Tabs</a>
                          </li>
                          <li>
                            <a href="element-testimonials.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="element-titles.html">Titles</a>
                          </li>
                          <li>
                            <a href="element-typography.html">Typography</a>
                          </li>

                          <li>
                            <a href="element-vendors.html">Vendors</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="header-right">
                  <a href="#" class="d-xl-show">
                    <i class="w-icon-map-marker mr-1"></i>Track Order
                  </a>
                  <a href="#">
                    <i class="w-icon-sale"></i>Daily Deals
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
