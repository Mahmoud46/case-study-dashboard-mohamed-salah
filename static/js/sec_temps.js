function getLiverpoolAnalysisTemplate() {
	return `
    <div class="sec_header">
						<img
							class="header_icon"
							src="./static/imgs/logos/liverpool.png"
							alt=""
						/>
						<div class="hdr_name">
							<h1>Liverpool FC</h1>
							<p>Liverpool - England</p>
						</div>
					</div>
					<div class="sec_analysis">
						<div class="se_p pos">
							<div class="pos_header">
								<h1>Position</h1>
								<p>
									<span title="Right Winger">RW</span>
									<span title="Forward">FW</span>
									<span title="Right Midfielder">RM</span>
								</p>
							</div>
							<div class="pos_cont">
								<img src="./static/imgs/liv_pos.png" alt="" />
							</div>
						</div>
						<div class="se_p go_pa big">
							<div class="go_pa_main">
								<div class="go_pa_header">
									<h1>Goal participation</h1>
									<div class="gp_det">
										<p><span>298</span><span>G/A</span></p>
										<p><span>211</span><span>Goals</span></p>
										<p><span>87</span><span>Assists</span></p>
									</div>
								</div>
								<div class="gp_gls_ast">
									<p class="graph_hint">
										<span><b>Goal participation</b> per season</span>
										<span><b>42.6</b> <small>G/A</small></span>
									</p>
									<div id="gp_gls_ast_graph"></div>
									<div class="gp_gls_ast_btns">
										<button class="active" btc="gp,G/A,Goal participation">
											Goal participation
										</button>
										<button btc="gls,goals,Goals scored">Goals</button>
										<button btc="ast,assists,Assists made">Assists</button>
										<div class="xpt_an">
											<button btc="xg,goals,Expected goals">xG</button>
											<button btc="npxg,goals,Non-penalty expected goals">
												npxG
											</button>
											<button btc="xag,assists,Expected assisted goals">
												xAG
											</button>
										</div>
									</div>
								</div>
							</div>

							<div class="gp_body_parts">
								<div class="body_parts">
									<p class="bp_title">Body parts used to score goals</p>
									<div class="bps">
										<div class="bp">
											<div class="bp_fig" id="bp_lf"></div>
											<p>Left foot</p>
										</div>
										<div class="bp">
											<div class="bp_fig" id="bp_head"></div>
											<p>Head</p>
										</div>
										<div class="bp">
											<div class="bp_fig" id="bp_rf"></div>
											<p>Right foot</p>
										</div>
									</div>
								</div>
								<div class="g_dis">
									<p>Top oppenents scored against</p>
									<div class="teams">
										<div class="teams_head">
											<span>Team</span>
											<span>Goals</span>
										</div>
										<h3>
											<div class="img_name" title="">
												<div class="img_cont">
													<img src="./static/imgs/logos/manunited.png" alt="" />
												</div>
												<span title="Manchester United FC">Manchester Utd</span>
											</div>
											<span class="gls_against">14</span>
										</h3>
										<h3>
											<div class="img_name">
												<div class="img_cont">
													<img src="./static/imgs/logos/mancity.png" alt="" />
												</div>
												<span title="Manchester City FC">Manchester City</span>
											</div>
											<span class="gls_against">11</span>
										</h3>
										<h3>
											<div class="img_name">
												<div class="img_cont">
													<img src="./static/imgs/logos/westham.png" alt="" />
												</div>
												<span title="West Ham United FC">West Ham</span>
											</div>
											<span class="gls_against">11</span>
										</h3>
										<!-- <h3>
											<div class="img_name">
												<div class="img_cont">
													<img src="./static/imgs/logos/tottenham.png" alt="" />
												</div>
												<span title="Tottenham Hotspur FC">Tottenham</span>
											</div>
											<span class="gls_against">10</span>
										</h3> -->
									</div>
									<div id="g_dis"></div>
								</div>
							</div>
						</div>
						<div class="se_p app_times tall">
							<div class="app_times_g">
								<p>
									<span>Appearances</span
									><span
										><b>347</b> matches played averaging <b>50</b> matches per
										season</span
									>
								</p>
								<div id="app_times_g"></div>
							</div>
							<div class="matches_an">
								<p><span>Appearances analysis</span><span></span></p>
								<div class="match_apps">
									<div class="match_app">
										<div class="match_app_g" id="com_mat"></div>
										<span>Completed matches played</span>
									</div>
									<div class="match_app">
										<div class="match_app_g" id="start_mat"></div>
										<span>Starting eleven</span>
									</div>
									<div class="match_app">
										<div class="match_app_g" id="start_cap"></div>
										<span>Starting as Captain</span>
									</div>
								</div>
							</div>
						</div>
						<div class="se_p shot_acc wide">
							<div class="sh_sot_plot">
								<p>
									<span>Shots and Shots on target</span
									><span
										><b>1.4</b> shots on target per game out of <b>3.4</b> shots
										per game for each season.</span
									>
								</p>
								<div id="sh_sot_graph"></div>
							</div>
							<div class="shot_acc_sot">
								<p>Shooting performace</p>
								<div class="sh_a shot_acc_plot">
									<div class="sh_g" id="shot_acc_graph"></div>
									<span>Shot accuracy</span>
								</div>
								<div class="sh_a shot_to_gl_plot">
									<div class="sh_g" id="shot_to_gl_graph"></div>
									<span>Shot-to-goal conversion rate</span>
								</div>
							</div>
						</div>

						<div class="se_p pen_acc wide">
							<div class="pen_graph">
								<p>
									<span>Penalty kicks made and Attempted</span>
									<span
										><b>4.7</b> penalty kicks made per season out of
										<b>5.7</b> penalty attempted per season.</span
									>
								</p>
								<div id="pen_graph"></div>
							</div>
							<div class="pen_acc_gl_perc">
								<p>Penalty kicks made</p>
								<div class="pen_a">
									<div id="pen_acc" class="pen_g"></div>
									<span>Penalty conversion rate</span>
								</div>
								<div class="pen_a">
									<div id="pen_perc" class="pen_g"></div>
									<span>Penalty-to-goal percentage</span>
								</div>
							</div>
						</div>

						<div class="se_p def_ac">
							<p>Defensive Actions</p>
							<div class="def_acts">
								<div class="def_act">
									<div class="def_g" id="tkl"></div>
									<span>Tackles</span>
								</div>
								<div class="def_act">
									<div class="def_g" id="blk"></div>
									<span>Blocks</span>
								</div>
								<div class="def_act">
									<div class="def_g" id="int"></div>
									<span>Interceptions</span>
								</div>
							</div>
						</div>

						<div class="se_p tchs">
							<p>
								<span>Touches</span
								><span
									><b>2070</b> touches made per season averaging
									<b>42</b> touches made per game.</span
								>
							</p>
							<div id="tchs_graph"></div>
						</div>

						<div class="se_p pass_an wide">
							<div class="pass_graph">
								<p>
									<span>Passes completed and Passes attempted</span
									><span
										><b>23</b> passes completed per game out of <b>31</b> passes
										attempted per game.</span
									>
								</p>
								<div id="pass_graph"></div>
							</div>
							<div class="pass_acc_prog">
								<p>Passes analysis</p>
								<div class="pass_a">
									<div class="pass_g" id="pass_acc"></div>
									<span>Pass accuracy</span>
								</div>
								<div class="pass_a">
									<div class="pass_g" id="pass_prg"></div>
									<span> Progressive passes</span>
								</div>
							</div>
						</div>

						<div class="se_p sca_car_tkons_graphs wide">
							<p>
								<span>Shot-creating actions and Goal-creating actions</span
								><span
									><b>29.7</b> shot-creating actions per season out of
									<b>193.6</b> goal-creating actions per season.</span
								>
							</p>
							<div class="sca_car_tkons_graph">
								<div id="sca_car_tkons_graph"></div>
								<div class="sca_car_tkons_btns">
									<button
										class="active"
										btc="sca,Shot-creating actions,Goal-creating actions"
									>
										SCA
									</button>
									<button btc="car,Carries,Progressive carries">Carries</button>
									<button btc="tk,Take-ons attempted,Successful take-ons">
										Take-Ons
									</button>
								</div>
							</div>
						</div>

						<div class="se_p sca_car_tkons_acc">
							<p>SCA, Carries and Take-ons accuracy</p>
							<div class="sca_car_tks">
								<div class="sca_car_tk">
									<div class="sca_car_tk_graph" id="sca_acc"></div>
									<span>Goal creating actions</span>
								</div>
								<div class="sca_car_tk">
									<div class="sca_car_tk_graph" id="prgc_acc"></div>
									<span>Progressive carries</span>
								</div>
								<div class="sca_car_tk">
									<div class="sca_car_tk_graph" id="tk_acc"></div>
									<span>Successful take-ons</span>
								</div>
							</div>
						</div>
					</div>
    `;
}

