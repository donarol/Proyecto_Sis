<?php

namespace App\Http\Middleware;
use Closure;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * Indicates whether the XSRF-TOKEN cookie should be set on the response.
     *
     * @var bool
     */

    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    public function handle($request, Closure $next)
    {
        $response=$next($request);
        $response->header('P3P','CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"');
        return $response;
    }

    protected $except = [
        //
        '/post'
    ];

}