function getEgyptAnalysisTemplate() {
	return `
	<div class="sec_header">
						<img
							class="header_icon"
							src="./static/imgs/logos/egypt.png"
							alt=""
						/>
						<div class="hdr_name">
							<h1>Egypt National Football Team</h1>
							<p>Africa</p>
						</div>
					</div>
					<div class="sec_analysis">
						<div class="se_p pos">
							<div class="pos_header">
								<h1>Position</h1>
								<p>
									<span title="Forward">FW</span>
									<span title="Attacking Midfielder">AM</span>
									<span title="Right Winger">RW</span>
								</p>
							</div>
							<div class="pos_cont">
								<img src="./static/imgs/eg_pos.png" alt="" />
							</div>
						</div>
						<div class="se_p go_pa big">
							<div class="go_pa_main">
								<div class="go_pa_header">
									<h1>Goal participation</h1>
									<div class="gp_det">
										<p><span>39</span><span>G/A</span></p>
										<p><span>26</span><span>Goals</span></p>
										<p><span>13</span><span>Assists</span></p>
									</div>
								</div>
								<div class="gp_gls_ast">
									<p class="graph_hint">
										<span><b>Goal participation</b> per season</span>
										<span><b>5.6</b> <small>G/A</small></span>
									</p>
									<div id="gp_gls_ast_graph"></div>
									<div class="gp_gls_ast_btns">
										<button class="active" btc="gp,G/A,Goal participation">
											Goal participation
										</button>
										<button btc="gls,goals,Goals scored">Goals</button>
										<button btc="ast,assists,Assists made">Assists</button>
										<div class="xpt_an">
											<button btc="xg,goals,Expected goals">xG</button>
											<button btc="npxg,goals,Non-penalty expected goals">
												npxG
											</button>
											<button btc="xag,assists,Expected assisted goals">
												xAG
											</button>
										</div>
									</div>
								</div>
							</div>

							<div class="gp_body_parts">
								<div class="body_parts">
									<p class="bp_title">Body parts used to score goals</p>
									<div class="bps">
										<div class="bp">
											<div class="bp_fig" id="bp_lf"></div>
											<p>Left foot</p>
										</div>
										<div class="bp">
											<div class="bp_fig" id="bp_head"></div>
											<p>Head</p>
										</div>
										<div class="bp">
											<div class="bp_fig" id="bp_rf"></div>
											<p>Right foot</p>
										</div>
									</div>
								</div>
								<div class="g_dis">
									<p>Top oppenents scored against</p>
									<div class="teams">
										<div class="teams_head">
											<span>Team</span>
											<span>Goals</span>
										</div>
										<h3>
											<div class="img_name" title="">
												<div class="img_cont">
													<img src="./static/imgs/logos/djibouti.png" alt="" />
												</div>
												<span title="Djibouti National Football Team"
													>Djibouti</span
												>
											</div>
											<span class="gls_against">4</span>
										</h3>
										<h3>
											<div class="img_name">
												<div class="img_cont">
													<img src="./static/imgs/logos/niger.png" alt="" />
												</div>
												<span title="Niger National Football Team">Niger</span>
											</div>
											<span class="gls_against">4</span>
										</h3>
										<h3>
											<div class="img_name">
												<div class="img_cont">
													<img src="./static/imgs/logos/guineabissau.png" alt="" />
												</div>
												<span title="Guinea-Bissau National Football Team"
													>Guinea-Bissau</span
												>
											</div>
											<span class="gls_against">2</span>
										</h3>
										<!-- <h3>
											<div class="img_name">
												<div class="img_cont">
													<img src="./static/imgs/logos/tottenham.png" alt="" />
												</div>
												<span title="Tottenham Hotspur FC">Tottenham</span>
											</div>
											<span class="gls_against">10</span>
										</h3> -->
									</div>
									<div id="g_dis"></div>
								</div>
							</div>
						</div>
						<div class="se_p app_times tall">
							<div class="app_times_g">
								<p>
									<span>Appearances</span
									><span
										><b>45</b> matches played averaging <b>6.4</b> matches per
										season</span
									>
								</p>
								<div id="app_times_g"></div>
							</div>
							<div class="matches_an">
								<p><span>Appearances analysis</span><span></span></p>
								<div class="match_apps">
									<div class="match_app">
										<div class="match_app_g" id="com_mat"></div>
										<span>Completed matches played</span>
									</div>
									<div class="match_app">
										<div class="match_app_g" id="start_mat"></div>
										<span>Starting eleven</span>
									</div>
									<div class="match_app">
										<div class="match_app_g" id="start_cap"></div>
										<span>Starting as Captain</span>
									</div>
								</div>
							</div>
						</div>
						<div class="se_p shot_acc wide">
							<div class="sh_sot_plot">
								<p>
									<span>Shots and Shots on target</span
									><span
										><b>1.3</b> shots on target per game out of <b>3.2</b> shots
										per game for each season.</span
									>
								</p>
								<div id="sh_sot_graph"></div>
							</div>
							<div class="shot_acc_sot">
								<p>Shooting performace</p>
								<div class="sh_a shot_acc_plot">
									<div class="sh_g" id="shot_acc_graph"></div>
									<span>Shot accuracy</span>
								</div>
								<div class="sh_a shot_to_gl_plot">
									<div class="sh_g" id="shot_to_gl_graph"></div>
									<span>Shot-to-goal conversion rate</span>
								</div>
							</div>
						</div>

						<div class="se_p pen_acc wide">
							<div class="pen_graph">
								<p>
									<span>Penalty kicks made and Attempted</span>
									<span
										><b>0.71</b> penalty kicks made per season out of
										<b>1</b> penalty attempted per season.</span
									>
								</p>
								<div id="pen_graph"></div>
							</div>
							<div class="pen_acc_gl_perc">
								<p>Penalty kicks made</p>
								<div class="pen_a">
									<div id="pen_acc" class="pen_g"></div>
									<span>Penalty conversion rate</span>
								</div>
								<div class="pen_a">
									<div id="pen_perc" class="pen_g"></div>
									<span>Penalty-to-goal percentage</span>
								</div>
							</div>
						</div>

						<div class="se_p def_ac">
							<p>Defensive Actions</p>
							<div class="def_acts">
								<div class="def_act">
									<div class="def_g" id="tkl"></div>
									<span>Tackles</span>
								</div>
								<div class="def_act">
									<div class="def_g" id="blk"></div>
									<span>Blocks</span>
								</div>
								<div class="def_act">
									<div class="def_g" id="int"></div>
									<span>Interceptions</span>
								</div>
							</div>
						</div>

						<div class="se_p tchs">
							<p>
								<span>Touches</span
								><span
									><b>1872</b> touches made per season averaging
									<b>41.6</b> touches made per game.</span
								>
							</p>
							<div id="tchs_graph"></div>
						</div>

						<div class="se_p pass_an wide">
							<div class="pass_graph">
								<p>
									<span>Passes completed and Passes attempted</span
									><span
										><b>23</b> passes completed per game out of
										<b>30.4</b> passes attempted per game.</span
									>
								</p>
								<div id="pass_graph"></div>
							</div>
							<div class="pass_acc_prog">
								<p>Passes analysis</p>
								<div class="pass_a">
									<div class="pass_g" id="pass_acc"></div>
									<span>Pass accuracy</span>
								</div>
								<div class="pass_a">
									<div class="pass_g" id="pass_prg"></div>
									<span> Progressive passes</span>
								</div>
							</div>
						</div>

						<div class="se_p sca_car_tkons_graphs wide">
							<p>
								<span>Shot-creating actions and Goal-creating actions</span
								><span
									><b>3.9</b> shot-creating actions per season out of
									<b>25.4</b> goal-creating actions per season.</span
								>
							</p>
							<div class="sca_car_tkons_graph">
								<div id="sca_car_tkons_graph"></div>
								<div class="sca_car_tkons_btns">
									<button
										class="active"
										btc="sca,Shot-creating actions,Goal-creating actions"
									>
										SCA
									</button>
									<button btc="car,Carries,Progressive carries">Carries</button>
									<button btc="tk,Take-ons attempted,Successful take-ons">
										Take-Ons
									</button>
								</div>
							</div>
						</div>

						<div class="se_p sca_car_tkons_acc">
							<p>SCA, Carries and Take-ons accuracy</p>
							<div class="sca_car_tks">
								<div class="sca_car_tk">
									<div class="sca_car_tk_graph" id="sca_acc"></div>
									<span>Goal creating actions</span>
								</div>
								<div class="sca_car_tk">
									<div class="sca_car_tk_graph" id="prgc_acc"></div>
									<span>Progressive carries</span>
								</div>
								<div class="sca_car_tk">
									<div class="sca_car_tk_graph" id="tk_acc"></div>
									<span>Successful take-ons</span>
								</div>
							</div>
						</div>
					</div>
	`;
}
